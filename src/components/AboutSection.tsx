
import React from 'react';
import { Heart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutSection: React.FC = () => {
  const bounty = "3,000,000,000";
  
  return (
    <section id="about" className="py-20 px-4 bg-parchment/50">
      <div className="container mx-auto">
        <h2 className="section-heading mb-12">WANTED</h2>
        
        <div className="wanted-poster max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-5xl md:text-7xl font-bold text-navy block mb-2">DEAD OR ALIVE</span>
            <div className="flex justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i}
                  className={cn(
                    "h-8 w-8 text-gold animate-bounce-light",
                    { "animation-delay-100": i === 1 },
                    { "animation-delay-200": i === 2 },
                    { "animation-delay-300": i === 3 },
                    { "animation-delay-400": i === 4 },
                  )}
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${2 + i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img 
                src="https://i.imgur.com/q0NaPdp.png"
                alt="Profile"
                className="w-full h-auto rounded-lg border-4 border-navy shadow-lg"
              />
            </div>
            
            <div className="w-full md:w-2/3">
              <h3 className="text-4xl font-bold text-navy mb-2">Monkey D. Luffy</h3>
              <p className="text-xl font-semibold text-strawhat mb-6">
                "Straw Hat" Luffy • Captain of the Straw Hat Pirates
              </p>
              
              <p className="text-lg mb-4">
                I'm a pirate with a dream to become the King of the Pirates! I ate the Gum-Gum Fruit, which turned my body into rubber. My greatest strength is never giving up on my friends and my dreams!
              </p>
              
              <p className="text-lg mb-4">
                I believe that being a pirate means being free to chase your dreams across the vast blue seas. My crew is my family, and together we're sailing through the Grand Line in search of the legendary One Piece treasure.
              </p>
              
              <p className="text-lg flex items-center gap-2">
                <Heart className="h-6 w-6 text-strawhat" fill="#ea384c" />
                My favorite things are meat, adventures, and my straw hat!
              </p>
              
              <div className="mt-8 bg-navy/10 p-4 rounded-lg border border-navy/20">
                <div className="text-center">
                  <span className="block text-sm uppercase font-bold tracking-wider text-navy/70">Bounty</span>
                  <span className="text-3xl md:text-4xl font-bold text-navy">
                    {bounty} <span className="text-xl">Berries</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
