
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Zap, Target } from "lucide-react";

const About = () => {
  return (
    <div className="py-24 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">
            About Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Crafting digital experiences with{" "}
            <span className="text-gradient">passion</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We believe in the power of beautiful design to transform ideas into 
            extraordinary digital experiences that inspire and delight.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded with a simple yet powerful vision: to make beautiful web design 
              accessible to everyone. We started as a small team of designers and 
              developers who were passionate about creating tools that empower creativity.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we continue to push the boundaries of what's possible in web design, 
              helping thousands of creators bring their visions to life with elegance and ease.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To democratize beautiful web design by providing intuitive tools that 
              combine the power of modern technology with the simplicity of great user experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We're committed to building a platform that not only looks beautiful but 
              feels natural to use, enabling creators to focus on what matters most: their ideas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: <Heart className="h-8 w-8 text-red-500" />,
              title: "Passion",
              description: "Everything we do is driven by genuine love for great design"
            },
            {
              icon: <Users className="h-8 w-8 text-blue-500" />,
              title: "Community",
              description: "Building together with our amazing community of creators"
            },
            {
              icon: <Zap className="h-8 w-8 text-yellow-500" />,
              title: "Innovation",
              description: "Constantly pushing boundaries to deliver cutting-edge experiences"
            },
            {
              icon: <Target className="h-8 w-8 text-green-500" />,
              title: "Focus",
              description: "Laser-focused on simplicity and user-centered design"
            }
          ].map((value, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/50 backdrop-blur-sm border-0 shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="mb-4 inline-flex p-3 rounded-full bg-gray-50">
                {value.icon}
              </div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white animate-fade-in-up" style={{ animationDelay: "700ms" }}>
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto leading-relaxed">
            We're always looking for passionate individuals who share our vision 
            of making the web a more beautiful place. Want to be part of something special?
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
