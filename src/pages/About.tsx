import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Award, Users, Clock, MapPin, Target } from 'lucide-react';
const About = () => {
  const stats = [{
    icon: Camera,
    number: '500+',
    label: 'Projects Completed'
  }, {
    icon: Users,
    number: '200+',
    label: 'Happy Clients'
  }, {
    icon: Award,
    number: '5+',
    label: 'Years Experience'
  }, {
    icon: Clock,
    number: '24/7',
    label: 'Support Available'
  }];
  const values = [{
    icon: Target,
    title: 'Precision & Quality',
    description: 'We deliver exceptional results with meticulous attention to detail in every shot.'
  }, {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Your vision drives our creativity. We collaborate closely to exceed expectations.'
  }, {
    icon: Camera,
    title: 'Creative Excellence',
    description: 'Innovative techniques and artistic vision combined with technical expertise.'
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-vhs-light">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">VHS Studios</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate storytellers capturing life's most precious moments through the lens of creativity and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Founded in the heart of Dubai, VHS Studio emerged from a passion for capturing the extraordinary in the ordinary. Located in the vibrant Wasl Village of Al Qusais Industrial Area, we've established ourselves as a premier digital photography and media production house.</p>
                <p>
                  Our journey began with a simple belief: every moment has a story worth telling. 
                  Whether it's the joy of a wedding day, the professionalism of a corporate event, 
                  or the intimacy of a portrait session, we bring technical excellence and artistic 
                  vision to every project.
                </p>
                <p>
                  With state-of-the-art equipment and a team of creative professionals, we specialize 
                  in digital photography, videography, and comprehensive event coverage. Our commitment 
                  to quality and innovation has made us the trusted choice for clients across Dubai.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-primary p-1">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Camera className="w-24 h-24 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold text-foreground">Professional Excellence</h3>
                    <p className="text-muted-foreground px-4">
                      Combining artistic vision with technical expertise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
            const Icon = stat.icon;
            return <div key={index} className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                    <Icon className="w-8 h-8 text-vhs-light" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
            const Icon = value.icon;
            return <Card key={index} className="text-center hover:shadow-card transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-secondary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <Icon className="w-8 h-8 text-vhs-light" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-vhs-light">
              Visit Our Studio
            </h2>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-vhs-red" />
              <p className="text-lg">
                Wasl Village, Al Qusais Industrial Area, Dubai, UAE
              </p>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our modern studio is equipped with professional lighting, backdrops, and the latest 
              photography equipment to ensure every session meets the highest standards.
            </p>
          </div>
        </div>
      </section>
    </div>;
};
export default About;