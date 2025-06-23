
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Heart, Users, Eye, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="py-32 px-6 sm:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge variant="secondary" className="mb-6 glass-effect border-blue-500/20 text-blue-400">
            About GamBlock
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold mb-8 text-white leading-tight">
            More than a blocker—{" "}
            <span className="text-gradient">a commitment to change</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
            GamBlock isn't just software. It's your partner in breaking free from gambling addiction 
            and taking back control of your life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <Card className="premium-card h-full">
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 glow">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-6 text-white">How it works</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                GamBlock operates with a simple but powerful principle: when Protection Mode is enabled, 
                all gambling websites are blocked across your Android device. The key difference? 
                You can't turn it off without entering your password.
              </p>
              <p className="text-gray-400 leading-relaxed">
                This creates a crucial barrier between impulse and action, giving you time to think 
                and choose recovery over relapse.
              </p>
            </Card>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Card className="premium-card h-full">
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 glow">
                  <Heart className="h-6 w-6 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-6 text-white">Why it matters</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Gambling addiction affects millions worldwide. Traditional blocking solutions can 
                be easily disabled in moments of weakness, making them ineffective when you need 
                them most.
              </p>
              <p className="text-gray-400 leading-relaxed">
                GamBlock's password protection ensures that your commitment to recovery stays strong, 
                even when temptation is at its peak.
              </p>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <Shield className="h-8 w-8 text-blue-400" />,
              title: "Complete Protection",
              description: "Blocks all gambling websites globally with regular updates",
              bgColor: "bg-gradient-to-br from-blue-600/20 to-blue-800/20",
              borderColor: "border-blue-500/30"
            },
            {
              icon: <Lock className="h-8 w-8 text-purple-400" />,
              title: "Password Security",
              description: "Your protection can't be disabled without your chosen password",
              bgColor: "bg-gradient-to-br from-purple-600/20 to-purple-800/20",
              borderColor: "border-purple-500/30"
            },
            {
              icon: <Eye className="h-8 w-8 text-emerald-400" />,
              title: "Privacy First",
              description: "Your browsing data stays private—we only block, never track",
              bgColor: "bg-gradient-to-br from-emerald-600/20 to-emerald-800/20",
              borderColor: "border-emerald-500/30"
            },
            {
              icon: <Users className="h-8 w-8 text-pink-400" />,
              title: "Proven Results",
              description: "Trusted by thousands on their journey to recovery",
              bgColor: "bg-gradient-to-br from-pink-600/20 to-pink-800/20",
              borderColor: "border-pink-500/30"
            }
          ].map((value, index) => (
            <Card 
              key={index}
              className={`feature-card group text-center ${value.bgColor} ${value.borderColor}`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="animate-fade-in-up">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="premium-card text-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/20 animate-fade-in-up" style={{ animationDelay: "700ms" }}>
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6 glow">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-white">Your journey starts here</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Taking the first step towards recovery takes courage. GamBlock is here to support 
            your commitment every step of the way.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
