import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const InstantQuoteFormEs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    weight: "",
    serviceType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/es/get-quote", { state: formData });
  };

  return (
    <Card className="shadow-xl border-2">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Calculator className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Calcula tu presupuesto</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Ciudad de origen</label>
              <Select value={formData.origin} onValueChange={(value) => setFormData({ ...formData, origin: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona origen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="madrid">Madrid, España</SelectItem>
                  <SelectItem value="barcelona">Barcelona, España</SelectItem>
                  <SelectItem value="valencia">Valencia, España</SelectItem>
                  <SelectItem value="seville">Sevilla, España</SelectItem>
                  <SelectItem value="bilbao">Bilbao, España</SelectItem>
                  <SelectItem value="malaga">Málaga, España</SelectItem>
                  <SelectItem value="zaragoza">Zaragoza, España</SelectItem>
                  <SelectItem value="lisbon">Lisboa, Portugal</SelectItem>
                  <SelectItem value="porto">Oporto, Portugal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Ciudad de destino</label>
              <Select value={formData.destination} onValueChange={(value) => setFormData({ ...formData, destination: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona destino" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paris">París, Francia</SelectItem>
                  <SelectItem value="lyon">Lyon, Francia</SelectItem>
                  <SelectItem value="marseille">Marsella, Francia</SelectItem>
                  <SelectItem value="berlin">Berlín, Alemania</SelectItem>
                  <SelectItem value="munich">Múnich, Alemania</SelectItem>
                  <SelectItem value="frankfurt">Fráncfort, Alemania</SelectItem>
                  <SelectItem value="amsterdam">Ámsterdam, Países Bajos</SelectItem>
                  <SelectItem value="rotterdam">Róterdam, Países Bajos</SelectItem>
                  <SelectItem value="brussels">Bruselas, Bélgica</SelectItem>
                  <SelectItem value="antwerp">Amberes, Bélgica</SelectItem>
                  <SelectItem value="london">Londres, Reino Unido</SelectItem>
                  <SelectItem value="manchester">Mánchester, Reino Unido</SelectItem>
                  <SelectItem value="milan">Milán, Italia</SelectItem>
                  <SelectItem value="rome">Roma, Italia</SelectItem>
                  <SelectItem value="zurich">Zúrich, Suiza</SelectItem>
                  <SelectItem value="vienna">Viena, Austria</SelectItem>
                  <SelectItem value="copenhagen">Copenhague, Dinamarca</SelectItem>
                  <SelectItem value="stockholm">Estocolmo, Suecia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Peso (kg)</label>
              <Input
                type="number"
                placeholder="Introduce el peso"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Tipo de servicio</label>
              <Select value={formData.serviceType} onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spanish-road">Transporte nacional</SelectItem>
                  <SelectItem value="european-road">Transporte europeo</SelectItem>
                  <SelectItem value="express">Entrega exprés</SelectItem>
                  <SelectItem value="global">Envío global</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" className="w-full" size="lg">
            Calcular coste
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
