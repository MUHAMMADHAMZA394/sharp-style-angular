import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors, Clock, Star, Users } from 'lucide-react';
import heroImage from '@/assets/hero-barbershop.jpg';
import Layout from '@/components/Layout';

const Home = () => {
  const features = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: 'Expert Cuts',
      description: 'Professional stylists with years of experience crafting the perfect look for every client.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Quick Service',
      description: 'Efficient service without compromising quality. Most cuts completed in 30 minutes.'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Premium Products',
      description: 'We use only the finest grooming products and tools for exceptional results.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'All Ages Welcome',
      description: 'From kids to seniors, we provide excellent service for clients of all ages.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
            Elite <span className="text-primary">Cuts</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Where tradition meets modern style. Experience the finest in men's grooming and barbershop services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Link to="/booking">Book Appointment</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="px-8 py-3">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              Why Choose Elite Cuts?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional barbershop services in a comfortable, professional environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 border-border hover:shadow-gold transition-smooth">
                <CardContent className="p-0">
                  <div className="text-primary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Ready for Your Perfect Cut?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the Elite Cuts difference. Professional service, premium products, unmatched results.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            <Link to="/booking">Schedule Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;