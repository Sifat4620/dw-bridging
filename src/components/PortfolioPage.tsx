import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Building2, 
  Shirt, 
  Code, 
  Globe, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Palette,
  Scissors,
  Monitor,
  Target,
  Shield,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PortfolioPageProps {
  onNavigate?: (page: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const businessDivisions = [
    {
      id: 'stall-fabrication',
      title: 'Exhibition & Stall Fabrication',
      subtitle: 'Professional Exhibition Solutions',
      description: 'We design and fabricate world-class exhibition stalls and trade show booths for international exhibitions and conferences. Our expert team delivers innovative designs with flawless execution.',
      icon: Building2,
      color: 'bg-blue-500',
      features: [
        'Custom Exhibition Stall Design',
        'Professional Installation Services',
        'International Trade Show Solutions',
        'Creative Booth Concepts',
        'Complete Project Management',
        '3D Visualization & Planning'
      ],
      stats: [
        { number: '500+', label: 'Stalls Fabricated' },
        { number: '50+', label: 'Countries Served' },
        { number: '15+', label: 'Years Experience' }
      ],
      highlights: [
        'Award-winning exhibition designs',
        'ISO certified fabrication process',
        'Global installation network',
        '24/7 on-site support'
      ]
    },
    {
      id: 'textile-apparel',
      title: 'Textile & Apparel Sourcing',
      subtitle: 'Global Textile Trading Excellence',
      description: 'Leading textile buying house specializing in global sourcing, supply chain management, and premium textile trading solutions. We connect manufacturers with high-quality suppliers worldwide.',
      icon: Shirt,
      color: 'bg-green-500',
      features: [
        'Global Textile Sourcing',
        'Supply Chain Management',
        'Quality Assurance Programs',
        'Product Development Services',
        'International Logistics',
        'Sustainable Sourcing Solutions'
      ],
      stats: [
        { number: '1000+', label: 'Products Sourced' },
        { number: '25+', label: 'Countries Network' },
        { number: '200+', label: 'Supplier Partners' }
      ],
      highlights: [
        'Certified quality management',
        'Sustainable textile sourcing',
        'End-to-end supply chain',
        'Global logistics network'
      ]
    },
    {
      id: 'software-company',
      title: 'Software Development',
      subtitle: 'Digital Solutions & Technology',
      description: 'Innovative software development company creating cutting-edge digital solutions, web applications, and enterprise software systems. We transform businesses through technology.',
      icon: Code,
      color: 'bg-purple-500',
      features: [
        'Custom Software Development',
        'Web Application Development',
        'Enterprise Solutions',
        'Mobile App Development',
        'Digital Transformation',
        'Cloud & DevOps Services'
      ],
      stats: [
        { number: '100+', label: 'Projects Completed' },
        { number: '20+', label: 'Technologies Used' },
        { number: '50+', label: 'Happy Clients' }
      ],
      highlights: [
        'Agile development methodology',
        'Modern technology stack',
        '24/7 technical support',
        'Scalable cloud solutions'
      ]
    }
  ];

  const companyBenefits = [
    {
      icon: TrendingUp,
      title: 'Proven Growth',
      description: 'Consistent growth across all business divisions with expanding global presence and market leadership'
    },
    {
      icon: Star,
      title: 'Excellence Standards',
      description: 'Maintaining highest quality standards and customer satisfaction across all services and industries'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'International operations with local expertise in key markets across Asia, Europe, and Americas'
    },
    {
      icon: Shield,
      title: 'Trusted Partnership',
      description: 'Long-term relationships built on trust, reliability, and consistent delivery of exceptional results'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Continuous innovation and adoption of latest technologies to stay ahead in competitive markets'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Data-driven approach with measurable outcomes and transparent reporting for all stakeholders'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2">
              Multi-Business Excellence Since 2008
            </Badge>
            
            <h1 className="text-5xl md:text-7xl mb-6">
              DW-Bridging
              <span className="block text-3xl md:text-4xl mt-4 text-white/90 font-normal">
                Three Divisions, One Vision of Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              A diversified business group excelling in Exhibition Fabrication, 
              Textile Sourcing, and Software Development solutions across global markets
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                <Globe className="h-6 w-6" />
                <span className="text-lg">Global Presence</span>
              </div>
              <div className="flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                <Users className="h-6 w-6" />
                <span className="text-lg">150+ Team Members</span>
              </div>
              <div className="flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                <Award className="h-6 w-6" />
                <span className="text-lg">15+ Years Excellence</span>
              </div>
            </div>

            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
              onClick={() => window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' })}
            >
              Explore Our Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Business Divisions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Our Business Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three distinct business divisions working together to deliver comprehensive solutions 
              across multiple industries and markets worldwide
            </p>
          </motion.div>

          <div className="space-y-24">
            {businessDivisions.map((division, index) => (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 ${division.color} rounded-xl shadow-lg`}>
                      <division.icon className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl">{division.title}</h3>
                      <p className="text-lg text-muted-foreground mt-1">{division.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {division.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="text-xl">Core Services</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {division.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h4 className="text-lg mb-3">Key Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {division.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 py-6 border-t border-border">
                    {division.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-3xl text-primary mb-1">{stat.number}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <Card className="overflow-hidden shadow-xl">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <ImageWithFallback
                          src={division.id === 'stall-fabrication' 
                            ? 'https://images.unsplash.com/photo-1721477096049-279d81744700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwc3RhbGwlMjBmYWJyaWNhdGlvbiUyMHRyYWRlJTIwc2hvd3xlbnwxfHx8fDE3NTk2MDA1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
                            : division.id === 'textile-apparel'
                            ? 'https://images.unsplash.com/photo-1753162660069-d4145d9a95f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0ZXh0aWxlJTIwZmFicmljJTIwYXBwYXJlbCUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzU5NjAwNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080'
                            : 'https://images.unsplash.com/photo-1625459201773-9b2386f53ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU5NjAwNTg4fDA&ixlib=rb-4.1.0&q=80&w=1080'
                          }
                          alt={division.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <Badge variant="secondary" className="bg-white/95 text-black mb-3">
                            {division.subtitle}
                          </Badge>
                          <h4 className="text-white text-xl">{division.title}</h4>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Why Choose DW-Bridging Group?</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our diversified portfolio allows us to serve clients across multiple industries 
              with integrated solutions, unmatched expertise, and a commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-0 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <benefit.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Discover how our multi-business expertise can provide comprehensive solutions for your needs. 
              Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => onNavigate?.('about')}
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
              >
                Learn About Our Company
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate?.('careers')}
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
              >
                Join Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};