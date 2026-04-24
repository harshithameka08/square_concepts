import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, MessageCircle, PhoneCall, Home, PenTool } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const featuredServices = [
  {
    id: 1,
    title: "Full Home Interior Design",
    tag: "Premium Quality",
    desc: "Transform your entire home with our comprehensive design service. From concept to execution, we handle everything.",
    features: "Space Planning, 3D Visualization, Material Selection"
  },
  {
    id: 2,
    title: "Modular Kitchens",
    tag: "Smart Spaces",
    desc: "Design the heart of your home with bespoke modular kitchen solutions. Ergonomic, stylish, and built to last with top-tier finishes.",
    features: "Custom Cabinetry, Ergonomic Layouts, Premium Finishes"
  },
  {
    id: 3,
    title: "Living Room Makeover",
    tag: "Luxury Living",
    desc: "Elevate your everyday space into a luxurious retreat. We curate furniture, lighting, and decor to create a stunning environment.",
    features: "Custom Furniture, Lighting Design, Styling & Decor"
  }
];

export default function PopupAlert() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after 3 seconds for demonstration
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredServices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleBookConsultation = () => {
    setIsOpen(false);
    navigate('/contact');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-secondary-bg/70 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-primary-bg rounded-2xl shadow-2xl w-full max-w-[700px] relative overflow-hidden border border-text-dark/5"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-accent transition-colors z-10 p-1.5 bg-white rounded-full shadow-sm hover:shadow-md"
            >
              <X size={18} strokeWidth={2} />
            </button>

            <div className="p-5 md:p-6">
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-display font-bold text-text-dark mb-1.5 leading-tight tracking-tight">
                  Elevate Your Space & <span className="text-accent">Start Your Design Journey!</span>
                </h2>
                <p className="text-gray-500 font-medium text-[11px] md:text-xs">
                  Bespoke interiors tailored to your lifestyle • Top 1% Design Experts
                </p>
              </div>

              {/* Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                
                {/* Left Column (Card) */}
                <div className="flex flex-col">
                  <div className="relative bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl p-4 mb-4 flex-grow overflow-hidden">
                    {/* Left Accent Border */}
                    <div className="absolute left-0 top-6 bottom-6 w-1 bg-accent rounded-r-full z-10"></div>
                    
                    {/* Next Batch / Date */}
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 border border-accent/20">
                        <Home size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <div className="text-[9px] font-bold text-gray-400 tracking-[0.1em] uppercase mb-0.5">Next Available Slot</div>
                        <div className="font-bold text-gray-900 text-sm">This Week</div>
                        <div className="text-[10px] font-medium text-gray-500">10:00 AM - 6:00 PM</div>
                      </div>
                    </div>

                    <div className="relative h-[120px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 flex flex-col"
                        >
                          {/* Featured Service */}
                          <div className="mb-3">
                            <div className="flex items-center justify-between mb-1">
                              <div className="text-[9px] font-bold tracking-[0.1em] text-gray-400 uppercase">Featured Service</div>
                              <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent/10 text-accent rounded-full text-[9px] font-bold border border-accent/20">
                                <ShieldCheck size={10} strokeWidth={2.5} />
                                {featuredServices[activeIndex].tag}
                              </div>
                            </div>
                            <h3 className="text-[17px] font-display font-bold text-gray-900 leading-tight">
                              {featuredServices[activeIndex].title}
                            </h3>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 text-[11px] leading-relaxed mb-3 line-clamp-2">
                            {featuredServices[activeIndex].desc}
                          </p>

                          <div className="flex items-center gap-1.5 text-[9px] font-semibold text-gray-600 mt-auto">
                            <PenTool size={12} className="text-accent shrink-0" />
                            <span className="truncate">{featuredServices[activeIndex].features}</span>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    
                    <div className="h-1 w-full bg-gray-100 rounded-full mt-3 overflow-hidden">
                       <div 
                         className="h-full bg-accent/60 rounded-full transition-all duration-500" 
                         style={{ width: `${((activeIndex + 1) / featuredServices.length) * 100}%` }}
                       ></div>
                    </div>
                  </div>

                  <button 
                    onClick={handleBookConsultation}
                    className="w-full bg-accent hover:bg-[#6da815] text-white px-4 py-2.5 rounded-lg font-bold transition-all shadow-md shadow-accent/20 flex items-center justify-center gap-1.5 text-xs group"
                  >
                    Book Consultation Now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>

                {/* Right Column (Image & Actions) */}
                <div className="flex flex-col h-full">
                  <div className="relative rounded-xl overflow-hidden shadow-md mb-4 flex-grow min-h-[160px]">
                    <img 
                      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600" 
                      alt="Interior Design Consultation" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Floating Badge */}
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2 border border-white/20">
                      <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></div>
                      <span className="text-[10px] font-bold text-gray-800">Slots Filling Fast</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a href="https://wa.me/919010106877" target="_blank" rel="noreferrer" className="bg-white border-2 border-[#4ADE80] hover:bg-[#4ADE80] text-[#4ADE80] hover:text-white py-2 px-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm text-[11px] group">
                      <MessageCircle size={14} className="group-hover:fill-current" />
                      WhatsApp
                    </a>
                    <a href="tel:+919010106877" className="bg-white border-2 border-secondary-bg hover:bg-secondary-bg text-secondary-bg hover:text-white py-2 px-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm text-[11px] group">
                      <PhoneCall size={14} className="group-hover:fill-current" />
                      Call Us
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
