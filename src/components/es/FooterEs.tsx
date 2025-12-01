import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants.es";
import sziLogo from "@/assets/szi-group-logo.jpg";

export const FooterEs = () => {
  const businessInfo = BUSINESS_INFO;

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={sziLogo}
                alt="S&Z Trading / SZI Group logo"
                className="h-10 w-auto rounded-lg bg-white object-contain shadow-sm"
              />
              <div>
                <div className="font-bold text-trust-navy">S&Z TRADING</div>
                <div className="text-xs text-muted-foreground uppercase">International S.C.A.</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {businessInfo.tagline} en {businessInfo.country} y Europa desde {businessInfo.foundedYear}.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/es/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nuestros servicios</Link></li>
              <li><Link to="/es/get-quote" className="text-sm text-muted-foreground hover:text-primary transition-colors">Solicitar presupuesto</Link></li>
              <li><Link to="/es/relocation" className="text-sm text-muted-foreground hover:text-primary transition-colors">Reubicación</Link></li>
              <li><Link to="/es/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre nosotros</Link></li>
              <li><Link to="/es/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Transporte nacional</li>
              <li className="text-sm text-muted-foreground">Logística europea</li>
              <li className="text-sm text-muted-foreground">Envíos globales</li>
              <li className="text-sm text-muted-foreground">Almacenaje</li>
              <li className="text-sm text-muted-foreground">Cadena de suministro</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  {businessInfo.city}, {businessInfo.country}
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${businessInfo.phoneRaw}`} className="hover:text-primary transition-colors">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-primary transition-colors">
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {businessInfo.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
