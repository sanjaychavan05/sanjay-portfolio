import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-gradient mb-2">Sanjay Prakash Chavan</h3>
            <p className="text-sm text-muted-foreground">Full Stack Developer | Machine Learning Enthusiast</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/sanjaychavan05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:scale-110 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/sanjay-prakash-chavan-7105082ab"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:sanjaychavan487652@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:scale-110 transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by Sanjay Chavan © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
