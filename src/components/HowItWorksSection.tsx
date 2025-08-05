import { Badge } from "@/components/ui/badge";
import { steps } from "@/utils/index.utils";
import { scrollAnimationVariants, staggerContainer, useInView } from "@/utils/scrollAnimations";
import { motion } from "framer-motion";
import HowItWorksCard from "./how-it-works-ui/how-it-works-card";
import { Button } from "./shared/button";

export const HowItWorksSection = () => {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [stepsRef, areStepsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, isCtaInView] = useInView({ threshold: 0.1, triggerOnce: true });
 

  return (
    <section 
      id="how-it-works" 
      className="py-20 bg-slate-50"
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
              Simple Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join Nigeria's premier installer network in four simple steps
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            ref={stepsRef}
            initial="hidden"
            animate={areStepsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {steps.map((step, index) => (
              <HowItWorksCard
                key={index}
                index={index}
                step={step}
                steps={steps}
              />
            ))}
          </motion.div>
          
          {/* Call to action */}
          <Button ctaRef={ctaRef} isCtaInView={isCtaInView} onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};