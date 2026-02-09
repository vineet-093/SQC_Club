import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="max-w-[120rem] mx-auto px-8 py-6 flex justify-between items-center">
        <Link to="/" className="font-heading text-xl text-primaryForeground tracking-wider">
          SUPER QUANT CODERS
        </Link>
        
        <nav className="flex gap-8">
          <Link 
            to="/" 
            className={`font-paragraph text-base transition-colors ${
              isActive('/') 
                ? 'text-accentcyan' 
                : 'text-primaryForeground hover:text-accentcyan'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/members" 
            className={`font-paragraph text-base transition-colors ${
              isActive('/members') 
                ? 'text-accentcyan' 
                : 'text-primaryForeground hover:text-accentcyan'
            }`}
          >
            Members
          </Link>
          <Link 
            to="/activities" 
            className={`font-paragraph text-base transition-colors ${
              isActive('/activities') 
                ? 'text-accentcyan' 
                : 'text-primaryForeground hover:text-accentcyan'
            }`}
          >
            Activities
          </Link>
          <Link 
            to="/achievements" 
            className={`font-paragraph text-base transition-colors ${
              isActive('/achievements') 
                ? 'text-accentcyan' 
                : 'text-primaryForeground hover:text-accentcyan'
            }`}
          >
            Achievements
          </Link>
          <Link 
            to="/contact" 
            className={`font-paragraph text-base transition-colors ${
              isActive('/contact') 
                ? 'text-accentcyan' 
                : 'text-primaryForeground hover:text-accentcyan'
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
