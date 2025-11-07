import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      
      {/* Other sections with starry background */}
      <div className="relative">
        <div className="fixed inset-0 z-0 pointer-events-none" style={{ top: '100vh' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95"></div>
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </div>

      <style>{`
        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }

        .stars {
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: ${Array.from({ length: 700 }, () => {
            const x = Math.floor(Math.random() * 2000);
            const y = Math.floor(Math.random() * 2000);
            return `${x}px ${y}px #FFF`;
          }).join(', ')};
          animation: animStar 50s linear infinite;
        }

        .stars::after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: ${Array.from({ length: 700 }, () => {
            const x = Math.floor(Math.random() * 2000);
            const y = Math.floor(Math.random() * 2000);
            return `${x}px ${y}px #FFF`;
          }).join(', ')};
        }

        .stars2 {
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${Array.from({ length: 200 }, () => {
            const x = Math.floor(Math.random() * 2000);
            const y = Math.floor(Math.random() * 2000);
            return `${x}px ${y}px #FFF`;
          }).join(', ')};
          animation: animStar 100s linear infinite;
        }

        .stars2::after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${Array.from({ length: 200 }, () => {
            const x = Math.floor(Math.random() * 2000);
            const y = Math.floor(Math.random() * 2000);
            return `${x}px ${y}px #FFF`;
          }).join(', ')};
        }

        .stars3 {
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: ${Array.from({ length: 100 }, () => {
            const x = Math.floor(Math.random() * 2000);
            const y = Math.floor(Math.random() * 2000);
            return `${x}px ${y}px #FFF`;
          }).join(', ')};
          animation: animStar 150s linear infinite;
        }

        .stars3::after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: ${Array.from({ length: 100 }, () => {
            const x = Math.floor(Math.random() * 2000);
            const y = Math.floor(Math.random() * 2000);
            return `${x}px ${y}px #FFF`;
          }).join(', ')};
        }
      `}</style>
    </div>
  );
};

export default Index;
