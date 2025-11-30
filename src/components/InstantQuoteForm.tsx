import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const InstantQuoteForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    weight: "",
    serviceType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/get-quote", { state: formData });
  };

  return (
    <Card className="shadow-xl border-2">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Calculator className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Get Instant Quote</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Origin City</label>
              <Select value={formData.origin} onValueChange={(value) => setFormData({ ...formData, origin: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select origin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="madrid">Madrid, Spain</SelectItem>
                  <SelectItem value="barcelona">Barcelona, Spain</SelectItem>
                  <SelectItem value="valencia">Valencia, Spain</SelectItem>
                  <SelectItem value="seville">Seville, Spain</SelectItem>
                  <SelectItem value="bilbao">Bilbao, Spain</SelectItem>
                  <SelectItem value="malaga">Málaga, Spain</SelectItem>
                  <SelectItem value="zaragoza">Zaragoza, Spain</SelectItem>
                  <SelectItem value="lisbon">Lisbon, Portugal</SelectItem>
                  <SelectItem value="porto">Porto, Portugal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Destination City</label>
              <Select value={formData.destination} onValueChange={(value) => setFormData({ ...formData, destination: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paris">Paris, France</SelectItem>
                  <SelectItem value="lyon">Lyon, France</SelectItem>
                  <SelectItem value="marseille">Marseille, France</SelectItem>
                  <SelectItem value="berlin">Berlin, Germany</SelectItem>
                  <SelectItem value="munich">Munich, Germany</SelectItem>
                  <SelectItem value="frankfurt">Frankfurt, Germany</SelectItem>
                  <SelectItem value="amsterdam">Amsterdam, Netherlands</SelectItem>
                  <SelectItem value="rotterdam">Rotterdam, Netherlands</SelectItem>
                  <SelectItem value="brussels">Brussels, Belgium</SelectItem>
                  <SelectItem value="antwerp">Antwerp, Belgium</SelectItem>
                  <SelectItem value="london">London, UK</SelectItem>
                  <SelectItem value="manchester">Manchester, UK</SelectItem>
                  <SelectItem value="milan">Milan, Italy</SelectItem>
                  <SelectItem value="rome">Rome, Italy</SelectItem>
                  <SelectItem value="zurich">Zurich, Switzerland</SelectItem>
                  <SelectItem value="vienna">Vienna, Austria</SelectItem>
                  <SelectItem value="copenhagen">Copenhagen, Denmark</SelectItem>
                  <SelectItem value="stockholm">Stockholm, Sweden</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Weight (kg)</label>
              <Input
                type="number"
                placeholder="Enter weight"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Service Type</label>
              <Select value={formData.serviceType} onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spanish-road">Spanish Road</SelectItem>
                  <SelectItem value="european-road">European Road</SelectItem>
                  <SelectItem value="express">Express Delivery</SelectItem>
                  <SelectItem value="global">Global Shipping</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" className="w-full" size="lg">
            Calculate Cost
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};