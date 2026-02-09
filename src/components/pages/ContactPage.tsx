import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-primary text-secondary">
      <Header />
      
      <section className="pt-32 pb-24 bg-primary border-b border-secondary/10">
        <div className="max-w-[120rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-6xl md:text-8xl text-secondary mb-6">
              GET IN <span className="text-accentcyan">TOUCH</span>
            </h1>
            <p className="font-paragraph text-lg text-secondary/60 max-w-2xl">
              Have questions or want to join our collective? We're always interested in curious minds.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-4 md:px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-5xl text-secondary mb-12">
                CONTACT INFO
              </h2>
              
              <div className="space-y-12 mb-16">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-secondary/10 border border-accentcyan rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accentcyan" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-secondary mb-2 uppercase tracking-wide">Email</h3>
                    <p className="font-paragraph text-base text-secondary/60">
                      contact@superquantclub.edu
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-secondary/10 border border-accentcyan rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accentcyan" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-secondary mb-2 uppercase tracking-wide">Phone</h3>
                    <p className="font-paragraph text-base text-secondary/60">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-secondary/10 border border-accentcyan rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accentcyan" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-secondary mb-2 uppercase tracking-wide">Location</h3>
                    <p className="font-paragraph text-base text-secondary/60">
                      Student Center, Room 301<br />
                      NIT Jalandhar Campus
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/5 border border-secondary/10 p-8">
                <h3 className="font-heading text-2xl text-secondary mb-6 uppercase tracking-wide">
                  Office Hours
                </h3>
                <div className="space-y-3 font-paragraph text-base text-secondary/60">
                  <p>Monday - Friday: 2:00 PM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-secondary/5 border border-secondary/10 p-12">
                <h2 className="font-heading text-3xl text-secondary mb-8 uppercase tracking-wide">
                  Send Message
                </h2>
                
                {submitSuccess && (
                  <div className="bg-accentcyan/10 border border-accentcyan text-secondary p-4 rounded-sm mb-6">
                    <p className="font-paragraph text-base">
                      Thank you for reaching out. We'll be in touch soon.
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-paragraph text-sm text-secondary/70 mb-3 uppercase tracking-wide">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary border border-secondary/20 text-secondary placeholder:text-secondary/40 rounded-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-paragraph text-sm text-secondary/70 mb-3 uppercase tracking-wide">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary border border-secondary/20 text-secondary placeholder:text-secondary/40 rounded-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block font-paragraph text-sm text-secondary/70 mb-3 uppercase tracking-wide">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary border border-secondary/20 text-secondary placeholder:text-secondary/40 rounded-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-paragraph text-sm text-secondary/70 mb-3 uppercase tracking-wide">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-primary border border-secondary/20 text-secondary placeholder:text-secondary/40 rounded-sm"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accentcyan text-primary hover:bg-white font-heading text-base py-4 rounded-sm uppercase tracking-wide font-bold transition-colors"
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND'}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
