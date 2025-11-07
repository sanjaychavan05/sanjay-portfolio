import { motion } from "framer-motion";
import heroImage from "@/assets/hero-workspace.jpg";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0a0a1f] via-[#1a0a2e] to-[#0a0a1f] z-10">
      {/* Background with PC image */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-bold text-lg mb-4"
            >
              Hi, I'm
            </motion.p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="block text-gradient">Sanjay Chavan</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-8 text-foreground/90">
              Full Stack Developer | Machine Learning Enthusiast
            </p>
            <div className="flex gap-6 justify-center mb-8 flex-wrap">
              <motion.a
                href="https://github.com/sanjaychavan05"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm border-2 border-foreground/20 hover:border-primary flex items-center justify-center text-foreground hover:text-primary transition-all"
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sanjay-prakash-chavan-7105082ab"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm border-2 border-foreground/20 hover:border-primary flex items-center justify-center text-foreground hover:text-primary transition-all"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                href="mailto:sanjaychavan487652@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm border-2 border-foreground/20 hover:border-primary flex items-center justify-center text-foreground hover:text-primary transition-all"
              >
                <Mail size={28} />
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
