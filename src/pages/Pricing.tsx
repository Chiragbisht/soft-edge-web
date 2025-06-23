
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Quarterly",
      price: "$15",
      period: "per 3 months",
      description: "Perfect for getting started with protection",
      features: [
        "Complete gambling website blocking",
        "Password-protected security",
        "Global coverage",
        "Regular database updates",
        "Android app support",
        "Email support"
      ],
      popular: false,
      icon: <Shield className="h-6 w-6 text-blue-400" />
    },
    {
      name: "Yearly",
      price: "$49",
      period: "per year",
      originalPrice: "$60",
      description: "Best value for long-term commitment",
      features: [
        "Everything in Quarterly",
        "Priority customer support",
        "Advanced blocking algorithms",
        "Early access to new features",
        "Recovery resources & guides",
        "Community access",
        "30-day money-back guarantee"
      ],
      popular: true,
      savings: "Save $11",
      icon: <Crown className="h-6 w-6 text-yellow-400" />
    }
  ];

  return (
    <div className="py-32 px-6 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge variant="secondary" className="mb-6 glass-effect border-blue-500/20 text-blue-400">
            Pricing
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold mb-8 text-white leading-tight">
            Choose your{" "}
            <span className="text-gradient">protection plan</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Affordable, comprehensive protection. Your investment in a gambling-free future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-500 hover:-translate-y-2 animate-fade-in-up ${
                plan.popular 
                  ? 'premium-card bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 scale-105 lg:scale-110' 
                  : 'premium-card'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 text-sm font-medium">
                  <Zap className="inline-block w-4 h-4 mr-2" />
                  Most Popular • {plan.savings}
                </div>
              )}
              
              <CardHeader className={plan.popular ? "pt-16" : "pt-8"}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                </div>
                <CardDescription className="text-gray-400 text-lg">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-3 text-lg">{plan.period}</span>
                  {plan.originalPrice && (
                    <span className="text-gray-500 line-through ml-3 text-xl">{plan.originalPrice}</span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="p-1 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 mr-4">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full rounded-full py-6 text-lg font-medium ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 glow text-white border-0' 
                      : 'glass-effect border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.popular ? "Get Protected Now" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <Card className="inline-block premium-card max-w-md">
            <div className="mb-6">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 glow">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Questions about pricing?</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We're here to help you choose the right plan for your recovery journey. 
              Reach out to our support team anytime.
            </p>
            <Button className="rounded-full glass-effect border-white/20 text-white hover:bg-white/10">
              Contact Support
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
