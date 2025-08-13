import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, Video, Heart, Building, Users, Calendar } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work', icon: Camera },
    { id: 'wedding', name: 'Weddings', icon: Heart },
    { id: 'corporate', name: 'Corporate', icon: Building },
    { id: 'portrait', name: 'Portraits', icon: Users },
    { id: 'event', name: 'Events', icon: Calendar },
    { id: 'video', name: 'Videography', icon: Video }
  ];

  // Sample gallery items - in a real app, these would come from your API/database
  const galleryItems = [
    {
      id: 1,
      title: 'Corporate Event Dubai',
      category: 'corporate',
      type: 'photography',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
      description: 'Professional conference coverage'
    },
    {
      id: 2,
      title: 'Elegant Wedding Ceremony',
      category: 'wedding',
      type: 'photography',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      description: 'Beautiful wedding moments captured'
    },
    {
      id: 3,
      title: 'Executive Portrait Session',
      category: 'portrait',
      type: 'photography',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      description: 'Professional headshots for executives'
    },
    {
      id: 4,
      title: 'Product Launch Event',
      category: 'event',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      description: 'Dynamic event videography'
    },
    {
      id: 5,
      title: 'Family Portrait Session',
      category: 'portrait',
      type: 'photography',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
      description: 'Capturing family bonds'
    },
    {
      id: 6,
      title: 'Wedding Reception',
      category: 'wedding',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=800&q=80',
      description: 'Reception celebration highlights'
    },
    {
      id: 7,
      title: 'Corporate Team Building',
      category: 'corporate',
      type: 'photography',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      description: 'Team building event documentation'
    },
    {
      id: 8,
      title: 'Fashion Portrait',
      category: 'portrait',
      type: 'photography',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c96d1ce9?auto=format&fit=crop&w=800&q=80',
      description: 'Creative fashion photography'
    },
    {
      id: 9,
      title: 'Cultural Event Dubai',
      category: 'event',
      type: 'photography',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      description: 'Cultural celebration coverage'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-vhs-light">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of stunning photography and videography work. 
              Each project tells a unique story through our lens.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "hero" : "outline"}
                  onClick={() => setActiveFilter(category.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon size={16} />
                  <span>{category.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden hover:shadow-card transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vhs-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant={item.type === 'video' ? 'secondary' : 'default'} className="bg-vhs-dark/80 text-vhs-light">
                      {item.type === 'video' ? <Video size={12} className="mr-1" /> : <Camera size={12} className="mr-1" />}
                      {item.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-vhs-light font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-vhs-light/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-24 h-24 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No items found</h3>
              <p className="text-muted-foreground">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-vhs-light">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your next project and bring your vision to life.
            </p>
            <Button variant="hero" size="lg" className="mt-6">
              Start Your Project
              <Camera className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;