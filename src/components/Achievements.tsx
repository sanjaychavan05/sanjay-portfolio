import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground font-semibold mb-2">CREDENTIALS</p>
          <h2 className="text-5xl md:text-7xl font-black">Certifications & Achievements.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 rounded-3xl blur-xl"></div>
            <div className="relative card-gradient p-10 rounded-3xl border-2 border-primary/30 hover:border-primary transition-all duration-500 group bg-card/50 backdrop-blur-sm h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-3xl font-black text-gradient">Certifications</h3>
              </div>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 group-hover:translate-x-1">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Oracle Cloud Infrastructure Certified AI Foundations Associate</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 group-hover:translate-x-1">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Microsoft AI Skills Challenge Certified</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 group-hover:translate-x-1">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">AWS Cloud Practitioner Certificate</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 group-hover:translate-x-1">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Google Cloud Generative AI Badge</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-primary/10 to-secondary/20 rounded-3xl blur-xl"></div>
            <div className="relative card-gradient p-10 rounded-3xl border-2 border-secondary/30 hover:border-secondary transition-all duration-500 group bg-card/50 backdrop-blur-sm h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-3xl font-black text-gradient">Achievements</h3>
              </div>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 group-hover:translate-x-1">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Amazon ML Challenge Hackathon</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 group-hover:translate-x-1">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Code4EdTech-Hack-A-Thon</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 group-hover:translate-x-1">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Student Ambassador - GlowLogics Solutions</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 group-hover:translate-x-1">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Student Ambassador - LetsUpgrade Technologies</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
