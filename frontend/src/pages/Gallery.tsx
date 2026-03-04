import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/donation/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Image, Play, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

import childReading from "@/assets/child-reading.jpg";
import childrenActivities from "@/assets/children-activities.jpg";
import childrenMeal from "@/assets/children-meal.jpg";
import heroImage from "@/assets/hero-children-learning.jpg";

const photos = [
  {
    id: 1,
    src: childReading,
    alt: "Child reading a book",
    caption: "Education transforms lives",
    category: "Education",
  },
  {
    id: 2,
    src: childrenActivities,
    alt: "Children participating in activities",
    caption: "Learning through play",
    category: "Activities",
  },
  {
    id: 3,
    src: childrenMeal,
    alt: "Children enjoying a meal",
    caption: "Nutritious meals for growing minds",
    category: "Nutrition",
  },
  {
    id: 4,
    src: heroImage,
    alt: "Children learning together",
    caption: "Building a brighter future",
    category: "Education",
  },
  {
    id: 5,
    src: childReading,
    alt: "Student studying",
    caption: "Focused on success",
    category: "Education",
  },
  {
    id: 6,
    src: childrenActivities,
    alt: "Group activities",
    caption: "Teamwork and collaboration",
    category: "Activities",
  },
];

const videos = [
  {
    id: 1,
    thumbnail: childReading,
    title: "Our Education Programs",
    description: "See how we're transforming education for underprivileged children.",
    duration: "3:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    thumbnail: childrenMeal,
    title: "Mid-Day Meal Program",
    description: "Providing nutritious meals to fuel young minds.",
    duration: "2:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    thumbnail: childrenActivities,
    title: "Extracurricular Activities",
    description: "Beyond academics - nurturing talents and creativity.",
    duration: "4:15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    thumbnail: heroImage,
    title: "Success Stories",
    description: "Hear from the children whose lives have been transformed.",
    duration: "5:00",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openPhoto = (photo: typeof photos[0]) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(photos.findIndex(p => p.id === photo.id));
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" 
      ? (currentPhotoIndex - 1 + photos.length) % photos.length
      : (currentPhotoIndex + 1) % photos.length;
    setCurrentPhotoIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary to-accent/10" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(var(--accent) / 0.15) 0%, transparent 50%)`
        }} />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Moments of Impact
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary relative">
                Gallery
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 4 150 4 198 10" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore photos and videos showcasing our programs, events, and the incredible children whose lives are being transformed.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <Tabs defaultValue="photos" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-secondary/50 backdrop-blur-sm p-1.5 rounded-full border border-border/50">
                <TabsTrigger 
                  value="photos" 
                  className="flex items-center gap-2 px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  <Image className="w-4 h-4" />
                  <span className="font-medium">Photos</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="videos" 
                  className="flex items-center gap-2 px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  <Play className="w-4 h-4" />
                  <span className="font-medium">Videos</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Photos Grid */}
            <TabsContent value="photos" className="mt-0 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {photos.map((photo, index) => (
                  <div 
                    key={photo.id} 
                    className={cn(
                      "group cursor-pointer relative rounded-2xl overflow-hidden",
                      "transform transition-all duration-500 hover:-translate-y-2",
                      "animate-fade-in"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => openPhoto(photo)}
                  >
                    {/* Image Container */}
                    <div className="relative">
                      <AspectRatio ratio={4/3}>
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </AspectRatio>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        {photo.category}
                      </div>
                      
                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-background font-display font-semibold text-lg">{photo.caption}</p>
                      </div>
                      
                      {/* Hover Border Effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Videos Grid */}
            <TabsContent value="videos" className="mt-0 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {videos.map((video, index) => (
                  <div 
                    key={video.id} 
                    className={cn(
                      "group cursor-pointer rounded-2xl overflow-hidden bg-card border border-border/50",
                      "transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10",
                      "animate-fade-in"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setSelectedVideo(video)}
                  >
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden">
                      <AspectRatio ratio={16/9}>
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </AspectRatio>
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                        <div className="relative">
                          {/* Ripple Effect */}
                          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-primary/30">
                            <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 bg-foreground/90 backdrop-blur-sm text-background text-xs font-medium px-2.5 py-1 rounded-md">
                        {video.duration}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 md:p-6">
                      <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Photo Lightbox */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl p-0 bg-foreground/95 backdrop-blur-xl border-0 rounded-2xl overflow-hidden">
          <div className="relative">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-background/80 hover:text-background hover:bg-background/20 rounded-full"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-5 h-5" />
            </Button>
            
            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-background/80 hover:text-background hover:bg-background/20 rounded-full h-12 w-12"
              onClick={() => navigatePhoto("prev")}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-background/80 hover:text-background hover:bg-background/20 rounded-full h-12 w-12"
              onClick={() => navigatePhoto("next")}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
            
            {selectedPhoto && (
              <div className="animate-scale-in">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
                <div className="p-6 text-center">
                  <span className="inline-block bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full mb-2">
                    {selectedPhoto.category}
                  </span>
                  <p className="text-background font-display font-semibold text-xl">{selectedPhoto.caption}</p>
                  <p className="text-background/60 text-sm mt-2">
                    {currentPhotoIndex + 1} of {photos.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl p-0 bg-card border-border/50 rounded-2xl overflow-hidden">
          {selectedVideo && (
            <div className="animate-scale-in">
              <div className="p-6 pb-4 border-b border-border/50">
                <h2 className="font-display text-2xl font-bold text-foreground">{selectedVideo.title}</h2>
                <p className="text-muted-foreground mt-1">{selectedVideo.description}</p>
              </div>
              <div className="p-6 pt-4">
                <AspectRatio ratio={16/9} className="rounded-xl overflow-hidden bg-muted">
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </AspectRatio>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
