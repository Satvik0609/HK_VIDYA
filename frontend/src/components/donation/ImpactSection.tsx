import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import childReadingImg from "@/assets/child-reading.jpg";
import childrenMealImg from "@/assets/children-meal.jpg";
import childrenActivitiesImg from "@/assets/children-activities.jpg";

const impacts = [
  {
    image: childReadingImg,
    amount: "₹800",
    title: "Education",
    description: "Provide quality education, school supplies, and academic support to help a child build their future.",
    link: "/impact/education",
  },
  {
    image: childrenMealImg,
    amount: "₹1,000",
    title: "Food & Education",
    description: "Nutritious meals combined with education ensure children can focus on learning without hunger.",
    link: "/impact/food-education",
  },
  {
    image: childrenActivitiesImg,
    amount: "₹1,500",
    title: "Complete Care",
    description: "Holistic development including food, values, education, life skills, and wellness programs.",
    link: "/impact/complete-care",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Your Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Every rupee you donate directly transforms a child's life. Here's how your sponsorship makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {impacts.map((impact, index) => (
            <Link
              to={impact.link}
              key={impact.title}
              className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={impact.image} 
                  alt={impact.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {impact.amount}/month
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {impact.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {impact.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <blockquote className="text-xl md:text-2xl font-display italic text-foreground mb-4">
            "Education changed my life. Thanks to my sponsors, I am now the first person in my village to attend college."
          </blockquote>
          <p className="text-muted-foreground">— Priya, Sponsored Child since 2019</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
