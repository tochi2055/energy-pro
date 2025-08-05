import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to pay to join?",
    answer: "No, absolutely not! Joining our installer network is completely free. You'll be invited to training and opportunities first, and we only succeed when you succeed."
  },
  {
    question: "What if I don't have certification?",
    answer: "Don't worry! We welcome installers at all levels. We'll offer training programs and help you get verified. Our goal is to help you grow your skills and credibility in the energy sector."
  },
  {
    question: "How will I earn money?",
    answer: "You'll earn in multiple ways: 1) Commissions from product sales when customers buy through your referral links, 2) Installation fees for verified jobs we connect you with, and 3) Bonuses for successful project completions."
  },
  {
    question: "When will I start getting jobs?",
    answer: "We're currently building our network of verified installers. Early members will be first to receive job opportunities. We expect to start connecting installers with jobs within 2-3 months of launch."
  },
  {
    question: "What kind of training will be provided?",
    answer: "We'll provide training on solar panel installation, inverter systems, battery backup systems, energy storage solutions, and safety protocols. Training will be both online and hands-on workshops in major cities."
  },
  {
    question: "Do I need my own tools and equipment?",
    answer: "For basic installations, yes. However, we'll help connect you with suppliers for professional tools and may offer equipment financing options for qualified installers."
  },
  {
    question: "How do I prove my experience?",
    answer: "You can share photos of your past work, customer testimonials, or references. If you're new to the field, our training programs will help you build a portfolio."
  },
  {
    question: "Will this work in my state?",
    answer: "Yes! We're building a nationwide network. No matter which state you're in, there will be opportunities available as we expand across Nigeria."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about joining our installer network
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Send us a message on WhatsApp and we'll get back to you quickly
            </p>
            <a 
              href="https://wa.me/2348012345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-success text-success-foreground px-6 py-3 rounded-lg font-medium hover:bg-success/90 transition-colors"
            >
              <span>💬</span>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};