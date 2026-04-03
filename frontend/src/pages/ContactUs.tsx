import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/donation/Footer";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().regex(/^[+]?[\d\s-]{10,15}$/, "Please enter a valid phone number").optional().or(z.literal("")),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactUs = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // const onSubmit = (data: ContactFormValues) => {
  //   toast({
  //     title: "Message Sent!",
  //     description: "Thank you for reaching out. We'll get back to you within 24-48 hours.",
  //   });
  //   form.reset();
  // };



  const onSubmit = async (data: ContactFormValues) => {
  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      toast({
        title: "Message Sent!",
        description: "Your message has been sent successfully ✅",
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: result.message || "Failed to send message ❌",
      });
    }
  } catch (error) {
    console.error(error);
    toast({
      title: "Server Error",
      description: "Could not send message ❌",
    });
  }
};

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["General: harekrishnavidya@hkmhyderabad.org"],
      action: "mailto:harekrishnavidya@hkmhyderabad.org",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 7207619870"],
      action: "tel:+9117207619870",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["MLA Colony, Road No-12, Banjara Hills, Hyderabad - 500034"],
      action: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Saturday", "10:00 AM - 6:00 PM IST"],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="bg-secondary/30 py-12">
        <div className="container px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 gradient-saffron rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Contact Us
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
                If you would like to support our mission or learn more about our programs, please contact us. Together we can bring food, education, and values to children who need them most.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 gradient-saffron rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                ))}
                {info.action && (
                  <a 
                    href={info.action} 
                    className="inline-block mt-3 text-primary text-sm font-medium hover:underline"
                    target={info.action.startsWith("http") ? "_blank" : undefined}
                    rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    Get in touch →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-secondary/30 flex-1">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will get back to you shortly.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
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
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+91 98765 43210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a topic" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="donation">Donation Inquiry</SelectItem>
                              <SelectItem value="sponsorship">Child Sponsorship</SelectItem>
                              <SelectItem value="tax">80G / Tax Benefits</SelectItem>
                              <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                              <SelectItem value="corporate">Corporate Partnerships</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="min-h-[150px] resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" variant="saffron" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">
              Find Us
            </h2>
            <div className="bg-secondary/50 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="text-muted-foreground">MLA Colony, Road No-12, Banjara Hills, Hyderabad - 500034</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-primary font-medium hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
