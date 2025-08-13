import { Button } from '@/components/ui/button';
import { Camera, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-studio.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="VHS Studios Professional Setup" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-vhs-dark/80 via-vhs-dark/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-vhs-light leading-tight">
              Capture Every
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Moment
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional digital photography and videography services in Dubai. 
              From corporate events to weddings, we bring your vision to life.
            </p>
          </div>

          {/* Services Highlights */}
          <div className="flex flex-wrap justify-center gap-6 text-vhs-light">
            <div className="flex items-center space-x-2">
              <Camera className="w-5 h-5 text-vhs-red" />
              <span>Digital Photography</span>
            </div>
            <div className="flex items-center space-x-2">
              <Play className="w-5 h-5 text-vhs-green" />
              <span>Videography</span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowRight className="w-5 h-5 text-vhs-blue" />
              <span>Event Coverage</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/gallery">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                View Our Work
                <Camera className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-vhs-light text-vhs-light hover:bg-vhs-light hover:text-vhs-dark">
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Location Info */}
          <div className="pt-8 text-muted-foreground">
            <p className="text-sm">
              📍 Moopans Mall, Wasl Village, Qusais Industrial Area 5, Dubai, UAE
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-vhs-red/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-vhs-blue/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-8 w-16 h-16 bg-vhs-green/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;