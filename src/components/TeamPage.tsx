import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Linkedin, Award, Users, TrendingUp, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TeamPage() {
  const managementTeam = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      department: 'Executive Leadership',
      experience: '15+ Years',
      location: 'Singapore',
      bio: 'Sarah brings over 15 years of experience in global textile trading and supply chain management. She has led multiple successful expansions across Asian markets and is recognized for her innovative approach to sustainable sourcing.',
      responsibilities: [
        'Strategic business planning and company vision',
        'Global market expansion and partnership development',
        'Sustainable sourcing initiatives and ESG compliance',
        'Stakeholder relations and board communications'
      ],
      education: 'MBA International Business, NUS Singapore',
      certifications: ['Global Trade Professional (GTP)', 'Sustainable Textile Certification'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc1ODE3ODU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Michael Chen',
      position: 'Managing Director',
      department: 'Operations Management',
      experience: '20+ Years',
      location: 'Hong Kong',
      bio: 'Michael is a veteran in international trade with deep expertise in Asian textile markets. His extensive network and relationship-building skills have been instrumental in establishing DW-Bridging as a trusted industry leader.',
      responsibilities: [
        'Overall operational management and execution',
        'Asian market development and supplier relations',
        'Quality assurance and compliance management',
        'Cross-functional team leadership and coordination'
      ],
      education: 'Master in International Trade, University of Hong Kong',
      certifications: ['Certified International Trade Professional', 'ISO 9001 Lead Auditor'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTgxNzg1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'David Kim',
      position: 'Chief Financial Officer',
      department: 'Finance & Administration',
      experience: '12+ Years',
      location: 'Singapore',
      bio: 'David oversees all financial operations with expertise in international finance, risk management, and strategic financial planning. His analytical approach ensures optimal financial performance and sustainable growth.',
      responsibilities: [
        'Financial planning, analysis and reporting',
        'Risk management and internal controls',
        'Banking relationships and capital management',
        'Budgeting, forecasting and investment decisions'
      ],
      education: 'CPA, Bachelor of Accountancy, SMU Singapore',
      certifications: ['Chartered Financial Analyst (CFA)', 'Certified Risk Manager (CRM)'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0fGVufDF8fHx8MTc1ODE3ODU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Vice President of Sourcing',
      department: 'Procurement & Sourcing',
      experience: '14+ Years',
      location: 'Mumbai',
      bio: 'Emily leads our global sourcing operations with deep knowledge of textile manufacturing across Asia. Her expertise in supplier development and cost optimization has been crucial to our competitive advantage.',
      responsibilities: [
        'Global sourcing strategy and supplier development',
        'Cost analysis and price negotiation',
        'Market research and trend analysis',
        'Supplier audit and performance management'
      ],
      education: 'Master in Supply Chain Management, IIM Mumbai',
      certifications: ['Certified Professional in Supply Management (CPSM)', 'Lean Six Sigma Black Belt'],
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc1ODE3ODU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'James Wu',
      position: 'Director of Quality Assurance',
      department: 'Quality Control',
      experience: '16+ Years',
      location: 'Guangzhou',
      bio: 'James ensures the highest quality standards across all our textile products. His comprehensive quality management system has maintained our reputation for excellence and zero-defect delivery.',
      responsibilities: [
        'Quality management system development',
        'Testing protocols and certification compliance',
        'Supplier quality audits and assessments',
        'Continuous improvement and process optimization'
      ],
      education: 'Master in Textile Engineering, South China University',
      certifications: ['ASQ Certified Quality Manager', 'OEKO-TEX Certified Inspector'],
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMG1hbnxlbnwxfHx8fDE3NTgxNzg1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Lisa Thompson',
      position: 'Head of Business Development',
      department: 'Sales & Marketing',
      experience: '11+ Years',
      location: 'Bangkok',
      bio: 'Lisa drives our business growth through strategic client relationships and market expansion. Her deep understanding of customer needs and market dynamics has significantly contributed to our revenue growth.',
      responsibilities: [
        'New business development and client acquisition',
        'Strategic partnership negotiations',
        'Market expansion and competitive analysis',
        'Customer relationship management and retention'
      ],
      education: 'MBA Marketing, Chulalongkorn University Bangkok',
      certifications: ['Certified Sales Professional (CSP)', 'Digital Marketing Certification'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc1ODE3ODU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Robert Patel',
      position: 'Director of Operations',
      department: 'Logistics & Operations',
      experience: '13+ Years',
      location: 'Dubai',
      bio: 'Robert manages our complex logistics operations and supply chain coordination. His expertise in international shipping and customs regulations ensures seamless delivery to clients worldwide.',
      responsibilities: [
        'Supply chain operations and logistics management',
        'Shipping coordination and customs compliance',
        'Inventory management and warehouse operations',
        'Process improvement and cost optimization'
      ],
      education: 'Master in Logistics Management, American University Dubai',
      certifications: ['Certified Supply Chain Professional (CSCP)', 'International Commercial Terms Expert'],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBtYW58ZW58MXx8fHwxNzU4MTc4NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Anna Nakamura',
      position: 'Head of Product Development',
      department: 'Innovation & Design',
      experience: '10+ Years',
      location: 'Tokyo',
      bio: 'Anna leads our product innovation initiatives with a focus on sustainable and high-performance textiles. Her design thinking approach has resulted in several breakthrough products and industry recognition.',
      responsibilities: [
        'Product innovation and development strategy',
        'Trend forecasting and market research',
        'Sustainable material development',
        'Design collaboration and technical specifications'
      ],
      education: 'Master in Textile Design, Bunka Fashion College Tokyo',
      certifications: ['Sustainable Design Professional', 'Innovation Management Certification'],
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMHdvbWFufGVufDF8fHx8MTc1ODE3ODU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const departments = [
    {
      name: 'Sourcing & Procurement',
      headCount: 25,
      description: 'Expert team specializing in identifying and qualifying suppliers across Asia Pacific',
      icon: Globe,
      specialties: ['Supplier Evaluation', 'Cost Negotiation', 'Market Research', 'Risk Assessment']
    },
    {
      name: 'Quality Assurance',
      headCount: 18,
      description: 'Dedicated professionals ensuring product quality and compliance standards',
      icon: Award,
      specialties: ['Testing Protocols', 'Compliance Management', 'Process Improvement', 'Certification']
    },
    {
      name: 'Operations & Logistics',
      headCount: 22,
      description: 'Streamlining supply chain operations and ensuring timely deliveries',
      icon: TrendingUp,
      specialties: ['Supply Chain Management', 'Inventory Control', 'Shipping Coordination', 'Documentation']
    },
    {
      name: 'Product Development',
      headCount: 15,
      description: 'Innovation-focused team developing new products and solutions',
      icon: Users,
      specialties: ['Trend Analysis', 'Material Innovation', 'Product Design', 'Market Testing']
    }
  ];

  const stats = [
    { number: '80+', label: 'Team Members', description: 'Professionals across all departments' },
    { number: '8', label: 'Management Staff', description: 'Senior leadership positions' },
    { number: '12', label: 'Nationalities', description: 'Diverse cultural perspectives' },
    { number: '8', label: 'Office Locations', description: 'Strategic presence across Asia' },
    { number: '95%', label: 'Retention Rate', description: 'Employee satisfaction and loyalty' },
    { number: '150+', label: 'Years Combined', description: 'Management team experience' }
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' }}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl mb-6">Meet Our Team</h1>
              <p className="text-xl leading-relaxed">
                Behind every successful partnership is a dedicated team of professionals who bring passion, 
                expertise, and innovation to the textile industry. Our diverse team spans multiple countries 
                and cultures, united by a shared commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Statistics */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Our Team by Numbers</h2>
            <p className="text-lg text-muted-foreground">
              A snapshot of our global workforce
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-4xl mb-2 text-primary font-bold">{stat.number}</h3>
                    <p className="font-medium mb-2">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Management Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our experienced management team combines decades of textile industry expertise with innovative 
              leadership to drive DW-Bridging's continued success in global markets
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Professional Photo */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                      <p className="text-white/90 text-sm mb-1">{member.position}</p>
                      <p className="text-white/70 text-xs">{member.department}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                        {member.experience}
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    {/* Location */}
                    <div className="flex items-center mb-4 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {member.location}
                    </div>

                    {/* Bio */}
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1">
                      {member.bio}
                    </p>
                    
                    {/* Key Responsibilities */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-primary text-sm">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {member.responsibilities.slice(0, 3).map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Education & Certifications */}
                    <div className="space-y-3 mb-4">
                      <div>
                        <h5 className="font-medium text-xs text-primary mb-1">Education:</h5>
                        <p className="text-xs text-muted-foreground">{member.education}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-xs text-primary mb-1">Certifications:</h5>
                        <div className="flex flex-wrap gap-1">
                          {member.certifications.map((cert, certIndex) => (
                            <span key={certIndex} className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Contact Actions */}
                    <div className="flex space-x-2 mt-auto">
                      <Button variant="outline" size="sm" className="flex items-center text-xs flex-1">
                        <Mail className="h-3 w-3 mr-1" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center text-xs flex-1">
                        <Linkedin className="h-3 w-3 mr-1" />
                        Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Our Departments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized teams working together to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-primary/10 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                        <dept.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{dept.name}</h3>
                        <p className="text-sm text-muted-foreground">{dept.headCount} Team Members</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">{dept.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Specialties:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {dept.specialties.map((specialty, specialtyIndex) => (
                          <motion.div
                            key={specialty}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + specialtyIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {specialty}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6">Join Our Growing Team</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for excellence 
              and innovation in the textile industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="px-8 py-4"
              >
                View Open Positions
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4"
              >
                Learn About Our Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}