
import React from 'react';
import { Mail, MessageSquare, Github, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-ocean text-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-white mb-12">Send a Message</h2>
        <p className="text-lg text-white/90 max-w-3xl mb-12">
          Want to join my crew or just have a chat? Send me a message through this Den Den Mushi (transponder snail) or find me on the Grand Line!
        </p>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <div className="den-den-mushi">
              <h3 className="text-2xl font-bold mb-4">Send a Letter in a Bottle</h3>
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium">Your Name</label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      className="bg-white/90 border-gold/50 placeholder:text-navy/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Your Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-white/90 border-gold/50 placeholder:text-navy/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium">Your Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="What do you want to tell me?" 
                      rows={5}
                      className="bg-white/90 border-gold/50 placeholder:text-navy/50"
                    />
                  </div>
                  <Button className="w-full bg-gold hover:bg-amber-600 text-white font-bold">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="h-full flex flex-col justify-between">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Find Me On The Grand Line</h3>
                <p className="mb-6">
                  I'm usually sailing with my crew on the Thousand Sunny, but you can also reach me through these methods:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-gold" />
                    <span>luffy@strawhatpirates.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-gold" />
                    <span>Den Den Mushi: +1-PIRATE-KING</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Join Me On Social Networks</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
