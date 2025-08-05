import { motion } from "framer-motion";
import { itemAnimation, staggerContainer } from "@/utils/scrollAnimations";

const BenefitsStats = ({
    stats,
    statsRef,
    areStatsInView,
}: {
    stats: {
        title: string;
        value: string;
        color: string;
    }[];
    statsRef: React.RefObject<HTMLDivElement>;
    areStatsInView: boolean;
}) => {
  return (
    <motion.div
      className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
      ref={statsRef}
      initial="hidden"
      animate={areStatsInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {stats.map((stat, index) => (
     
          <motion.div
            variants={itemAnimation}
            key={index}
            className="text-center p-6 rounded-lg border border-slate-200 bg-white shadow-sm"
          >
            <p className={`text-3xl font-bold text-${stat.color}`}>{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
          </motion.div>
        
      ))}
    </motion.div>
  );
}

export default BenefitsStats