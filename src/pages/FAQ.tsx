import { Navbar } from '@/components/Navbar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is your shipping policy?',
      answer: 'We offer free shipping on orders over ₹500. Orders are typically processed within 1-2 business days and delivered within 5-7 business days across India.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 7-day return policy for unopened products in their original packaging. If you are not satisfied with your purchase, please contact our customer service team to initiate a return.'
    },
    {
      question: 'Are your products authentic?',
      answer: 'Yes, all our products are 100% authentic and sourced directly from authorized distributors and brands. We guarantee the authenticity of every product we sell.'
    },
    {
      question: 'Do you offer cash on delivery?',
      answer: 'Yes, we offer cash on delivery (COD) for orders up to ₹5,000. A small COD handling fee may apply.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can also track your order by logging into your account and visiting the "My Orders" section.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, UPI, net banking, and popular digital wallets. All payments are processed securely.'
    },
    {
      question: 'Are the products cruelty-free?',
      answer: 'We are committed to offering cruelty-free products. Most of our products are not tested on animals. Look for the cruelty-free badge on product pages.'
    },
    {
      question: 'Can I cancel my order?',
      answer: 'Yes, you can cancel your order before it is shipped. Once shipped, you can return the product following our return policy. Please contact customer service for cancellations.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Currently, we only ship within India. We are working on expanding our shipping services internationally in the near future.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support team via email at support@beautybox.com or call us at +91-XXXXXXXXXX. We are available Monday to Saturday, 9 AM to 6 PM IST.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">
            Find answers to common questions about our products and services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <p className="text-primary font-semibold">
            Contact us at support@beautybox.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
