
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, User, Terminal, Code, Laptop, Send, FileCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { Github, Linkedin,Twitter } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,

} from "@/components/ui/form";


import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { supabase } from "@/integrations/supabase/client";


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  phone: z.string().optional(),
});

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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
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

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // Call our serverless function
      const { error } = await supabase.functions.invoke('send-email', {
        body: {
          type: 'contact',
          name: data.name,
          email: data.email,
          message: data.message
        }
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      form.reset();
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }


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

                {/* <div className="space-y-4">
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
                </div> */}

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

                <div className="space-y-4 mt-8">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:stevekid705@gmail.com" className="hover:text-primary transition-colors">stevekid705@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+254741780970" className="hover:text-primary transition-colors">+254 741 780 970</a>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
                    <a href="https://github.com/stephen-nene/" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
                    <a href="https://ke.linkedin.com/in/stevenene/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
                    <a href="mailto:stevekid705@gmail.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </a>
                  </Button>
                   <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
              <a href="https://x.com/hackerOnBird" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
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

          <Card className="card-hover border-border/40">
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center space-x-2">
                          <User className="text-primary h-5 w-5" />
                          {/* <label htmlFor="name" className="font-medium">
               Name
             </label> */}
                          <FormLabel>Name</FormLabel>
                        </div>

                        <FormControl>
                          <Input placeholder="Enter your name // String userName" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center space-x-2">
                          <Mail className="text-primary h-5 w-5" />
                          {/* <label htmlFor="email" className="font-medium">
               Email
             </label> */}
                          <FormLabel>Email</FormLabel>
                        </div>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center space-x-2">
                          <Phone className="text-primary h-5 w-5" />
                          {/* <label htmlFor="phone" className="font-medium">
               Phone (optional)
             </label> */}
                          <FormLabel>Phone (optional)</FormLabel>
                        </div>
                        <FormControl>
                          <Input placeholder="+1 (234) 567-8900" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center space-x-2">
                          <Terminal className="text-primary h-5 w-5" />
                          {/* <label htmlFor="message" className="font-medium">
               Message
             </label> */}
                          <FormLabel>Message</FormLabel>
                        </div>
                        <FormControl>
                          <Textarea
                            placeholder="/* Write your message here... */"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full rounded-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
{/* placeholder="your@email.com // required"   */ }

// {/* <div>
//   <Card className="border-primary/10">
//     <CardContent className="p-6">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2">
//             <User className="text-primary h-5 w-5" />
//             <label htmlFor="name" className="font-medium">
//               Name
//             </label>
//           </div>
//           <div className="relative">
//             <Input
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name // String userName"
//               required
//               className="pl-8 border-primary/20 focus:border-primary"
//             />
//             <span className="absolute left-3 top-2.5 text-muted-foreground">
//               <Code className="h-4 w-4" />
//             </span>
//           </div>
//         </div>

//         <div className="space-y-2">
//           <div className="flex items-center space-x-2">
//             <Mail className="text-primary h-5 w-5" />
//             <label htmlFor="email" className="font-medium">
//               Email
//             </label>
//           </div>
//           <div className="relative">
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="your@email.com // required"
//               required
//               className="pl-8 border-primary/20 focus:border-primary"
//             />
//             <span className="absolute left-3 top-2.5 text-muted-foreground">
//               <Code className="h-4 w-4" />
//             </span>
//           </div>
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="message" className="font-medium flex items-center gap-2">
//             <Terminal className="text-primary h-5 w-5" />
//             Message
//           </label>
//           <Textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="/* Write your message here... */"
//             rows={5}
//             required
//             className="border-primary/20 focus:border-primary"
//           />
//           <p className="text-xs text-muted-foreground">console.log('I'll respond within 24-48 hours');</p>
//         </div>

//         <Button type="submit" className="w-full" disabled={isSubmitting}>
//           {isSubmitting ? (
//             <>Processing...</>
//           ) : (
//             <>
//               <Send className="mr-2 h-4 w-4" /> Submit Message
//             </>
//           )}
//         </Button>
//       </form>
//     </CardContent>
//   </Card>
// </div>  */}