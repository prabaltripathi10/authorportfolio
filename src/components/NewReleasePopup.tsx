import { useState, useEffect } from "react";
import { X, Book, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewReleasePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    });

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const scrollToBooks = () => {
    const element = document.getElementById('books');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-lg shadow-glow border border-primary/20 max-w-md mx-4">
        <div className="p-4 flex items-center gap-3">
          {/* Book Icon */}
          <div className="bg-primary-foreground/20 rounded-full p-2 flex-shrink-0">
            <Book className="w-5 h-5" />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm mb-1">
              🎉 New Release Available!
            </h3>
            <p className="text-xs opacity-90 leading-relaxed">
              "The Midnight Garden" is now available. Get your copy today!
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="secondary"
              size="sm"
              onClick={scrollToBooks}
              className="text-xs px-3 py-1 h-auto bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-primary-foreground/30"
            >
              <span>View</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
            
            <button
              onClick={handleClose}
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors p-1"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReleasePopup;