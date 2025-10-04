import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import softwareImage from "../assets/software.png";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Monitor,
  Cloud,
  Cpu,
  Brain,
  Rocket,
  GitBranch,
  Terminal,
  Layers,
  Binary,
  Wifi,
  Server,
  Lock,
  Settings,
  TrendingUp,
  Eye,
  Palette,
  Play,
  CircuitBoard,
  Command,
  TreePine,
  Leaf,
  Sprout,
  Network,
  FlaskConical,
  Workflow
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from 'figma:asset/37b4c9e6ff0846d7f164d784b2976ab820c81527.png';

export const SoftwarePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that grow and adapt like nature itself. Neural networks and deep learning models that evolve with your business needs.',
      features: ['Neural Networks', 'Computer Vision', 'NLP Processing', 'Predictive Analytics'],
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud ecosystems that branch and expand seamlessly. Robust infrastructure that grows with your digital transformation.',
      features: ['Microservices', 'Kubernetes', 'Serverless', 'DevOps Pipeline'],
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: Globe,
      title: 'Full-Stack Development',
      description: 'End-to-end web solutions rooted in modern technologies. From frontend interfaces to backend systems that flourish together.',
      features: ['React/Next.js', 'Node.js/Python', 'GraphQL APIs', 'Real-time Systems'],
      gradient: 'from-lime-500 to-green-500',
      bgGradient: 'from-lime-50 to-green-50'
    },
    {
      icon: Smartphone,
      title: 'Mobile Innovation',
      description: 'Cross-platform applications that adapt and thrive across all devices. Native performance with organic user experiences.',
      features: ['React Native', 'Flutter', 'AR/VR Integration', 'IoT Connectivity'],
      gradient: 'from-teal-500 to-emerald-500',
      bgGradient: 'from-teal-50 to-emerald-50'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Multi-layered security that protects and nurtures your digital assets. Adaptive defense systems that evolve with threats.',
      features: ['Zero Trust', 'Blockchain', 'Threat Detection', 'Compliance'],
      gradient: 'from-green-700 to-green-800',
      bgGradient: 'from-green-100 to-green-200'
    },
    {
      icon: Network,
      title: 'Digital Transformation',
      description: 'Comprehensive transformation strategies that cultivate digital growth. Modern solutions rooted in innovation and sustainability.',
      features: ['Process Automation', 'Digital Strategy', 'Legacy Modernization', 'Innovation Labs'],
      gradient: 'from-emerald-600 to-green-700',
      bgGradient: 'from-emerald-50 to-green-100'
    }
  ];

  const techStack = {
    frontend: [
      { name: 'React 18', level: 95, color: '#10b981' },
      { name: 'Next.js', level: 92, color: '#059669' },
      { name: 'TypeScript', level: 90, color: '#065f46' },
      { name: 'Vue.js', level: 88, color: '#047857' },
      { name: 'Svelte', level: 85, color: '#16a34a' }
    ],
    backend: [
      { name: 'Node.js', level: 94, color: '#15803d' },
      { name: 'Python', level: 93, color: '#166534' },
      { name: 'Go', level: 87, color: '#14532d' },
      { name: 'Rust', level: 82, color: '#365314' },
      { name: 'GraphQL', level: 90, color: '#22c55e' }
    ],
    cloud: [
      { name: 'AWS', level: 91, color: '#16a34a' },
      { name: 'Google Cloud', level: 88, color: '#15803d' },
      { name: 'Docker', level: 92, color: '#166534' },
      { name: 'Kubernetes', level: 89, color: '#14532d' },
      { name: 'Terraform', level: 86, color: '#10b981' }
    ],
    ai: [
      { name: 'TensorFlow', level: 89, color: '#059669' },
      { name: 'PyTorch', level: 87, color: '#047857' },
      { name: 'OpenAI GPT', level: 85, color: '#065f46' },
      { name: 'Hugging Face', level: 83, color: '#16a34a' },
      { name: 'LangChain', level: 81, color: '#15803d' }
    ]
  };

  const codeSnippet = `
// Next.js 14 App Router with AI Integration
import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { prompt } = await req.json();
  
  const completion = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [{ role: "user", content: prompt }],
    stream: true,
  });
  
  return new NextResponse(completion);
}`;

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: Sprout },
    { number: '99.9%', label: 'Uptime Guarantee', icon: TreePine },
    { number: '50ms', label: 'Response Time', icon: Zap },
    { number: '24/7', label: 'DevOps Support', icon: Leaf }
  ];

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Intelligent data processing platform that grows insights naturally from complex datasets with machine learning.',
      tech: ['React', 'Python', 'TensorFlow', 'AWS'],
      category: 'Enterprise AI',
      metrics: { users: '1M+', performance: '99.9%', savings: '40%' }
    },
    {
      title: 'Sustainable Tech Ecosystem',
      description: 'Green technology platform optimizing energy consumption and promoting sustainable development practices.',
      tech: ['Vue.js', 'Node.js', 'IoT', 'MongoDB'],
      category: 'Green Technology',
      metrics: { efficiency: '60%+', carbon: '-45%', devices: '50K+' }
    },
    {
      title: 'Organic Growth Analytics',
      description: 'Business intelligence platform that nurtures data-driven decisions and cultivates organizational growth.',
      tech: ['React', 'GraphQL', 'PostgreSQL', 'Docker'],
      category: 'Business Intelligence',
      metrics: { insights: '95%', growth: '+35%', accuracy: '99%' }
    },
    {
      title: 'Digital Ecosystem Platform',
      description: 'Comprehensive platform connecting stakeholders in a thriving digital environment with seamless integration.',
      tech: ['Next.js', 'Microservices', 'Kubernetes', 'Redis'],
      category: 'Digital Platform',
      metrics: { connections: '100K+', uptime: '99.9%', scale: '10x' }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden relative">
      {/* Organic Background Pattern */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 25%),
            radial-gradient(circle at 80% 80%, rgba(5, 150, 105, 0.1) 0%, transparent 25%),
            radial-gradient(circle at 60% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 30%)
          `
        }}></div>
      </div>

      {/* Floating Organic Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-500/20 rounded-full"
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-20 h-20 border-2 border-green-300/40 rounded-full"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-32 h-32 border-2 border-emerald-300/40 rounded-2xl rotate-12"
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto"
          >
            {/* Logo Integration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-green-200/50">
                <img src={logoImage} alt="Soft Root Logo" className="h-24 w-auto" />
              </div>
            </motion.div>

            <Badge variant="secondary" className="mb-8 bg-green-100 text-green-700 border-green-200 text-lg px-8 py-3">
              <TreePine className="w-6 h-6 mr-3" />
              Growing Technology Solutions
            </Badge>
            
            <h1 className="text-6xl lg:text-8xl mb-8 font-extrabold">
              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Cultivating
              </span>
              <span className="text-gray-800"> Digital </span>
              <span className="bg-gradient-to-r from-lime-500 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                Growth
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Like deep roots nurture mighty trees, we build robust software solutions that grow, 
              adapt, and flourish in the digital ecosystem. Technology that's naturally intelligent.
            </p>

            {/* Animated Code Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative mb-12 max-w-2xl mx-auto"
            >
              <div className="bg-gray-900/90 backdrop-blur-sm border border-green-200/20 rounded-2xl p-6 text-left shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="ml-4 text-green-400 text-sm">soft-root.tsx</span>
                </div>
                <pre className="text-sm text-green-400 font-mono overflow-x-auto">
                  <code>{codeSnippet.trim()}</code>
                </pre>
              </div>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 text-lg px-8 py-4 shadow-lg">
                <Sprout className="mr-2 w-5 h-5" />
                Grow Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-green-300 text-green-700 hover:bg-green-50 text-lg px-8 py-4">
                <Eye className="mr-2 w-5 h-5" />
                Explore Portfolio
              </Button>
            </div>

            {/* Organic Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-200 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-7 h-7 text-green-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="text-gray-800">Our </span>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions that grow together in perfect harmony
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl"
                     style={{ background: `linear-gradient(135deg, #10b981, #059669)` }}></div>
                
                <Card className="relative h-full bg-white border-green-100 hover:border-green-300 transition-all duration-500 shadow-lg hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 relative bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Technology Roots</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise in modern technologies that form the foundation of digital growth
            </p>
          </motion.div>

          {/* Tech Stack Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white backdrop-blur-sm border border-green-200 rounded-2xl p-2 shadow-lg">
              {Object.keys(techStack).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-green-50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Stack Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {techStack[activeTab as keyof typeof techStack].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-green-100 rounded-xl p-6 text-center hover:border-green-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center" 
                     style={{ backgroundColor: `${tech.color}20`, border: `2px solid ${tech.color}40` }}>
                  <div className="w-6 h-6 rounded" style={{ backgroundColor: tech.color }}></div>
                </div>
                <h4 className="text-gray-800 font-semibold mb-3">{tech.name}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: tech.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                <span className="text-gray-600 text-sm font-medium">{tech.level}%</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Flourishing Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Successful implementations that demonstrate the power of sustainable technology growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="h-full bg-white border-green-100 hover:border-green-300 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                        {project.category}
                      </Badge>
                      <Leaf className="w-5 h-5 text-green-500" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-green-200 text-green-700 bg-green-50">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-green-600">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-white hover:bg-green-500">
                      <Play className="mr-2 w-4 h-4" />
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
              Ready to{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Plant Seeds
              </span>
              {' '}of Innovation?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Let's cultivate digital solutions that grow naturally with your business. 
              Together, we'll nurture technology that thrives and evolves.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 text-lg px-10 py-4 shadow-lg">
                <Sprout className="mr-2 w-5 h-5" />
                Start Growing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 text-lg px-10 py-4">
                <FlaskConical className="mr-2 w-5 h-5" />
                Explore Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};