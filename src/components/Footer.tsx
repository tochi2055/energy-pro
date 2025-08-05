import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, MessageSquare, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Energy Pros Connect</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              The professional network connecting energy businesses across Nigeria.
              Built by industry experts for sustainable growth.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+234 801 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@energyprosconnect.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#waitlist" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                  <ExternalLink size={14} />
                  Join Waitlist
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                  <ExternalLink size={14} />
                  How It Works
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                  <ExternalLink size={14} />
                  Benefits
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                  <ExternalLink size={14} />
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/blog" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                  <ExternalLink size={14} />
                  Industry Blog
                </a>
              </li>
              <li>
                <a href="/resources" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                  <ExternalLink size={14} />
                  Market Reports
                </a>
              </li>
              <li>
                <a href="/partners" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                  <ExternalLink size={14} />
                  Partner Directory
                </a>
              </li>
              <li>
                <a href="/events" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                  <ExternalLink size={14} />
                  Industry Events
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Connect With Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/2348012345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
              <a 
                href="https://instagram.com/energyprosconnect" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com/energyprosconnect" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
            
            <div className="space-y-3 text-sm">
              <a href="/terms" className="block text-slate-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/privacy" className="block text-slate-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/cookies" className="block text-slate-300 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2024 Energy Pros Connect. All rights reserved.</p>
          <p>Empowering Nigeria's energy sector through professional connections</p>
        </div>
      </div>
    </footer>
  );
};