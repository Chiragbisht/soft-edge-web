
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "per month",
      description: "Perfect for individuals and small projects",
      features: [
        "5 Projects",
        "Basic Templates",
        "Standard Support",
        "1GB Storage",
        "Custom Domain"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      description: "Best for growing businesses and teams",
      features: [
        "Unlimited Projects",
        "Premium Templates",
        "Priority Support",
        "10GB Storage",
        "Advanced Analytics",
        "Team Collaboration",
        "Custom Integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large organizations with advanced needs",
      features: [
        "Everything in Professional",
        "White-label Solution",
        "Dedicated Support",
        "100GB Storage",
        "Advanced Security",
        "API Access",
        "Custom Training",
        "SLA Guarantee"
      ],
      popular: false
    }
  ];

  return (
    <div className="py-24 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">
            Pricing
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Choose your{" "}
            <span className="text-gradient">perfect plan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-fade-in-up ${
                plan.popular 
                  ? 'ring-2 ring-purple-500 shadow-xl bg-white' 
                  : 'bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm font-medium">
                  <Sparkles className="inline-block w-4 h-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className={plan.popular ? "pt-12" : ""}>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full rounded-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                      : ''
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.popular ? "Get Started" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <Card className="inline-block p-8 bg-gray-50 border-0">
            <h3 className="text-xl font-bold mb-4">Need a custom solution?</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Contact our sales team to discuss enterprise features, 
              custom integrations, and volume pricing.
            </p>
            <Button variant="outline" className="rounded-full">
              Contact Sales
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
