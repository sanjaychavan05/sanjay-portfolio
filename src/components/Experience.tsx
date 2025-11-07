import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import campusConnectLogo from "@/assets/campus-connect-logo.jpg";
import deloitteLogo from "@/assets/deloitte-logo.jpg";
import jpmorganLogo from "@/assets/jpmorgan-logo.jpg";

const experiences = [
  {
    company: "GlowLogics Solutions & LetsUpgrade",
    logo: campusConnectLogo,
    role: "Campus Ambassador",
    period: "Jan 2025 - Present",
    location: "Belagavi, India",
    responsibilities: [
      "Promoted tech initiatives and organized campus events for both companies.",
      "Fostered a collaborative tech community and engaged students in learning programs."
    ]
  },
  {
    company: "Deloitte Australia",
    logo: deloitteLogo,
    role: "Data Analytics Virtual Intern",
    period: "Oct 2025",
    location: "Remote",
    responsibilities: [
      "Developed Tableau dashboards and performed business data analysis."
    ]
  },
  {
    company: "JPMorgan Chase & Co.",
    logo: jpmorganLogo,
    role: "Software Engineer Virtual Intern",
    period: "Oct 2025",
    location: "Remote",
    responsibilities: [
      "Worked on Kafka integration, REST API design, and backend development best practices."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground font-semibold mb-2">WHAT I HAVE DONE SO FAR</p>
          <h2 className="text-5xl md:text-7xl font-black">Work Experience.</h2>
        </motion.div>

        <div className="max-w-7xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 hidden md:block rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 md:mb-24"
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className={`${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:col-start-2'}`}>
                  <div className="card-gradient p-8 rounded-2xl hover:bg-card/80 transition-all duration-300 group">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-black mb-2 group-hover:text-gradient transition-all">{exp.role}</h3>
                        <p className="text-lg text-primary font-semibold mb-1">{exp.company}</p>
                      </div>
                      <div className="text-right min-w-[140px]">
                        <p className="text-sm font-medium text-muted-foreground mb-1">{exp.period}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1 flex-shrink-0">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Company Logo - Center */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary border-4 border-foreground/20 glow-primary overflow-hidden shadow-2xl rounded-full">
                    <img 
                      src={exp.logo} 
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
