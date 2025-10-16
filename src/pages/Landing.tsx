import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, BarChart3, Bell, MessageSquare, Leaf, Droplets, Sun, Sprout } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-6 text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Leaf className="h-5 w-5" />
              <span className="text-sm font-medium">Smart Agriculture Technology</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              AgroBot
            </h1>
            
            <p className="mb-4 text-2xl font-semibold md:text-3xl">
              Your smart farming companion for healthier soil and better yields
            </p>
            
            <p className="mb-8 max-w-2xl text-lg opacity-90 md:text-xl">
              Autonomous soil monitoring robot equipped with advanced sensors to track soil moisture, 
              temperature, humidity, and NPK levels. Get real-time insights and AI-powered farming advice.
            </p>
            
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="gap-2 text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
                <Activity className="h-5 w-5" />
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Powerful Features for Modern Farming
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to monitor and optimize your farm's health
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group p-6 transition-all hover:shadow-lg hover:-translate-y-1 bg-gradient-card border-border">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Autonomous Monitoring</h3>
              <p className="text-muted-foreground">
                Robot automatically patrols your fields, collecting soil and climate data 24/7
              </p>
            </Card>

            <Card className="group p-6 transition-all hover:shadow-lg hover:-translate-y-1 bg-gradient-card border-border">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Real-time Visualization</h3>
              <p className="text-muted-foreground">
                Interactive graphs showing temperature, moisture, humidity, and NPK levels over time
              </p>
            </Card>

            <Card className="group p-6 transition-all hover:shadow-lg hover:-translate-y-1 bg-gradient-card border-border">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive group-hover:text-destructive-foreground">
                <Bell className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Anomaly Alerts</h3>
              <p className="text-muted-foreground">
                Get instant notifications when soil conditions deviate from optimal ranges
              </p>
            </Card>

            <Card className="group p-6 transition-all hover:shadow-lg hover:-translate-y-1 bg-gradient-card border-border">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">AI Chatbot Assistant</h3>
              <p className="text-muted-foreground">
                Ask farming questions and get expert advice with multilingual text-to-speech support
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sensor Info Section */}
      <section className="bg-muted/50 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Advanced Sensor Technology
            </h2>
            <p className="text-lg text-muted-foreground">
              Precision monitoring for optimal crop health
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center animate-slide-up">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Sun className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Temperature</h3>
              <p className="text-muted-foreground">Monitor soil temperature in Celsius</p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Droplets className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Soil Moisture</h3>
              <p className="text-muted-foreground">Track moisture levels as percentage</p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <Activity className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Humidity</h3>
              <p className="text-muted-foreground">Measure air humidity percentage</p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Sprout className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">NPK Levels</h3>
              <p className="text-muted-foreground">Analyze nitrogen, phosphorus, potassium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">AgroBot</span>
              </div>
              <p className="text-muted-foreground">
                Smart farming solutions for sustainable agriculture
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/chatbot" className="text-muted-foreground hover:text-primary transition-colors">
                    AI Chatbot
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Contact</h4>
              <p className="text-muted-foreground">
                Email: support@agrobot.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
          
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2025 AgroBot. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
