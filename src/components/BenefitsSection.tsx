import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView, scrollAnimationVariants, staggerContainer } from "@/utils/scrollAnimations";
import BenefitsCard from "./benefits-section-ui/benefits-card";
import BenefitsStats from "./benefits-section-ui/benefits-stats";
import { benefits, stats } from "@/utils/index.utils";

export const BenefitsSection = () => {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [benefitsRef, areBenefitsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, areStatsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <section 
      id="benefits" 
      className="py-20 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            variants={scrollAnimationVariants}
          >
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/20">
              Exclusive Benefits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Why Join Our Network?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unlock opportunities that will transform your installation business and income potential
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={benefitsRef}
            initial="hidden"
            animate={areBenefitsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <BenefitsCard key={index} index={index} benefit={benefit} />
            ))}
          </motion.div>
          
          {/* Trust indicators */}
          <BenefitsStats stats={stats} statsRef={statsRef} areStatsInView={areStatsInView} />
           
        </div>
      </div>
    </section>
  );
};