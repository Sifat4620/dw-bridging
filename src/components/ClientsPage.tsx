import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Users, Globe, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

export function ClientsPage() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'Global Fashion Inc.',
      role: 'Procurement Director',
      rating: 5,
      quote: 'DW-Bridging has been instrumental in streamlining our supply chain. Their expertise in textile sourcing and commitment to quality has helped us reduce costs while maintaining high standards.',
      initials: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'EcoTextile Solutions',
      role: 'CEO',
      rating: 5,
      quote: 'Working with DW-Bridging has transformed our business. Their sustainable sourcing options and innovative approach to textile trading align perfectly with our environmental goals.',
      initials: 'MR'
    },
    {
      name: 'Dr. Priya Patel',
      company: 'Asian Manufacturing Group',
      role: 'Head of Operations',
      rating: 5,
      quote: 'The team at DW-Bridging understands the complexities of global textile markets. Their reliability and deep industry knowledge make them our preferred sourcing partner.',
      initials: 'PP'
    },
    {
      name: 'James Thompson',
      company: 'Premium Fabrics Ltd.',
      role: 'Supply Chain Manager',
      rating: 5,
      quote: 'DW-Bridging consistently delivers on their promises. Their quality control processes and timely delivery have been crucial to our success in the competitive textile market.',
      initials: 'JT'
    },
    {
      name: 'Liu Wei',
      company: 'Shanghai Textile Corp',
      role: 'International Trade Director',
      rating: 5,
      quote: 'Their extensive network in Asia and deep understanding of local markets have opened new opportunities for our business. Highly recommended for textile sourcing.',
      initials: 'LW'
    },
    {
      name: 'Emma Johnson',
      company: 'Sustainable Apparel Co.',
      role: 'Sustainability Officer',
      rating: 5,
      quote: 'DW-Bridging\'s commitment to sustainable practices and ethical sourcing aligns with our values. They\'ve helped us build a more responsible supply chain.',
      initials: 'EJ'
    }
  ];

  const clientLogos = [
    'Global Fashion Inc.',
    'EcoTextile Solutions',
    'Asian Manufacturing Group',
    'Premium Fabrics Ltd.',
    'Shanghai Textile Corp',
    'Sustainable Apparel Co.',
    'International Yarn Trading',
    'Modern Mills Group',
    'Textile Innovations Ltd.',
    'Quality Fabrics International',
    'Green Thread Company',
    'Advanced Materials Corp'
  ];

  const stats = [
    { icon: Users, number: '200+', label: 'Satisfied Clients' },
    { icon: Globe, number: '25+', label: 'Countries Served' },
    { icon: Award, number: '98%', label: 'Client Retention Rate' },
    { icon: TrendingUp, number: '15+', label: 'Years of Excellence' }
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
            <h1 className="text-5xl mb-6">Our Clients</h1>
            <p className="text-xl leading-relaxed">
              Trusted by leading companies worldwide for textile sourcing and supply chain solutions. 
              Our commitment to excellence has built lasting partnerships across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Client Success Metrics</h2>
            <p className="text-lg text-muted-foreground">
              Our track record speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <stat.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl mb-2 text-primary">{stat.number}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the companies that trust DW-Bridging for their textile sourcing needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-primary/20 mr-2" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-primary">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-muted-foreground">
              A selection of companies that choose DW-Bridging as their textile sourcing partner
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="h-16 flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="text-lg text-primary">
                          {company.split(' ').map(word => word[0]).join('').substring(0, 2)}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {company}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real partnerships. See how we've helped businesses transform their supply chains.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl mb-4">Supply Chain Optimization</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A leading fashion retailer reduced their sourcing costs by 25% while improving quality standards 
                    through our comprehensive supply chain management solutions.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <h4 className="text-2xl text-primary">25%</h4>
                      <p className="text-sm text-muted-foreground">Cost Reduction</p>
                    </div>
                    <div>
                      <h4 className="text-2xl text-primary">40%</h4>
                      <p className="text-sm text-muted-foreground">Faster Delivery</p>
                    </div>
                    <div>
                      <h4 className="text-2xl text-primary">99%</h4>
                      <p className="text-sm text-muted-foreground">Quality Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl mb-4">Sustainable Sourcing Initiative</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    An eco-conscious apparel brand achieved their sustainability goals through our certified 
                    organic and recycled material sourcing program.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <h4 className="text-2xl text-primary">100%</h4>
                      <p className="text-sm text-muted-foreground">Certified Materials</p>
                    </div>
                    <div>
                      <h4 className="text-2xl text-primary">60%</h4>
                      <p className="text-sm text-muted-foreground">Carbon Reduction</p>
                    </div>
                    <div>
                      <h4 className="text-2xl text-primary">15</h4>
                      <p className="text-sm text-muted-foreground">New Markets</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6">Join Our Success Stories</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Ready to transform your textile sourcing? Let's discuss how DW-Bridging can help your business achieve its goals.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-primary-foreground text-primary px-8 py-4 rounded-lg hover:bg-primary-foreground/90 transition-colors">
                Start Your Success Story
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}