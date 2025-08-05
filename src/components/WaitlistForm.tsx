import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export const WaitlistForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    state: "",
    city: "",
    isInstaller: "",
    experience: "",
    installationType: [],
    interestedInTraining: "",
    workPhotos: "",
    howDidYouHear: "",
    additionalInfo: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "🎉 You're on the list!",
        description: "We'll reach out soon with training info and early access opportunities.",
      });
      setIsSubmitting(false);
      // Reset form
      setFormData({
        fullName: "",
        whatsapp: "",
        email: "",
        state: "",
        city: "",
        isInstaller: "",
        experience: "",
        installationType: [],
        interestedInTraining: "",
        workPhotos: "",
        howDidYouHear: "",
        additionalInfo: ""
      });
    }, 2000);
  };

  const installationTypes = [
    "Solar panels",
    "Inverter systems", 
    "Generator installations",
    "Battery backup systems",
    "Electrical wiring",
    "CCTV systems",
    "Other energy systems"
  ];

  const nigerian_states = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", 
    "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", 
    "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", 
    "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT"
  ];

  return (
    <section id="waitlist" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Request Access to EnergyPros Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete the form below to join our professional network of energy businesses, installers, and dealers across Nigeria. Gain access to our enterprise platform, business intelligence tools, and strategic partnership opportunities.
            </p>
          </div>

          <Card className="shadow-md border border-border rounded-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Business Partnership Application</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold border-b pb-2">Company Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                      <Input
                        id="whatsapp"
                        placeholder="+234 801 234 5678"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Select onValueChange={(value) => setFormData({...formData, state: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent>
                          {nigerian_states.map((state) => (
                            <SelectItem key={state} value={state}>{state}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      required
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold border-b pb-2">Business Profile</h3>
                  
                  <div className="space-y-4">
                    <Label>Business Type *</Label>
                    <RadioGroup 
                      value={formData.isInstaller}
                      onValueChange={(value) => setFormData({...formData, isInstaller: value})}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="installer" id="installer-yes" />
                        <Label htmlFor="installer-yes">Installation Company</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dealer" id="installer-no" />
                        <Label htmlFor="installer-no">Energy Product Dealer/Distributor</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="manufacturer" id="manufacturer" />
                        <Label htmlFor="manufacturer">Manufacturer</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other-business" />
                        <Label htmlFor="other-business">Other Energy Business</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years in Business</Label>
                    <Select onValueChange={(value) => setFormData({...formData, experience: value})}>
                      <SelectTrigger className="rounded-sm">
                        <SelectValue placeholder="Select your business age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label>Business Services (Select all that apply)</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {installationTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={type}
                            className="rounded-sm"
                            checked={formData.installationType.includes(type)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({
                                  ...formData,
                                  installationType: [...formData.installationType, type]
                                });
                              } else {
                                setFormData({
                                  ...formData,
                                  installationType: formData.installationType.filter(t => t !== type)
                                });
                              }
                            }}
                          />
                          <Label htmlFor={type} className="text-sm">{type}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Training & Additional Info */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold border-b pb-2">Partnership Interests</h3>
                  
                  <div className="space-y-4">
                    <Label>Partnership Interests (Select all that apply) *</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="business-network"
                          className="rounded-sm"
                          checked={formData.interestedInTraining === "yes"}
                          onCheckedChange={(checked) => {
                            setFormData({...formData, interestedInTraining: checked ? "yes" : "no"});
                          }}
                        />
                        <Label htmlFor="business-network" className="text-sm">Business Networking</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="market-intelligence"
                          className="rounded-sm"
                          checked={formData.interestedInTraining === "yes"}
                          onCheckedChange={(checked) => {
                            setFormData({...formData, interestedInTraining: checked ? "yes" : "no"});
                          }}
                        />
                        <Label htmlFor="market-intelligence" className="text-sm">Market Intelligence</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="training-programs"
                          className="rounded-sm"
                          checked={formData.interestedInTraining === "yes"}
                          onCheckedChange={(checked) => {
                            setFormData({...formData, interestedInTraining: checked ? "yes" : "no"});
                          }}
                        />
                        <Label htmlFor="training-programs" className="text-sm">Professional Training Programs</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="supply-chain"
                          className="rounded-sm"
                          checked={formData.interestedInTraining === "yes"}
                          onCheckedChange={(checked) => {
                            setFormData({...formData, interestedInTraining: checked ? "yes" : "no"});
                          }}
                        />
                        <Label htmlFor="supply-chain" className="text-sm">Supply Chain Integration</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="workPhotos">Company Portfolio (Optional)</Label>
                    <Textarea
                      id="workPhotos"
                      className="rounded-sm"
                      placeholder="Share links to your company website, portfolio, or case studies"
                      value={formData.workPhotos}
                      onChange={(e) => setFormData({...formData, workPhotos: e.target.value})}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="howDidYouHear">How did you hear about EnergyPros Connect?</Label>
                    <Select onValueChange={(value) => setFormData({...formData, howDidYouHear: value})}>
                      <SelectTrigger className="rounded-sm">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="industry">Industry Event/Conference</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="referral">Business Referral</SelectItem>
                        <SelectItem value="search">Online Search</SelectItem>
                        <SelectItem value="publication">Industry Publication</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Business Objectives (Optional)</Label>
                    <Textarea
                      id="additionalInfo"
                      className="rounded-sm"
                      placeholder="Tell us about your business objectives and how you hope to benefit from the EnergyPros Connect platform"
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                      rows={3}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="professional"
                  size="lg" 
                  className="w-full text-base py-6 rounded-sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Partnership Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};