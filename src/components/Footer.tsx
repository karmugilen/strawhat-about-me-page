
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold">StrawHat Pirate</h3>
            <p className="text-white/70">Sailing toward the dream of becoming Pirate King</p>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="flex items-center gap-2">
              Made with 
              <Heart className="h-4 w-4 text-strawhat" fill="#ea384c" /> 
              in the East Blue
            </p>
            <p className="text-white/70 text-sm mt-2">© {new Date().getFullYear()} Straw Hat Pirates</p>
          </div>
          
          <div>
            <ul className="flex gap-6">
              <li><a href="#about" className="hover:text-strawhat transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-strawhat transition-colors">Skills</a></li>
              <li><a href="#journey" className="hover:text-strawhat transition-colors">Journey</a></li>
              <li><a href="#contact" className="hover:text-strawhat transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
