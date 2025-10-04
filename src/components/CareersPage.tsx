import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Globe, 
  TrendingUp, 
  Award, 
  MapPin, 
  Clock, 
  DollarSign,
  Briefcase,
  GraduationCap,
  Heart,
  ArrowRight,
  Mail
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Textile Sourcing Manager',
      department: 'Procurement',
      location: 'Hong Kong',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      description: 'Lead our textile sourcing operations across Asia Pacific region. Manage supplier relationships and drive cost optimization initiatives.',
      requirements: [
        '5+ years experience in textile sourcing',
        'Strong knowledge of Asian textile markets',
        'Excellent negotiation skills',
        'Fluent in English and Mandarin'
      ]
    },
    {
      id: 2,
      title: 'Quality Control Specialist',
      department: 'Quality Assurance',
      location: 'Shanghai',
      type: 'Full-time',
      salary: '$45,000 - $65,000',
      description: 'Ensure product quality standards are met throughout the supply chain. Conduct inspections and manage quality protocols.',
      requirements: [
        'Bachelor\'s degree in Textile Engineering or related field',
        '3+ years in quality control',
        'Knowledge of international quality standards',
        'Strong analytical skills'
      ]
    },
    {
      id: 3,
      title: 'Business Development Executive',
      department: 'Sales',
      location: 'Singapore',
      type: 'Full-time',
      salary: '$60,000 - $90,000',
      description: 'Identify and develop new business opportunities. Build relationships with potential clients and expand our market presence.',
      requirements: [
        'MBA or equivalent business qualification',
        'Proven track record in B2B sales',
        'Understanding of textile industry',
        'Excellent communication skills'
      ]
    },
    {
      id: 4,
      title: 'Supply Chain Analyst',
      department: 'Operations',
      location: 'Mumbai',
      type: 'Full-time',
      salary: '$35,000 - $50,000',
      description: 'Analyze supply chain data to optimize operations and identify improvement opportunities. Support strategic planning initiatives.',
      requirements: [
        'Bachelor\'s degree in Supply Chain or related field',
        '2+ years in supply chain analysis',
        'Proficiency in data analysis tools',
        'Strong problem-solving skills'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Professional development opportunities and career advancement'
    },
    {
      icon: Globe,
      title: 'Global Exposure',
      description: 'Work with international teams and travel opportunities'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Continuous learning programs and skill development'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with diverse, talented colleagues'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance-based bonuses and recognition programs'
    }
  ];

  const workEnvironment = [
    'Dynamic work environment',
    'Opportunities to work with global clients',
    'Professional growth and training programs',
    'Competitive compensation packages',
    'Flexible working arrangements',
    'Innovation-driven culture'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

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
            <h1 className="text-5xl mb-6">Join Our Team at DW-Bridging</h1>
            <p className="text-xl leading-relaxed">
              We believe in building strong partnerships not only with clients but also with our people. 
              If you're passionate about textiles, global trade, and supply chain innovation, 
              DW-Bridging offers exciting opportunities for growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a company that values innovation, growth, and making a positive impact in the textile industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <benefit.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Environment */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl mb-6">Our Work Environment</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At DW-Bridging, we foster a culture of collaboration, innovation, and continuous learning. 
                Our diverse team works together to solve complex challenges in the global textile industry.
              </p>
              
              <div className="space-y-4">
                {workEnvironment.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <Card className="p-4 text-center">
                  <CardContent className="p-0">
                    <h3 className="text-2xl text-primary mb-1">150+</h3>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </CardContent>
                </Card>
                <Card className="p-4 text-center">
                  <CardContent className="p-0">
                    <h3 className="text-2xl text-primary mb-1">25+</h3>
                    <p className="text-sm text-muted-foreground">Nationalities</p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="p-4 text-center">
                  <CardContent className="p-0">
                    <h3 className="text-2xl text-primary mb-1">8</h3>
                    <p className="text-sm text-muted-foreground">Global Offices</p>
                  </CardContent>
                </Card>
                <Card className="p-4 text-center">
                  <CardContent className="p-0">
                    <h3 className="text-2xl text-primary mb-1">95%</h3>
                    <p className="text-sm text-muted-foreground">Employee Satisfaction</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Current Openings</h2>
            <p className="text-lg text-muted-foreground">
              Explore exciting career opportunities in the textile industry
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="mt-4 lg:mt-0 group/btn">
                        Apply Now
                        <motion.div
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.div>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    <div>
                      <h4 className="mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Apply Now</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to join our team? Submit your application and we'll get back to you soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="position">Position of Interest</Label>
                      <Select onValueChange={(value) => handleSelectChange('position', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobOpenings.map((job) => (
                            <SelectItem key={job.id} value={job.title}>
                              {job.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select onValueChange={(value) => handleSelectChange('experience', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Cover Letter / Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-2"
                      placeholder="Tell us about yourself and why you're interested in joining DW-Bridging..."
                    />
                  </div>

                  <div className="text-center">
                    <Button type="submit" size="lg" className="group">
                      Submit Application
                      <motion.div
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.div>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      Or email your resume directly to{' '}
                      <a href="mailto:careers@dw-bridging.com" className="text-primary hover:underline">
                        careers@dw-bridging.com
                      </a>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}