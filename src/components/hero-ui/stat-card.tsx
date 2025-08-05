import installerHero from "@/assets/installer-hero.jpg";
import {
    scrollAnimationVariants
} from "@/utils/scrollAnimations";
import { motion } from 'framer-motion';

export const StatCard = ({
    imageRef,
    isImageInView,
}: {
    imageRef: React.RefObject<HTMLDivElement>;
    isImageInView: boolean;
}) => {
  return (
    <motion.div
      className="relative order-1 md:order-2"
      ref={imageRef}
      initial="hiddenRight"
      animate={isImageInView ? "visibleRight" : "hiddenRight"}
      variants={scrollAnimationVariants}
    >
      <div className="relative">
        {/* Main image container */}
        <div className="relative rounded-sm overflow-hidden shadow-md border border-border">
          <img
            src={installerHero}
            alt="Professional installer working on solar installation"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Floating stats - more professional style */}
          <div className="absolute top-6 right-6 bg-white/95 rounded-sm p-4 shadow-md border border-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-xs text-muted-foreground">Active Installers</p>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 bg-white/95 rounded-sm p-4 shadow-md border border-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">15+</p>
              <p className="text-xs text-muted-foreground">Years Experience</p>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 bg-white/95 rounded-sm p-4 shadow-md border border-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">15+</p>
              <p className="text-xs text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default StatCard
