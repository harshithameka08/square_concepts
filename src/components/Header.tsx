import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronDown, Sparkles, Layout, Armchair, DoorClosed, Box, Hammer, Layers, Lightbulb, PencilRuler, Square, Smartphone, Zap } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logoImage from '../logo.image.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const primaryServices = [
  { name: 'Modular Kitchens', icon: <Box size={18} />, path: '/services/modular-kitchens' },
  { name: 'Custom Wardrobes', icon: <DoorClosed size={18} />, path: '/services/custom-wardrobes' },
  { name: 'Turnkey Interior Solutions', icon: <Zap size={18} />, path: '/services/turnkey-interiors' },
  { name: 'Residential Interior Design', icon: <Armchair size={18} />, path: '/services/residential-interiors' },
  { name: '3D Design & Visualization', icon: <Layout size={18} />, path: '/services/3d-design' },
];

const secondaryServices = [
  { name: 'Home Renovation & Remodeling', icon: <Hammer size={18} />, path: '/services/renovation-remodeling' },
  { name: 'False Ceiling & Ceiling Design', icon: <Layers size={18} />, path: '/services/false-ceiling' },
  { name: 'Lighting Design & Installation', icon: <Lightbulb size={18} />, path: '/services/lighting' },
  { name: 'Furniture Customization', icon: <PencilRuler size={18} />, path: '/services/furniture' },
  { name: 'Decorative Wall Paneling', icon: <Square size={18} />, path: '/services/wall-paneling' },
  { name: 'Smart Home Integration', icon: <Smartphone size={18} />, path: '/services/smart-home' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'blur-header py-3' : 'bg-transparent'
      )}
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex items-center justify-between"
      >
        <Link to="/" className="flex items-center group">
          <img src={logoImage} alt="Square Concepts Logo" className="h-16 w-auto transition-transform duration-500 group-hover:scale-105" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={cn(
              'text-sm font-bold tracking-tight transition-colors hover:text-accent relative py-1',
              location.pathname === '/' ? 'text-accent' : 'text-text-dark/70'
            )}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={cn(
              'text-sm font-bold tracking-tight transition-colors hover:text-accent relative py-1',
              location.pathname === '/about' ? 'text-accent' : 'text-text-dark/70'
            )}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative" 
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={cn(
                'text-sm font-bold tracking-tight transition-colors hover:text-accent py-1 flex items-center gap-1 cursor-pointer',
                location.pathname.startsWith('/services') ? 'text-accent' : 'text-text-dark/70'
              )}
            >
              Services
              <ChevronDown size={14} className={cn("transition-transform duration-300", isDropdownOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full -left-48 mt-2 w-[600px] bg-white rounded-3xl smooth-shadow border border-text-dark/5 p-8 grid grid-cols-2 gap-10"
                >
                  {/* Primary column */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-2">
                       <Sparkles size={12} /> Primary Services
                    </h4>
                    <div className="space-y-4">
                      {primaryServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center gap-4 group/item py-1"
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary-bg flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-white transition-all duration-300">
                            {service.icon}
                          </div>
                          <span className="text-sm font-bold text-text-dark/70 group-hover/item:text-accent transition-colors">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Secondary column */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-text-dark/30 mb-6">
                       Secondary Services
                    </h4>
                    <div className="space-y-4">
                      {secondaryServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center gap-4 group/item py-1"
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary-bg flex items-center justify-center text-text-dark/20 group-hover/item:bg-accent group-hover/item:text-white transition-all duration-300">
                            {service.icon}
                          </div>
                          <span className="text-sm font-bold text-text-dark/70 group-hover/item:text-accent transition-colors">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/projects"
            className={cn(
              'text-sm font-bold tracking-tight transition-colors hover:text-accent relative py-1',
              location.pathname === '/projects' ? 'text-accent' : 'text-text-dark/70'
            )}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={cn(
              'text-sm font-bold tracking-tight transition-colors hover:text-accent relative py-1',
              location.pathname === '/contact' ? 'text-accent' : 'text-text-dark/70'
            )}
          >
            Contact
          </Link>

          <Link
            to="/consultation"
            className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full text-sm font-bold transition-all hover:shadow-xl hover:shadow-accent/20 flex items-center gap-2"
          >
            Book Consultation
            <ArrowRight size={16} />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-dark p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-bg border-b border-text-dark/5 overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              <Link to="/" className="text-lg font-bold py-2 border-b border-text-dark/5">Home</Link>
              <Link to="/about" className="text-lg font-bold py-2 border-b border-text-dark/5">About</Link>
              <Link to="/services" className="text-lg font-bold py-2 border-b border-text-dark/5 text-accent">Services</Link>
              <Link to="/projects" className="text-lg font-bold py-2 border-b border-text-dark/5">Projects</Link>
              <Link to="/contact" className="text-lg font-bold py-2 border-b border-text-dark/5">Contact</Link>
              <Link
                to="/consultation"
                className="bg-accent text-white px-6 py-4 rounded-xl text-center font-bold mt-4"
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
