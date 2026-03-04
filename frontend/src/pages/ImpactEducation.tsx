import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, GraduationCap, Users, Target, CheckCircle2, Quote, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/donation/Footer";
import childReadingImg from "@/assets/child-reading.jpg";

const ImpactEducation = () => {
  const stats = [
    { value: "10,000+", label: "Children Educated" },
    { value: "95%", label: "School Retention Rate" },
    { value: "85%", label: "Score Above Average" },
    { value: "500+", label: "First-Gen Graduates" },
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Value Education",
      description: "Value education forms the foundation of our learning programs. Children are taught moral principles and cultural values through stories from Ramayana, Mahabharata, Bhagavatam, and Bhagavad Gita, along with interactive activities and games.",
    },
    {
      icon: GraduationCap,
      title: "School Supplies",
      description: "Complete school kit including uniforms, books, stationery, and bags provided annually.",
    },
    {
      icon: Users,
      title: "Academic Support",
      description: "After-school tutoring, homework help, and mentorship from trained volunteers.",
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "Age-appropriate career counseling and exposure to various professions.",
    },
  ];

  const breakdown = [
    { label: "School Fees & Tuition", percentage: 50, amount: "₹400" },
    { label: "Books & Stationery", percentage: 25, amount: "₹200" },
    { label: "Uniform & Shoes", percentage: 15, amount: "₹120" },
    { label: "Academic Support", percentage: 10, amount: "₹80" },
  ];

  const testimonials = [
    {
      quote: "Before the sponsorship, I never thought I could go to school. Now I dream of becoming a doctor.",
      name: "Anjali, 12 years",
      location: "Bangalore",
    },
    {
      quote: "My daughter is the first in our family to read and write. We are so grateful to our sponsors.",
      name: "Lakshmi (Parent)",
      location: "Chennai",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img 
          src={childReadingImg}
          alt="Child reading"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        <div className="relative z-10 container px-4 h-full flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full w-fit mb-4">
            <span className="text-primary-foreground font-semibold">₹800/month</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4">
            Post-School <span className="text-primary">Education Program</span>
          </h1>
          <p className="text-xl text-background/90 max-w-2xl">
             Every evening, children receive two hours of guided study support including homework completion, doubt clarification, and structured learning.          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary/30">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            What Your Sponsorship Provides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 gradient-saffron rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Breakdown */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              How Your ₹800 is Used
            </h2>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="space-y-6">
                {breakdown.map((item, index) => (
                  <div key={item.label} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{item.label}</span>
                      <span className="text-primary font-bold">{item.amount}</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full gradient-saffron rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Voices from Our Community
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-card rounded-2xl p-8 shadow-card relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <p className="text-lg text-foreground italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Ready to Change a Life?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your ₹800 monthly sponsorship can transform a child's future through education.
            </p>
            <Link to="/#donate">
              <Button variant="saffron" size="xl">
                <Heart className="w-5 h-5 mr-2" />
                Sponsor a Child Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpactEducation;
