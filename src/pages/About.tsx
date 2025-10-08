import { Navbar } from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Heart, Leaf, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">About BeautyBox</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Your trusted destination for premium beauty products
          </p>

          <div className="mb-16">
            <img 
              src="https://images.unsplash.com/photo-1596704017254-9b121068ac31?w=1200&h=400&fit=crop"
              alt="About BeautyBox"
              className="w-full h-64 object-cover rounded-lg shadow-[var(--shadow-elegant)]"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground">
              At BeautyBox, we believe that everyone deserves to feel confident and beautiful in their own skin. 
              Since our founding, we've been dedicated to curating the finest selection of beauty products from 
              around the world, bringing them directly to your doorstep.
            </p>
            <p className="text-muted-foreground">
              Our mission is simple: to provide high-quality, ethically-sourced beauty products that enhance your 
              natural beauty while being kind to your skin and the environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                    <p className="text-muted-foreground">
                      Every product is carefully selected and tested to meet our high standards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-secondary/10">
                    <Heart className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cruelty-Free</h3>
                    <p className="text-muted-foreground">
                      We're committed to ethical beauty. All our products are never tested on animals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Leaf className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                    <p className="text-muted-foreground">
                      Sustainable packaging and environmentally conscious practices guide everything we do.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Award-Winning</h3>
                    <p className="text-muted-foreground">
                      Recognized for excellence in customer service and product curation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
