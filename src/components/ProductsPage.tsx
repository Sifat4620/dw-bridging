import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Package, Layers, Zap, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductsPageProps {
  onNavigate: (page: string, scrollToSection?: string) => void;
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const productCategories = [
    {
      id: 'knits',
      title: 'Knits',
      icon: Package,
      description: 'High-quality knitted fabrics for diverse applications',
      image: 'https://images.unsplash.com/photo-1700170726155-fe844921b8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YXJuJTIwY29sb3JmdWwlMjB0aHJlYWRzfGVufDF8fHx8MTc1ODE3ODU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        overview: 'Our knits portfolio includes a comprehensive range of knitted fabrics sourced from premier manufacturers worldwide. From lightweight jersey to heavy-duty fleece, we provide solutions for every application.',
        applications: ['Apparel Manufacturing', 'Sportswear', 'Undergarments', 'Home Textiles'],
        materials: ['Cotton Knits', 'Polyester Blends', 'Bamboo Knits', 'Merino Wool', 'Performance Fabrics'],
        features: ['Stretch and Recovery', 'Moisture Management', 'Breathability', 'Durability', 'Color Fastness']
      }
    },
    {
      id: 'fiber',
      title: 'Fiber',
      icon: Layers,
      description: 'Premium natural and synthetic fibers',
      image: 'https://images.unsplash.com/photo-1729799750518-f126167d6c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBmaWJlciUyMHdoaXRlfGVufDF8fHx8MTc1ODE3ODU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        overview: 'We source premium natural and synthetic fibers from certified suppliers worldwide. Our fiber portfolio includes sustainable options and innovative materials that meet the highest quality standards.',
        applications: ['Yarn Production', 'Nonwoven Applications', 'Composite Materials', 'Technical Textiles'],
        materials: ['Cotton Fiber', 'Polyester Staple', 'Viscose Fiber', 'Wool Fiber', 'Recycled Fibers'],
        features: ['High Tenacity', 'Consistent Quality', 'Sustainable Options', 'Certified Origins', 'Custom Specifications']
      }
    },
    {
      id: 'yarn',
      title: 'Yarn',
      icon: Zap,
      description: 'Diverse yarn solutions for various textile needs',
      image: 'https://images.unsplash.com/photo-1700170726155-fe844921b8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YXJuJTIwY29sb3JmdWwlMjB0aHJlYWRzfGVufDF8fHx8MTc1ODE3ODU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        overview: 'Our yarn collection spans from basic cotton yarns to sophisticated specialty yarns. We work with leading spinners to provide consistent quality and competitive pricing for all your yarn requirements.',
        applications: ['Fabric Weaving', 'Knitting Applications', 'Embroidery', 'Technical Applications'],
        materials: ['Cotton Yarn', 'Polyester Yarn', 'Blended Yarns', 'Specialty Yarns', 'Technical Yarns'],
        features: ['Consistent Count', 'Low Impurities', 'Good Strength', 'Even Dyeing', 'Reliable Supply']
      }
    },
    {
      id: 'fabrics',
      title: 'Fabrics',
      icon: Palette,
      description: 'Extensive fabric range from basic to specialty',
      image: 'https://images.unsplash.com/photo-1705493625048-f3ae8452d249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjB0ZXh0dXJlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NTgxNjc5NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        overview: 'From basic cotton fabrics to advanced technical textiles, our fabric portfolio covers the entire spectrum of textile applications. We source from certified mills that maintain the highest quality standards.',
        applications: ['Garment Manufacturing', 'Home Furnishing', 'Industrial Applications', 'Medical Textiles'],
        materials: ['Woven Fabrics', 'Knitted Fabrics', 'Non-woven Fabrics', 'Technical Fabrics', 'Specialty Fabrics'],
        features: ['Quality Assurance', 'Wide Color Range', 'Consistent Supply', 'Competitive Pricing', 'Custom Development']
      }
    }
  ];

  const productOverview = [
    {
      category: 'Lifestyle Products',
      items: ['Textiles', 'Home Furnishing', 'Apparel']
    },
    {
      category: 'Consumer Products',
      items: ['Packaged Food', 'Household Items', 'Personal Care']
    },
    {
      category: 'Industrial Products',
      items: ['Yarn', 'Fiber', 'Steel', 'Tires']
    }
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' }}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-5xl mb-6">Our Products</h1>
            <p className="text-xl leading-relaxed mb-8">
              DW-Bridging manages a wide portfolio of products ranging from lifestyle and consumer products 
              (textiles, home furnishing, apparel, packaged food) to industrial products (yarn, fiber, steel, tires).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Product Portfolio Overview</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse product range serves multiple industries and applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {productOverview.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-xl mb-4">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Product Categories */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Featured Product Categories</h2>
            <p className="text-lg text-muted-foreground">
              Explore our core textile product categories
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product.id)}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/40 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <div className="p-2 bg-white/90 backdrop-blur-sm rounded-full">
                        <product.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-2">{product.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    <Button variant="outline" size="sm" className="group/btn">
                      Read More
                      <motion.div
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const product = productCategories.find(p => p.id === selectedProduct);
                if (!product) return null;

                return (
                  <div>
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/40" />
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        ×
                      </button>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h2 className="text-3xl mb-2">{product.title}</h2>
                        <p className="text-lg">{product.description}</p>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl mb-4">Overview</h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {product.details.overview}
                          </p>

                          <h4 className="mb-3">Applications</h4>
                          <ul className="space-y-2">
                            {product.details.applications.map((app) => (
                              <li key={app} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-sm text-muted-foreground">{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="mb-3">Materials</h4>
                          <ul className="space-y-2 mb-6">
                            {product.details.materials.map((material) => (
                              <li key={material} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-sm text-muted-foreground">{material}</span>
                              </li>
                            ))}
                          </ul>

                          <h4 className="mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {product.details.features.map((feature) => (
                              <li key={feature} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                            onClick={() => {
                              setSelectedProduct(null);
                              onNavigate('gallery');
                            }}
                            className="group"
                          >
                            View Gallery
                            <motion.div
                              whileHover={{ x: 3 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.div>
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => {
                              setSelectedProduct(null);
                              // Could add contact functionality here
                            }}
                          >
                            Contact for Pricing
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6">Need Custom Solutions?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team can help you find the perfect products for your specific requirements. 
              Contact us for custom sourcing solutions and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate('services')}
                className="group"
              >
                Explore Our Services
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('clients')}
              >
                View Client Success Stories
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}