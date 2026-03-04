import { Link } from "react-router-dom";
import { Heart, Users, Target, Award, Globe, BookOpen, GraduationCap, ShieldCheck, Star, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/donation/Footer";
import heroImage from "@/assets/hero-children-learning.jpg";
import childrenActivities from "@/assets/children-activities.jpg";
import childReading from "@/assets/child-reading.jpg";
import childrenMeal from "@/assets/children-meal.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  const missionPoints = [
    "Providing Free Post-School Education",
    "Ensuring Nutritious Meals",
    "Instilling Core Values for Life",
    "Creating a Safe, Nurturing Environment",
  ];

  const visionPoints = [
    "Educational Excellence for All",
    "Sustainable Community Development",
    "Character Building and Moral Growth",
    "Breaking Barriers to Success",
  ];

  const stats = [
    { value: "14+", label: "Years Of Foundation" },
    { value: "5000+", label: "Monthly Donors" },
    { value: "50K+", label: "Incredible Volunteers" },
    { value: "100+", label: "Successful Campaigns" },
  ];

  const causeCards = [
    {
      icon: BookOpen,
      title: "Vulnerable Communities",
      description: "Many children grow up in broken homes and poverty where nutritious food is scarce, education is distant, and life skills and moral guidance are absent.",
    },
    {
      icon: GraduationCap,
      title: "The Cause",
      description: "HK Vidya is a non-profit organization on a mission to empower every single child from rural areas through free education.",
    },
    {
      icon: ShieldCheck,
      title: "Teaching Moral Values",
      description: "We organize evening tuitions under trained teachers, focusing on life skills, values, and study programs with peer learning.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Founder Section */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative flex flex-col items-center">
              <div className="relative">
                <div className="w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-elevated mx-auto">
                  <img src={heroImage} alt="Srila Prabhupada - Founder" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-4 md:-right-10 bg-card border border-border rounded-2xl p-4 shadow-card max-w-[220px]">
                  <div className="text-primary text-3xl font-serif leading-none mb-1">"</div>
                  <p className="text-sm text-foreground italic leading-relaxed">
                    Value based education from childhood produces great men and responsible leaders.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-medium">— Srila Prabhupada</p>
                  <div className="text-primary text-3xl font-serif leading-none text-right">"</div>
                </div>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mt-12 text-center">
                AC Bhaktivedanta Swami Prabhupada
              </h2>
              <p className="text-muted-foreground text-center mt-1">Founder-Acharya of the worldwide</p>
              <p className="text-foreground font-semibold text-center">HARE KRISHNA MOVEMENT INDIA</p>
            </div>
            <div className="space-y-6">
              <div className="gradient-saffron rounded-2xl p-6 md:p-8 text-primary-foreground">
                <p className="leading-relaxed">
Hare Krishna Vidya is an initiative that empowers underprivileged children studying from 1st to 10th grade by providing two hours of free post-school education every evening along with nutritious food and holistic value-based development programs. 

The program focuses on nurturing young minds through education, food, values, life skills, and wellness, ensuring children grow into responsible and balanced citizens of India.                </p>
              </div>
              <div className="gradient-saffron rounded-2xl p-6 md:p-8 text-primary-foreground">
                <p className="leading-relaxed">
                  To shape young minds into well-rounded individuals by nurturing their intellect, character, and physical well-being, creating responsible citizens who contribute positively to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision Tabs */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex gap-4 mb-8">
                {(["mission", "vision"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl font-display font-bold text-lg transition-all duration-300 ${
                      activeTab === tab
                        ? "gradient-saffron text-primary-foreground shadow-soft"
                        : "bg-card text-muted-foreground border border-border hover:border-primary/30"
                    }`}
                  >
                    Our {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <div className="animate-fade-in-up">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {activeTab === "mission"
                    ? "At Hare Krishna Vidya, Our mission is to reach 1000 villages by the year 2030 and empower underprivileged children through post-school education, nutritious food, values, life skills and wellness programs."
                    : "A commitment to building a strong nation by ensuring food, education, and values reach every underprivileged child."}
                </p>
                <ul className="space-y-3">
                  {(activeTab === "mission" ? missionPoints : visionPoints).map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img src={childrenActivities} alt="Children learning" className="w-full h-[400px] md:h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 gradient-saffron">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cause Cards */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">From Need to Nurture</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The cause for which we are <span className="text-primary">here?</span>
            </h2>
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
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            A glimpse into the lives you've <span className="text-primary">touched</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mt-10">
            {[childReading, childrenActivities, childrenMeal, heroImage].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-[1.03]">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-48 md:h-56 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 text-center">
          <Award className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Together, we can create a world where every child has the opportunity to thrive.
          </p>
          <Link to="/donate">
            <Button variant="saffron" size="xl">
              <Heart className="w-5 h-5 mr-2" />
              Sponsor a Child Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
