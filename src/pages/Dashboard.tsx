import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { RefreshCw, AlertTriangle, Calendar, Thermometer, Droplets, Wind, Sprout } from "lucide-react";
import Navigation from "@/components/Navigation";

// Mock data for demonstration
const generateMockData = () => {
  const data = [];
  const now = new Date();
  for (let i = 23; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000);
    data.push({
      time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      temperature: 22 + Math.random() * 6,
      moisture: 45 + Math.random() * 20,
      humidity: 60 + Math.random() * 15,
      nitrogen: 30 + Math.random() * 20,
      phosphorus: 25 + Math.random() * 15,
      potassium: 35 + Math.random() * 20,
    });
  }
  return data;
};

const mockAlerts = [
  {
    id: 1,
    severity: "high",
    title: "Low Soil Moisture Detected",
    message: "Soil moisture below optimal threshold in Sector B. Irrigation recommended.",
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
  },
  {
    id: 2,
    severity: "medium",
    title: "Temperature Rising",
    message: "Soil temperature approaching upper limit in Sector A.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 3,
    severity: "low",
    title: "NPK Balance Check",
    message: "Nitrogen levels slightly below optimal in Sector C.",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
  },
];

const Dashboard = () => {
  const [data] = useState(generateMockData());
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const handleRefresh = () => {
    setLastUpdated(new Date());
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "secondary";
      default:
        return "default";
    }
  };

  const latestData = data[data.length - 1];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto p-6 max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-2">Real-time sensor data and farm monitoring</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
            </div>
            <Button onClick={handleRefresh} variant="outline" size="sm" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Current Readings */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-gradient-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Thermometer className="h-4 w-4 text-primary" />
                Temperature
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{latestData.temperature.toFixed(1)}°C</div>
              <p className="text-xs text-muted-foreground mt-1">Optimal range: 20-28°C</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Droplets className="h-4 w-4 text-accent" />
                Soil Moisture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{latestData.moisture.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground mt-1">Optimal range: 50-70%</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Wind className="h-4 w-4 text-secondary" />
                Humidity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{latestData.humidity.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground mt-1">Optimal range: 60-75%</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Sprout className="h-4 w-4 text-primary" />
                NPK Average
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {((latestData.nitrogen + latestData.phosphorus + latestData.potassium) / 3).toFixed(0)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Balanced nutrient levels</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Climate Monitoring</CardTitle>
              <CardDescription>Temperature, Moisture, and Humidity over 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: 'var(--radius)'
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="temperature" stroke="hsl(var(--primary))" name="Temperature (°C)" strokeWidth={2} />
                  <Line type="monotone" dataKey="moisture" stroke="hsl(var(--accent))" name="Moisture (%)" strokeWidth={2} />
                  <Line type="monotone" dataKey="humidity" stroke="hsl(var(--secondary))" name="Humidity (%)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">NPK Soil Nutrients</CardTitle>
              <CardDescription>Current nitrogen, phosphorus, and potassium levels</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data.slice(-6)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: 'var(--radius)'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="nitrogen" fill="hsl(var(--primary))" name="Nitrogen" />
                  <Bar dataKey="phosphorus" fill="hsl(var(--accent))" name="Phosphorus" />
                  <Bar dataKey="potassium" fill="hsl(var(--secondary))" name="Potassium" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Alerts Panel */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Anomaly Alerts
            </CardTitle>
            <CardDescription>Recent alerts and recommendations for your farm</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockAlerts.map((alert) => (
              <Alert key={alert.id} variant={alert.severity === "high" ? "destructive" : "default"}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <AlertTitle className="flex items-center gap-2">
                      {alert.title}
                      <Badge variant={getSeverityColor(alert.severity)}>
                        {alert.severity.toUpperCase()}
                      </Badge>
                    </AlertTitle>
                    <AlertDescription className="mt-2">
                      {alert.message}
                    </AlertDescription>
                    <p className="text-xs text-muted-foreground mt-2">
                      {alert.timestamp.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Alert>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
