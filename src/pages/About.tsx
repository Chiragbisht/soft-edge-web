
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="py-24 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">
            About GamBlock
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            More than a blocker—{" "}
            <span className="text-gradient">a commitment to change</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            GamBlock isn't just software. It's your partner in breaking free from gambling addiction 
            and taking back control of your life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">How it works</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              GamBlock operates with a simple but powerful principle: when Protection Mode is enabled, 
              all gambling websites are blocked across your Android device. The key difference? 
              You can't turn it off without entering your password.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This creates a crucial barrier between impulse and action, giving you time to think 
              and choose recovery over relapse.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Why it matters</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gambling addiction affects millions worldwide. Traditional blocking solutions can 
              be easily disabled in moments of weakness, making them ineffective when you need 
              them most.
            </p>
            <p className="text-gray-600 leading-relaxed">
              GamBlock's password protection ensures that your commitment to recovery stays strong, 
              even when temptation is at its peak.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: <Shield className="h-8 w-8 text-blue-600" />,
              title: "Complete Protection",
              description: "Blocks all gambling websites globally with regular updates"
            },
            {
              icon: <Lock className="h-8 w-8 text-green-600" />,
              title: "Password Security",
              description: "Your protection can't be disabled without your chosen password"
            },
            {
              icon: <Heart className="h-8 w-8 text-red-500" />,
              title: "Privacy First",
              description: "Your browsing data stays private—we only block, never track"
            },
            {
              icon: <Users className="h-8 w-8 text-purple-600" />,
              title: "Proven Results",
              description: "Trusted by thousands on their journey to recovery"
            }
          ].map((value, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="mb-4 inline-flex p-3 rounded-full bg-gray-50">
                {value.icon}
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-12 text-center bg-gradient-to-r from-blue-600 to-blue-500 border-0 text-white animate-fade-in-up" style={{ animationDelay: "700ms" }}>
          <h2 className="text-3xl font-bold mb-4">Your journey starts here</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Taking the first step towards recovery takes courage. GamBlock is here to support 
            your commitment every step of the way.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
