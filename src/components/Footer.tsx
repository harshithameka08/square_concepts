import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logoImage from '../logo.image.png';

const links = {
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'Residential Design', path: '/services#residential' },
    { name: 'Modular Kitchens', path: '/services#kitchen' },
    { name: 'Living Room', path: '/services#living' },
    { name: 'Office Spaces', path: '/services#office' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary-bg text-text-light pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center">
             <img src={logoImage} alt="Square Concepts Logo" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-text-light/60 max-w-xs leading-relaxed">
            Crafting bespoke interiors that blend elegance with functionality. Your vision, our expertise, timeless results.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-text-light/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-text-light/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-text-light/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {links.navigation.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-text-light/60 hover:text-accent transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4">Our Services</h4>
          <ul className="space-y-2">
            {links.services.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-text-light/60 hover:text-accent transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex gap-3 text-text-light/60">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>123 Interior Boulevard, Design District, New York, NY 10001</span>
            </li>
            <li className="flex gap-3 text-text-light/60">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+1 (555) 000-0000</span>
            </li>
            <li className="flex gap-3 text-text-light/60">
              <Mail size={18} className="text-accent shrink-0" />
              <span>hello@squareconcepts.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-text-light/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-light/40">
        <p>© {new Date().getFullYear()} Square Concepts. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
