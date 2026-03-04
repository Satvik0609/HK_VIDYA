import { Link } from "react-router-dom";
import { Star, BookOpen, Heart, Lightbulb, Activity, Users, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/donation/Footer";
import childrenActivitiesImg from "@/assets/children-activities.jpg";

const ImpactCompleteCare = () => {
  const stats = [
    { value: "5,000+", label: "Children in Complete Care" },
    { value: "360°", label: "Holistic Development" },
    { value: "98%", label: "Parent Satisfaction" },
    { value: "100+", label: "Life Skills Taught" },
  ];

  const pillars = [
    {
      icon: BookOpen,
      title: "Value Education",
      description: "Children are taught moral principles and cultural values through stories",
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: Heart,
      title: "Nutrition Food",
      description: "This program provides nutritious millet-based meals to ensure children remain healthy, energetic, and focused on their studies.",
      color: "from-red-500/20 to-red-500/5",
    },
    {
      icon: Sparkles,
      title: "Values & Ethics",
      description: "Character building through stories, role models, and moral education sessions.",
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      icon: Lightbulb,
      title: "Life Skills Development",
      description: "Practical skills including public speaking, communication, story telling, computer skills, arts and crafts, Hygiene and cleanliness, Hygiene and cleanliness.",
      color: "from-yellow-500/20 to-yellow-500/5",
    },
    {
      icon: Activity,
      title: "Wellness",
      description: "Yoga and meditation,Basic health awareness,Cleanliness practices,Healthy lifestyle education",
      color: "from-green-500/20 to-green-500/5",
    },
    {
      icon: Users,
      title: "Community",
      description: "Social development through group activities, cultural events, and community service.",
      color: "from-orange-500/20 to-orange-500/5",
    },
  ];

  const breakdown = [
    { label: "Education & Supplies", percentage: 30, amount: "₹450" },
    { label: "Nutritious Meals", percentage: 25, amount: "₹375" },
    { label: "Values & Life Skills", percentage: 20, amount: "₹300" },
    { label: "Wellness Programs", percentage: 15, amount: "₹225" },
    { label: "Community Activities", percentage: 10, amount: "₹150" },
  ];

  const testimonials = [
    {
      quote: "The Complete Care program didn't just educate my son—it shaped him into a confident, responsible young man with strong values.",
      name: "Kamala (Parent)",
      location: "Hyderabad",
    },
    {
      quote: "I learned not just math and science, but how to be a good person, how to stay healthy, and how to dream big.",
      name: "Arjun, 14 years",
      location: "Pune",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img 
          src={childrenActivitiesImg}
          alt="Children in activities"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        <div className="relative z-10 container px-4 h-full flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full w-fit mb-4">
            <Star className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground font-semibold">₹1,500/month</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4">
            Holistic Development <span className="text-primary">Program</span>
          </h1>
          <p className="text-xl text-background/90 max-w-2xl">
              Children develop through education, food, values, life skills, and wellness ensuring balanced growth in mind, body, and character.          </p>
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

      {/* Six Pillars */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              The Six Pillars of Complete Care
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach ensures every aspect of a child's development is nurtured.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className={`bg-gradient-to-br ${pillar.color} rounded-2xl p-6 border border-border/50 hover:shadow-elevated transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 gradient-saffron rounded-xl flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
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
              How Your ₹1,500 is Used
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
              Transform a Life Completely
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your ₹1,500 monthly sponsorship provides 360° care for a child's complete development.
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

export default ImpactCompleteCare;
