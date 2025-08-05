import { motion, type Variants } from 'framer-motion'
import React from 'react'
import { LucideProps } from 'lucide-react';

export const HeroCard = ({
  key,
  itemAnimation,
  feature,
}: {
  key: number;
  itemAnimation: Variants;
  feature: {
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    title: string;
    description: string;
  };
}) => {
  return (
    <motion.div
      key={key}
      className="p-4 border border-border rounded-sm bg-background/50 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:bg-background/80"
      variants={itemAnimation}
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
    >
      <motion.div
        className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-3"
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring" as const, stiffness: 300 }}
      >
        <feature.icon className="h-6 w-6 text-primary" />
      </motion.div>
      <h3 className="font-medium mb-1">{feature.title}</h3>
      <p className="text-sm text-muted-foreground">{feature.description}</p>
    </motion.div>
  );
};