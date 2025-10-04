import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, FileText, Video, BookOpen, Download, Globe, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from './LanguageContext';

export function OnlineResourcesPage() {
  const { t } = useLanguage();

  const resourceCategories = [
    {
      title: 'Industry Reports & Studies',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      resources: [
        {
          title: 'Global Textile Market Analysis 2024',
          description: 'Comprehensive market analysis covering trends, growth projections, and key players in the global textile industry.',
          type: 'PDF Report',
          link: '#',
          badge: 'New'
        },
        {
          title: 'Sustainable Textile Manufacturing Guide',
          description: 'Best practices and innovations in sustainable textile production and eco-friendly materials.',
          type: 'White Paper',
          link: '#',
          badge: 'Popular'
        },
        {
          title: 'Supply Chain Optimization Strategies',
          description: 'Strategic approaches to optimizing textile supply chains for efficiency and cost reduction.',
          type: 'Case Study',
          link: '#',
          badge: null
        }
      ]
    },
    {
      title: 'Educational Videos & Webinars',
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      resources: [
        {
          title: 'Textile Quality Control Masterclass',
          description: 'Learn advanced quality control techniques and testing methods for textile products.',
          type: 'Video Series',
          link: '#',
          badge: 'Featured'
        },
        {
          title: 'Global Sourcing Best Practices',
          description: 'Expert insights on effective international sourcing strategies and supplier management.',
          type: 'Webinar',
          link: '#',
          badge: null
        },
        {
          title: 'Innovation in Textile Manufacturing',
          description: 'Exploring cutting-edge technologies and innovations shaping the future of textiles.',
          type: 'Documentary',
          link: '#',
          badge: 'New'
        }
      ]
    },
    {
      title: 'Reference Materials & Guides',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500',
      resources: [
        {
          title: 'Textile Fiber Reference Handbook',
          description: 'Complete guide to natural and synthetic fibers, their properties, and applications.',
          type: 'Digital Book',
          link: '#',
          badge: 'Essential'
        },
        {
          title: 'International Trade Compliance Guide',
          description: 'Navigate international trade regulations, customs, and compliance requirements.',
          type: 'Reference Guide',
          link: '#',
          badge: null
        },
        {
          title: 'Fabric Testing Standards Manual',
          description: 'Comprehensive manual covering international standards for fabric testing and certification.',
          type: 'Technical Manual',
          link: '#',
          badge: 'Updated'
        }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'Global Textile Trade Statistics 2024',
      description: 'Latest statistics and trends in international textile trade, import/export data, and market insights.',
      image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZGF0YSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTgxNzg1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'Annual Report',
      link: '#'
    },
    {
      title: 'Textile Innovation Summit 2024',
      description: 'Recordings from the latest industry summit featuring expert panels on sustainable manufacturing and technology.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwY29uZmVyZW5jZXxlbnwxfHx8fDE3NTgxNzg1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'Video Collection',
      link: '#'
    }
  ];

  const quickLinks = [
    { title: 'Industry News & Updates', icon: Globe, link: '#' },
    { title: 'Training Programs', icon: Users, link: '#' },
    { title: 'Market Trends', icon: TrendingUp, link: '#' },
    { title: 'Research Database', icon: FileText, link: '#' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-primary/5">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-primary">Online Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Access our comprehensive collection of industry insights, educational materials, and research resources 
              to stay ahead in the global textile market.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="group border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <link.icon className="w-4 h-4 mr-2" />
                  {link.title}
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 text-primary">Featured Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our latest and most valuable resources for textile industry professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{resource.type}</Badge>
                      <Download className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <Button className="group w-full">
                      Access Resource
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-primary">Resource Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our organized collection of educational and professional resources
            </p>
          </motion.div>

          <div className="space-y-16">
            {resourceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white mr-4`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl text-primary mb-2">{category.title}</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent"></div>
                  </div>
                </div>

                {/* Resources Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <motion.div
                      key={resource.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: resourceIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/30 hover:border-l-primary">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline">{resource.type}</Badge>
                            {resource.badge && (
                              <Badge className="bg-primary/10 text-primary border-primary/20">
                                {resource.badge}
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                            {resource.description}
                          </p>
                          <Button variant="outline" size="sm" className="group w-full">
                            Access Resource
                            <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6">Stay Updated with Industry Insights</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest resources, market insights, and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground border-0 focus:ring-2 focus:ring-primary-foreground/20"
              />
              <Button
                variant="secondary"
                size="lg"
                className="px-8"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}