import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TimiStorySection } from "@/components/TimiStorySection";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { WhatsAppChat } from "@/components/WhatsAppChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TimiStorySection />
      <WaitlistForm />
      <FAQSection />
      <Footer />
      <WhatsAppChat 
        phoneNumber="2348012345678" 
        welcomeMessage="Hello! How can we help your energy business today? We're here to connect you with the right professionals." 
        position="right" 
        delay={5000}
      />
    </div>
  );
};

export default Index;
