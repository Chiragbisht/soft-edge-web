
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Send, Shield } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="py-32 px-6 sm:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge variant="secondary" className="mb-6 glass-effect border-blue-500/20 text-blue-400">
            Contact Us
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold mb-8 text-white leading-tight">
            We're here to{" "}
            <span className="text-gradient">support you</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Questions about GamBlock? Need help with your recovery journey? 
            Our team is ready to assist you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <Card className="premium-card animate-fade-in-up">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      required
                      className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      required
                      className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    required
                    className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your question or concern..."
                    rows={4}
                    required
                    className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 glow text-white border-0">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Card className="premium-card">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Get in touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 glow">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Email Support</h3>
                      <p className="text-gray-400">support@gamblock.com</p>
                      <p className="text-gray-400">help@gamblock.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 glow">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Live Chat</h3>
                      <p className="text-gray-400">Available Monday - Friday</p>
                      <p className="text-gray-400">9 AM - 6 PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 glow">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Privacy & Security</h3>
                      <p className="text-gray-400">Your privacy is our priority</p>
                      <p className="text-gray-400">Secure, confidential support</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="premium-card bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/20">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-white">Need immediate help?</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  If you're struggling with gambling addiction, remember that help is available. 
                  Contact a gambling addiction helpline in your area for immediate support.
                </p>
                <Button className="rounded-full glass-effect border-white/20 text-white hover:bg-white/10">
                  Find Help Resources
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
