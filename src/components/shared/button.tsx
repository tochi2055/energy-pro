import { Button as ButtonUI } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { scrollAnimationVariants } from "@/utils/scrollAnimations";

export const Button = ({
    ctaRef,
    isCtaInView,
    children,
    motionVariants,
    buttonVariant,
    onClick,
}: {
    ctaRef?: React.RefObject<HTMLDivElement>;
    isCtaInView?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
    motionVariants?: Variants;
    buttonVariant?: "default" | "outline" | "ghost" | "link";
}) => {
  return (
    <motion.div
      className="text-center mt-16"
      ref={ctaRef}
      initial="hidden"
      animate={isCtaInView ? "visibleScale" : "hiddenScale"}
      variants={motionVariants || scrollAnimationVariants}
    >
      <ButtonUI
        size="lg"
        variant={buttonVariant || "default"}
        onClick={onClick}
        className="bg-primary text-white px-8 py-6 text-lg rounded-sm hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      >
        {children}
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
      </ButtonUI>
    </motion.div>
  );
}