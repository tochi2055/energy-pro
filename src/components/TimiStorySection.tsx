import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Globe, Users, TrendingUp } from "lucide-react";

export const TimiStorySection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/20 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/20">
              Leadership & Vision
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Meet Timi
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The visionary leader building Nigeria's most trusted installer network
            </p>
          </div>

          <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 lg:p-12 space-y-8 animate-slide-in-left">
                  {/* Profile intro */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center animate-glow-pulse">
                          <span className="text-2xl font-bold text-white">T</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">Timi</h3>
                          <p className="text-muted-foreground">Founder & International Business Bridge</p>
                        </div>
                      </div>
                      
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        With over <strong className="text-foreground">15 years of experience</strong> connecting 
                        international energy companies to Nigeria's dynamic market, Timi has built a reputation 
                        as the go-to bridge for sustainable energy solutions.
                      </p>
                      
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        Her mission is simple yet powerful: <strong className="text-primary">empower local Nigerian 
                        technicians</strong> with the training, tools, and opportunities they need to thrive in 
                        the rapidly growing energy sector.
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-300">
                        <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="text-2xl font-bold text-foreground">15+</p>
                        <p className="text-sm text-muted-foreground">Years Experience</p>
                      </div>
                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-300">
                        <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                        <p className="text-2xl font-bold text-foreground">500+</p>
                        <p className="text-sm text-muted-foreground">Installers Connected</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mission Statement */}
                  <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <Award className="h-6 w-6 text-primary" />
                      <h4 className="font-bold text-lg">Our Mission</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      To create Nigeria's most comprehensive installer network, providing 
                      world-class training, verified job opportunities, and sustainable 
                      income streams for every skilled technician ready to grow.
                    </p>
                  </div>
                  
                  {/* Achievement Badges */}
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      International Energy Expert
                    </Badge>
                    <Badge className="bg-gradient-to-r from-accent to-success text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300">
                      <Globe className="h-4 w-4 mr-2" />
                      Power Energy Partner
                    </Badge>
                  </div>
                </div>
                
                {/* Image Side - Circular placeholder */}
                <div className="relative p-8 lg:p-12 flex items-center justify-center animate-slide-in-right">
                  <div className="relative">
                    {/* Main circular container */}
                    <div className="w-80 h-80 relative">
                      {/* Animated rings */}
                      <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-spin" style={{ animationDuration: '20s' }}></div>
                      <div className="absolute inset-4 rounded-full border-2 border-accent/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                      
                      {/* Placeholder image container */}
                      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-success/20 flex items-center justify-center overflow-hidden shadow-glow">
                        <img 
                          src="/lovable-uploads/0c1460c6-566d-4225-9932-fbca5082aab3.png" 
                          alt="Timi - Founder and Visionary" 
                          className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-full"></div>
                      </div>
                      
                      {/* Floating decorative elements */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg animate-float">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-accent to-success rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl -z-10 animate-glow-pulse"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};