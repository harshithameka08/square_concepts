import { motion } from 'motion/react';
import Section from '@/src/components/Section';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, MessageSquare } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow letters and spaces
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setName(val);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const val = e.target.value.replace(/[^0-9]/g, '');
    setPhone(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1600"
          alt="Contact Hero"
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
            Contact Us
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
          >
            Let's Start a <br /> Conversation.
          </motion.h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-6">
            Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
          </p>
          <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </section>

      <Section className="bg-primary-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
           {/* Form Column */}
           <div className="bg-white p-10 rounded-[32px] smooth-shadow border border-text-dark/5">
              <h2 className="text-3xl font-display font-bold mb-8">Send Us a Message</h2>
              
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/5 p-12 rounded-2xl text-center flex flex-col items-center"
                >
                   <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mb-6">
                      <Send size={24} />
                   </div>
                   <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                   <p className="text-text-dark/60">We'll get back to you within 24 hours.</p>
                   <button 
                     onClick={() => setFormState('idle')}
                     className="mt-8 text-accent font-bold hover:underline"
                   >
                     Send another message
                   </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm font-bold uppercase tracking-widest text-text-dark/40" htmlFor="name">Full Name</label>
                         <input required id="name" type="text" placeholder="John Doe" value={name} onChange={handleNameChange} className="w-full px-6 py-4 bg-primary-bg rounded-xl border border-text-dark/5 focus:border-accent outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold uppercase tracking-widest text-text-dark/40" htmlFor="phone">Phone Number</label>
                         <input required id="phone" type="tel" placeholder="9010106877" value={phone} onChange={handlePhoneChange} className="w-full px-6 py-4 bg-primary-bg rounded-xl border border-text-dark/5 focus:border-accent outline-none transition-all" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-text-dark/40" htmlFor="email">Email Address</label>
                      <input required id="email" type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-primary-bg rounded-xl border border-text-dark/5 focus:border-accent outline-none transition-all" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-text-dark/40" htmlFor="service">Interested Service</label>
                      <select id="service" className="w-full px-6 py-4 bg-primary-bg rounded-xl border border-text-dark/5 focus:border-accent outline-none transition-all appearance-none text-text-dark/60" required>
                         <option value="" disabled selected>Select a service...</option>
                         <option>Full Home Interior</option>
                         <option>Modular Kitchen</option>
                         <option>Living Room Makeover</option>
                         <option>Office Space Design</option>
                      </select>
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-text-dark/40" htmlFor="message">Your Message</label>
                      <textarea required id="message" rows={4} placeholder="Tell us about your space..." className="w-full px-6 py-4 bg-primary-bg rounded-xl border border-text-dark/5 focus:border-accent outline-none transition-all resize-none"></textarea>
                   </div>
                   <button 
                     disabled={formState === 'submitting'}
                     className="w-full bg-accent hover:bg-accent-hover text-white py-5 rounded-xl font-bold text-lg transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-2 group"
                   >
                     {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                     <Send size={20} className={cn("transition-transform", formState !== 'submitting' && "group-hover:translate-x-1 group-hover:-translate-y-1")} />
                   </button>
                </form>
              )}
           </div>

           {/* Info Column */}
           <div className="lg:py-10 space-y-12">
              <div>
                 <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                 <div className="space-y-6">
                    <a href="tel:+919010106877" className="flex items-center gap-6 group">
                       <div className="w-14 h-14 rounded-2xl bg-white smooth-shadow flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                          <Phone size={24} />
                       </div>
                       <div>
                          <div className="text-text-dark/40 text-xs font-bold uppercase tracking-widest mb-1">Call Us</div>
                          <div className="text-xl font-bold">+91 9010106877</div>
                       </div>
                    </a>
                    <a href="mailto:Squareconcepts6877@gmail.com" className="flex items-center gap-6 group">
                       <div className="w-14 h-14 rounded-2xl bg-white smooth-shadow flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                          <Mail size={24} />
                       </div>
                       <div>
                          <div className="text-text-dark/40 text-xs font-bold uppercase tracking-widest mb-1">Email Us</div>
                          <div className="text-lg sm:text-xl font-bold break-all">Squareconcepts6877@gmail.com</div>
                       </div>
                    </a>
                    <div className="flex items-start gap-6 group">
                       <div className="w-14 h-14 rounded-2xl bg-white smooth-shadow flex items-center justify-center text-accent shrink-0">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <div className="text-text-dark/40 text-xs font-bold uppercase tracking-widest mb-1">Visit Studio</div>
                          <div className="text-[15px] sm:text-lg font-bold leading-relaxed">
                            Plot t no-1,2,19,20sy.No 61 57p,2nd floor<br/>
                            Madhapur Pride Pillar No-1722,<br/>
                            Madhapur,Hyderabad,Telangana 500081
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              <div>
                 <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                 <div className="flex gap-4">
                    {[
                      { icon: <Instagram size={24} />, name: 'Instagram' },
                      { icon: <Facebook size={24} />, name: 'Facebook' },
                      { icon: <Twitter size={24} />, name: 'Twitter' },
                    ].map((social) => (
                      <a key={social.name} href="#" className="w-14 h-14 rounded-full bg-white smooth-shadow flex items-center justify-center text-text-dark/40 hover:text-accent hover:bg-accent/5 transition-all">
                         {social.icon}
                      </a>
                    ))}
                 </div>
              </div>

              <div className="bg-secondary-bg p-8 rounded-3xl text-white">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                       <MessageSquare size={20} />
                    </div>
                    <h4 className="text-xl font-bold tracking-tight">Need help faster?</h4>
                 </div>
                 <p className="text-white/60 text-sm leading-relaxed mb-6">
                   Chat with our design consultant on WhatsApp for quick estimates and material advice.
                 </p>
                 <a href="#" className="inline-flex items-center gap-2 bg-white text-secondary-bg px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-accent hover:text-white transition-all">
                    WhatsApp Chat
                 </a>
              </div>
           </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <section className="w-full h-[500px] relative overflow-hidden">
         <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=2000" alt="Our Studio Location" className="w-full h-full object-cover grayscale opacity-60" />
         <div className="absolute inset-0 bg-secondary-bg/30" />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-3xl smooth-shadow flex flex-col items-center">
               <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white mb-4 animate-bounce shadow-xl shadow-accent/40">
                  <MapPin size={24} />
               </div>
               <div className="font-bold">SQUARE CONCEPTS</div>
               <div className="text-xs text-text-dark/40">Open: 10AM - 7PM</div>
            </div>
         </div>
      </section>
    </div>
  );
}
