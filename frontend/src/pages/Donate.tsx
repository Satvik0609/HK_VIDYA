import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Users, Target, Award, Globe, BookOpen, GraduationCap, Utensils, ShieldCheck, Home, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/donation/Footer";
import DonationForm from "@/components/donation/DonationForm";
import TrustSection from "@/components/donation/TrustSection";
import heroImage from "@/assets/hero-children-learning.jpg";
import childReading from "@/assets/child-reading.jpg";
import childrenActivities from "@/assets/children-activities.jpg";
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
      title: "The Need",
      description: "The purpose of education is to develop all-round and well-balanced students. This is achieved by our integrated curriculum which puts value education and life skills alongside school subjects.",
    },
    {
      icon: GraduationCap,
      title: "The Cause",
      description: "HK Vidya is a non-profit organization on a mission to empower every single child from rural areas through free education, affiliated to Hare Krishna Movement India.",
    },
    {
      icon: ShieldCheck,
      title: "Teaching Moral Values",
      description: "We organize evening tuitions under trained teachers, focusing on life skills, values, and study programs to complete homework, with doubts clarified through peer learning.",
    },
  ];

  const galleryImages = [childReading, childrenActivities, childrenMeal, heroImage];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Founder Section */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Founder Image + Quote */}
            <div className="relative flex flex-col items-center">
              <div className="relative">
                <div className="w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-elevated mx-auto">
                  <img
                    src={heroImage}
                    alt="Srila Prabhupada - Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Quote card */}
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

            {/* Right: Bio cards */}
            <div className="space-y-6">
              <div className="gradient-saffron rounded-2xl p-6 md:p-8 text-primary-foreground">
                <p className="leading-relaxed">
                  HARE KRISHNA MOVEMENT INDIA (HKM) was founded by His Divine Grace{" "}
                  <strong>A.C. Bhaktivedanta Prabhupada</strong>, also called <strong>Srila Prabhupada</strong>{" "}
                  by devotees affectionately; a man of many facets, a versatile personality, and more.
                  He has been called a scholar, a philosopher, a cultural ambassador, a prolific author,
                  a social critic, and a holy man at various times. In truth, he was all these things and more.
                </p>
              </div>
              <div className="gradient-saffron rounded-2xl p-6 md:p-8 text-primary-foreground">
                <p className="leading-relaxed">
                  On his order HKM is carrying out massive food distribution programs with the support from
                  respective governments and CSR funding from corporates, impacting millions of lives across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision Tabs Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Tabs */}
              <div>
                {/* Tab buttons */}
                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setActiveTab("mission")}
                    className={`px-6 py-3 rounded-xl font-display font-bold text-lg transition-all duration-300 ${
                      activeTab === "mission"
                        ? "gradient-saffron text-primary-foreground shadow-soft"
                        : "bg-card text-muted-foreground border border-border hover:border-primary/30"
                    }`}
                  >
                    Our Mission
                  </button>
                  <button
                    onClick={() => setActiveTab("vision")}
                    className={`px-6 py-3 rounded-xl font-display font-bold text-lg transition-all duration-300 ${
                      activeTab === "vision"
                        ? "gradient-saffron text-primary-foreground shadow-soft"
                        : "bg-card text-muted-foreground border border-border hover:border-primary/30"
                    }`}
                  >
                    Our Vision
                  </button>
                </div>

                {activeTab === "mission" ? (
                  <div className="animate-fade-in-up">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      At Hare Krishna Vidya, our mission is to empower underprivileged children from rural
                      communities by nurturing not just their minds, but their hearts and hopes too. We believe
                      that every child, regardless of their socio-economic background, deserves the chance to
                      thrive — and that education, nourishment, and values are the pillars of true empowerment.
                    </p>
                    <h4 className="font-display font-bold text-foreground mb-4">
                      Here's how we bring this mission to life:
                    </h4>
                    <ul className="space-y-3">
                      {missionPoints.map((point) => (
                        <li key={point} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="animate-fade-in-up">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      We envision a world where every child is given the wings to rise, not just survive.
                      A future where learning is joyful, nourishing is dignified, and values are woven into the
                      heart of education.
                    </p>
                    <h4 className="font-display font-bold text-foreground mb-4">
                      Our vision encompasses:
                    </h4>
                    <ul className="space-y-3">
                      {visionPoints.map((point) => (
                        <li key={point} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right: Image */}
              <div className="rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={childrenActivities}
                  alt="Children learning in classroom"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 gradient-saffron">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Cause Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
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

            <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Gallery Glimpse Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              A glimpse into the lives you've{" "}
              <span className="text-primary">touched</span> with your kindness
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Every photo tells a story of hope, growth, and transformation.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-[1.03] animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-48 md:h-56 object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/gallery">
                <Button variant="outline" size="lg">
                  View Full Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <TrustSection />
      <DonationForm />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Every Contribution Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Together, we can create a world where every child has the opportunity to thrive.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
