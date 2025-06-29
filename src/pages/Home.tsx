import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Spotlight } from "@/components/ui/spotlight";
import { memo } from "react";

// Simple SVG icons to replace Lucide React icons
const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const LockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const SmartphoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const features = [
  {
    icon: <LockIcon className="h-8 w-8 text-blue-400" />,
    title: "Password Protected",
    description: "Once Protection Mode is on, only you can turn it off with your chosen password. No impulse decisions.",
    bgColor: "bg-gradient-to-br from-blue-600/20 to-blue-800/20",
    borderColor: "border-blue-500/30"
  },
  {
    icon: <GlobeIcon className="h-8 w-8 text-purple-400" />,
    title: "Global Coverage",
    description: "Blocks all gambling websites worldwide. Comprehensive protection that adapts as new sites emerge.",
    bgColor: "bg-gradient-to-br from-purple-600/20 to-purple-800/20",
    borderColor: "border-purple-500/30"
  },
  {
    icon: <SmartphoneIcon className="h-8 w-8 text-emerald-400" />,
    title: "Android Ready",
    description: "Seamlessly integrates with your Android device. Simple setup, powerful protection.",
    bgColor: "bg-gradient-to-br from-emerald-600/20 to-emerald-800/20",
    borderColor: "border-emerald-500/30"
  }
];

const stats = [
  { number: "10,000+", label: "Users Protected" },
  { number: "99.9%", label: "Blocking Accuracy" },
  { number: "24/7", label: "Protection Active" }
];

const FeatureCard = memo(({ feature, index }: { feature: typeof features[0]; index: number }) => (
  <Card 
    className={`feature-card group ${feature.bgColor} ${feature.borderColor}`}
  >
    <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 group-hover:scale-110 transition-transform duration-300">
      {feature.icon}
    </div>
    <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
  </Card>
));

const StatCard = memo(({ stat, index }: { stat: typeof stats[0]; index: number }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
    <div className="text-gray-400">{stat.label}</div>
  </div>
));

const Home = memo(() => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-40 px-6 sm:px-8 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(59, 130, 246, 0.8)" />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center rounded-full glass-effect px-6 py-3 text-sm mb-8 border border-blue-500/20">
            <ShieldIcon className="mr-2 h-4 w-4 text-blue-400" />
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
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/about">
              <Button variant="outline" size="lg" className="rounded-full px-10 py-6 text-lg glass-effect border-white/20 text-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 sm:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Protection that <span className="text-gradient">actually works</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Simple, secure, and effective gambling blocking for Android
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 sm:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 sm:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="premium-card bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/20">
            <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6 glow">
              <ZapIcon className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Ready to take control?
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands who've taken the first step towards freedom from gambling addiction
            </p>
            <Button size="lg" className="rounded-full px-12 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 glow text-white border-0">
              Get Protected Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
