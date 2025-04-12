
import React from 'react';
import { Swords, Navigation, Users, ShieldAlert, Brain, Heart } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skills = [
    {
      name: "Combat",
      icon: <Swords className="h-8 w-8 mb-4 text-white" />,
      description: "Expert in hand-to-hand combat using my rubber Devil Fruit powers",
      colorClass: "from-red-500 to-red-700",
    },
    {
      name: "Navigation",
      icon: <Navigation className="h-8 w-8 mb-4 text-white" />,
      description: "Finding my way through the Grand Line with my trusted navigator",
      colorClass: "from-blue-500 to-blue-700",
    },
    {
      name: "Leadership",
      icon: <Users className="h-8 w-8 mb-4 text-white" />,
      description: "Inspiring and leading my crew through countless adventures",
      colorClass: "from-yellow-500 to-yellow-700",
    },
    {
      name: "Willpower",
      icon: <ShieldAlert className="h-8 w-8 mb-4 text-white" />,
      description: "Unwavering determination and Conqueror's Haki",
      colorClass: "from-purple-500 to-purple-700",
    },
    {
      name: "Adaptability",
      icon: <Brain className="h-8 w-8 mb-4 text-white" />,
      description: "Quick thinking and creative problem solving in any situation",
      colorClass: "from-green-500 to-green-700",
    },
    {
      name: "Empathy",
      icon: <Heart className="h-8 w-8 mb-4 text-white" />,
      description: "Understanding and connecting with people from all backgrounds",
      colorClass: "from-pink-500 to-pink-700",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-navy">
      <div className="container mx-auto">
        <h2 className="section-heading text-white mb-12">Devil Fruit Powers</h2>
        <p className="text-lg text-white/80 max-w-3xl mb-12">
          These are my abilities as captain of the Straw Hat Pirates. My Gum-Gum Fruit powers and indomitable spirit have helped me overcome countless challenges!
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`devil-fruit bg-gradient-to-br ${skill.colorClass} p-6 text-center`}
            >
              <div className="flex flex-col items-center justify-center h-full">
                {skill.icon}
                <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-white/90">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
