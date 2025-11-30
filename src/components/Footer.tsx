import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-white">S&Z</span>
              </div>
              <div>
                <div className="font-bold text-trust-navy">S&Z TRADING</div>
                <div className="text-xs text-muted-foreground uppercase">International S.C.A.</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional freight and logistics services across Spain and Europe since 2022.
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
              <li><Link to="/#relocation" className="text-sm text-muted-foreground hover:text-primary transition-colors">Relocation</Link></li>
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
                <span>Málaga, Spain</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+34684482440" className="hover:text-primary transition-colors">+34 684 48 24 40</a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:esoffice@szitrans.com" className="hover:text-primary transition-colors">esoffice@szitrans.com</a>
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