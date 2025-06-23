
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Smartphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="hero-gradient py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-8 bg-white/50 backdrop-blur-sm">
              <Shield className="mr-2 h-4 w-4 text-blue-600" />
              Take control of your gambling habits
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 text-gray-900">
              Block the urge.{" "}
              <span className="text-gradient">Take control.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              GamBlock helps you break free from gambling addiction with password-protected 
              blocking that can't be disabled on impulse. Your commitment to change, secured.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 py-6 text-base bg-blue-600 hover:bg-blue-700">
                Download the App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 py-6 text-base bg-white/50 backdrop-blur-sm"
                >
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Protection that works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Simple, secure, and effective gambling blocking for Android
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="h-8 w-8 text-blue-600" />,
                title: "Password Protected",
                description: "Once Protection Mode is on, only you can turn it off with your chosen password. No impulse decisions."
              },
              {
                icon: <Shield className="h-8 w-8 text-green-600" />,
                title: "Global Coverage",
                description: "Blocks all gambling websites worldwide. Comprehensive protection that adapts as new sites emerge."
              },
              {
                icon: <Smartphone className="h-8 w-8 text-purple-600" />,
                title: "Android Ready",
                description: "Seamlessly integrates with your Android device. Simple setup, powerful protection."
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="animate-fade-in-up">
                  <div className="mb-4 inline-flex p-3 rounded-full bg-gray-50">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-gradient-to-r from-blue-600 to-blue-500 border-0 text-white">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to take control?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands who've taken the first step towards freedom from gambling addiction
              </p>
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-base bg-white text-blue-600 hover:bg-gray-50"
              >
                Get Protected Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
