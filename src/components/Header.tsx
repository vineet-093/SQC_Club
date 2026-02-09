import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-secondary/10">
      <div className="max-w-[120rem] mx-auto px-8 py-5 flex justify-between items-center">
        <Link to="/" className="font-heading text-lg text-secondary tracking-widest font-bold">
          SQC
        </Link>
        
        <nav className="hidden md:flex gap-12">
          <Link 
            to="/" 
            className={`font-paragraph text-sm uppercase tracking-wide transition-colors ${
              isActive('/') 
                ? 'text-accentcyan' 
                : 'text-secondary/70 hover:text-accentcyan'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/members" 
            className={`font-paragraph text-sm uppercase tracking-wide transition-colors ${
              isActive('/members') 
                ? 'text-accentcyan' 
                : 'text-secondary/70 hover:text-accentcyan'
            }`}
          >
            Members
          </Link>
          <Link 
            to="/activities" 
            className={`font-paragraph text-sm uppercase tracking-wide transition-colors ${
              isActive('/activities') 
                ? 'text-accentcyan' 
                : 'text-secondary/70 hover:text-accentcyan'
            }`}
          >
            Activities
          </Link>
          <Link 
            to="/achievements" 
            className={`font-paragraph text-sm uppercase tracking-wide transition-colors ${
              isActive('/achievements') 
                ? 'text-accentcyan' 
                : 'text-secondary/70 hover:text-accentcyan'
            }`}
          >
            Achievements
          </Link>
          <Link 
            to="/contact" 
            className={`font-paragraph text-sm uppercase tracking-wide transition-colors ${
              isActive('/contact') 
                ? 'text-accentcyan' 
                : 'text-secondary/70 hover:text-accentcyan'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
          <div className="w-full h-px bg-secondary" />
          <div className="w-full h-px bg-secondary" />
          <div className="w-full h-px bg-secondary" />
        </button>
      </div>
    </header>
  );
}
