import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primaryForeground">
      <div className="max-w-[120rem] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl mb-4 text-accentcyan">SUPER QUANT CODERS</h3>
            <p className="font-paragraph text-base text-primaryForeground/80">
              Empowering students through quantitative analysis, algorithmic trading, and cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2 font-paragraph text-base">
              <li><a href="/" className="text-primaryForeground/80 hover:text-accentcyan transition-colors">Home</a></li>
              <li><a href="/members" className="text-primaryForeground/80 hover:text-accentcyan transition-colors">Members</a></li>
              <li><a href="/activities" className="text-primaryForeground/80 hover:text-accentcyan transition-colors">Activities</a></li>
              <li><a href="/achievements" className="text-primaryForeground/80 hover:text-accentcyan transition-colors">Achievements</a></li>
              <li><a href="/contact" className="text-primaryForeground/80 hover:text-accentcyan transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-xl mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-accentcyan flex items-center justify-center hover:bg-accentcyan/80 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-accentcyan flex items-center justify-center hover:bg-accentcyan/80 transition-colors">
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-accentcyan flex items-center justify-center hover:bg-accentcyan/80 transition-colors">
                <Instagram className="w-6 h-6 text-primary" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-accentcyan flex items-center justify-center hover:bg-accentcyan/80 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primaryForeground/20 mt-12 pt-8 text-center">
          <p className="font-paragraph text-sm text-primaryForeground/60">
            © {new Date().getFullYear()} Super Quant Coders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
