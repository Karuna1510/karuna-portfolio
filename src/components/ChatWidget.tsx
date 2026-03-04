import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const staticReplies: Record<string, string> = {
  'hello': "Hi there! I'm Karuna's assistant. How can I help you today?",
  'hi': "Hello! I'm here to help you learn more about Karuna. What would you like to know?",
  'experience': "Karuna has 7+ years of experience as a Senior Software Developer, specializing in React, Angular, and full-stack development. Currently at Intuit (Toronto) working on Mailchimp dotcom—building high-traffic customer-facing experiences, A/B testing, INP optimization, and Playwright E2E testing.",
  'skills': "Karuna is proficient in React,TypeScript, JavaScript, Angular, Node.js, , Python, AWS and many other technologies. Check out the skills section for the complete list!",
  'projects': "Karuna has worked on various projects including web applications, e-commerce platforms, and enterprise solutions. You can see featured projects in the portfolio section.",
  'contact': "You can reach Karuna at karunaguglani15@gmail.com or connect on LinkedIn. She's available for remote work opportunities.",
  'location': "Karuna is based in Ontario,Canada and available for work in Ontario,Canada and remote work globally.",
  'availability': "Karuna is currently open to new opportunities and collaborations. Feel free to reach out through the contact form below!",
  'education': "Karuna holds a Bachelor of Engineering in Computer Science from Chitkara University (2014-2018).",
  'default': "That's a great question! For specific inquiries, please use the contact form below and Karuna will get back to you personally."
};

const quickQuestions = [
  { key: 'experience', text: 'Tell me about experience' },
  { key: 'skills', text: 'What are the skills?' },
  { key: 'projects', text: 'Show me projects' },
  { key: 'availability', text: 'Available for work?' }
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Karuna's virtual assistant. Ask me anything about her experience, skills, or projects!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  // Show chat widget after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);


  const getReply = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim();
    
    // Check for exact matches first
    if (staticReplies[message]) {
      return staticReplies[message];
    }
    
    // Check for partial matches
    for (const [key, reply] of Object.entries(staticReplies)) {
      if (message.includes(key)) {
        return reply;
      }
    }
    
    return staticReplies.default;
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getReply(text),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputText);
  };

  const handleQuickQuestion = (key: string) => {
    const question = quickQuestions.find(q => q.key === key);
    if (question) {
      sendMessage(question.text);
    }
  };

  

  const chatWidget = (
    <>
      {/* Chat Button */}
      <motion.div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999999,
          pointerEvents: 'auto'
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-primary hover:bg-gradient-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              bottom: '96px',
              right: '24px',
              width: '384px',
              height: '500px',
              zIndex: 999998,
              pointerEvents: 'auto'
            }}
            className="bg-background border border-border rounded-lg shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-primary p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Karuna's Assistant</h3>
                  <p className="text-xs opacity-90">Ask me anything!</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      message.isUser ? 'bg-primary' : 'bg-secondary'
                    }`}>
                      {message.isUser ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-white" />}
                    </div>
                    <div className={`rounded-lg p-3 ${
                      message.isUser 
                        ? 'bg-primary text-white' 
                        : 'bg-muted text-foreground'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-border">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickQuestions.map((question) => (
                  <Button
                    key={question.key}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickQuestion(question.key)}
                    className="text-xs"
                  >
                    {question.text}
                  </Button>
                ))}
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={!inputText.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  // Use React Portal to render directly to document body
  return isVisible ? createPortal(chatWidget, document.body) : null;
}