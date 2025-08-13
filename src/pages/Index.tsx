import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, ArrowRight, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const testimonials = [
    {
      name: "Sarah Al-Mansouri",
      role: "Bride",
      content: "VHS Studios captured our wedding beautifully. Every moment was perfect!",
      rating: 5
    },
    {
      name: "Ahmed Business Group",
      role: "Corporate Client",
      content: "Professional, reliable, and exceptional quality. Highly recommend!",
      rating: 5
    },
    {
      name: "Marina Family",
      role: "Family Portrait",
      content: "Amazing experience and stunning photos. The team is incredibly talented.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Featured Work Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A glimpse into our recent projects and the stories we've helped tell.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80" 
                  alt="Wedding Photography"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vhs-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-vhs-light font-semibold text-lg">Elegant Wedding</h3>
                  <p className="text-vhs-light/80 text-sm">Dubai Marina</p>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80" 
                  alt="Corporate Event"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vhs-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-vhs-light font-semibold text-lg">Corporate Conference</h3>
                  <p className="text-vhs-light/80 text-sm">DIFC Dubai</p>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80" 
                  alt="Family Portrait"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vhs-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-vhs-light font-semibold text-lg">Family Portraits</h3>
                  <p className="text-vhs-light/80 text-sm">Dubai Hills</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <Button variant="hero" size="lg">
                View Full Gallery
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The trust and satisfaction of our clients drives everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-vhs-light">
              Ready to Tell Your Story?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's create something amazing together. Book your session today and 
              experience the VHS Studios difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Book Your Session
                  <Camera className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-vhs-light text-vhs-light hover:bg-vhs-light hover:text-vhs-dark">
                  View Portfolio
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
