import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { itemAnimation } from "@/utils/scrollAnimations";
import { LucideProps } from "lucide-react";

const BenefitsCard = ({
  index,
  benefit,
}: {
  index: number;
  benefit: {
    title: string;
    description: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    color: string;
  };
}) => {
  return (
    <motion.div key={index} variants={itemAnimation}>
      <Card className="group p-0 border border-slate-200 bg-white hover:shadow-lg transition-all duration-500 hover:scale-105">
        <CardContent className="p-6 space-y-4 h-full">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
            <benefit.icon className="h-8 w-8 text-white" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
              {benefit.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {benefit.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BenefitsCard
