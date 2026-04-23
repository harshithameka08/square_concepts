import { motion } from 'motion/react';
import Section from '@/src/components/Section';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { FadeIn, ScaleIn, defaultVariants } from '@/src/components/Motion';

export const primaryServices = [
  {
    id: 'modular-kitchens',
    title: 'Modular Kitchens',
    shortDesc: 'Highly efficient, ergonomic kitchen systems designed for modern living.',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1200',
    icon: '🍳'
  },
  {
    id: 'custom-wardrobes',
    title: 'Custom Wardrobes',
    shortDesc: 'Bespoke storage solutions that blend perfectly with your bedroom aesthetics.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200',
    icon: '🚪'
  },
  {
    id: 'turnkey-interiors',
    title: 'Turnkey Interior Solutions',
    shortDesc: 'End-to-end design and execution. We handle everything from concept to handover.',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1200',
    icon: '🏗️'
  },
  {
    id: 'residential-interiors',
    title: 'Residential Interior Design',
    shortDesc: 'Personalized living spaces that reflect your lifestyle and values.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    icon: '🏠'
  },
  {
    id: '3d-design',
    title: '3D Design & Visualization',
    shortDesc: 'Photorealistic views of your space before execution for absolute clarity.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    icon: '📐'
  }
];

const supportingServices = [
  { title: 'Home Renovation & Remodeling', description: 'Structural audits and aesthetic revamps for aging properties.' },
  { title: 'False Ceiling & Ceiling Design', description: 'Architectural ceiling solutions with integrated lighting and cooling.' },
  { title: 'Lighting Design & Installation', description: 'Layered lighting concepts to set the perfect mood for every occasion.' },
  { title: 'Furniture Customization', description: 'Handcrafted furniture pieces built to your exact specifications.' },
  { title: 'Decorative Wall Paneling', description: 'Custom textures and finishes to add depth and character to your walls.' },
  { title: 'Smart Home Integration', description: 'Seamless tech integration for automated security, climate, and lighting.' },
];

export default function Services() {
  return (
    <div className="pt-20 bg-primary-bg min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden min-h-[40vh] flex items-center justify-center text-center">
         {/* Background Image & Overlay */}
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2000" 
              alt="Our Services Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
         </div>

        <div className="max-w-4xl mx-auto relative z-10 w-full">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter mb-8"
           >
             OUR <span className="text-accent">SERVICES</span>
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 font-light"
           >
             Discover a comprehensive suite of interior solutions designed to elevate your living experience. 
             Curating every detail to reflect your unique architectural legacy.
           </motion.p>

           <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="w-24 h-1 bg-accent mx-auto rounded-full"
           />
        </div>
      </section>

      {/* Primary Services List Type UI */}
      <Section className="bg-primary-bg pt-8 md:pt-10">
        <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-display font-bold">Primary Services</h2>
            <div className="h-px flex-grow bg-text-dark/10" />
        </div>

        <div className="space-y-6">
            {primaryServices.map((service, idx) => {
              const is3D = service.id === '3d-design';
              return (
                <motion.div key={service.id} variants={defaultVariants} className={is3D ? "mt-20 md:mt-24" : ""}>
                  <Link 
                    to={`/services/${service.id}`}
                    className={cn(
                      "group block rounded-[24px] overflow-hidden border border-text-dark/5 transition-all duration-500 hover:shadow-2xl",
                      is3D ? "relative min-h-[250px] md:min-h-[300px]" : "bg-white hover:bg-secondary-bg p-2 md:p-4 hover:shadow-accent/10"
                    )}
                  >
                    {is3D ? (
                      <>
                        <div className="absolute inset-0 z-0 bg-secondary-bg">
                          <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12 py-10">
                           <div className="flex items-center gap-4 mb-4">
                              <span className="text-4xl">{service.icon}</span>
                              <h3 className="text-3xl md:text-5xl font-display font-bold text-white">{service.title}</h3>
                           </div>
                           <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                              {service.shortDesc}
                           </p>
                           <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex w-16 h-16 rounded-full border border-white/20 group-hover:border-accent flex items-center justify-center text-white/40 group-hover:text-accent transition-all">
                              <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
                           </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        {/* Image Thumbnail */}
                        <div className="w-full md:w-64 aspect-video md:aspect-square shrink-0 rounded-[18px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                           <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>

                        {/* Content */}
                        <div className="flex-grow py-4 px-4 md:px-0 text-center md:text-left">
                           <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3 justify-center md:justify-start">
                              <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{service.icon}</span>
                              <h3 className="text-2xl md:text-3xl font-display font-bold group-hover:text-white transition-colors">{service.title}</h3>
                              {service.tag && (
                                <span className="inline-flex items-center gap-1 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit mx-auto md:mx-0">
                                  <Sparkles size={10} /> {service.tag}
                                </span>
                              )}
                           </div>
                           <p className="text-text-dark/50 group-hover:text-white/60 transition-colors text-lg max-w-2xl leading-relaxed">
                              {service.shortDesc}
                           </p>
                        </div>

                        {/* Arrow */}
                        <div className="hidden lg:flex w-16 h-16 rounded-full border border-text-dark/10 group-hover:border-accent flex items-center justify-center text-text-dark/20 group-hover:text-accent transition-all mr-6">
                           <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
        </div>
      </Section>

      {/* Supporting Services Grid */}
      <Section className="bg-white border-y border-text-dark/5 pt-8 md:pt-10 pb-32">
        <div className="text-center mb-20 max-w-2xl mx-auto">
           <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Value Added Services</h4>
           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic">Supporting Design Elements</h2>
           <p className="text-text-dark/60 text-lg">Every minor detail contributes to the harmony of the entire space. We excel in these specialties.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {supportingServices.map((service, idx) => (
             <motion.div 
               key={service.title}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.05 }}
               className="p-10 bg-primary-bg rounded-3xl border border-text-dark/5 group hover:bg-accent transition-all duration-500"
             >
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-accent transition-all">
                   <ChevronRight size={24} />
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h4>
                <p className="text-text-dark/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">{service.description}</p>
             </motion.div>
           ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section dark className="bg-secondary-bg pt-32 pb-0">
         <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 p-12 md:p-20 rounded-[40px] border border-white/10">
            <div className="max-w-xl">
               <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">Ready to build your <br /> dream interior?</h2>
               <p className="text-text-light/60 text-lg mb-8">Schedule a session with our design consultant to explore these services in depth for your home.</p>
               <div className="flex items-center gap-8">
                  <div className="flex -space-x-3">
                     {[
                       'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
                       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
                       'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
                       'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100'
                     ].map((src, i) => (
                       <div key={i} className="w-12 h-12 rounded-full border-2 border-secondary-bg bg-accent/20 overflow-hidden">
                          <img src={src} alt="User" className="w-full h-full object-cover" />
                       </div>
                     ))}
                  </div>
                  <div className="text-sm font-bold text-accent">500+ Happy Homeowners</div>
               </div>
            </div>
            <Link 
              to="/consultation"
              className="bg-accent hover:bg-accent-hover text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl shadow-accent/20 flex items-center gap-3 whitespace-nowrap"
            >
              Get Expert Advice <ArrowRight size={24} />
            </Link>
         </div>
      </Section>
    </div>
  );
}
