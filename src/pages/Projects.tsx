import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Filter, ArrowRight, Expand } from 'lucide-react';
import Section from '@/src/components/Section';
import { cn } from '@/src/lib/utils';

const categories = ['All', 'Residential', 'Kitchen', 'Living', 'Bedroom'];

const projects = [
  { id: 1, title: 'The Sky Loft', category: 'Residential', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800', location: 'Mumbai, MH' },
  { id: 2, title: 'Emerald Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800', location: 'Pune, MH' },
  { id: 3, title: 'Oak & Stone Lounge', category: 'Living', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800', location: 'Bangalore, KA' },
  { id: 4, title: 'Velvet Dreams Suite', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80&w=800', location: 'Hyderabad, TS' },
  { id: 5, title: 'Coastal Retreat', category: 'Residential', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800', location: 'Goa, GA' },
  { id: 6, title: 'Black Marble Pantry', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800', location: 'Delhi, DL' },
  { id: 7, title: 'Zen Meditation Den', category: 'Living', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800', location: 'Chennai, TN' },
  { id: 8, title: 'The Royal Nursery', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800', location: 'Ahmedabad, GJ' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1600"
          alt="Our Projects"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-secondary-bg/65" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white uppercase tracking-tight mb-6 leading-none">
            Our <span className="text-accent">Projects</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-6">
            We curate spaces that dialogue with their surroundings. Every project is an exploration of light, materiality, and the quiet sophistication of modern architecture.
          </p>
          <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>
      </section>

      {/* Filter and Grid */}
      <Section noPadding className="bg-primary-bg min-h-screen pt-12 pb-12">
         <div className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 p-1 bg-white rounded-full border border-text-dark/5 smooth-shadow mb-8 overflow-x-auto max-w-full no-scrollbar">
               {categories.map((cat) => (
                 <button
                   key={cat}
                   onClick={() => setActiveFilter(cat)}
                   className={cn(
                     "px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap",
                     activeFilter === cat ? "bg-accent text-white shadow-lg shadow-accent/20" : "text-text-dark/50 hover:text-text-dark"
                   )}
                 >
                   {cat}
                 </button>
               ))}
            </div>
            <p className="text-text-dark/40 font-medium text-sm flex items-center gap-2 italic">
               <Filter size={14} /> Showing {filteredProjects.length} results
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
               {filteredProjects.map((project) => (
                 <motion.div
                   key={project.id}
                   layout
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   transition={{ duration: 0.4 }}
                   className="group relative rounded-3xl overflow-hidden bg-white hover-lift"
                 >
                    <Link to={`/projects/${project.id}`} className="block relative aspect-square md:aspect-[4/5] lg:aspect-[3/4]">
                       <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-secondary-bg/20 group-hover:bg-accent/40 transition-colors duration-500" />
                       
                       {/* Overlay Content */}
                       <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="bg-white p-6 rounded-2xl shadow-xl">
                             <div className="flex justify-between items-start mb-2">
                                <div>
                                   <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1 block">{project.category}</span>
                                   <h3 className="text-xl font-bold text-text-dark">{project.title}</h3>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-text-dark/10 flex items-center justify-center text-text-dark group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                                   <ArrowRight size={18} />
                                </div>
                             </div>
                             <div className="flex items-center gap-2 text-text-dark/40 text-xs font-medium">
                                <Expand size={12} /> {project.location}
                             </div>
                          </div>
                       </div>
                    </Link>
                 </motion.div>
               ))}
            </AnimatePresence>
         </div>
      </Section>

      {/* Final CTA */}
      <Section noPadding className="bg-primary-bg pt-8 pb-16">
         <div className="bg-secondary-bg rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl" />
            <div className="relative z-10 max-w-4xl mx-auto">
               <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Have a similar project in mind?</h2>
               <p className="text-text-light/50 text-xl mb-12 italic leading-relaxed font-sans">
                 Our design experts are ready to turn your floor plan into a world-class living experience.
               </p>
               <Link
                to="/consultation"
                className="bg-accent hover:bg-accent-hover text-white px-12 py-5 rounded-full font-bold text-xl transition-all inline-flex items-center gap-3 group"
               >
                 Start Your Project
                 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
         </div>
      </Section>
    </div>
  );
}
