
import React from 'react';
import { Ship, Map, Compass } from 'lucide-react';

const JourneySection: React.FC = () => {
  const journeyItems = [
    {
      year: "Age 7",
      title: "Met Red-Haired Shanks",
      description: "Shanks saved my life and gave me his straw hat, inspiring me to become a great pirate.",
      icon: <Ship className="h-6 w-6 text-gold" />,
    },
    {
      year: "Age 17",
      title: "Started My Journey",
      description: "Left Foosha Village in a small boat to gather my crew and find the One Piece.",
      icon: <Map className="h-6 w-6 text-gold" />,
    },
    {
      year: "Age 17",
      title: "Formed the Straw Hat Pirates",
      description: "Met Zoro, Nami, Usopp, Sanji and began my adventure in the East Blue.",
      icon: <Compass className="h-6 w-6 text-gold" />,
    },
    {
      year: "Age 17",
      title: "Entered the Grand Line",
      description: "Crossed the Reverse Mountain and began the true journey toward becoming Pirate King.",
      icon: <Ship className="h-6 w-6 text-gold" />,
    },
    {
      year: "Age 19",
      title: "Two Years of Training",
      description: "Trained with Rayleigh to master Haki and become stronger for my crew.",
      icon: <Compass className="h-6 w-6 text-gold" />,
    },
    {
      year: "Present",
      title: "Heading to Laugh Tale",
      description: "Continuing my adventure to find the One Piece and become the Pirate King!",
      icon: <Map className="h-6 w-6 text-gold" />,
    }
  ];

  return (
    <section id="journey" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading mb-12">My Voyage</h2>
        <p className="text-lg text-navy/80 max-w-3xl mb-12">
          My journey on the Grand Line has been full of adventures, challenges, and unforgettable memories. Here's how I've sailed through life so far!
        </p>
        
        <div className="relative">
          {/* Journey Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gold/50"></div>
          
          {/* Journey Items */}
          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1 z-10">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-12 py-4">
                  <div className="pirate-log bg-white p-6 rounded-lg shadow-md">
                    <span className="text-gold font-bold">{item.year}</span>
                    <h3 className="text-2xl font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-navy/80">{item.description}</p>
                  </div>
                </div>
                
                {/* Empty Space for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
