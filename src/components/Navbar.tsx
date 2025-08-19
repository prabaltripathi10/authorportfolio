import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
// You no longer need to import Link from react-router-dom for this component
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const amazonLink = "https://www.amazon.in/Midnight-Garden-Novel-Elaine-Roth/dp/1662513038";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="font-display text-xl font-bold text-primary">
            Sarah Mitchell
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-smooth">Home</button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-smooth">About</button>
            <button onClick={() => scrollToSection("books")} className="text-foreground hover:text-primary transition-smooth">Books</button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-smooth">Contact</button>
            
            {/* CORRECTED: Use <a> for external links */}
            <a href={amazonLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" className="ml-4">
                Buy Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 text-foreground hover:text-primary transition-smooth">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("home")} className="text-left text-foreground hover:text-primary transition-smooth">Home</button>
              <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-primary transition-smooth">About</button>
              <button onClick={() => scrollToSection("books")} className="text-left text-foreground hover:text-primary transition-smooth">Books</button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-foreground hover:text-primary transition-smooth">Contact</button>
              
              {/* CORRECTED: Use <a> for external links and ensure consistency */}
              <a href={amazonLink} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" className="w-fit">
                  Buy Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;