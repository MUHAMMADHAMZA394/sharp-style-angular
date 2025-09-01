import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scissors, ShieldCheck, Sparkles, Crown, Package, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: 'Classic Haircut',
      price: '$35',
      duration: '30 min',
      description: 'Traditional precision cut tailored to your face shape and personal style. Includes wash and basic styling.',
      features: ['Consultation', 'Wash & Cut', 'Basic Styling', 'Hot Towel Finish']
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: 'Beard Trim & Shape',
      price: '$25',
      duration: '20 min',
      description: 'Expert beard trimming and shaping to complement your facial features and maintain a polished look.',
      features: ['Beard Analysis', 'Precision Trimming', 'Shape & Contour', 'Beard Oil Application']
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Traditional Shave',
      price: '$40',
      duration: '45 min',
      description: 'Luxurious hot towel shave using traditional techniques and premium products for the smoothest finish.',
      features: ['Hot Towel Prep', 'Straight Razor Shave', 'Moisturizing Treatment', 'Cologne Application']
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: 'Premium Styling',
      price: '$50',
      duration: '40 min',
      description: 'Complete styling service including cut, wash, and professional styling for special occasions.',
      features: ['Custom Cut', 'Premium Products', 'Professional Styling', 'Finishing Touches']
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: 'The Full Service',
      price: '$75',
      duration: '75 min',
      description: 'Our signature complete grooming experience combining haircut, beard trim, and traditional shave.',
      features: ['Haircut & Style', 'Beard Trim', 'Hot Towel Shave', 'Scalp Massage', 'Premium Products'],
      popular: true
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Father & Son',
      price: '$60',
      duration: '60 min',
      description: 'Special package for fathers and sons to enjoy quality grooming time together.',
      features: ['Two Haircuts', 'Styling for Both', 'Family Photos', 'Complimentary Refreshments']
    }
  ];

  const additionalServices = [
    { name: 'Eyebrow Trim', price: '$10' },
    { name: 'Mustache Trim', price: '$8' },
    { name: 'Nose/Ear Hair Trim', price: '$8' },
    { name: 'Hair Wash Only', price: '$15' },
    { name: 'Scalp Treatment', price: '$20' },
    { name: 'Gray Blending', price: '$25' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From classic cuts to premium styling, we offer a full range of professional grooming services 
              designed to help you look and feel your best.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              Signature Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully crafted services, each designed to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative border-border hover:shadow-gold transition-smooth ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="text-primary mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="font-heading text-2xl text-foreground">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-center justify-center space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {service.price}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${service.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={service.popular ? 'default' : 'outline'}
                  >
                    <Link to="/booking">Book This Service</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Enhance your experience with our complementary grooming services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="border-border hover:shadow-gold transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{service.name}</span>
                      <span className="text-primary font-semibold">{service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose your preferred service and book your appointment online. We'll take care of the rest.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            <Link to="/booking">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;