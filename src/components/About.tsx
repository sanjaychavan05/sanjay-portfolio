import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.E. in Computer Science",
    institution: "Angadi Institute of Technology & Management",
    period: "2022 - 2026",
    cgpa: "CGPA: 7.13"
  },
  {
    degree: "PCMB",
    institution: "KLE Independent PU College, Hangal",
    period: "2020 - 2022",
    cgpa: ""
  },
  {
    degree: "10th Standard",
    institution: "Jawahar Navodaya Vidyalaya",
    period: "2014 - 2020",
    cgpa: ""
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground font-semibold mb-2">INTRODUCTION</p>
          <h2 className="text-5xl md:text-7xl font-black mb-6">About Me.</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Computer Science Engineering student with hands-on experience in Full Stack Development, 
            Machine Learning, and AI automation. Completed virtual internships with JPMorgan Chase and Deloitte. 
            Oracle Cloud Infrastructure AI Foundations Certified. Passionate about building scalable software 
            solutions and solving real-world problems through code.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
