import React, { useEffect, useRef } from "react";
import { ArrowRight, Building, Network, BarChart3, Handshake, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import installerHero from "@/assets/installer-hero.jpg";
import { useInView, scrollAnimationVariants, staggerContainer, itemAnimation } from "@/utils/scrollAnimations";
import { HeroCard } from "./hero-ui/hero-card";
import StatCard from "./hero-ui/stat-card";
import { features } from "@/utils/index.utils";

interface HeroSectionProps {
  scrollToWaitlist?: () => void;
}

export function HeroSection({ scrollToWaitlist = () => {} }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [headingRef, isHeadingInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, areFeaturesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [imageRef, isImageInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Parallax effect for background elements
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const elements = heroRef.current.querySelectorAll('.parallax');
        
        elements.forEach((el, index) => {
          const speed = index * 0.2 + 0.5;
          const htmlEl = el as HTMLElement;
          htmlEl.style.transform = `translateY(${scrollY * speed}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHowItWorks = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden bg-slate-50 py-20 md:py-32"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="parallax absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="parallax absolute top-40 -right-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="parallax absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-accent/20 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <rect width="50" height="50" fill="none" />
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-primary/10 rounded-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div 
          className="mx-auto max-w-4xl"
          ref={headingRef}
          initial="hidden"
          animate={isHeadingInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={itemAnimation} className="inline-block mb-4 px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Powering Business Connections
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemAnimation} 
            className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            <span className="block">The Professional Network for</span>
            <span className="block mt-2 text-primary">
              Energy Business Partners
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemAnimation} 
            className="mb-10 text-xl text-muted-foreground"
          >
            Connect with qualified businesses, access premium products, and grow
            your energy enterprise through our exclusive B2B platform.
          </motion.p>

          <motion.div 
            variants={itemAnimation} 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              variant="default"
              className="px-8 py-6 text-lg rounded-sm shadow-md hover:shadow-xl transition-all duration-300 group bg-primary text-white"
              onClick={scrollToWaitlist}
            >
              <motion.span 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
              >
                Request Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-sm shadow-sm hover:shadow-md transition-all duration-300 group hover:bg-primary/10 hover:text-primary"
              onClick={scrollToHowItWorks}
            >
              <motion.span 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
              >
                Learn More
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="bg-white border border-border rounded-sm shadow-md p-6 order-2 md:order-1"
            ref={featuresRef}
            initial="hidden"
            animate={areFeaturesInView ? "visible" : "hidden"}
            variants={scrollAnimationVariants}
          >
            <div className="grid grid-cols-2 gap-6">
                {features.map((feature, i) => (
                <HeroCard 
                  key={i}
                  itemAnimation={itemAnimation}
                  feature={feature}
                />
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <StatCard imageRef={imageRef} isImageInView={isImageInView}/>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <button 
      onClick={scrollToHowItWorks}
      className="p-2 rounded-sm bg-white border border-border hover:bg-primary/5 transition-colors duration-300"
    >
      <ChevronDown className="h-6 w-6 text-primary" />
    </button>
  </div>
</section>)};