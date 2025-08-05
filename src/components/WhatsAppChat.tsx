import React, { useState, useEffect } from "react";
import { MessageSquare, X, Send, Check, CheckCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface WhatsAppChatProps {
  phoneNumber: string;
  welcomeMessage?: string;
  position?: "right" | "left";
  delay?: number;
}

export function WhatsAppChat({
  phoneNumber = "2348012345678",
  welcomeMessage = "Hello! How can we help your business today?",
  position = "right",
  delay = 3000,
}: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showBubble, setShowBubble] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show the bubble notification after a delay
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowBubble(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, hasInteracted]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowBubble(false);
    setHasInteracted(true);
    // Show typing indicator
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 2000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSend = () => {
    if (!message.trim()) return;
    
    // Format the message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    
    // Reset the input
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div 
      className={cn(
        "fixed bottom-6 z-50 flex flex-col items-end",
        position === "right" ? "right-6" : "left-6"
      )}
    >
      {/* Chat Bubble */}
      {showBubble && !isOpen && (
        <div 
          className="mb-4 max-w-xs bg-white rounded-lg shadow-lg p-4 border border-gray-200 animate-fade-in-up"
          onClick={handleOpen}
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-sm bg-green-600 flex items-center justify-center text-white">
              <MessageSquare size={16} />
            </div>
            <div>
              <p className="text-sm font-medium">Need assistance?</p>
              <p className="text-xs text-gray-500">Click to chat with us</p>
            </div>
            <button 
              className="ml-auto text-gray-400 hover:text-gray-600"
              onClick={(e) => {
                e.stopPropagation();
                setShowBubble(false);
                setHasInteracted(true);
              }}
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-green-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-white font-medium">Business Support</h3>
                <p className="text-green-100 text-xs">Typically replies within an hour</p>
              </div>
            </div>
            <button 
              className="text-white/80 hover:text-white transition-colors"
              onClick={handleClose}
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Chat Body */}
          <div className="h-72 p-4 overflow-y-auto bg-[#e5ded8]">
            {/* Welcome Message */}
            <div className="flex mb-4">
              <div className="max-w-[80%] bg-white rounded-lg p-3 shadow-sm">
                <p className="text-sm">{welcomeMessage}</p>
                <span className="text-xs text-gray-500 flex items-center justify-end gap-1 mt-1">
                  12:30 PM <CheckCheck size={12} className="text-green-600" />
                </span>
              </div>
            </div>

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex mb-4">
                <div className="max-w-[80%] bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Chat Input */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex items-center gap-2">
              <textarea
                className="flex-1 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                placeholder="Type a message..."
                rows={1}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <Button 
                onClick={handleSend}
                className="bg-green-600 hover:bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center p-0"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={handleOpen}
        className="w-14 h-14 rounded-sm bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative"
      >
        <MessageSquare size={24} className="animate-pulse" />
        {showBubble && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
            1
          </span>
        )}
      </button>
    </div>
  );
}
