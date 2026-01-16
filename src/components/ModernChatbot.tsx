import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle, X, Send, Bot, User, Sparkles, Mic, MicOff, RotateCcw, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
}

const FAQ_RESPONSES: Record<string, { text: string; quickReplies: string[] }> = {
  'services': {
    text: `INVALSER offers premium services across India:

**Valet Services:**
• Event & Wedding Valet
• Hotel & Restaurant Valet
• Corporate & Residential Valet
• Airport & VIP Transfers

**Security Services:**
• Professional Bodyguards
• Event Security & Bouncers
• Corporate Security
• VIP Protection`,
    quickReplies: ['Pricing', 'How to Book', 'Service Areas']
  },
  'pricing': {
    text: `**Transparent Pricing:**

• Flat rate: ₹200/hour for all services
• No hidden charges
• Calculate: hours × quantity × ₹200
• Custom quotes for bulk bookings

View detailed pricing on each provider's profile.`,
    quickReplies: ['Book Now', 'Find Providers', 'Contact Support']
  },
  'book': {
    text: `**Simple 4-Step Booking:**

1. Choose your service type
2. Fill in requirements & location
3. Compare verified providers
4. Confirm via WhatsApp

No advance payment required. Get provider details instantly.`,
    quickReplies: ['Start Booking', 'View Providers', 'Pricing']
  },
  'areas': {
    text: `**Service Coverage:**

We serve 100+ cities across India including:
• Mumbai, Delhi, Bangalore
• Chennai, Hyderabad, Pune
• Kolkata, Ahmedabad, and more

All providers are verified and background-checked.`,
    quickReplies: ['Find Providers', 'Book Now', 'Services']
  }
};

const QUICK_OPTIONS = [
  'Services',
  'Pricing',
  'How to Book',
  'Service Areas'
];

const ModernChatbot: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Welcome to INVALSER! 👋

I'm here to help you find premium valet and security services across India.

What would you like to know?`,
      isBot: true,
      timestamp: new Date(),
      quickReplies: QUICK_OPTIONS
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingProgress, setTypingProgress] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Check if on home page
  const isHomePage = location.pathname === '/';

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        if (recognitionRef.current) {
          recognitionRef.current.continuous = false;
          recognitionRef.current.interimResults = false;
          recognitionRef.current.lang = 'en-US';
          recognitionRef.current.onresult = (event) => {
            setInputValue(event.results[0][0].transcript);
            setIsListening(false);
          };
          recognitionRef.current.onerror = () => setIsListening(false);
          recognitionRef.current.onend = () => setIsListening(false);
        }
      }
    }
  }, []);

  // Delay initial render to avoid showing on loading screen
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Listen for mobile menu toggle events
  useEffect(() => {
    const handleMenuToggle = (e: CustomEvent<{ isOpen: boolean }>) => {
      setIsMobileMenuOpen(e.detail.isOpen);
    };

    window.addEventListener('mobile-menu-toggle', handleMenuToggle as EventListener);
    return () => {
      window.removeEventListener('mobile-menu-toggle', handleMenuToggle as EventListener);
    };
  }, []);

  // Handle scroll visibility - show only at top of page (within 100px) and hide when mobile menu is open
  useEffect(() => {
    if (!isHomePage || !isReady || isMobileMenuOpen) {
      setShouldShow(false);
      return;
    }
    
    const handleScroll = () => {
      setShouldShow(window.scrollY <= 100);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage, isReady, isMobileMenuOpen]);

  // Typing progress animation
  useEffect(() => {
    if (isTyping) {
      const interval = setInterval(() => {
        setTypingProgress(prev => (prev >= 100 ? 0 : prev + 10));
      }, 150);
      return () => clearInterval(interval);
    } else {
      setTypingProgress(0);
    }
  }, [isTyping]);

  const findResponse = (message: string): { text: string; quickReplies: string[] } => {
    const msg = message.toLowerCase();
    if (msg.includes('service') || msg.includes('valet') || msg.includes('security') || msg.includes('bodyguard')) {
      return FAQ_RESPONSES['services'];
    }
    if (msg.includes('price') || msg.includes('cost') || msg.includes('rate') || msg.includes('pricing')) {
      return FAQ_RESPONSES['pricing'];
    }
    if (msg.includes('book') || msg.includes('reserve') || msg.includes('how')) {
      return FAQ_RESPONSES['book'];
    }
    if (msg.includes('area') || msg.includes('city') || msg.includes('location') || msg.includes('where')) {
      return FAQ_RESPONSES['areas'];
    }
    return {
      text: `I can help you with:

• **Services** - Valet & Security options
• **Pricing** - Transparent rates
• **Booking** - Simple 4-step process
• **Areas** - 100+ cities covered

What would you like to know more about?`,
      quickReplies: QUICK_OPTIONS
    };
  };

  const handleSend = (text?: string) => {
    const message = text || inputValue.trim();
    if (!message) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = findResponse(message);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        quickReplies: response.quickReplies
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleVoice = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const clearChat = () => {
    setMessages([messages[0]]);
  };

  const handleOpenChat = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
  };

  // Don't render on non-home pages
  if (!isHomePage) {
    return null;
  }

  // Floating Button
  if (!isOpen) {
    return (
      <div 
        id="chatbot-button"
        className={cn(
          "fixed z-[99999] transition-all duration-300 ease-out",
          "bottom-6 right-6",
          shouldShow ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-4 pointer-events-none"
        )}
        style={{ touchAction: 'none' }}
      >
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(true);
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(true);
          }}
          className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-primary via-primary to-accent shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer border border-white/20"
          style={{
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation',
            WebkitUserSelect: 'none',
            userSelect: 'none',
          }}
          aria-label="Open chat assistant"
        >
          {/* Subtle ring */}
          <span className="absolute inset-0 rounded-full border border-primary/30 animate-ping" style={{ animationDuration: '3s' }} />
          
          <MessageCircle className="h-5 w-5 text-primary-foreground relative z-10 group-hover:rotate-6 transition-transform" />
        </button>
        
        {/* Notification badge */}
        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center shadow-md">
          <span className="text-[8px] text-white font-bold">1</span>
        </span>
        
        {/* Tooltip - desktop only */}
        <div className="absolute bottom-full right-0 mb-2 px-2 py-1 text-xs font-medium bg-card text-foreground rounded-lg shadow-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
          Chat with us
        </div>
      </div>
    );
  }

  // Chat Window
  return (
    <div 
      className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-[99999] w-[calc(100vw-1rem)] sm:w-[340px] md:w-[380px] h-[60vh] sm:h-[450px] max-h-[500px] animate-scale-in"
      style={{ touchAction: 'manipulation' }}
    >
      <div className="h-full flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background/95 backdrop-blur-xl">
        
        {/* Header */}
        <div className="relative px-4 py-3 sm:py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground flex-shrink-0">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                  <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                {/* Online indicator */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">INVALSER Assistant</h3>
                <p className="text-xs text-primary-foreground/70 flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Online • Ready to help
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={clearChat}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Clear chat"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-muted/30 to-background">
          {messages.map((msg, idx) => (
            <div
              key={msg.id}
              className={cn(
                "flex gap-2 sm:gap-3 animate-slide-up",
                msg.isBot ? "justify-start" : "justify-end"
              )}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {msg.isBot && (
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
              )}
              
              <div className={cn(
                "max-w-[80%] rounded-2xl px-3 py-2 sm:px-4 sm:py-3 text-sm leading-relaxed",
                msg.isBot 
                  ? "bg-card border border-border shadow-sm rounded-tl-md" 
                  : "bg-primary text-primary-foreground rounded-tr-md"
              )}>
                <div className="whitespace-pre-wrap">
                  {msg.text.split('\n').map((line, i) => (
                    <p key={i} className={cn(
                      line.startsWith('**') ? "font-semibold mt-2 first:mt-0" : "",
                      line.startsWith('•') ? "ml-2" : ""
                    )}>
                      {line.replace(/\*\*/g, '')}
                    </p>
                  ))}
                </div>
                
                {/* Quick replies */}
                {msg.isBot && msg.quickReplies && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 pt-3 border-t border-border/50">
                    {msg.quickReplies.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => handleSend(reply)}
                        className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105 active:scale-95"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {!msg.isBot && (
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
              )}
            </div>
          ))}
          
          {/* Typing indicator with progress */}
          {isTyping && (
            <div className="flex gap-2 sm:gap-3 animate-fade-in">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div className="bg-card border border-border rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <Progress value={typingProgress} className="h-1 w-20" />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="flex-shrink-0 p-3 sm:p-4 border-t border-border bg-background/80 backdrop-blur">
          <div className="flex items-center gap-2">
            {/* Voice button */}
            {recognitionRef.current && (
              <button
                onClick={toggleVoice}
                className={cn(
                  "p-2.5 rounded-xl transition-all duration-200",
                  isListening 
                    ? "bg-destructive text-destructive-foreground animate-pulse" 
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                )}
                aria-label={isListening ? "Stop listening" : "Voice input"}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </button>
            )}
            
            {/* Input */}
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                style={{ fontSize: '16px' }} // Prevents zoom on iOS
              />
            </div>
            
            {/* Send button */}
            <button
              onClick={() => handleSend()}
              disabled={!inputValue.trim()}
              className={cn(
                "p-2.5 sm:p-3 rounded-xl transition-all duration-200",
                inputValue.trim()
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              )}
              aria-label="Send message"
            >
              <Send className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
          
          {/* Scroll down hint */}
          <div className="flex justify-center mt-2">
            <button 
              onClick={() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            >
              <ChevronDown className="h-3 w-3" />
              Scroll to bottom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernChatbot;
