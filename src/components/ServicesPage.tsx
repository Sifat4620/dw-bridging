import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Truck, 
  Factory, 
  ClipboardCheck, 
  Shield, 
  TrendingUp, 
  Palette,
  Search,
  Settings,
  Award,
  Globe,
  Send,
  CheckCircle,
  User,
  Building,
  Package,
  Clock,
  DollarSign,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';
import { toast } from 'sonner@2.0.3';

export function ServicesPage() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    productType: '',
    quantity: '',
    timeline: '',
    budget: '',
    requirements: ''
  });

  // Check if we should highlight the form (when scrolled to)
  useEffect(() => {
    const checkIfScrolledToForm = () => {
      const formElement = document.getElementById('quote-form');
      if (formElement) {
        const rect = formElement.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        
        if (isVisible && !isHighlighted) {
          setIsHighlighted(true);
          // Remove highlight after animation
          setTimeout(() => setIsHighlighted(false), 2000);
        }
      }
    };

    // Check on mount (in case user navigated directly to this section)
    setTimeout(checkIfScrolledToForm, 600);
    
    // Check on scroll
    window.addEventListener('scroll', checkIfScrolledToForm);
    return () => window.removeEventListener('scroll', checkIfScrolledToForm);
  }, [isHighlighted]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['name', 'email', 'company', 'productType'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast.error(`Please fill in required fields: ${missingFields.join(', ')}`);
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast.success(t('quote.success.message'));
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        productType: '',
        quantity: '',
        timeline: '',
        budget: '',
        requirements: ''
      });
    }, 3000);
  };

  const mainServices = [
    {
      icon: Truck,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain solutions ensuring seamless operations from sourcing to delivery.',
      features: ['Product Sourcing', 'Factory Allocation', 'Order Management', 'Quality Control'],
      image: 'https://images.unsplash.com/photo-1669699282653-42520fda41f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFicmljJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc1ODE3ODU0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: TrendingUp,
      title: 'Product Development',
      description: 'Innovative product development services to keep you ahead of market trends.',
      features: ['Trend Forecasting', 'Design Consultation', 'Material Innovation', 'Prototype Development'],
      image: 'https://images.unsplash.com/photo-1700170726155-fe844921b8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YXJuJTIwY29sb3JmdWwlMjB0aHJlYWRzfGVufDF8fHx8MTc1ODE3ODU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const detailedServices = [
    {
      icon: Search,
      title: 'Product Sourcing',
      description: 'Expert sourcing of high-quality textiles and raw materials from trusted suppliers worldwide.'
    },
    {
      icon: Factory,
      title: 'Factory Allocation',
      description: 'Strategic placement of orders with the most suitable manufacturing facilities for optimal results.'
    },
    {
      icon: ClipboardCheck,
      title: 'Order Management',
      description: 'Comprehensive order tracking and management from placement to delivery.'
    },
    {
      icon: Shield,
      title: 'Quality Control',
      description: 'Rigorous quality assurance processes to ensure products meet the highest standards.'
    },
    {
      icon: TrendingUp,
      title: 'Trend Forecasting',
      description: 'Market analysis and trend prediction to keep your products ahead of the curve.'
    },
    {
      icon: Palette,
      title: 'Design Consultation',
      description: 'Expert design guidance and consultation for product development and innovation.'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: '15+ years of experience in textile trading and sourcing'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive supplier network across Asia and beyond'
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored services to meet your specific business needs'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and compliance standards'
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
            <h1 className="text-5xl mb-6">Our Services</h1>
            <p className="text-xl leading-relaxed">
              Comprehensive textile sourcing and supply chain solutions tailored to your business needs. 
              We provide end-to-end services that streamline operations and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Core Service Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive service portfolio covers every aspect of textile sourcing and supply chain management
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/30" />
                    <div className="absolute top-6 left-6">
                      <div className="p-3 bg-white/90 backdrop-blur-sm rounded-full">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-2xl mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
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

      {/* Detailed Services Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Detailed Service Breakdown</h2>
            <p className="text-lg text-muted-foreground">
              Each service is designed to address specific aspects of your textile sourcing needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Why Choose DW-Bridging?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and client satisfaction sets us apart in the textile trading industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
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
                      <div className="p-4 bg-primary/10 rounded-full">
                        <reason.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg mb-3">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure every project is executed flawlessly, from initial consultation to final delivery. Our process is designed to minimize risks while maximizing value for our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">1</div>
                <div>
                  <h3 className="text-lg mb-2">Consultation & Requirements Analysis</h3>
                  <p className="text-muted-foreground text-sm">We understand your specific needs and develop a customized sourcing strategy.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">2</div>
                <div>
                  <h3 className="text-lg mb-2">Supplier Identification & Evaluation</h3>
                  <p className="text-muted-foreground text-sm">We leverage our network to identify the best suppliers for your requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">3</div>
                <div>
                  <h3 className="text-lg mb-2">Quality Assurance & Order Management</h3>
                  <p className="text-muted-foreground text-sm">Rigorous quality checks and seamless order processing ensure excellence.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">4</div>
                <div>
                  <h3 className="text-lg mb-2">Delivery & Ongoing Support</h3>
                  <p className="text-muted-foreground text-sm">Timely delivery with continued support for your business growth.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1684259499086-93cb3e555803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU4MTc4NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Textile production process"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section 
        id="quote-form" 
        className={`py-20 bg-gradient-to-br from-primary/5 to-accent transition-all duration-1000 ${
          isHighlighted ? 'ring-4 ring-primary/30 ring-offset-4' : ''
        }`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">{t('quote.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('quote.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className={`overflow-hidden shadow-xl border-2 transition-all duration-500 ${
              isHighlighted 
                ? 'border-primary/50 shadow-2xl shadow-primary/20' 
                : 'border-primary/10 hover:border-primary/20'
            }`}>
              {isSubmitted ? (
                // Success State
                <div className="p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl mb-4 text-green-600">{t('quote.success.title')}</h3>
                  <p className="text-muted-foreground mb-6">{t('quote.success.message')}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Processing your request...</span>
                  </div>
                </div>
              ) : (
                // Form State
                <form onSubmit={handleSubmit} className="p-8">
                  {/* Personal Information Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-6">
                      <User className="h-6 w-6 text-primary mr-3" />
                      <h3 className="text-xl">{t('quote.form.personalInfo')}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          {t('quote.form.name')} *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="bg-input-background"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {t('quote.form.email')} *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-input-background"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          {t('quote.form.phone')}
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-input-background"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">
                          {t('quote.form.company')} *
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="bg-input-background"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="position">
                          {t('quote.form.position')}
                        </Label>
                        <Input
                          id="position"
                          value={formData.position}
                          onChange={(e) => handleInputChange('position', e.target.value)}
                          className="bg-input-background"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-6">
                      <Package className="h-6 w-6 text-primary mr-3" />
                      <h3 className="text-xl">{t('quote.form.projectDetails')}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="productType">
                          {t('quote.form.productType')} *
                        </Label>
                        <Select
                          value={formData.productType}
                          onValueChange={(value) => handleInputChange('productType', value)}
                          required
                        >
                          <SelectTrigger className="bg-input-background">
                            <SelectValue placeholder={`Select ${t('quote.form.productType')}`} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fabric">{t('quote.form.productType.fabric')}</SelectItem>
                            <SelectItem value="yarn">{t('quote.form.productType.yarn')}</SelectItem>
                            <SelectItem value="apparel">{t('quote.form.productType.apparel')}</SelectItem>
                            <SelectItem value="accessories">{t('quote.form.productType.accessories')}</SelectItem>
                            <SelectItem value="other">{t('quote.form.productType.other')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="quantity">
                          {t('quote.form.quantity')}
                        </Label>
                        <Input
                          id="quantity"
                          value={formData.quantity}
                          onChange={(e) => handleInputChange('quantity', e.target.value)}
                          placeholder="e.g., 1000 yards, 500 kg"
                          className="bg-input-background"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timeline">
                          {t('quote.form.timeline')}
                        </Label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) => handleInputChange('timeline', value)}
                        >
                          <SelectTrigger className="bg-input-background">
                            <SelectValue placeholder={`Select ${t('quote.form.timeline')}`} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">{t('quote.form.timeline.urgent')}</SelectItem>
                            <SelectItem value="standard">{t('quote.form.timeline.standard')}</SelectItem>
                            <SelectItem value="flexible">{t('quote.form.timeline.flexible')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="budget">
                          {t('quote.form.budget')}
                        </Label>
                        <Input
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          placeholder="e.g., $10,000 - $50,000"
                          className="bg-input-background"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Requirements Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <MessageSquare className="h-6 w-6 text-primary mr-3" />
                      <Label htmlFor="requirements" className="text-lg">
                        {t('quote.form.requirements')}
                      </Label>
                    </div>
                    <Textarea
                      id="requirements"
                      value={formData.requirements}
                      onChange={(e) => handleInputChange('requirements', e.target.value)}
                      placeholder={t('quote.form.requirements.placeholder')}
                      rows={4}
                      className="bg-input-background resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto px-12 py-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {t('quote.form.submit')}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}