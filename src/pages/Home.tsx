
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-8 bg-white/50 backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4 text-purple-600" />
              Introducing the new era of web design
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              Build beautiful websites{" "}
              <span className="text-gradient">with ease</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Create stunning, modern websites that captivate your audience. 
              Simple, elegant, and lovable by design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="rounded-full px-8 py-6 text-base">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 py-6 text-base bg-white/50 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why choose Lovable?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every detail crafted with care to deliver exceptional experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-yellow-500" />,
                title: "Lightning Fast",
                description: "Optimized for speed and performance. Your users will love the seamless experience."
              },
              {
                icon: <Heart className="h-8 w-8 text-red-500" />,
                title: "Made with Love",
                description: "Every component is carefully designed with attention to detail and user experience."
              },
              {
                icon: <Sparkles className="h-8 w-8 text-purple-500" />,
                title: "Simply Beautiful",
                description: "Clean, modern design that adapts to your brand and captivates your audience."
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/50 backdrop-blur-sm border-0 shadow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="animate-fade-in-up">
                  <div className="mb-4 inline-flex p-3 rounded-full bg-gray-50">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to get started?
              </h2>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are building beautiful websites with Lovable
              </p>
              <Link to="/login">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 py-6 text-base bg-white text-purple-600 hover:bg-gray-50"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
