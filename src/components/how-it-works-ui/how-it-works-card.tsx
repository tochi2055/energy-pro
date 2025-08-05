import { Card } from "@/components/ui/card";
import {
    itemAnimation
} from "@/utils/scrollAnimations";
import { motion } from "framer-motion";
import { LucideProps } from "lucide-react";

const HowItWorksCard = ({
  index,
  step,
  steps,
}: {
  index: number;
  step: {
    number: string;
    title: string;
    description: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    color: string;
  };
  steps: {
    number: string;
    title: string;
    description: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    color: string;
  }[];
}) => {
  return (
    <motion.div
      key={index}
      className="relative group hover:scale-105 transition-all duration-300"
      variants={itemAnimation}
    >
      <Card className="h-full p-6 text-center space-y-6 border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
        <div className="relative">
          <div
            className={`w-20 h-20 bg-primary rounded-lg flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-300`}
          >
            <step.icon className="h-8 w-8 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold shadow-md">
            {step.number}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-bold">{step.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </div>
      </Card>

      {/* Connection line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 z-10"></div>
      )}
    </motion.div>
  );
};

export default HowItWorksCard
