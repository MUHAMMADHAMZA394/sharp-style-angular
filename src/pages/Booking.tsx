import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, User, Phone, Mail, Scissors } from 'lucide-react';
import Layout from '@/components/Layout';

const bookingSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  barber: z.string().min(1, 'Please select a barber'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  notes: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
  });

  const services = [
    { value: 'classic-haircut', label: 'Classic Haircut - $35' },
    { value: 'beard-trim', label: 'Beard Trim & Shape - $25' },
    { value: 'traditional-shave', label: 'Traditional Shave - $40' },
    { value: 'premium-styling', label: 'Premium Styling - $50' },
    { value: 'full-service', label: 'The Full Service - $75' },
    { value: 'father-son', label: 'Father & Son Package - $60' },
  ];

  const barbers = [
    { value: 'marcus', label: 'Marcus Johnson (Master Barber)' },
    { value: 'diego', label: 'Diego Martinez (Senior Stylist)' },
    { value: 'james', label: 'James Williams (Barber)' },
    { value: 'alex', label: 'Alex Chen (Junior Barber)' },
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  const onSubmit = async (data: BookingForm) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Booking data:', data);
      toast({
        title: "Booking Confirmed!",
        description: "We've received your appointment request. You'll receive a confirmation email shortly.",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  // Generate next 30 days for date selection
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip Sundays (0) and Mondays (1) - assuming closed
      if (date.getDay() !== 0) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })
        });
      }
    }
    return dates;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl font-bold text-foreground mb-6">
              Book Your <span className="text-primary">Appointment</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Schedule your visit with Elite Cuts and experience the finest in professional grooming. 
              Choose your preferred service, barber, and time that works for you.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl text-foreground flex items-center">
                      <Scissors className="h-6 w-6 text-primary mr-2" />
                      Appointment Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="font-heading font-semibold text-foreground flex items-center">
                          <User className="h-5 w-5 text-primary mr-2" />
                          Personal Information
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              {...register('firstName')}
                              placeholder="John"
                              className={errors.firstName ? 'border-destructive' : ''}
                            />
                            {errors.firstName && (
                              <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              {...register('lastName')}
                              placeholder="Doe"
                              className={errors.lastName ? 'border-destructive' : ''}
                            />
                            {errors.lastName && (
                              <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email" className="flex items-center">
                              <Mail className="h-4 w-4 mr-1" />
                              Email
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              {...register('email')}
                              placeholder="john.doe@email.com"
                              className={errors.email ? 'border-destructive' : ''}
                            />
                            {errors.email && (
                              <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="phone" className="flex items-center">
                              <Phone className="h-4 w-4 mr-1" />
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              {...register('phone')}
                              placeholder="(555) 123-4567"
                              className={errors.phone ? 'border-destructive' : ''}
                            />
                            {errors.phone && (
                              <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div className="space-y-4">
                        <h3 className="font-heading font-semibold text-foreground flex items-center">
                          <Scissors className="h-5 w-5 text-primary mr-2" />
                          Service & Preferences
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="service">Select Service</Label>
                            <Select onValueChange={(value) => setValue('service', value)}>
                              <SelectTrigger className={errors.service ? 'border-destructive' : ''}>
                                <SelectValue placeholder="Choose a service" />
                              </SelectTrigger>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service.value} value={service.value}>
                                    {service.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.service && (
                              <p className="text-destructive text-sm mt-1">{errors.service.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="barber">Preferred Barber</Label>
                            <Select onValueChange={(value) => setValue('barber', value)}>
                              <SelectTrigger className={errors.barber ? 'border-destructive' : ''}>
                                <SelectValue placeholder="Choose a barber" />
                              </SelectTrigger>
                              <SelectContent>
                                {barbers.map((barber) => (
                                  <SelectItem key={barber.value} value={barber.value}>
                                    {barber.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.barber && (
                              <p className="text-destructive text-sm mt-1">{errors.barber.message}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Date & Time */}
                      <div className="space-y-4">
                        <h3 className="font-heading font-semibold text-foreground flex items-center">
                          <Calendar className="h-5 w-5 text-primary mr-2" />
                          Date & Time
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="date">Select Date</Label>
                            <Select onValueChange={(value) => setValue('date', value)}>
                              <SelectTrigger className={errors.date ? 'border-destructive' : ''}>
                                <SelectValue placeholder="Choose a date" />
                              </SelectTrigger>
                              <SelectContent>
                                {getAvailableDates().map((date) => (
                                  <SelectItem key={date.value} value={date.value}>
                                    {date.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.date && (
                              <p className="text-destructive text-sm mt-1">{errors.date.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="time" className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              Select Time
                            </Label>
                            <Select onValueChange={(value) => setValue('time', value)}>
                              <SelectTrigger className={errors.time ? 'border-destructive' : ''}>
                                <SelectValue placeholder="Choose a time" />
                              </SelectTrigger>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.time && (
                              <p className="text-destructive text-sm mt-1">{errors.time.message}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                          id="notes"
                          {...register('notes')}
                          placeholder="Any special requests or notes for your barber..."
                          rows={3}
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        {isSubmitting ? 'Booking Appointment...' : 'Book Appointment'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Info Sidebar */}
              <div className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-foreground">
                      Booking Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Business Hours</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-7PM</p>
                        <p className="text-sm text-muted-foreground">Sat: 8AM-6PM</p>
                        <p className="text-sm text-muted-foreground">Sun: 10AM-4PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Need Help?</p>
                        <p className="text-sm text-muted-foreground">Call us at (555) 123-4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-foreground">
                      Cancellation Policy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Please provide at least 24 hours notice for cancellations. 
                      Same-day cancellations may be subject to a fee. 
                      We appreciate your understanding.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;