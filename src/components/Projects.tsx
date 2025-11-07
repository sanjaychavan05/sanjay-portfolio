import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import resumeScreeningImg from "../assets/resume-screening-dashboard.jpg";

const projects = [
  {
    title: "GradNet - Alumni Association Platform",
    description: "Full-stack platform connecting 500+ students and alumni for mentorship and referral programs",
    tech: "Node.js, Express, EJS, PostgreSQL, JavaScript",
    github: "https://github.com/sanjaychavan05/GradNet",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  },
  {
    title: "Real-Time Website Safety Checker",
    description: "Browser extension for real-time phishing and malware detection with instant safety alerts",
    tech: "JavaScript, Google Safe Browsing API, Chrome Extension",
    github: "https://github.com/sanjaychavan05",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
  },
  {
    title: "Product Price Prediction",
    description: "Machine learning model for predicting product prices using advanced regression techniques and feature engineering. Achieved competitive accuracy scores in the national-level hackathon competition",
    tech: "Python, Scikit-learn, Pandas, Machine Learning",
    github: "https://github.com/sanjaychavan05",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    title: "Resume Screening Dashboard",
    description: "AI-powered talent matching system with resume relevance scoring and candidate analytics dashboard built for recruitment optimization",
    tech: "Python, Streamlit, AI/ML, SQLite",
    github: "https://github.com/sanjaychavan05/resume-dashboard-clean",
    image: resumeScreeningImg
  },
  {
    title: "Driver Drowsiness Detection",
    description: "Real-time drowsiness detection system using eye aspect ratio (EAR) from facial landmarks. Triggers audio alerts to enhance road safety",
    tech: "Python, OpenCV, dlib, pygame, scipy",
    github: "https://github.com/sanjaychavan05/DriverDrowsinessDetection",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
  }
];

const Projects = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground font-semibold mb-2">MY WORK</p>
          <h2 className="text-5xl md:text-7xl font-black mb-6">Projects.</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Following projects showcases my skills and experience through real-world examples of my work. 
            Each project reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative h-[420px] perspective-1000"
              onMouseEnter={() => setFlipped(index)}
              onMouseLeave={() => setFlipped(null)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  flipped === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden border-2 border-border shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-black mb-3 text-white drop-shadow-lg">{project.title}</h3>
                    <p className="text-sm text-primary font-bold bg-background/50 px-3 py-1 rounded-full inline-block">{project.tech}</p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 card-gradient rounded-3xl border-2 border-primary p-8 flex flex-col justify-between shadow-2xl">
                  <div>
                    <h3 className="text-2xl font-black mb-5 text-gradient">{project.title}</h3>
                    <p className="text-base text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.split(', ').map((tech, i) => (
                        <span key={i} className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary hover:bg-primary transition-all text-sm font-bold"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-secondary hover:bg-secondary transition-all text-sm font-bold"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Projects;
