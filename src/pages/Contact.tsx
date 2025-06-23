
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="py-24 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">
            Contact Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's start a{" "}
            <span className="text-gradient">conversation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a question, idea, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg animate-fade-in-up">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your project or question..."
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full rounded-full">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Card className="p-8 bg-white/50 backdrop-blur-sm border-0 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-purple-100">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">hello@lovable.dev</p>
                    <p className="text-gray-600">support@lovable.dev</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-green-100">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-gray-600">123 Design Street</p>
                    <p className="text-gray-600">San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to start your project?</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Let's discuss how we can help bring your vision to life with beautiful, 
                functional design that your users will love.
              </p>
              <Button className="bg-white text-purple-600 hover:bg-gray-50 rounded-full">
                Schedule a Call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
