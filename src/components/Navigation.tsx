import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-gradient">Sanjay Chavan</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-sm font-semibold hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-sm font-semibold hover:text-primary transition-colors">
              Work
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-sm font-semibold hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-sm font-semibold hover:text-primary transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-semibold hover:text-primary transition-colors">
              Contact
            </button>
            <a href="/Sanjay_Chavan_Resume.pdf" download>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 font-bold">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection("about")} className="block text-sm font-semibold hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("experience")} className="block text-sm font-semibold hover:text-primary transition-colors">
              Work
            </button>
            <button onClick={() => scrollToSection("projects")} className="block text-sm font-semibold hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="block text-sm font-semibold hover:text-primary transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("contact")} className="block text-sm font-semibold hover:text-primary transition-colors">
              Contact
            </button>
            <a href="/Sanjay_Chavan_Resume.pdf" download className="block">
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 font-bold">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
