import { motion, AnimatePresence } from 'motion/react';
import Section from '@/src/components/Section';
import { CheckCircle2, Star, Calendar, Shield, MapPin, DollarSign } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';

const benefits = [
  { icon: <Calendar size={24} />, title: 'Free Expert Advice', description: 'Get a 1-on-1 session with our senior designers.' },
  { icon: <Star size={24} />, title: '3D Preview Visualization', description: 'See your future space before you commit.' },
  { icon: <DollarSign size={24} />, title: 'Detailed Cost Estimate', description: 'Transparent pricing with no hidden surprises.' },
  { icon: <Shield size={24} />, title: 'Quality Guarantee', description: 'Only the finest materials and craftsmanship.' },
];

export default function Consultation() {
  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600"
          alt="Consultation Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-secondary-bg/70" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-bold uppercase tracking-widest text-sm mb-6"
          >
            Get Started
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
          >
            Book Your <span className="text-accent italic font-light">Free</span> <br /> Consultation.
          </motion.h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-6">
            Take the first step towards your dream home. Fill out the form below and our experts will reach out to schedule a meeting.
          </p>
          <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </section>

      <Section className="bg-primary-bg pt-10 md:pt-16 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
           {/* Form Column */}
           <div className="flex flex-col">
              <div className="bg-white p-10 rounded-[32px] smooth-shadow border border-text-dark/5 flex-grow">
                 {submitted ? (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="h-full flex flex-col items-center justify-center text-center py-20"
                   >
                     <div className="w-20 h-20 rounded-full bg-accent text-white flex items-center justify-center mb-8 shadow-2xl shadow-accent/20">
                        <CheckCircle2 size={40} />
                     </div>
                     <h2 className="text-4xl font-display font-bold mb-4 tracking-tight">Consultation Requested!</h2>
                     <p className="text-text-dark/60 text-lg mb-8 max-w-sm">
                       Thank you for reaching out. Our design expert will call you within 2-4 business hours to schedule your session.
                     </p>
                     <div className="flex gap-4">
                        <div className="px-4 py-2 bg-primary-bg rounded-lg text-xs font-bold uppercase tracking-widest text-text-dark/40">Reference: #SC-4921</div>
                     </div>
                   </motion.div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="flex items-center gap-4 mb-8">
                         <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all", formStep === 1 ? "bg-accent text-white" : "bg-accent/10 text-accent")}>1</div>
                         <div className="h-px w-8 bg-text-dark/10" />
                         <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all", formStep === 2 ? "bg-accent text-white" : "bg-text-dark/5 text-text-dark/20")}>2</div>
                      </div>

                      <AnimatePresence mode="wait">
                         {formStep === 1 ? (
                           <motion.div 
                             key="step1"
                             initial={{ opacity: 0, x: 20 }}
                             animate={{ opacity: 1, x: 0 }}
                             exit={{ opacity: 0, x: -20 }}
                             className="space-y-6"
                           >
                              <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
                              <div className="space-y-2">
                                 <label className="text-sm font-bold uppercase tracking-widest text-text-dark/40">Full Name</label>
                                 <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-primary-bg rounded-xl border border-text-dark/5 outline-none transition-all focus:border-accent" />
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-text-dark/40">Phone Number</label>
                                    <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full px-6 py-4 bg-primary-bg rounded-xl border border-text-dark/5 outline-none transition-all focus:border-accent" />
                                 </div>
                                 <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-text-dark/40">Email</label>
                                    <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-primary-bg rounded-xl border border-text-dark/5 outline-none transition-all focus:border-accent" />
                                 </div>
                              </div>
                              <button 
                                type="button"
                                onClick={() => setFormStep(2)}
                                className="w-full bg-accent text-white py-5 rounded-xl font-bold text-lg hover:bg-accent-hover transition-all mt-6"
                              >
                                Next Step
                              </button>
                           </motion.div>
                         ) : (
                           <motion.div 
                             key="step2"
                             initial={{ opacity: 0, x: 20 }}
                             animate={{ opacity: 1, x: 0 }}
                             exit={{ opacity: 0, x: -20 }}
                             className="space-y-6"
                           >
                              <h3 className="text-2xl font-bold mb-6">Project Requirements</h3>
                              <div className="space-y-2">
                                 <label className="text-sm font-bold uppercase tracking-widest text-text-dark/40">Property Type</label>
                                 <select className="w-full px-6 py-4 bg-primary-bg rounded-xl border border-text-dark/5 outline-none transition-all focus:border-accent appearance-none">
                                    <option>2BHK Apartment</option>
                                    <option>3BHK Apartment</option>
                                    <option>Villa/Bungalow</option>
                                    <option>Commercial/Office</option>
                                 </select>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-text-dark/40">Budget Range</label>
                                    <select className="w-full px-6 py-4 bg-primary-bg rounded-xl border border-text-dark/5 outline-none transition-all focus:border-accent appearance-none">
                                       <option>$5,000 - $10,000</option>
                                       <option>$10,000 - $25,000</option>
                                       <option>$25,000 - $50,000</option>
                                       <option>$50,000+</option>
                                    </select>
                                 </div>
                                 <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-text-dark/40">Timeline</label>
                                    <select className="w-full px-6 py-4 bg-primary-bg rounded-xl border border-text-dark/5 outline-none transition-all focus:border-accent appearance-none">
                                       <option>Immediately</option>
                                       <option>In 1-3 Months</option>
                                       <option>In 6+ Months</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="flex gap-4 mt-6">
                                 <button 
                                   type="button"
                                   onClick={() => setFormStep(1)}
                                   className="px-8 py-5 rounded-xl font-bold bg-primary-bg hover:bg-text-dark/5 transition-all"
                                 >
                                   Back
                                 </button>
                                 <button 
                                   type="submit"
                                   className="flex-grow bg-accent text-white py-5 rounded-xl font-bold text-lg hover:bg-accent-hover transition-all"
                                 >
                                   Book Consultation
                                 </button>
                              </div>
                           </motion.div>
                         )}
                      </AnimatePresence>
                   </form>
                 )}
              </div>
           </div>

           {/* Info Column */}
           <div className="flex flex-col gap-12">
              <div className="space-y-8">
                 <h2 className="text-4xl font-display font-bold leading-tight">Why Choose a Free Consultation?</h2>
                 <p className="text-text-dark/60 text-lg leading-relaxed">
                   Our consultation is more than just a sales call. It's an opportunity to discover the hidden potential of your space with professionals.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="flex gap-4">
                         <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center shrink-0">
                            {benefit.icon}
                         </div>
                         <div>
                            <h4 className="font-bold mb-1">{benefit.title}</h4>
                            <p className="text-text-dark/50 text-xs leading-relaxed">{benefit.description}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="mt-auto p-10 bg-secondary-bg rounded-[32px] text-white overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Star size={120} weight="fill" />
                 </div>
                 <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                       {[1, 2, 3, 4, 5].map((s) => (Star && <Star key={s} fill="#E57A2E" size={16} className="text-accent" />))}
                    </div>
                    <p className="text-xl font-medium italic mb-8 leading-relaxed">
                      "The initial consultation was eye-opening. They caught structural opportunities we hadn't even considered. Highly worth the time."
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">M</div>
                       <div>
                          <div className="font-bold">Michael Ross</div>
                          <div className="text-xs text-white/40">Villa Owner, New Jersey</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </Section>
    </div>
  );
}
