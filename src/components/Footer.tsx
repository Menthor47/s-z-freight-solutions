import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import sziLogo from "@/assets/szi-group-logo.jpg";

export const Footer = () => {
  const businessInfo = BUSINESS_INFO;

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
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
              {businessInfo.tagline} across {businessInfo.country} and Europe since {businessInfo.foundedYear}.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/get-quote" className="text-sm text-muted-foreground hover:text-primary transition-colors">Get Quote</Link></li>
              <li><Link to="/relocation" className="text-sm text-muted-foreground hover:text-primary transition-colors">Relocation</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Spanish Road Transport</li>
              <li className="text-sm text-muted-foreground">European Logistics</li>
              <li className="text-sm text-muted-foreground">Global Shipping</li>
              <li className="text-sm text-muted-foreground">Warehousing</li>
              <li className="text-sm text-muted-foreground">Supply Chain</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
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
          <p>&copy; {new Date().getFullYear()} S&Z TRADING INTERNATIONAL S.C.A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};