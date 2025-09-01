import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dummy gallery data
  const galleryItems = [
    { id: 1, category: 'Classic Cuts', title: 'Traditional Fade', image: '/api/placeholder/400/400' },
    { id: 2, category: 'Modern Styles', title: 'Textured Crop', image: '/api/placeholder/400/400' },
    { id: 3, category: 'Beard Work', title: 'Full Beard Trim', image: '/api/placeholder/400/400' },
    { id: 4, category: 'Classic Cuts', title: 'Side Part', image: '/api/placeholder/400/400' },
    { id: 5, category: 'Modern Styles', title: 'Pompadour', image: '/api/placeholder/400/400' },
    { id: 6, category: 'Beard Work', title: 'Goatee Style', image: '/api/placeholder/400/400' },
    { id: 7, category: 'Classic Cuts', title: 'Buzz Cut', image: '/api/placeholder/400/400' },
    { id: 8, category: 'Modern Styles', title: 'Quiff Style', image: '/api/placeholder/400/400' },
    { id: 9, category: 'Beard Work', title: 'Mustache Trim', image: '/api/placeholder/400/400' },
    { id: 10, category: 'Classic Cuts', title: 'Crew Cut', image: '/api/placeholder/400/400' },
    { id: 11, category: 'Modern Styles', title: 'Undercut', image: '/api/placeholder/400/400' },
    { id: 12, category: 'Beard Work', title: 'Beard Shaping', image: '/api/placeholder/400/400' },
  ];

  const categories = ['All', 'Classic Cuts', 'Modern Styles', 'Beard Work'];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of exceptional haircuts, styling, and grooming work. 
              See the craftsmanship and attention to detail that sets Elite Cuts apart.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-smooth font-medium ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-primary/10 border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-border hover:shadow-gold transition-smooth cursor-pointer">
                <div className="relative aspect-square overflow-hidden">
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <div className="w-8 h-8 bg-primary/40 rounded"></div>
                      </div>
                      <p className="text-muted-foreground font-medium">{item.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              Before & After Transformations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the dramatic transformations our skilled barbers create. Every client leaves looking and feeling their absolute best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="border-border hover:shadow-gold transition-smooth">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="aspect-square bg-muted rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-muted-foreground">Before</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Before</p>
                    </div>
                    <div className="text-center">
                      <div className="aspect-square bg-muted rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-primary">After</span>
                      </div>
                      <p className="text-sm text-muted-foreground">After</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      Transformation {item}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Complete makeover with modern styling
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              Follow Us on Instagram
            </h2>
            <p className="text-xl text-muted-foreground">
              @elitecutsbarbershop - Stay updated with our latest work and behind-the-scenes content.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[...Array(12)].map((_, index) => (
              <Card key={index} className="aspect-square overflow-hidden border-border hover:shadow-gold transition-smooth cursor-pointer group">
                <div className="w-full h-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <div className="w-8 h-8 bg-primary/20 rounded group-hover:bg-primary/40 transition-colors"></div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all"
            >
              Follow @elitecutsbarbershop
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;