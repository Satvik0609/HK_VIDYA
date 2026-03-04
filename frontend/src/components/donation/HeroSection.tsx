import { Heart, Users, Utensils, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-children-learning.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Children learning in classroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground mb-6 animate-fade-in-up border border-primary/30">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Sponsor a Child's Future</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
            Give a Child the{" "}
            <span className="text-saffron-light">Gift of Education</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mb-10 animate-fade-in-up animation-delay-200">
            Your monthly sponsorship provides education, nutrition, and holistic development 
            to underprivileged children, transforming their lives forever.
          </p>

          {/* Impact stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in-up animation-delay-300">
            <ImpactStat icon={Utensils} value="50,000+" label="Meals Served Daily" />
            <ImpactStat icon={BookOpen} value="10,000+" label="Children Educated" />
            <ImpactStat icon={Users} value="100+" label="Villages Reached" />
            <ImpactStat icon={Heart} value="15+" label="Years of Service" />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
          <path
            d="M0 50C240 80 480 100 720 100C960 100 1200 80 1440 50V100H0V50Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

const ImpactStat = ({ 
  icon: Icon, 
  value, 
  label 
}: { 
  icon: React.ElementType; 
  value: string; 
  label: string;
}) => (
  <div className="bg-card/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20 hover:bg-card/20 transition-all duration-300">
    <Icon className="w-6 h-6 text-saffron-light mx-auto mb-2" />
    <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">{value}</div>
    <div className="text-sm text-primary-foreground/70">{label}</div>
  </div>
);

export default HeroSection;
