import { Link } from "react-router-dom";
import { Utensils, BookOpen, HeartPulse, Apple, CheckCircle2, Quote, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/donation/Footer";
import childrenMealImg from "@/assets/children-meal.jpg";

const ImpactFoodEducation = () => {
  const stats = [
    { value: "50,000+", label: "Meals Served Monthly" },
    { value: "8,000+", label: "Children Fed Daily" },
    { value: "Zero", label: "Hunger-Related Dropouts" },
    { value: "40%", label: "Improvement in Focus" },
  ];

  const benefits = [
    {
      icon: Utensils,
      title: "Nutritious Food",
      description: "Many children struggle with hunger, which affects their ability to learn. Our program provides nutritious millet-based meals to ensure children remain healthy, energetic, and focused on their studies.",
    },
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Full educational support including fees, supplies, and academic guidance.",
    },
    {
      icon: HeartPulse,
      title: "Health Checkups",
      description: "Regular health screenings and basic medical care to keep children healthy.",
    },
    {
      icon: Apple,
      title: "Nutrition Education",
      description: "Teaching children about healthy eating habits for lifelong wellness.",
    },
  ];

  const breakdown = [
    { label: "Nutritious Meals", percentage: 40, amount: "₹400" },
    { label: "School Fees & Tuition", percentage: 35, amount: "₹350" },
    { label: "Books & Supplies", percentage: 15, amount: "₹150" },
    { label: "Health & Wellness", percentage: 10, amount: "₹100" },
  ];

  const mealPlan = [
    { day: "Monday", breakfast: "Upma with Vegetables", lunch: "Rice, Dal, Sabzi, Curd" },
    { day: "Tuesday", breakfast: "Poha with Peanuts", lunch: "Roti, Paneer Curry, Salad" },
    { day: "Wednesday", breakfast: "Idli Sambar", lunch: "Rice, Sambar, Vegetables" },
    { day: "Thursday", breakfast: "Dalia with Fruits", lunch: "Khichdi, Raita, Papad" },
    { day: "Friday", breakfast: "Paratha with Curd", lunch: "Rice, Rajma, Vegetable Fry" },
  ];

  const testimonials = [
    {
      quote: "Before this program, I would often go to school hungry. Now I can focus on my studies without thinking about food.",
      name: "Ravi, 10 years",
      location: "Delhi",
    },
    {
      quote: "The mid-day meal program has been a blessing. My children are healthier and doing better in school.",
      name: "Sunita (Parent)",
      location: "Mumbai",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img 
          src={childrenMealImg}
          alt="Children enjoying meal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        <div className="relative z-10 container px-4 h-full flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full w-fit mb-4">
            <span className="text-primary-foreground font-semibold">₹1,000/month</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4">
            Nutritious Food<span className="text-primary"> Program</span>
          </h1>
          <p className="text-xl text-background/90 max-w-2xl">
             Healthy millet-based meals are provided daily to support children's growth, immunity, and learning capacity.          </p>
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
              How Your ₹1,000 is Used
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

      {/* Sample Meal Plan */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
            Sample Weekly Meal Plan
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground font-semibold">
                <div className="p-4">Day</div>
                <div className="p-4">Breakfast</div>
                <div className="p-4">Lunch</div>
              </div>
              {mealPlan.map((meal, index) => (
                <div 
                  key={meal.day} 
                  className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-secondary/30' : 'bg-card'}`}
                >
                  <div className="p-4 font-medium text-foreground">{meal.day}</div>
                  <div className="p-4 text-muted-foreground text-sm">{meal.breakfast}</div>
                  <div className="p-4 text-muted-foreground text-sm">{meal.lunch}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/30">
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
              Feed a Child, Fuel a Dream
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your ₹1,000 monthly sponsorship ensures no child goes hungry while pursuing education.
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

export default ImpactFoodEducation;
