import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Target } from 'lucide-react';
import Layout from '@/components/Layout';

const About = () => {
  const team = [
    {
      name: 'Marcus Johnson',
      role: 'Master Barber & Owner',
      experience: '15 years',
      description: 'Marcus founded Elite Cuts with a vision to blend traditional barbering with modern techniques.'
    },
    {
      name: 'Diego Martinez',
      role: 'Senior Stylist',
      experience: '8 years',
      description: 'Specializes in contemporary cuts and beard styling. Known for his attention to detail.'
    },
    {
      name: 'James Williams',
      role: 'Barber',
      experience: '5 years',
      description: 'Expert in classic cuts and traditional shaving. Passionate about the craft of barbering.'
    },
    {
      name: 'Alex Chen',
      role: 'Junior Barber',
      experience: '2 years',
      description: 'Rising talent with a fresh perspective on modern styling and customer service.'
    }
  ];

  const stats = [
    { icon: <Award className="h-8 w-8" />, number: '5000+', label: 'Happy Clients' },
    { icon: <Clock className="h-8 w-8" />, number: '9', label: 'Years in Business' },
    { icon: <Users className="h-8 w-8" />, number: '4', label: 'Expert Barbers' },
    { icon: <Target className="h-8 w-8" />, number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Elite Cuts</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Since 2015, Elite Cuts has been the premier destination for discerning gentlemen who demand excellence in grooming. 
              Our commitment to traditional craftsmanship combined with modern techniques has made us a cornerstone of the community.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Elite Cuts was born from a simple vision: to create a space where traditional barbering meets contemporary style. 
                  Founded by Marcus Johnson, a master barber with over 15 years of experience, our shop represents the finest in men's grooming.
                </p>
                <p>
                  We believe that a great haircut is more than just a service – it's an experience. From the moment you walk through our doors, 
                  you'll be treated to exceptional hospitality, expert craftsmanship, and attention to detail that sets us apart.
                </p>
                <p>
                  Our commitment to excellence extends beyond just cutting hair. We use only the finest products, maintain the highest standards 
                  of cleanliness, and continually train our team to stay current with the latest techniques and trends.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-border">
                  <CardContent className="p-0">
                    <div className="text-primary mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="font-heading text-3xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                Our Mission & Values
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 border-border">
                <CardContent className="p-0">
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                    Craftsmanship
                  </h3>
                  <p className="text-muted-foreground">
                    Every cut is a work of art. We take pride in our attention to detail and commitment to perfection.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-8 border-border">
                <CardContent className="p-0">
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                    Community
                  </h3>
                  <p className="text-muted-foreground">
                    We're more than a barbershop – we're a gathering place where friendships are formed and stories are shared.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-8 border-border">
                <CardContent className="p-0">
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                    Excellence
                  </h3>
                  <p className="text-muted-foreground">
                    We never settle for good enough. Every client deserves nothing less than our absolute best.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our skilled barbers bring years of experience and a passion for their craft to every service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-border hover:shadow-gold transition-smooth">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.experience} experience
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;