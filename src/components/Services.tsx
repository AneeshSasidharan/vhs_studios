import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Video, Calendar, Building, Heart, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: 'Digital Photography',
      description: 'Professional portrait, product, and artistic photography with state-of-the-art equipment.',
      features: ['Portrait Sessions', 'Product Photography', 'Fashion Shoots', 'Architectural Photography']
    },
    {
      icon: Video,
      title: 'Videography',
      description: 'High-quality video production from concept to final edit for all your visual storytelling needs.',
      features: ['Commercial Videos', 'Promotional Content', 'Documentary Style', 'Creative Storytelling']
    },
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Capture your special day with artistic flair and emotional depth that tells your unique love story.',
      features: ['Pre-Wedding Shoots', 'Ceremony Coverage', 'Reception Documentation', 'Couple Portraits']
    },
    {
      icon: Building,
      title: 'Corporate Events',
      description: 'Professional documentation of your business events, conferences, and corporate gatherings.',
      features: ['Conference Coverage', 'Team Photography', 'Product Launches', 'Corporate Portraits']
    },
    {
      icon: Calendar,
      title: 'Event Coverage',
      description: 'Comprehensive coverage of special occasions, parties, and milestone celebrations.',
      features: ['Birthday Parties', 'Anniversaries', 'Cultural Events', 'Private Celebrations']
    },
    {
      icon: Users,
      title: 'Group Sessions',
      description: 'Family portraits, team photos, and group sessions tailored to capture relationships and connections.',
      features: ['Family Portraits', 'Team Building', 'Group Dynamics', 'Community Events']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate portraits to grand corporate events, we provide comprehensive 
            photography and videography services tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-card hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-vhs-light" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-vhs-green transition-colors duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;