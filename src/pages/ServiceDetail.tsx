import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Section from '@/src/components/Section';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Layout, Award, Settings } from 'lucide-react';
import { primaryServices } from './Services';
import { cn } from '@/src/lib/utils';

const serviceData: Record<string, any> = {
  'modular-kitchens': {
    title: 'Modular Kitchens',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600',
    description: 'Transform your culinary space with our state-of-the-art modular kitchen solutions. We combine ergonomic principles with luxury finishes to create kitchens that are as efficient as they are beautiful.',
    process: [
      { title: 'Space Analysis', desc: 'Understanding your workflow and storage needs.' },
      { title: 'Layout Design', desc: 'Selection from L-shape, U-shape, Parallel, or Island layouts.' },
      { title: 'Material Selection', desc: 'Choosing from premium laminates, acrylic, or PU finishes.' },
      { title: 'Installation', desc: 'Precision fitting by our expert craftsmen.' },
    ],
    features: [
      'Precision German hardware',
      'Soft-close telescopic channels',
      'Corrosion resistant materials',
      'Built-in appliance integration',
      'Smart corner storage units',
      'Heat & moisture resistant finishes'
    ],
    benefits: [
      { icon: <Layout />, label: 'Maximized Space', desc: 'Every inch utilized with smart accessories.' },
      { icon: <Settings />, label: 'Easy Maintenance', desc: 'Waterproof materials for easy cleaning.' },
      { icon: <Award />, label: 'Lifetime Warranty', desc: 'Quality hardware backed by our commitment.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'custom-wardrobes': {
    title: 'Custom Wardrobes',
    heroImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1600',
    description: 'Our bespoke wardrobe solutions are designed to fit your unique style and storage requirements perfectly. From walk-in closets to sliding wardrobes, we create space for everything you love.',
    process: [
      { title: 'Storage Audit', desc: 'Analyzing your clothing and accessory collection.' },
      { title: 'Mechanism Choice', desc: 'Selection of hinged, sliding, or walk-in solutions.' },
      { title: 'Internal Layout', desc: 'Defining drawers, shelves, and hanging spaces.' },
      { title: 'Final Finishing', desc: 'Exterior finish that complements your bedroom.' },
    ],
    features: [
      'Floor-to-ceiling storage',
      'Integrated sensor lighting',
      'Anti-jump sliding mechanisms',
      'Soft-close hinges & sliders',
      'Custom internal accessories',
      'Premium veneer or laminate finishes'
    ],
    benefits: [
      { icon: <Layout />, label: 'Organized Living', desc: 'Specific spaces for every accessory.' },
      { icon: <Settings />, label: 'Durable Build', desc: 'Reinforced structures for longevity.' },
      { icon: <Award />, label: 'Premium Aesthetics', desc: 'A statement piece for your bedroom.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'turnkey-interiors': {
    title: 'Turnkey Interiors',
    heroImage: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1600',
    description: 'Experience a hassle-free home transformation. Our turnkey service covers everything from civil work and electricals to furniture and decor. You give us the keys, we give you the home of your dreams.',
    process: [
      { title: 'Conceptualization', desc: 'Defining the overall design language and mood.' },
      { title: 'Site Preparation', desc: 'Civil modifications, plumbing, and electrical work.' },
      { title: 'Execution', desc: 'Manufacturing and site-fitting of all elements.' },
      { title: 'Styling', desc: 'Final decor, lighting, and placement of furniture.' },
    ],
    features: [
      'Complete project management',
      'Civil & structural work',
      'Electrical & lighting setup',
      'Custom furniture & decor',
      'On-site quality supervision',
      'Transparent material tracking'
    ],
    benefits: [
      { icon: <Layout />, label: 'One Point of Contact', desc: 'No need to coordinate with multiple vendors.' },
      { icon: <Settings />, label: 'Timely Delivery', desc: 'Strict project timelines with phase tracking.' },
      { icon: <Award />, label: 'Peace of Mind', desc: 'Warranty on every single component.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800'
    ]
  },
  'residential-interiors': {
    title: 'Residential Interiors',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
    description: 'We believe your home should tell your story. Our residential interior services focus on creating personalized, lived-in spaces that balance aesthetics with the daily routines of your family.',
    process: [
      { title: 'Consultation', desc: 'Mood boarding and style preference identification.' },
      { title: '3D Visualization', desc: 'Photorealistic views of your future space.' },
      { title: 'Procurement', desc: 'Sourcing the finest materials and furniture.' },
      { title: 'Realization', desc: 'Careful execution of designs on your site.' },
    ],
    features: [
      'Bespoke room designs',
      'Ergonomic space planning',
      'Aesthetic color curation',
      'Premium textural elements',
      'Curated art & accessories',
      'Balanced lighting schemes'
    ],
    benefits: [
      { icon: <Layout />, label: 'Functional Beauty', desc: 'Designs that work for real people.' },
      { icon: <Settings />, label: 'Adaptive Design', desc: 'Spaces that evolve with your family.' },
      { icon: <Award />, label: 'Artisan Quality', desc: 'Handcrafted details in every corner.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  'renovation-remodeling': {
    title: 'Renovation & Remodeling',
    heroImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1600',
    description: 'Breathe new life into your existing space. Whether it is an old apartment or a dated villa, our renovation specialists ensure structural integrity while delivering a complete aesthetic overhaul.',
    process: [
      { title: 'Structural Audit', desc: 'Verification of existing walls, pipes, and beams.' },
      { title: 'Design Revamp', desc: 'Modernizing the space with contemporary designs.' },
      { title: 'Demolition & Rebuild', desc: 'Controlled civil work and fresh construction.' },
      { title: 'Finishing', desc: 'Complete renewal of surfaces, floors, and ceilings.' },
    ],
    features: [
      'Structural safety checks',
      'Dampness & leakage repair',
      'Complete floor replacement',
      'Modern electrical rewiring',
      'Wall removal for open layouts',
      'High-performance plumbing'
    ],
    benefits: [
      { icon: <Layout />, label: 'Value Appreciation', desc: 'Significantly increase your property value.' },
      { icon: <Settings />, label: 'Modern Infrastructure', desc: 'Replace old tech with energy efficient ones.' },
      { icon: <Award />, label: 'Fresh Identity', desc: 'Transforming memories into modern living.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&q=80&w=800'
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = serviceData[id || ''] || serviceData['modular-kitchens'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg via-secondary-bg/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-20">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link 
                to="/services" 
                className={cn(
                  "inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs mb-6 hover:gap-4 transition-all",
                  (id === 'custom-wardrobes' || id === 'turnkey-interiors') ? "text-white" : "text-accent"
                )}
              >
                <ArrowLeft size={16} /> Back to Services
              </Link>
              <h1 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter mb-4">{service.title}</h1>
              <p className="text-xl text-white/60 max-w-2xl leading-relaxed">{service.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <Section noPadding className="bg-primary-bg pt-10 md:pt-16 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* Core Features */}
            <div className="bg-white p-10 md:p-16 rounded-[40px] smooth-shadow border border-text-dark/5">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 italic">Core Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {service.features.map((feature: string) => (
                  <div key={feature} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-lg font-medium text-text-dark/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Journey */}
            <div className="space-y-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold italic">The Journey</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.process.map((step: any, idx: number) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="p-8 bg-white rounded-3xl border border-text-dark/5 hover:border-accent transition-all group"
                  >
                    <div className="text-4xl font-display font-black text-text-dark/5 group-hover:text-accent/10 transition-colors mb-4 italic">0{idx + 1}</div>
                    <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                    <p className="text-text-dark/50 leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Sticky Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="bg-secondary-bg text-white p-10 rounded-[40px] sticky top-24 shadow-2xl">
              <h3 className="text-3xl font-display font-bold mb-6">Request a Quote</h3>
              <p className="text-white/60 mb-10 leading-relaxed italic">
                Interested in {service.title}? Speak to our specialized consultant for a customized estimate.
              </p>
              <div className="space-y-4 mb-10">
                {service.benefits.map((benefit: any) => (
                  <div key={benefit.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <div className="font-bold text-sm tracking-tight">{benefit.label}</div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest">{benefit.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/consultation"
                className="w-full bg-accent hover:bg-accent-hover text-white py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                Quick Inquiry <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Gallery */}
      <Section noPadding className="bg-primary-bg pt-12 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {service.galleryImages.length === 2 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[350px]">
              {service.galleryImages.map((img: string, i: number) => (
                <div key={i} className="rounded-[40px] overflow-hidden smooth-shadow relative group">
                  <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={`Gallery ${i + 1}`} />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[320px]">
              <div className="rounded-[40px] overflow-hidden smooth-shadow relative group">
                <img src={service.galleryImages[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery 1" />
              </div>
              <div className="grid grid-rows-2 gap-8 h-full">
                <div className="rounded-[40px] overflow-hidden smooth-shadow relative group">
                  <img src={service.galleryImages[1]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery 2" />
                </div>
                <div className="rounded-[40px] overflow-hidden smooth-shadow relative group">
                  <img src={service.galleryImages[2]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery 3" />
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Other Services */}
      <Section className="bg-white border-y border-text-dark/5 pt-10 md:pt-16 pb-12 md:pb-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-display font-bold italic">Other Services</h2>
          <Link to="/services" className="text-accent font-bold hover:gap-2 transition-all flex items-center gap-1">
            View All <ChevronRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {primaryServices.filter(s => s.id !== id).slice(0, 3).map(s => (
            <Link key={s.id} to={`/services/${s.id}`} className="p-8 bg-primary-bg rounded-3xl border border-text-dark/5 hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h4 className="text-xl font-bold mb-2">{s.title}</h4>
              <p className="text-text-dark/40 text-xs line-clamp-2">{s.shortDesc}</p>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
