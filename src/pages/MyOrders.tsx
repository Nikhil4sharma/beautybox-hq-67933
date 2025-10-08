import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, Clock, Truck, CheckCircle } from 'lucide-react';

// Mock orders data - will be replaced with Firebase
const mockOrders = [
  {
    id: 'ORD001',
    date: '2024-01-15',
    total: 2450,
    status: 'delivered',
    items: [
      { name: 'Radiant Glow Serum', quantity: 1, price: 1200 },
      { name: 'Velvet Rose Lipstick', quantity: 2, price: 625 }
    ],
    trackingSteps: [
      { status: 'ordered', date: '2024-01-15', completed: true },
      { status: 'processing', date: '2024-01-16', completed: true },
      { status: 'shipped', date: '2024-01-17', completed: true },
      { status: 'delivered', date: '2024-01-20', completed: true }
    ]
  },
  {
    id: 'ORD002',
    date: '2024-01-20',
    total: 1850,
    status: 'shipped',
    items: [
      { name: 'Luxury Face Cream', quantity: 1, price: 1850 }
    ],
    trackingSteps: [
      { status: 'ordered', date: '2024-01-20', completed: true },
      { status: 'processing', date: '2024-01-21', completed: true },
      { status: 'shipped', date: '2024-01-22', completed: true },
      { status: 'delivered', date: null, completed: false }
    ]
  }
];

const MyOrders = () => {
  const [orders] = useState(mockOrders);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'shipped': return <Truck className="h-5 w-5 text-blue-500" />;
      case 'processing': return <Clock className="h-5 w-5 text-yellow-500" />;
      default: return <Package className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      delivered: 'default',
      shipped: 'secondary',
      processing: 'outline',
      ordered: 'outline'
    };
    return <Badge variant={variants[status] || 'outline'}>{status.toUpperCase()}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">My Orders</h1>

        {orders.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Package className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground mb-4">No orders yet</p>
              <Button onClick={() => window.location.href = '/products'}>
                Start Shopping
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Order #{order.id}
                        {getStatusIcon(order.status)}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Placed on {new Date(order.date).toLocaleDateString('en-IN')}
                      </p>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(order.status)}
                      <p className="text-xl font-bold text-primary mt-2">₹{order.total}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Items</h4>
                    <div className="space-y-2">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span>{item.name} x {item.quantity}</span>
                          <span className="font-medium">₹{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Order Tracking</h4>
                    <div className="relative">
                      {order.trackingSteps.map((step, idx) => (
                        <div key={idx} className="flex gap-4 pb-8 last:pb-0">
                          <div className="relative flex flex-col items-center">
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                              step.completed ? 'bg-primary' : 'bg-muted'
                            }`}>
                              {step.completed ? (
                                <CheckCircle className="h-5 w-5 text-primary-foreground" />
                              ) : (
                                <div className="h-3 w-3 rounded-full bg-muted-foreground" />
                              )}
                            </div>
                            {idx < order.trackingSteps.length - 1 && (
                              <div className={`w-0.5 h-full absolute top-8 ${
                                step.completed ? 'bg-primary' : 'bg-muted'
                              }`} />
                            )}
                          </div>
                          <div className="flex-1 pb-4">
                            <p className="font-medium capitalize">{step.status}</p>
                            {step.date && (
                              <p className="text-sm text-muted-foreground">
                                {new Date(step.date).toLocaleDateString('en-IN')}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
