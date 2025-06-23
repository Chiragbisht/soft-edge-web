
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Smartphone, ArrowRight, Zap, Globe, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Spotlight } from "@/components/ui/spotlight";

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-40 px-6 sm:px-8 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(59, 130, 246, 0.8)" />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center rounded-full glass-effect px-6 py-3 text-sm mb-8 border border-blue-500/20">
              <Shield className="mr-2 h-4 w-4 text-blue-400" />
              <span className="text-gray-300">Take control of your gambling habits</span>
            </div>
            
            <h1 className="text-6xl sm:text-8xl font-bold tracking-tight mb-8 leading-none">
              <span className="text-white">Block the urge.</span>
              <br />
              <span className="text-gradient">Take control.</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              GamBlock helps you break free from gambling addiction with password-protected 
              blocking that can't be disabled on impulse. Your commitment to change, secured.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="rounded-full px-10 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 glow text-white border-0">
                Download the App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/about">
                <Button variant="outline" size="lg" className="rounded-full px-10 py-6 text-lg glass-effect border-white/20 text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 sm:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Protection that <span className="text-gradient">actually works</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Simple, secure, and effective gambling blocking for Android
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="h-8 w-8 text-blue-400" />,
                title: "Password Protected",
                description: "Once Protection Mode is on, only you can turn it off with your chosen password. No impulse decisions."
              },
              {
                icon: <Globe className="h-8 w-8 text-purple-400" />,
                title: "Global Coverage",
                description: "Blocks all gambling websites worldwide. Comprehensive protection that adapts as new sites emerge."
              },
              {
                icon: <Smartphone className="h-8 w-8 text-emerald-400" />,
                title: "Android Ready",
                description: "Seamlessly integrates with your Android device. Simple setup, powerful protection."
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="feature-card group" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="animate-fade-in-up">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 sm:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10,000+", label: "Users Protected" },
              { number: "99.9%", label: "Blocking Accuracy" },
              { number: "24/7", label: "Protection Active" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 sm:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="premium-card bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/20">
            <div className="animate-fade-in-up">
              <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6 glow">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                Ready to take control?
              </h2>
              <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
                Join thousands who've taken the first step towards freedom from gambling addiction
              </p>
              <Button size="lg" className="rounded-full px-12 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 glow text-white border-0">
                Get Protected Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
