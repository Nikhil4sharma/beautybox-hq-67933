import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { mockProducts } from '@/lib/mockData';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Sparkles, Heart, Truck, Award, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const featuredProducts = mockProducts.slice(0, 3);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Trusted by 10,000+ Customers</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
              Discover Your <span className="text-primary">Natural Beauty</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Premium beauty products crafted with care for your unique radiance. 100% authentic, cruelty-free products.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-[var(--shadow-elegant)] text-lg h-14 px-8">
                  Shop Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-4 shadow-[var(--shadow-elegant)]">
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Carefully curated products from trusted brands</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/70 mb-4 shadow-[var(--shadow-soft)]">
                <Heart className="w-10 h-10 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cruelty Free</h3>
              <p className="text-muted-foreground">All products are ethically sourced and tested</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/70 mb-4 shadow-[var(--shadow-soft)]">
                <Truck className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Free shipping on orders over ₹500</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 mb-4 shadow-[var(--shadow-soft)]">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Authentic</h3>
              <p className="text-muted-foreground">Genuine products with authenticity guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground">Discover our most loved items</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProducts.map(product => (
              <Card key={product.id} className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-2 hover:border-primary/30">
                <CardContent className="p-0">
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-1 font-medium">{product.category}</p>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        size="sm"
                        className="gap-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline" className="text-lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
