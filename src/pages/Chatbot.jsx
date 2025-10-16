import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, User, Volume2 } from "lucide-react";
import Navigation from "@/components/Navigation";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: "Hello! I'm AgroBot's AI assistant. I'm here to help you with agricultural questions, soil management, crop advice, and farming best practices. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("en");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        role: "assistant",
        content: getAIResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleTextToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === "en" ? "en-US" : language === "es" ? "es-ES" : language === "hi" ? "hi-IN" : "en-US";
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const getAIResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("soil") && lowerQuery.includes("moisture")) {
      return "Based on your current sensor readings, your soil moisture levels are within acceptable range (45-65%). For optimal crop growth, maintain moisture between 50-70%. Consider irrigation if levels drop below 45%, especially during hot weather. Different crops have varying moisture requirements - vegetables typically need higher moisture than grain crops.";
    }
    
    if (lowerQuery.includes("npk") || lowerQuery.includes("nutrient")) {
      return "NPK refers to Nitrogen (N), Phosphorus (P), and Potassium (K) - the three essential macronutrients for plant growth. Nitrogen promotes leaf growth, Phosphorus supports root development and flowering, and Potassium enhances overall plant health and disease resistance. Your current readings show balanced levels. Regular soil testing every 2-3 months is recommended.";
    }
    
    if (lowerQuery.includes("temperature")) {
      return "Optimal soil temperature for most crops ranges from 20-28°C. Your current readings show temperatures in the healthy range. Soil temperature affects seed germination, root growth, and nutrient availability. Mulching can help regulate soil temperature by keeping it cooler in hot weather and warmer in cool weather.";
    }
    
    if (lowerQuery.includes("irrigation") || lowerQuery.includes("water")) {
      return "Proper irrigation is crucial for crop health. Based on real-time moisture data from AgroBot, you should irrigate when soil moisture drops below 50%. Early morning irrigation is best as it reduces water loss through evaporation. Drip irrigation systems are most efficient, using 30-50% less water than traditional methods while delivering water directly to plant roots.";
    }
    
    return "Thank you for your question! As an agricultural AI assistant, I can help you with topics like soil management, irrigation practices, crop nutrition, pest control, weather impact, and farming best practices. Your AgroBot sensors provide real-time data that I can analyze to give you specific recommendations. Could you provide more details about your farming concern?";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto p-6 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">AI Chatbot Assistant</h1>
          <p className="text-muted-foreground mt-2">Get expert farming advice and agricultural guidance</p>
        </div>

        <div className="grid gap-6">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-foreground">Chat with AgroBot AI</CardTitle>
                  <CardDescription>Ask questions about soil, crops, weather, and farming practices</CardDescription>
                </div>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="hi">Hindi</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Messages Container */}
                <div className="h-[500px] overflow-y-auto space-y-4 p-4 bg-muted/20 rounded-lg border border-border">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                    >
                      <Avatar className={message.role === "user" ? "bg-primary" : "bg-accent"}>
                        <AvatarFallback>
                          {message.role === "user" ? (
                            <User className="h-5 w-5 text-primary-foreground" />
                          ) : (
                            <Bot className="h-5 w-5 text-accent-foreground" />
                          )}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className={`flex-1 space-y-2 ${message.role === "user" ? "items-end" : "items-start"} flex flex-col`}>
                        <div
                          className={`rounded-lg p-4 max-w-[80%] ${
                            message.role === "user"
                              ? "bg-primary text-primary-foreground ml-auto"
                              : "bg-card text-card-foreground border border-border"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">
                            {message.timestamp.toLocaleTimeString()}
                          </span>
                          {message.role === "assistant" && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleTextToSpeech(message.content)}
                              disabled={isSpeaking}
                              className="h-6 px-2"
                            >
                              <Volume2 className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about soil, crops, weather, or farming practices..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 bg-card border-border"
                  />
                  <Button onClick={handleSend} disabled={!input.trim()} className="gap-2">
                    <Send className="h-4 w-4" />
                    Send
                  </Button>
                </div>

                {/* Example Queries */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-sm text-muted-foreground">Try asking:</span>
                  {["How to improve soil moisture?", "What are optimal NPK levels?", "Best irrigation practices"].map((query) => (
                    <Button
                      key={query}
                      variant="outline"
                      size="sm"
                      onClick={() => setInput(query)}
                      className="text-xs"
                    >
                      {query}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;
