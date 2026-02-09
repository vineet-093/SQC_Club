import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary border-t border-secondary/10">
      <div className="max-w-[120rem] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div>
            <h3 className="font-heading text-lg text-accentcyan mb-6 uppercase tracking-wide">SUPER QUANT CLUB</h3>
            <p className="font-paragraph text-sm text-secondary/60 leading-relaxed">
              A research collective for the intellectually curious. Where quantitative thinking meets innovation.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wide text-secondary mb-6">Navigation</h4>
            <ul className="space-y-3 font-paragraph text-sm">
              <li><Link to="/" className="text-secondary/60 hover:text-accentcyan transition-colors">Home</Link></li>
              <li><Link to="/members" className="text-secondary/60 hover:text-accentcyan transition-colors">Members</Link></li>
              <li><Link to="/activities" className="text-secondary/60 hover:text-accentcyan transition-colors">Activities</Link></li>
              <li><Link to="/achievements" className="text-secondary/60 hover:text-accentcyan transition-colors">Achievements</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-wide text-secondary mb-6">Resources</h4>
            <ul className="space-y-3 font-paragraph text-sm">
              <li><Link to="/contact" className="text-secondary/60 hover:text-accentcyan transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="text-secondary/60 hover:text-accentcyan transition-colors">Apply</Link></li>
              <li><Link to="/activities" className="text-secondary/60 hover:text-accentcyan transition-colors">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wide text-secondary mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-secondary/10 hover:bg-accentcyan hover:text-primary flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-secondary/10 hover:bg-accentcyan hover:text-primary flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-secondary/10 hover:bg-accentcyan hover:text-primary flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:contact@superquantclub.com" className="w-10 h-10 rounded-sm bg-secondary/10 hover:bg-accentcyan hover:text-primary flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-xs text-secondary/50">
              © {new Date().getFullYear()} Super Quant Club. All rights reserved.
            </p>
            <div className="flex gap-8 font-paragraph text-xs text-secondary/50">
              <Link to="/contact" className="hover:text-accentcyan transition-colors">Privacy</Link>
              <Link to="/contact" className="hover:text-accentcyan transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
