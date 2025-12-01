
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2, Mic, MicOff, Settings, History, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
}

const FAQ_RESPONSES = {
  'what services do you offer': {
    text: `🌟 INVALSER offers verified premium services across India:
    
🚗 **Valet Services:**
• Event Valet (Weddings, Parties, Corporate) 💒
• Hotel & Restaurant Valet 🏨
• Residential & Commercial Valet 🏢
• Airport & VIP Transfer Services ✈️
• Festival & Concert Valet 🎵
• All services with verified, trained professionals

🛡️ **Security Services:**
• Professional Bodyguards 💪
• Event Security & Bouncers 🕺
• Corporate Security Guards 🏬
• VIP Protection Services ⭐
• 24/7 Security Solutions 🔒

✅ **Why Choose INVALSER:**
• All providers verified & background-checked ✓
• Competitive pricing based on location ✓
• Instant booking via WhatsApp 📱
• 24/7 customer support 📞
• Rated 4.5+ stars by customers 🌟`,
    quickReplies: ['💰 Pricing Details', '📋 How to Book', '📍 Service Areas', '⭐ Provider Quality']
  },
  
  'pricing': {
    text: `💰 Transparent pricing based on your location:
    
💵 **How Pricing Works:**
• Each provider sets their own rates per service
• Prices vary by city and service type
• View detailed pricing on each provider's profile
• Calculate total cost before booking

🛡️ **Price Range:**
• Valet Services: ₹800 - ₹3,000/hour 🚗
• Security Services: ₹1,200 - ₹6,000/day 🛡️
• Event packages available with discounts
• Custom quotes for bulk bookings

✅ **What's Included:**
• No hidden charges 💯
• Transparent cost breakdown
• Direct provider communication 📱
• 24/7 customer support 📞`,
    quickReplies: ['📋 Book Service', '🔍 Find Providers', '📍 Check Availability', '💳 Payment Info']
  },
  
  'how to book': {
    text: `📋 Simple 4-step booking process:
    
1️⃣ **Choose Service**
Select from Valet or Security services based on your needs 🎯

2️⃣ **Fill Requirements**
• Service type and duration ⏰
• Location and timing 📍
• Special requirements 📝
• Number of personnel needed 👥

3️⃣ **Get Instant Quotes**
• Compare verified providers ⚖️
• View ratings and reviews ⭐
• See real-time availability 🟢

4️⃣ **Confirm Booking**
• Direct contact via WhatsApp/SMS 📱
• No advance payment required 💳
• Get provider details immediately ⚡

🔒 **Security Features:**
• Encrypted data 🔐 • Verified providers ✅ • 24/7 support 📞 • Money-back guarantee 💯`,
    quickReplies: ['🚀 Start Booking', '✅ Provider Verification', '💳 Payment Options', '📞 Support Contact']
  }
};

const QUICK_START_OPTIONS = [
  '🌟 What services do you offer?',
  '📋 How to book?',
  '💰 Pricing details',
  '📍 Service areas',
  '⭐ Quality standards',
  '📞 Contact support'
];

const ImprovedChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '🙋‍♀️ Hi! Welcome to FindValet - India\'s Premier Service Platform! ✨\n\n🎉 **Recent Updates:**\n✅ Enhanced Performance & Speed\n✅ Improved Dark/Light Mode\n✅ Optimized Loading Experience\n✅ Better Color Accessibility\n\n💼 **I can help you with:**\n🚗 Premium Valet Services\n🛡️ Professional Security Solutions\n💼 Corporate Packages\n🎉 Event Services\n\nWhat would you like to know? 🤔',
      isBot: true,
      timestamp: new Date(),
      quickReplies: QUICK_START_OPTIONS
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [previousQuestions, setPreviousQuestions] = useState<string[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const lastScrollY = useRef(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

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
            const transcript = event.results[0][0].transcript;
            setInputValue(transcript);
            setIsListening(false);
          };

          recognitionRef.current.onerror = () => {
            setIsListening(false);
          };

          recognitionRef.current.onend = () => {
            setIsListening(false);
          };
        }
      }
    }
  }, []);

  // Handle scroll behavior for mobile
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 100) {
        setIsVisible(false);
        setIsOpen(false);
      } else if (lastScrollY.current - currentScrollY > 50) {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const findBestResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim();
    
    const keywords = {
      'services': 'what services do you offer',
      'valet': 'what services do you offer',
      'security': 'what services do you offer',
      'bodyguard': 'what services do you offer',
      'pricing': 'pricing',
      'price': 'pricing',
      'cost': 'pricing',
      'rates': 'pricing',
      'charges': 'pricing',
      'book': 'how to book',
      'booking': 'how to book',
      'reserve': 'how to book'
    };

    for (const [keyword, response] of Object.entries(keywords)) {
      if (message.includes(keyword)) {
        return response;
      }
    }

    return 'default';
  };

  const getBotResponse = (userMessage: string): Message => {
    const responseKey = findBestResponse(userMessage);
    const response = FAQ_RESPONSES[responseKey as keyof typeof FAQ_RESPONSES];
    
    if (response) {
      return {
        id: Date.now().toString(),
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        quickReplies: response.quickReplies
      };
    }

    return {
      id: Date.now().toString(),
      text: `Thanks for your question! 😊 

I'd be happy to help you with specific information about:

🔹 **Our Services:** Valet parking, Security guards, Bodyguards, Event services 🚗🛡️
🔹 **Pricing & Packages:** Transparent rates, Premium vs Standard services 💰
🔹 **Booking Process:** Quick 4-step process, instant provider connection 📋
🔹 **Service Areas:** 100+ cities across India with expanding coverage 🇮🇳
🔹 **Quality Assurance:** Verified providers, background checks, insurance ✅
🔹 **Support:** 24/7 assistance via WhatsApp, phone, email 📞

Which topic interests you most? I can provide detailed information! 🎯`,
      isBot: true,
      timestamp: new Date(),
      quickReplies: ['🌟 Our Services', '💰 Pricing Info', '📋 How to Book', '📞 Contact Support']
    };
  };

  const handleSendMessage = async (message?: string) => {
    const messageText = message || inputValue.trim();
    if (!messageText) return;

    // Add to previous questions if not already there
    if (!previousQuestions.includes(messageText)) {
      setPreviousQuestions(prev => [messageText, ...prev.slice(0, 4)]);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // Text-to-speech if enabled
      if (voiceEnabled && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(botResponse.text.replace(/[🎯🚗🛡️💰📋🇮🇳✅📞🌟💵🏷️⭐⏰📅💂🏆💪📦🤝📊📈💯🔐📱⚡🔒🟢⚖️📍📝👥💳🚀✨🙋‍♀️🤔🔹😊]/g, ''));
        utterance.rate = 0.9;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
      }
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startVoiceRecognition = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopVoiceRecognition = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    setShowSettings(false);
    setShowHistory(false);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    setShowSettings(false);
    setShowHistory(false);
  };

  const clearHistory = () => {
    setMessages([messages[0]]);
    setPreviousQuestions([]);
    setShowHistory(false);
  };

  if (!isVisible) {
    return null;
  }

  // Floating chat button with gentle pulse animation
  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-[9999]">
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 bg-gradient-to-r from-ice-blue-500 to-ice-blue-600 hover:from-ice-blue-600 hover:to-ice-blue-700 shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95 flex items-center justify-center cursor-pointer border-0 touch-manipulation select-none"
          style={{ 
            WebkitTapHighlightColor: 'transparent',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none'
          }}
          type="button"
          aria-label="Open chat"
        >
          <MessageCircle className="h-7 w-7 text-white pointer-events-none" />
        </button>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-ice-blue-600 rounded-full flex items-center justify-center pointer-events-none">
          <span className="text-sm text-white font-bold select-none">💬</span>
        </div>
      </div>
    );
  }

  // Chat window - optimized responsive sizing (smaller on desktop, perfect on mobile)
  return (
    <div className={`fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-[9999] transition-all duration-300 pointer-events-auto ${
      isMinimized 
        ? 'w-64 sm:w-72 h-12' 
        : 'w-[calc(100vw-1rem)] sm:w-80 md:w-96 h-[70vh] sm:h-[450px] md:h-[500px] lg:h-[520px]'
    }`} style={{ touchAction: 'manipulation' }}>
      <Card className="h-full flex flex-col shadow-2xl border-border bg-card/98 backdrop-blur-sm">
        {/* Header */}
        <CardHeader className="pb-2 bg-gradient-to-r from-ice-blue-500 to-ice-blue-600 text-white rounded-t-lg flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center animate-gentle-pulse">
                <Bot className="h-3 w-3 sm:h-5 sm:w-5" />
              </div>
              {!isMinimized && (
                <div>
                  <CardTitle className="text-sm sm:text-base font-semibold">Valet Palace Assistant 🤖</CardTitle>
                  <p className="text-xs text-white/80">Online • Ready to help 24/7 ✨</p>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-1">
              {!isMinimized && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowHistory(!showHistory)}
                    className="text-white hover:bg-white/20 h-6 w-6 sm:h-7 sm:w-7 p-0"
                  >
                    <History className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowSettings(!showSettings)}
                    className="text-white hover:bg-white/20 h-6 w-6 sm:h-7 sm:w-7 p-0"
                  >
                    <Settings className="h-3 w-3" />
                  </Button>
                </>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleMinimize}
                className="text-white hover:bg-white/20 h-6 w-6 sm:h-7 sm:w-7 p-0"
              >
                {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="text-white hover:bg-white/20 h-6 w-6 sm:h-7 sm:w-7 p-0"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            {/* Settings Panel */}
            {showSettings && (
              <div className="p-3 border-b border-border bg-muted/50">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="voice-enabled" className="text-sm">🎤 Voice Input</Label>
                    <Switch
                      id="voice-enabled"
                      checked={voiceEnabled}
                      onCheckedChange={setVoiceEnabled}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sound-enabled" className="text-sm">🔊 Sound Effects</Label>
                    <Switch
                      id="sound-enabled"
                      checked={soundEnabled}
                      onCheckedChange={setSoundEnabled}
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearHistory}
                    className="w-full text-xs"
                  >
                    🗑️ Clear Chat History
                  </Button>
                </div>
              </div>
            )}

            {/* History Panel */}
            {showHistory && (
              <div className="p-3 border-b border-border bg-muted/50">
                <h4 className="text-sm font-medium mb-2">📝 Recent Questions:</h4>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {previousQuestions.length === 0 ? (
                    <p className="text-xs text-gray-500">No previous questions yet</p>
                  ) : (
                    previousQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          handleSendMessage(question);
                          setShowHistory(false);
                        }}
                        className="text-xs text-left w-full p-1 hover:bg-accent/20 rounded truncate transition-colors"
                      >
                        {question}
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Messages */}
            <CardContent className="flex-1 p-0 overflow-hidden">
              <ScrollArea className="h-full p-2 sm:p-3">
                <div className="space-y-2 sm:space-y-3">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                      <div className={`flex items-start space-x-1 sm:space-x-2 max-w-[90%] ${
                        message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                      }`}>
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.isBot 
                            ? 'bg-ice-blue-100 dark:bg-ice-blue-900' 
                            : 'bg-ice-blue-500'
                        }`}>
                          {message.isBot ? (
                            <Bot className="h-2 w-2 sm:h-3 sm:w-3 text-ice-blue-600 dark:text-ice-blue-300" />
                          ) : (
                            <User className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                          )}
                        </div>
                        <div className={`rounded-lg px-2 py-1 sm:px-3 sm:py-2 shadow-sm ${
                          message.isBot
                            ? 'bg-muted text-foreground'
                            : 'bg-primary text-primary-foreground'
                        }`}>
                          <p className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-1 sm:space-x-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-ice-blue-100 dark:bg-ice-blue-900 flex items-center justify-center">
                          <Bot className="h-2 w-2 sm:h-3 sm:w-3 text-ice-blue-600 dark:text-ice-blue-300" />
                        </div>
                        <div className="bg-muted rounded-lg px-2 py-1 sm:px-3 sm:py-2 shadow-sm">
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {messages.length > 0 && messages[messages.length - 1].quickReplies && !isTyping && (
                    <div className="flex flex-wrap gap-1 mt-2 sm:mt-3">
                      {messages[messages.length - 1].quickReplies?.map((reply, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="cursor-pointer hover:bg-ice-blue-50 dark:hover:bg-ice-blue-900/30 border-ice-blue-300 dark:border-ice-blue-600 text-ice-blue-700 dark:text-ice-blue-300 px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs transition-all duration-200 hover:scale-105"
                          onClick={() => handleQuickReply(reply)}
                        >
                          {reply}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>
            </CardContent>

            {/* Input */}
            <div className="p-2 sm:p-3 border-t border-border flex-shrink-0 bg-background/50">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our services... 💬"
                  className="flex-1 border-input focus:ring-ring text-xs sm:text-sm bg-background"
                  disabled={isTyping}
                />
                {recognitionRef.current && (
                  <Button
                    onClick={isListening ? stopVoiceRecognition : startVoiceRecognition}
                    disabled={isTyping}
                    className={`h-7 w-7 sm:h-8 sm:w-8 p-0 transition-all duration-200 ${
                      isListening 
                        ? 'bg-red-500 hover:bg-red-600 animate-gentle-pulse' 
                        : 'bg-gray-500 hover:bg-gray-600'
                    }`}
                  >
                    {isListening ? <MicOff className="h-3 w-3" /> : <Mic className="h-3 w-3" />}
                  </Button>
                )}
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-ice-blue-500 hover:bg-ice-blue-600 text-white h-7 w-7 sm:h-8 sm:w-8 p-0 transition-all duration-200 hover:scale-105"
                >
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default ImprovedChatbot;
