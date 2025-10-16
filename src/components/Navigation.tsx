import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, BarChart3, MessageSquare, Leaf } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
            <Leaf className="h-6 w-6 text-primary" />
            AgroBot
          </Link>
          
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"} 
                className="gap-2"
              >
                <Home className="h-4 w-4" />
                Home
              </Button>
            </Link>
            
            <Link to="/dashboard">
              <Button 
                variant={isActive("/dashboard") ? "default" : "ghost"} 
                className="gap-2"
              >
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            
            <Link to="/chatbot">
              <Button 
                variant={isActive("/chatbot") ? "default" : "ghost"} 
                className="gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                AI Chat
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
