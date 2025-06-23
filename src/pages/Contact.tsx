
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
    <div className="py-24 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">
            Contact Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            We're here to{" "}
            <span className="text-gradient">support you</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Questions about GamBlock? Need help with your recovery journey? 
            Our team is ready to assist you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white border-gray-200 shadow-lg animate-fade-in-up">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      required
                      className="border-gray-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="border-gray-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    required
                    className="border-gray-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your question or concern..."
                    rows={4}
                    required
                    className="border-gray-300"
                  />
                </div>
                
                <Button type="submit" className="w-full rounded-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Card className="p-8 bg-white border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Email Support</h3>
                    <p className="text-gray-600">support@gamblock.com</p>
                    <p className="text-gray-600">help@gamblock.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-green-100">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Live Chat</h3>
                    <p className="text-gray-600">Available Monday - Friday</p>
                    <p className="text-gray-600">9 AM - 6 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-purple-100">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Privacy & Security</h3>
                    <p className="text-gray-600">Your privacy is our priority</p>
                    <p className="text-gray-600">Secure, confidential support</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-r from-blue-600 to-blue-500 border-0 text-white">
              <h3 className="text-xl font-bold mb-4">Need immediate help?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                If you're struggling with gambling addiction, remember that help is available. 
                Contact a gambling addiction helpline in your area for immediate support.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-50 rounded-full">
                Find Help Resources
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
