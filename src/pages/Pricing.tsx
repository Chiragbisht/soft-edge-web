
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Shield } from "lucide-react";

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
      popular: false
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
      savings: "Save $11"
    }
  ];

  return (
    <div className="py-24 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">
            Pricing
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Choose your{" "}
            <span className="text-gradient">protection plan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Affordable, comprehensive protection. Your investment in a gambling-free future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-fade-in-up ${
                plan.popular 
                  ? 'ring-2 ring-blue-500 shadow-xl bg-white scale-105' 
                  : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-2 text-sm font-medium">
                  <Shield className="inline-block w-4 h-4 mr-1" />
                  Most Popular • {plan.savings}
                </div>
              )}
              
              <CardHeader className={plan.popular ? "pt-12" : ""}>
                <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                  {plan.originalPrice && (
                    <span className="text-gray-400 line-through ml-2 text-lg">{plan.originalPrice}</span>
                  )}
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
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {plan.popular ? "Get Protected Now" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <Card className="inline-block p-8 bg-gray-50 border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Questions about pricing?</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              We're here to help you choose the right plan for your recovery journey. 
              Reach out to our support team anytime.
            </p>
            <Button variant="outline" className="rounded-full border-gray-300">
              Contact Support
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
