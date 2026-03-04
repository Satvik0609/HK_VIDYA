import { Link } from "react-router-dom";
import { Heart, BookOpen, Utensils, Users, ArrowRight, Star, GraduationCap, ShieldCheck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/donation/Footer";
import heroImage from "@/assets/hero-children-learning.jpg";
import childReading from "@/assets/child-reading.jpg";
import childrenActivities from "@/assets/children-activities.jpg";
import childrenMeal from "@/assets/children-meal.jpg";

const Index = () => {
  const stats = [
    { value: "800K", label: "Meals", sublabel: "Served" },
    { value: "50K", label: "Children's", sublabel: "Educated" },
  ];

  const pathCards = [
    {
      icon: Utensils,
      title: "Nutritious Food",
      description: "Nutritious millet-based meals are provided daily to ensure children remain healthy, energetic, and focused on their studies.",
      image: childrenMeal,
      link: "/impact/food-education",
    },
    {
      icon: BookOpen,
      title: "Value Education",
      description: "Children are taught moral principles and cultural values through stories from Ramayana, Mahabharata, Bhagavatam and Bhagavad Gita along with interactive games and activities.",
      image: childReading,
      link: "/impact/education",
    },
    {
      icon: GraduationCap,
      title: "Holistic Development",
      description: "Our program nurtures children through five core aspects: School Education, Value Education, Food, Life Skills, and Wellness.",
      image: childrenActivities,
      link: "/impact/complete-care",
    },
  ];

  const causeCards = [
    {
      icon: Utensils,
      title: "Nutritious Food",
      description: "Nutritious millet-based meals are provided daily to ensure children remain healthy, energetic, and focused on their studies.",
    },
    {
      icon: BookOpen,
      title: "Value Education",
      description: "Children are taught moral principles and cultural values through stories from Ramayana, Mahabharata, Bhagavatam and Bhagavad Gita along with interactive games and activities.",
    },
    {
      icon: ShieldCheck,
      title: "Character Building",
      description: "Building strong moral foundations through value-based education, cultural activities, and spiritual development programs.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Children learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/30" />
        </div>

        <div className="container relative z-10 px-4 py-20">
          {/* Stats Bar */}
          <div className="flex items-center gap-8 mb-8 animate-fade-in-up">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-foreground">Welfare Insights</span>
            </div>
            {stats.map((stat) => (
              <div key={stat.label} className="hidden md:flex items-center gap-3">
                <span className="font-display text-3xl font-bold text-primary-foreground">{stat.value}</span>
                <div className="text-primary-foreground/70 text-sm leading-tight">
                  <div>{stat.label}</div>
                  <div>{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Donor avatars */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up animation-delay-100">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background gradient-saffron flex items-center justify-center"
                >
                  <Users className="w-4 h-4 text-primary-foreground" />
                </div>
              ))}
            </div>
            <span className="text-primary-foreground/80 text-sm font-medium">5000+ Donors around the world</span>
          </div>

          {/* Main Heading */}
          <div className="max-w-3xl animate-fade-in-up animation-delay-200">
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Empowering Children with{" "}
              <span className="text-primary">Food, Education & Values.</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl">
             Hare Krishna Vidya is a post-school initiative dedicated to enriching underprivileged communities by providing free education, nutritious food, and value-based learning to children from rural and vulnerable backgrounds.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/donate">
                <Button variant="saffron" size="xl" className="group">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
            <path
              d="M0 40C240 70 480 80 720 80C960 80 1200 70 1440 40V80H0V40Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Give Nourishment Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Holistic Development for{" "}
              <span className="text-primary">Every Child</span>
            </h2>
            <p className="text-lg text-muted-foreground">
                Our programs focus on education, nutritious food, values, life skills, and wellness to ensure the complete development of children from underprivileged communities.            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pathCards.map((card, index) => (
              <Link
                to={card.link}
                key={card.title}
                className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 gradient-saffron rounded-xl flex items-center justify-center shadow-soft">
                      <card.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{card.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Donate for Cause Banner */}
      <section className="py-16 md:py-20 gradient-saffron relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary-foreground/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary-foreground/10 blur-3xl" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Donate for Cause
            </h2>
            <p className="text-lg text-primary-foreground/85 mb-8 max-w-xl mx-auto">
              Support our mission to provide food, education, and care to those in need.
              Your contribution brings hope and changes lives.
            </p>
            <Link to="/donate">
              <Button
                size="xl"
                className="bg-background text-foreground hover:bg-background/90 shadow-elevated font-bold"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cause Details Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">From Need to Nurture</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The cause for which we are{" "}
              <span className="text-primary">here?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Because every child deserves a chance to learn, grow, and thrive — no matter where they come from.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {causeCards.map((card, index) => (
              <div
                key={card.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/20 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 gradient-saffron rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <card.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Glimpse */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            A glimpse into the lives you've{" "}
            <span className="text-primary">touched</span> with your kindness
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Every photo tells a story of hope, growth, and transformation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[childReading, childrenActivities, childrenMeal, heroImage].map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-[1.03] animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-48 md:h-56 object-cover" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery">
              <Button variant="outline" size="lg">
                View Full Gallery
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
