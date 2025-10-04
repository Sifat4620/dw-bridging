import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FlipBook, dwBridgingBrochurePages } from './FlipBook';

export function AboutPage() {
  const highlights = [
    { number: '15+', label: 'Years Of Experience', icon: Award },
    { number: '8', label: 'Offices Nationwide', icon: Globe },
    { number: '150+', label: 'Total Employees', icon: Users },
    // { number: '25+', label: 'Best Awards', icon: TrendingUp },
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We deliver exactly what our clients need with meticulous attention to detail.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our extensive global network ensures worldwide accessibility and comprehensive coverage.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting relationships based on trust, reliability, and mutual success.',
    },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' }}>
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 leading-tight">About DW-Bridging</h1>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                With the unique advantage of an extensive network of trusted and approved suppliers worldwide, we provide seamless sourcing solutions for the global textile industry.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1669699282653-42520fda41f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFicmljJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc1ODE3ODU0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Textile warehouse"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our in-house product development team meets specific client requirements by combining a deep understanding of client needs with knowledge of the best locations and manufacturing facilities to suit each client.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To bridge the gap between global textile manufacturers and suppliers by providing exceptional sourcing solutions, fostering innovation, and building sustainable partnerships that drive industry growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      <Eye className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the leading global textile trading platform, known for reliability, innovation, and excellence in connecting businesses across the textile value chain while promoting sustainable practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Strengths */}
<section className="py-20 bg-secondary">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl mb-4">Company Strengths</h2>
      <p className="text-lg text-muted-foreground">
        Our track record speaks for itself
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {highlights.map((highlight, index) => (
        <motion.div
          key={highlight.label}
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
                  <highlight.icon className="h-10 w-10 text-primary" />
                </div>
              </div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-4xl mb-2 text-primary"
              >
                {highlight.number}
              </motion.h3>
              <p className="text-muted-foreground">{highlight.label}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Leadership Quotes */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Words from Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights from our CEO and Managing Director on our vision and commitment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* CEO Quote */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-white to-primary/5 border-primary/20">
                <CardContent className="p-0">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto overflow-hidden">
                      <img 
                        src="/src/assets/danis sir.jpg" 
                        alt="CEO" 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <blockquote className="text-lg italic text-center text-muted-foreground leading-relaxed mb-6">
                      "At DW-Bridging, we don't just trade textiles—we build bridges between dreams and reality. Our commitment to quality, innovation, and sustainable practices has positioned us as a trusted partner in the global textile ecosystem. Every thread we source carries our promise of excellence."
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold text-primary text-lg">Danish Wazir </p>
                      <p className="text-sm text-muted-foreground">Co-Founder & CEO</p>
                      <p className="text-xs text-muted-foreground mt-1">25+ Years Industry Experience</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* MD Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-white to-secondary/30 border-primary/20">
                <CardContent className="p-0">
                  <div className="mb-8">
                     <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto overflow-hidden">
                      <img 
                        src="/src/assets/babu sir.jpg" 
                        alt="CEO" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <blockquote className="text-lg italic text-center text-muted-foreground leading-relaxed mb-6">
                      "As Co-Founder & COO of DW-Bridging, MD. Mahbubur Rahman is a distinguished leader in the textile and garments industry, backed by over two decades of comprehensive experience. His expertise spans the complete supply chain, from raw material sourcing in spinning mills to finished garment production and international trade. A proven entrepreneur, he has also established several successful trading firms, including BD TEXIM and Yarn Garden."
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold text-primary text-lg">MD. Mahbubur Rahman</p>
                      <p className="text-sm text-muted-foreground">Co-Founder & COO</p>
                      <p className="text-xs text-muted-foreground mt-1">20+ Years Global Trade Experience</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
     {/*  
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <value.icon className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Team Section */}
       {/*
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Our Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With decades of combined experience in textile trading and sourcing, our team brings unparalleled expertise to every project. We understand the complexities of global supply chains and work tirelessly to deliver solutions that exceed expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1684259499086-93cb3e555803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU4MTc4NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Textile production facility"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl mb-3">Industry Leadership</h3>
                <p className="text-muted-foreground">
                  Our leadership team consists of industry veterans with deep knowledge of textile markets, manufacturing processes, and global trade dynamics.
                </p>
              </div>
              <div>
                <h3 className="text-2xl mb-3">Innovation Focus</h3>
                <p className="text-muted-foreground">
                  We continuously invest in technology and process improvements to stay ahead of market trends and provide cutting-edge solutions to our clients.
                </p>
              </div>
              <div>
                <h3 className="text-2xl mb-3">Global Network</h3>
                <p className="text-muted-foreground">
                  Our extensive network of partners and suppliers across Asia enables us to source the highest quality materials at competitive prices.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      */}

      {/* Company Brochure Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 lg:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">Company Brochure</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Explore our comprehensive company brochure with interactive flipbook experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-full sm:max-w-5xl lg:max-w-6xl mx-auto"
          >
            <FlipBook
              pages={dwBridgingBrochurePages}
              title="DW-Bridging Company Brochure"
              subtitle="Your Global Partner in Textile Excellence"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}