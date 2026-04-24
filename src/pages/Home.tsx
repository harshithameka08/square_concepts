import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import kitchenElements from '../kitchen.elements.jpg';
import nolteLogo from '../Nolte_Küchen_logo.svg.png';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Star, Quote, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import Section from '@/src/components/Section';
import { cn } from '@/src/lib/utils';
import { FadeIn, FadeInRight, ScaleIn, defaultVariants } from '@/src/components/Motion';

const stats = [
  { value: '500+', label: 'PROJECTS COMPLETED' },
  { value: '98%', label: 'HAPPY CLIENTS' },
  { value: '10+', label: 'YEARS OF EXPERTISE' },
  { value: '25+', label: 'DESIGN AWARDS' },
];

const services = [
  {
    title: 'Residential Design',
    description: 'Bespoke living spaces tailored to your lifestyle and aesthetic preferences.',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Modular Kitchens',
    description: 'Efficient, stylish, and high-quality kitchen solutions for modern homes.',
    icon: '🍳',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Living Room Interiors',
    description: 'Transforming your central gathering space into a statement of elegance.',
    icon: '🛋️',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Bedroom Sanctuaries',
    description: 'Creating peaceful retreats designed for rest and ultimate comfort.',
    icon: '🛏️',
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Wardrobes & Storage',
    description: 'Smart storage solutions that maximize space without compromising style.',
    icon: '🚪',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Smart Home Solutions',
    description: 'Integrating modern technology seamlessly into your interior design.',
    icon: '📱',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200'
  }
];

const projects = [
  { 
    id: 1, 
    title: 'Minimalist Penthouse', 
    category: 'Residential', 
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    videoId: 'MRy6owOO4fk'
  },
  { 
    id: 2, 
    title: 'Modern Chef Kitchen', 
    category: 'Kitchen', 
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    videoId: 'E8qSNCa7QV4'
  },
  { 
    id: 3, 
    title: 'Scandi Living Room', 
    category: 'Living', 
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    videoId: 'U73pzzKFu0E'
  },
  { 
    id: 4, 
    title: 'Luxe Master Suite', 
    category: 'Bedroom', 
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80',
    videoId: 'uL8fLYnjeTc'
  },
];

const processSteps = [
  { number: '01', title: 'Discovery', description: 'Understanding your vision, requirements, and budget through deep consultation.' },
  { number: '02', title: 'Planning', description: 'Meticulous space planning and conceptualizing the overall design direction.' },
  { number: '03', title: 'Design', description: 'Creating detailed 3D visualizations and selecting materials, finishes, and furniture.' },
  { number: '04', title: 'Execution', description: 'Translating designs into reality with precision craftsmanship and site management.' },
  { number: '05', title: 'Delivery', description: 'A final walkthrough and handover of your beautiful, ready-to-move-in space.' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Square Concepts transformed our outdated apartment into a modern sanctuary. Their attention to detail is unmatched.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Tech Executive',
    content: 'The modular kitchen they designed is not only beautiful but incredibly functional. Every inch is utilized perfectly.',
    rating: 5
  },
  {
    name: 'Elena Rodriguez',
    role: 'Art Curator',
    content: 'Professional, creative, and transparent throughout the process. Highly recommend for complete home transformations.',
    rating: 5
  }
];



const TestimonialSlider = ({ testimonials }: { testimonials: any[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative min-h-[300px] flex flex-col justify-center max-w-2xl mx-auto lg:ml-auto lg:mr-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white p-6 md:p-8 rounded-[2rem] smooth-shadow relative overflow-hidden group"
        >
          <div className="absolute top-6 right-8 opacity-5 text-accent group-hover:scale-110 transition-transform duration-500">
            <Quote size={80} />
          </div>
          
          <div className="relative z-10">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} fill="#E57A2E" stroke="#E57A2E" size={12} />
              ))}
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-display font-medium text-text-dark/90 italic mb-8 leading-relaxed"
            >
              "{testimonials[current].content}"
            </motion.p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent text-xl border-2 border-accent/20">
                {testimonials[current].name.charAt(0)}
              </div>
              <div>
                <div className="font-display font-bold text-lg">{testimonials[current].name}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-text-dark/40">{testimonials[current].role}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ProjectCard: React.FC<{ project: any; idx: number }> = ({ project, idx }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={project.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: idx * 0.1 }
        }
      }}
      className="group relative aspect-[4/5] w-[420px] overflow-hidden rounded-[2rem] smooth-shadow bg-secondary-bg"
    >
      {/* Video Layer */}
      {isHovered && (
        <div className="absolute inset-0 z-0">
          <iframe
            src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
            title={project.title}
            className="w-[100%] h-[100%] scale-[2.2] origin-center"
            allow="autoplay; encrypted-media"
          />
        </div>
      )}

      {/* Thumbnail Layer */}
      <motion.img 
        src={project.image} 
        alt={project.title} 
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-10" 
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg/90 via-secondary-bg/10 to-transparent opacity-100 group-hover:opacity-0 transition-all duration-500 flex flex-col justify-end p-10 z-20">
        <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2">{project.category}</span>
        <h3 className="text-text-light text-3xl font-bold mb-4">{project.title}</h3>
        <div className="flex items-center gap-2 text-white/80 text-base font-medium">
          Explore Project <ArrowRight size={18} />
        </div>
      </div>
      
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-hero-gradient">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-accent/5 -skew-x-[20deg] translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none text-accent/10" />
        
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="lg:col-span-6"
          >

            
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.85] mb-10 text-secondary-bg tracking-tighter">
                Elegant Spaces, <br />
                <span className="text-accent italic font-light">Engineered</span> to Perfection
              </h1>
            </FadeIn>
            
            <FadeIn>
              <p className="text-xl text-secondary-bg/60 mb-12 max-w-lg leading-relaxed font-medium">
                A dialogue between organic warmth and structural integrity. We curate bespoke environments that balance industrial precision with the poetry of fine living.
              </p>
            </FadeIn>
            
            <FadeIn className="flex flex-wrap gap-4 items-center">
              <Link
                to="/projects"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-2xl hover:shadow-accent/30 flex items-center gap-2 group"
              >
                View Collections
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-secondary-bg/5 hover:bg-secondary-bg/10 backdrop-blur-md text-secondary-bg border border-secondary-bg/10 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 group"
              >
                Our Services
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>

            <FadeIn className="mt-16 flex items-center gap-10 opacity-30 pt-10 border-t border-text-dark/10">
               <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold">500+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest leading-none">Spaces</span>
               </div>
               <div className="w-px h-8 bg-text-dark" />
               <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold">12</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest leading-none">Awards</span>
               </div>
            </FadeIn>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="lg:col-span-6 relative"
          >
            {/* Architectural Layering */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
               <div className="space-y-4 pt-12">
                  <ScaleIn className="rounded-2xl overflow-hidden smooth-shadow aspect-[3/4]">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Interior Detail 1" className="w-full h-full object-cover" />
                  </ScaleIn>
                  <ScaleIn className="rounded-2xl overflow-hidden smooth-shadow aspect-square">
                    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" alt="Interior Detail 2" className="w-full h-full object-cover" />
                  </ScaleIn>
               </div>
               <div className="space-y-4">
                  <ScaleIn className="rounded-2xl overflow-hidden smooth-shadow aspect-square">
                    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" alt="Interior Detail 3" className="w-full h-full object-cover" />
                  </ScaleIn>
                  <ScaleIn className="rounded-2xl overflow-hidden smooth-shadow aspect-[3/4]">
                    <img src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80" alt="Interior Detail 4" className="w-full h-full object-cover" />
                  </ScaleIn>
               </div>
            </div>

            <div className="absolute -inset-10 bg-accent/5 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <Section className="bg-primary-bg py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ScaleIn className="relative">
            <div className="relative">
              {/* Decorative Background Box */}
              <div className="absolute -top-10 -left-10 w-full h-full bg-accent/5 rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
              
              <div className="aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0 rounded-[2.5rem] overflow-hidden smooth-shadow relative z-10 border-8 border-white">
                <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80" alt="Interior Design Excellence" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              
              {/* Floating Stat/Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold leading-none">100%</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-text-dark/40">Custom Design</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-px bg-text-dark/5 rotate-[35deg] pointer-events-none" />
          </ScaleIn>

          <div className="space-y-10">
            <FadeInRight>

              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-[1.05] tracking-tight">
                Crafting Interiors That <br /> <span className="text-accent italic font-light">Feel Like Home</span>
              </h2>
            </FadeInRight>
            
            <FadeInRight className="space-y-6 text-xl text-text-dark/60 leading-relaxed max-w-xl">
              <p>
                At Square Concepts, we combine creativity and precision to design interiors that are functional, elegant, and uniquely yours.
              </p>
              <p>
                We believe that a well-designed home is more than just aesthetics; it's about how the space feels and how it enhances your daily life.
              </p>
            </FadeInRight>
            
            <FadeInRight className="mt-10 pt-10 border-t border-text-dark/5 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-display font-bold text-lg mb-2">Our Vision</h4>
                <p className="text-text-dark/50 italic">To redefine luxury through minimalist and practical design.</p>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg mb-2">Our Mission</h4>
                <p className="text-text-dark/50 italic">Excellence in delivery and transparency in every project.</p>
              </div>
            </FadeInRight>
            

          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section dark className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">What We Do</h4>
          <h2 className="text-5xl font-display font-bold mb-6 text-white leading-tight">
            Comprehensive Design Solutions
          </h2>
          <p className="text-text-light/60 text-lg">
            From single-room makeovers to full-scale restorations, we provide end-to-end expertise for all your space requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all scale-100 group-hover:scale-110 duration-500 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 transition-colors">{service.title}</h3>
                <p className="text-text-light/50 transition-colors mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-accent font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all">
                  View Details
                  <ArrowRight size={16} />
                </Link>
              </div>
              
              {/* Image Preview Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/60" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-primary-bg overflow-visible pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <FadeIn className="max-w-2xl">
            <h2 className="text-5xl font-display font-bold leading-tight">Featured Concept Designs</h2>
          </FadeIn>
          <FadeIn>
            <Link
              to="/projects"
              className="flex items-center gap-2 text-text-dark/60 hover:text-accent font-bold transition-all px-6 py-3 rounded-full border border-text-dark/10 hover:border-accent"
            >
              All Projects
              <ChevronRight size={18} />
            </Link>
          </FadeIn>
        </div>

        <div className="relative overflow-hidden group/gallery">
          <div 
            className="flex gap-10 whitespace-nowrap pause-on-hover"
            style={{ 
              width: "max-content",
              animation: "scroll 40s linear infinite" 
            }}
          >
            {[...projects, ...projects].map((project, idx) => (
              <div key={`${project.id}-${idx}`} className="w-[420px] shrink-0 whitespace-normal">
                <ProjectCard project={project} idx={idx} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-white border-y border-text-dark/5 relative pt-12 md:pt-16">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="text-center mb-24 max-w-3xl mx-auto">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
            The Smooth Path To <br /> <span className="text-accent italic font-light">Your Dream Space</span>
          </h2>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={step.number} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group p-6 rounded-[2rem] hover:bg-primary-bg transition-all duration-500"
              >
                <div className="relative mb-10">
                  <div className="w-20 h-20 rounded-full bg-white border border-accent/20 flex items-center justify-center relative z-10 shadow-xl group-hover:bg-accent group-hover:border-accent group-hover:shadow-accent/30 transition-all duration-500">
                    <span className="text-3xl font-display font-bold group-hover:text-white transition-colors text-text-dark/80">{step.number}</span>
                  </div>
                  {/* Background Number Shadow */}
                  <span className="absolute -top-4 -right-4 text-7xl font-display font-bold text-accent/5 group-hover:text-accent/10 transition-colors pointer-events-none select-none">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{step.title}</h3>
                <p className="text-text-dark/60 text-sm leading-relaxed font-medium">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Nolte Germany Section */}
      <Section className="bg-primary-bg py-16 md:py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.1] tracking-tight text-secondary-bg mb-6">
                Precision Engineered <br /> by <span className="text-accent italic font-light">Nolte Germany</span>
              </h2>
              <p className="text-lg text-secondary-bg/60 leading-relaxed max-w-xl">
                Experience the pinnacle of German engineering. Since 1958, Nolte has been synonymous with exceptional quality, transforming kitchens into architectural masterpieces.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-secondary-bg/5">
              <FadeIn className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-secondary-bg flex items-center justify-center text-white">
                  <CheckCircle2 size={16} />
                </div>
                <h4 className="font-display font-bold text-base">German Heritage</h4>
                <p className="text-xs text-secondary-bg/50 leading-relaxed">
                  Crafting excellence for over 65 years with state-of-the-art manufacturing in Germany.
                </p>
              </FadeIn>
              <FadeIn className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-secondary-bg flex items-center justify-center text-white">
                  <Sparkles size={16} />
                </div>
                <h4 className="font-display font-bold text-base">Sustainable Luxury</h4>
                <p className="text-xs text-secondary-bg/50 leading-relaxed">
                  Deeply committed to the environment with FSC® and PEFC™ certified sustainable wood.
                </p>
              </FadeIn>
              <FadeIn className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-secondary-bg flex items-center justify-center text-white">
                  <ArrowUpRight size={16} />
                </div>
                <h4 className="font-display font-bold text-base">Smart Ergonomics</h4>
                <p className="text-xs text-secondary-bg/50 leading-relaxed">
                  The revolutionary MATRIX grid system ensures perfect height planning and storage.
                </p>
              </FadeIn>
              <FadeIn className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-secondary-bg flex items-center justify-center text-white">
                  <MapPin size={16} />
                </div>
                <h4 className="font-display font-bold text-base">World-Class Hardware</h4>
                <p className="text-xs text-secondary-bg/50 leading-relaxed">
                  Integrated silent soft-closing technology engineered for heavy daily use.
                </p>
              </FadeIn>
            </div>

            <FadeIn>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 text-secondary-bg font-bold text-base group pt-2"
              >
                Explore Nolte Collection
                <div className="w-8 h-8 rounded-full border border-secondary-bg/20 flex items-center justify-center group-hover:bg-secondary-bg group-hover:text-white transition-all">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2 relative">
            <ScaleIn className="relative z-10 rounded-[2.5rem] overflow-hidden smooth-shadow aspect-[4/3] border-[10px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200" 
                alt="Nolte Germany Kitchen Design" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg/30 to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-xl border border-white/20 flex items-center justify-center">
                 <img src={nolteLogo} alt="Nolte Germany Logo" className="h-6 w-auto object-contain" />
              </div>
            </ScaleIn>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section dark className="py-24 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={kitchenElements} 
            alt="Kitchen Elements" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-secondary-bg/70" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={defaultVariants}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-accent mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-text-light/50 font-medium uppercase tracking-widest text-[10px] md:text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-primary-bg pb-12 md:pb-16 pt-8 md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32 lg:-mt-10">
            <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Reviews</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tighter whitespace-nowrap">What Our Clients Are Saying</h2>
            <p className="text-text-dark/60 text-lg mb-8 leading-relaxed max-w-xl">
              Don't just take our word for it. Hear from those who have already transformed their living experiences with us.
            </p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} fill="#E57A2E" stroke="#E57A2E" size={20} />
              ))}
              <span className="ml-2 font-bold">(5.0 Average)</span>
            </div>
          </div>

          <div>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden relative bg-secondary-bg">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-accent/40 to-transparent scale-150" />
          </div>
          
          <div className="relative z-10 px-8 py-12 md:py-16 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-tighter max-w-4xl">
              Ready to Transform Your <br /> Space Into a Timeless One?
            </h2>
            <p className="text-text-light/60 text-lg mb-8 max-w-xl leading-relaxed">
              Join 500+ happy homeowners who have elevated their lifestyle with our expert interior design solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/consultation"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-accent/20 flex items-center gap-2 group"
              >
                Book Your Consultation
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Contact Sales
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8 justify-center flex-wrap opacity-50 grayscale transition-all hover:grayscale-0">
               <span className="font-bold text-white/60">Trusted by:</span>
               <div className="h-6 w-px bg-white/20 mx-2" />
               <div className="flex gap-8 text-xl font-display font-bold text-white italic tracking-tighter">
                  <span>LUXE HOME</span>
                  <span>PRESTIGE</span>
                  <span>DESIGNHUB</span>
                  <span>VOGUE</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
