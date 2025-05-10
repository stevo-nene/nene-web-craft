
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, User, Terminal, Code, Laptop, Send, FileCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const isEmailValid = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const validateForm = () => {
    if (!formData.name) {
      toast({ title: "Error", description: "Name is required", variant: "destructive" });
      return false;
    }
    
    if (!formData.email || !isEmailValid(formData.email)) {
      toast({ title: "Error", description: "Please enter a valid email address", variant: "destructive" });
      return false;
    }
    
    if (!formData.message) {
      toast({ title: "Error", description: "Message is required", variant: "destructive" });
      return false;
    }
    
    return true;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!"
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute -z-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl top-1/3 left-1/4"></div>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-secondary/30 rounded-lg border border-primary/10">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Terminal className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Contact Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Ready to collaborate? Reach out through any of these channels.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Card className="overflow-hidden border-primary/10">
                    <div className="flex">
                      <div className="bg-primary/10 p-4 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium">Email</h3>
                        <code className="text-sm bg-secondary/30 px-1 py-0.5 rounded">
                          <a href="mailto:contact@stevenene.com" className="text-primary hover:underline">
                            contact@stevenene.com
                          </a>
                        </code>
                      </CardContent>
                    </div>
                  </Card>
                  
                  <Card className="overflow-hidden border-primary/10">
                    <div className="flex">
                      <div className="bg-primary/10 p-4 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium">Phone</h3>
                        <code className="text-sm bg-secondary/30 px-1 py-0.5 rounded">
                          <a href="tel:+11234567890" className="text-primary hover:underline">
                            +1 (123) 456-7890
                          </a>
                        </code>
                      </CardContent>
                    </div>
                  </Card>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <FileCode className="h-4 w-4 text-primary" />
                    Schedule a meeting
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let's sync our calendars and discuss your project requirements.
                  </p>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                      <Code className="mr-2 h-4 w-4" /> Schedule on Calendly
                    </a>
                  </Button>
                </div>
                
                <div className="relative p-6 bg-secondary/30 rounded-lg border border-primary/10">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-secondary to-primary/20"></div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Laptop className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Current Status</h3>
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-500"></span>
                      Available for work
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border-primary/10">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <User className="text-primary h-5 w-5" />
                      <label htmlFor="name" className="font-medium">
                        Name
                      </label>
                    </div>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name // String userName"
                        required
                        className="pl-8 border-primary/20 focus:border-primary"
                      />
                      <span className="absolute left-3 top-2.5 text-muted-foreground">
                        <Code className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="text-primary h-5 w-5" />
                      <label htmlFor="email" className="font-medium">
                        Email
                      </label>
                    </div>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com // required"
                        required
                        className="pl-8 border-primary/20 focus:border-primary"
                      />
                      <span className="absolute left-3 top-2.5 text-muted-foreground">
                        <Code className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="font-medium flex items-center gap-2">
                      <Terminal className="text-primary h-5 w-5" />
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="/* Write your message here... */"
                      rows={5}
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                    <p className="text-xs text-muted-foreground">console.log('I'll respond within 24-48 hours');</p>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Submit Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
