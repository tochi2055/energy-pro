// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X, BarChart3, Users, Building, Phone, Network } from "lucide-react";

// export const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//     setIsMobileMenuOpen(false);
//   };

//   const navItems = [
//     { label: 'Solutions', icon: Building, id: 'how-it-works' },
//     { label: 'Network', icon: Network, id: 'benefits' },
//     { label: 'About', icon: BarChart3, id: 'about' },
//     { label: 'Waitlist', icon: Phone, id: 'waitlist' },
//   ];

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isScrolled 
//         ? 'bg-background border-b border-border shadow-sm' 
//         : 'bg-background border-b border-border'
//     }`}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div 
//             className="flex items-center space-x-2 cursor-pointer"
//             onClick={() => scrollToSection('hero')}
//           >
//             <div className="relative">
//               <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
//                 <Network className="h-4 w-4 text-white" />
//               </div>
//             </div>
//             <span className="font-bold text-lg text-primary">
//               EnergyPros Connect
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
//               >
//                 <item.icon className="h-4 w-4" />
//                 <span className="font-medium">{item.label}</span>
//               </button>
//             ))}
//             <Button 
//               onClick={() => scrollToSection('waitlist')}
//               variant="professional"
//               className="text-white px-6"
//             >
//               Request Access
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 rounded-sm hover:bg-muted/50 transition-colors duration-300"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? (
//               <X className="h-5 w-5" />
//             ) : (
//               <Menu className="h-5 w-5" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
//             <div className="p-4 space-y-2">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className="flex items-center space-x-3 w-full p-3 rounded-sm text-left hover:bg-muted/50 transition-colors duration-300"
//                 >
//                   <item.icon className="h-4 w-4 text-primary" />
//                   <span className="font-medium">{item.label}</span>
//                 </button>
//               ))}
//               <Button 
//                 onClick={() => scrollToSection('waitlist')}
//                 variant="professional"
//                 className="w-full mt-4 text-white"
//               >
//                 Request Access
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };


"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Menu,
  X,
  BarChart3,
  Users,
  Building,
  Phone,
  Network,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Solutions", icon: Building, id: "how-it-works" },
    { label: "Network", icon: Network, id: "benefits" },
    { label: "About", icon: BarChart3, id: "about" },
    { label: "Waitlist", icon: Phone, id: "waitlist" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background border-b border-border shadow-sm"
          : "bg-background border-b border-border"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <Network className="h-4 w-4 text-white" />
              </div>
            </div>
            <span className="font-bold text-lg text-primary">
              EnergyPros Connect
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              >
                Sign In
              </Link>
              <Button
                onClick={() => scrollToSection("waitlist")}
                variant="professional"
                className="text-white px-6"
              >
                Request Access
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-sm hover:bg-muted/50 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full p-3 rounded-sm text-left hover:bg-muted/50 transition-colors duration-300"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <Link
                to="/login"
                className="flex items-center space-x-3 w-full p-3 rounded-sm text-left hover:bg-muted/50 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="h-4 w-4 text-primary" />
                <span className="font-medium">Sign In</span>
              </Link>
              <Button
                onClick={() => scrollToSection("waitlist")}
                variant="professional"
                className="w-full mt-4 text-white"
              >
                Request Access
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
