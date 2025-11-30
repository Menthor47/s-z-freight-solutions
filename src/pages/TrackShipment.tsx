import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, Truck, CheckCircle, Clock, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Skeleton } from "@/components/ui/skeleton";

interface Shipment {
  id: string;
  tracking_number: string;
  status: string;
  origin: string;
  destination: string;
  current_location: string | null;
  weight: number;
  service_type: string;
  estimated_delivery: string | null;
  timeline: any[];
  created_at: string;
}

const TrackShipment = () => {
  const { toast } = useToast();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (!shipment) return;

    // Subscribe to realtime updates for this shipment
    const channel = supabase
      .channel('shipment-updates')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'shipments',
          filter: `tracking_number=eq.${shipment.tracking_number}`
        },
        (payload) => {
          console.log('Shipment update:', payload);
          if (payload.new) {
            const newShipment = payload.new as any;
            setShipment({
              ...newShipment,
              timeline: Array.isArray(newShipment.timeline) ? newShipment.timeline : []
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [shipment]);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter a tracking number or email.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setSearched(true);
    setShipment(null);

    try {
      // Try to find by tracking number first
      let { data, error } = await supabase
        .from("shipments")
        .select("*")
        .eq("tracking_number", trackingNumber.trim().toUpperCase())
        .maybeSingle();

      // If not found, try searching by customer email
      if (!data && trackingNumber.includes('@')) {
        const result = await supabase
          .from("shipments")
          .select("*")
          .eq("customer_email", trackingNumber.trim())
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();
        
        data = result.data;
        error = result.error;
      }

      if (error) throw error;

      if (data) {
        const shipmentData = data as any;
        setShipment({
          ...shipmentData,
          timeline: Array.isArray(shipmentData.timeline) ? shipmentData.timeline : []
        });
        toast({
          title: "Shipment Found!",
          description: "Displaying tracking information.",
        });
      } else {
        toast({
          title: "Not Found",
          description: "No shipment found with that tracking number or email.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Tracking error:", error);
      toast({
        title: "Error",
        description: "Failed to retrieve shipment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-white" />;
      case 'in_transit':
        return <Truck className="h-5 w-5 text-white" />;
      case 'picked_up':
        return <Package className="h-5 w-5 text-white" />;
      default:
        return <Clock className="h-5 w-5 text-white" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-500';
      case 'in_transit':
        return 'bg-blue-500';
      case 'picked_up':
        return 'bg-primary';
      default:
        return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Track Your Shipment - Real-Time Updates"
        description="Track your freight shipment in real-time. Get instant updates on location and delivery status."
        keywords="track shipment, freight tracking, cargo tracking, logistics tracking"
      />
      <Navigation />
      <WhatsAppButton />
      
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Track Your Shipment</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Enter your tracking number or email to get real-time updates on your cargo
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 flex-1">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Enter Tracking Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTrack} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Tracking Number or Email Address
                  </label>
                  <Input
                    placeholder="e.g., SZ2024-12345 or your@email.com"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="text-lg"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Enter the tracking number from your confirmation email, or use the email address you provided when booking.
                  </p>
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  <Search className="mr-2 h-5 w-5" />
                  Track Shipment
                </Button>
              </form>

              {loading && (
                <div className="mt-8 space-y-4 animate-fade-in">
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-32 w-full" />
                  <Skeleton className="h-24 w-full" />
                </div>
              )}

              {!loading && shipment && (
                <div className="mt-8 space-y-6 animate-fade-in">
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">Shipment Status</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getStatusColor(shipment.status)}`}>
                        {shipment.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                    
                    {/* Timeline */}
                    <div className="space-y-4">
                      {shipment.timeline && shipment.timeline.length > 0 ? (
                        shipment.timeline.map((event: any, index: number) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className={`flex-shrink-0 w-10 h-10 rounded-full ${getStatusColor(event.status)} flex items-center justify-center`}>
                              {getStatusIcon(event.status)}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold">{event.title}</div>
                              <div className="text-sm text-muted-foreground">
                                {new Date(event.timestamp).toLocaleString()}
                              </div>
                              {event.description && (
                                <div className="text-sm mt-1">{event.description}</div>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="flex items-start space-x-4">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-full ${getStatusColor(shipment.status)} flex items-center justify-center`}>
                            {getStatusIcon(shipment.status)}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold">Order Confirmed</div>
                            <div className="text-sm text-muted-foreground">
                              {new Date(shipment.created_at).toLocaleString()}
                            </div>
                            <div className="text-sm mt-1">Your shipment has been booked and confirmed</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Shipment Details</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Tracking Number:</span>
                        <p className="font-medium">{shipment.tracking_number}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Service:</span>
                        <p className="font-medium">{shipment.service_type.replace('_', ' ')}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Origin:</span>
                        <p className="font-medium">{shipment.origin}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Destination:</span>
                        <p className="font-medium">{shipment.destination}</p>
                      </div>
                      {shipment.current_location && (
                        <div>
                          <span className="text-muted-foreground">Current Location:</span>
                          <p className="font-medium">{shipment.current_location}</p>
                        </div>
                      )}
                      <div>
                        <span className="text-muted-foreground">Weight:</span>
                        <p className="font-medium">{shipment.weight} kg</p>
                      </div>
                      {shipment.estimated_delivery && (
                        <div className="col-span-2">
                          <span className="text-muted-foreground">Estimated Delivery:</span>
                          <p className="font-medium">{new Date(shipment.estimated_delivery).toLocaleDateString()}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {!loading && searched && !shipment && (
                <div className="mt-8 text-center py-8 animate-fade-in">
                  <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Shipment Found</h3>
                  <p className="text-muted-foreground">
                    We couldn't find a shipment with that tracking number or email.<br />
                    Please check your information and try again.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Need help? Our support team is available 24/7
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">Contact Support</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrackShipment;
