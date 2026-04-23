import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Section from '@/src/components/Section';
import { ArrowLeft, ArrowRight, Share2, Calendar, MapPin, Maximize2 } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    title: 'The Sky Loft', 
    category: 'Residential', 
    image: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&q=80&w=1200', 
    location: 'Mumbai, MH', year: '2023', area: '2,400 sq.ft', 
    description: 'A complete transformation of an industrial loft into a modern family residence focusing on natural light and open-concept living.',
    gallery: [
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558976825-6b1b03a03719?auto=format&fit=crop&q=80&w=800'
    ]
  },
  { 
    id: 2, 
    title: 'Urban Industrial Kitchen', 
    category: 'Kitchen', 
    image: 'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&q=80&w=1200', 
    location: 'Pune, MH', year: '2024', area: '450 sq.ft', 
    description: 'A sophisticated industrial-style kitchen featuring matte black cabinetry, raw textures, and high-efficiency workflow design.',
    gallery: [
      'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556911220-e15621dca73a?auto=format&fit=crop&q=80&w=800'
    ]
  },
  { 
    id: 3, 
    title: 'Scandinavian Living Space', 
    category: 'Living', 
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200', 
    location: 'Bangalore, KA', year: '2023', area: '850 sq.ft', 
    description: 'A bright, airy living room centered on Scandinavian design principles, utilizing light oak and clean geometric shapes.',
    gallery: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800',
      '/assets/projects/scandi-1.png',
      '/assets/projects/scandi-2.png',
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800',
      'https://images.unsplash.com/photo-1616489953149-80883e2401ba?q=80&w=800'
    ]
  },
  { 
    id: 4, 
    title: 'Luxury Velvet Suite', 
    category: 'Bedroom', 
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200', 
    location: 'Hyderabad, TS', year: '2024', area: '600 sq.ft', 
    description: 'A master bedroom suite focusing on plush textures, deep color palettes, and ambient hidden lighting.',
    gallery: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800'
    ]
  },
  { 
    id: 5, 
    title: 'Coastal Open Plan', 
    category: 'Residential', 
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200', 
    location: 'Goa, GA', year: '2023', area: '3,200 sq.ft', 
    description: 'A breezy, coastal-inspired residence utilizing white tones and organic textures to amplify natural space.',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
    ]
  },
  { 
    id: 6, 
    title: 'Black Marble Pantry', 
    category: 'Kitchen', 
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1200', 
    location: 'Delhi, DL', year: '2024', area: '300 sq.ft', 
    description: 'A high-end pantry space designed with black marble countertops, brass hardware, and integrated LED lighting.',
    gallery: [
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800',
      'https://images.unsplash.com/photo-1604709177595-ee9c2580e9a3?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1558976825-6b1b03a03719?w=800',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800'
    ]
  },
  { 
    id: 7, 
    title: 'Zen Meditation Room', 
    category: 'Living', 
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200', 
    location: 'Chennai, TN', year: '2023', area: '400 sq.ft', 
    description: 'A minimalist meditation den focused on tranquility, featuring natural stone, soft lighting, and clean, uncluttered lines.',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800'
    ]
  },
  { 
    id: 8, 
    title: 'Royal Nursery Suite', 
    category: 'Bedroom', 
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200', 
    location: 'Ahmedabad, GJ', year: '2024', area: '500 sq.ft', 
    description: 'An elegant nursery suite combining classic royal aesthetics with modern child-safe furniture and soft palettes.',
    gallery: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800'
    ]
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const projectIndex = projects.findIndex(p => p.id === Number(id));
  const project = projects[projectIndex >= 0 ? projectIndex : 0];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
         <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg via-secondary-bg/20 to-transparent" />
         <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
               >
                  <Link to="/projects" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs mb-6 hover:gap-4 transition-all">
                     <ArrowLeft size={16} /> Back to Projects
                  </Link>
                  <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter mb-4">{project.title}</h1>
                  <div className="flex flex-wrap gap-6 text-white/60 font-medium">
                     <div className="flex items-center gap-2"><MapPin size={16} className="text-accent"/> {project.location}</div>
                     <div className="flex items-center gap-2"><Calendar size={16} className="text-accent"/> Completed in {project.year}</div>
                     <div className="flex items-center gap-2"><Maximize2 size={16} className="text-accent"/> {project.area}</div>
                  </div>
               </motion.div>
               
               <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full text-white transition-all">
                  <Share2 size={24} />
               </button>
            </div>
         </div>
      </section>

      {/* Content */}
      <Section className="bg-white py-12 md:py-20">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
               <div className="space-y-12">
                  <h2 className="text-3xl font-display font-bold mb-6">Overview</h2>
                  <p className="text-xl text-text-dark/60 leading-relaxed">
                     {project.description} We utilized a palette of natural materials and premium finishes to create a sense of serenity. The spatial layout was completely reconfigured to ensure that light could reach every corner of the space.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="space-y-4">
                     <h3 className="text-xl font-bold">The Challenge</h3>
                     <p className="text-text-dark/50 leading-relaxed">
                        The original space was compartmentalized and felt smaller than its actual footprint. Our goal was to unify the area while maintaining functional zones that serve the specific needs of the client.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-xl font-bold">Our Solution</h3>
                     <p className="text-text-dark/50 leading-relaxed">
                        We removed several non-load-bearing partitions and introduced custom modular elements to maintain visual connectivity. High-end storage units were integrated into the architecture to eliminate visual clutter.
                     </p>
                  </div>
               </div>

               <div className="rounded-3xl overflow-hidden smooth-shadow aspect-video mt-12">
                   <img src={project.gallery[0]} alt="Process" className="w-full h-full object-cover" />
               </div>
            </div>

            <div className="lg:col-span-1">
               <div className="bg-white p-10 rounded-[32px] border border-text-dark/5 smooth-shadow sticky top-32">
                  <h3 className="text-2xl font-bold mb-8 italic">Project Details</h3>
                  <div className="space-y-6">
                     <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-text-dark/40 mb-1">Category</div>
                        <div className="font-bold">{project.category} Design</div>
                     </div>
                     <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-text-dark/40 mb-1">Client</div>
                        <div className="font-bold">Premium Workspace</div>
                     </div>
                     <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-text-dark/40 mb-1">Duration</div>
                        <div className="font-bold">4-6 Months</div>
                     </div>
                     <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-text-dark/40 mb-1">Materials Used</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                           {['Natural Oak', 'Italian Marble', 'Brass Fittings', 'Custom Veneer'].map(tag => (
                             <span key={tag} className="px-3 py-1 bg-primary-bg rounded-lg text-xs font-medium text-text-dark/60">{tag}</span>
                           ))}
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-text-dark/5">
                     <p className="text-sm text-text-dark/40 italic mb-6">"Square Concepts brought a level of sophistication we didn't think was possible. The results speak for themselves."</p>
                     <div className="font-bold">– Client Testimonial</div>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* Gallery Grid */}
      <Section className="bg-primary-bg py-8 md:py-12">
         <div className="grid grid-cols-3 gap-6">
            {project.gallery.slice(1, 4).map((img, idx) => (
               <div key={idx} className="rounded-3xl overflow-hidden aspect-square">
                  <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt={`Detail ${idx + 1}`} />
               </div>
            ))}
         </div>
      </Section>

      {/* Next Project */}
      <Section dark className="relative bg-secondary-bg py-24 overflow-hidden group">
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 z-0">
            <img 
               src={nextProject.image} 
               className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
               alt="" 
            />
            <div className="absolute inset-0 bg-black/40" />
         </div>

         <div className="relative z-10 flex flex-col items-center">
            <span className="text-accent font-bold uppercase tracking-widest text-[10px] mb-4">Next Project</span>
            <Link to={`/projects/${nextProject.id}`} className="group text-center">
               <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter hover:text-accent transition-all duration-500 transform group-hover:scale-105">
                  {nextProject.title}
               </h2>
               <div className="inline-flex items-center gap-3 text-white/40 font-bold uppercase tracking-[0.2em] text-xs group-hover:text-accent group-hover:gap-6 transition-all">
                  View Case Study <ArrowRight size={20} />
               </div>
            </Link>
         </div>
      </Section>
    </div>
  );
}
