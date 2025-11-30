import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, Truck, CheckCircle } from "lucide-react";

const TrackShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [tracking, setTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would query the database
    setTracking(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Track Your Shipment</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Enter your tracking number or reference ID to get real-time updates on your cargo
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
                    Tracking Number or Reference ID
                  </label>
                  <Input
                    placeholder="e.g., SZ2024-12345 or email used for quote"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Search className="mr-2 h-5 w-5" />
                  Track Shipment
                </Button>
              </form>

              {tracking && (
                <div className="mt-8 space-y-6 animate-fade-in">
                  <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold mb-4">Shipment Status</h3>
                    
                    {/* Mock tracking timeline */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">Order Confirmed</div>
                          <div className="text-sm text-muted-foreground">Dec 20, 2024 - 09:30 AM</div>
                          <div className="text-sm mt-1">Your shipment has been booked and confirmed</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <Package className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">Picked Up</div>
                          <div className="text-sm text-muted-foreground">Dec 21, 2024 - 02:15 PM</div>
                          <div className="text-sm mt-1">Cargo collected from Madrid warehouse</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <Truck className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">In Transit</div>
                          <div className="text-sm text-muted-foreground">Dec 22, 2024 - 08:00 AM</div>
                          <div className="text-sm mt-1">Currently en route to Paris, France</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 opacity-50">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-muted" />
                        <div className="flex-1">
                          <div className="font-semibold">Out for Delivery</div>
                          <div className="text-sm text-muted-foreground">Estimated: Dec 23, 2024</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 opacity-50">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-muted" />
                        <div className="flex-1">
                          <div className="font-semibold">Delivered</div>
                          <div className="text-sm text-muted-foreground">Estimated: Dec 23, 2024</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Shipment Details</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Origin:</span>
                        <p className="font-medium">Madrid, Spain</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Destination:</span>
                        <p className="font-medium">Paris, France</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Weight:</span>
                        <p className="font-medium">500 kg</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Service:</span>
                        <p className="font-medium">European Road</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Need help? Our support team is available 24/7
            </p>
            <Button variant="outline" size="lg">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrackShipment;