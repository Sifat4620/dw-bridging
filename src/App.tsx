import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { SoftwarePage } from './components/SoftwarePage';
import { FabricationPage } from './components/FabricationPage';
import { CommoditiesPage } from './components/CommoditiesPage';
import { GalleryPage } from './components/GalleryPage';
// import { ClientsPage } from './components/ClientsPage';
import { CareersPage } from './components/CareersPage';
import { OnlineResourcesPage } from './components/OnlineResourcesPage';
import { Loader } from './components/Loader';
import { SEOHead } from './components/SEOHead';
import { LanguageProvider } from './components/LanguageContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Reduced to 0.8 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (page: string, scrollToSection?: string) => {
    setCurrentPage(page);
    
    if (scrollToSection) {
      // If we need to scroll to a specific section, wait for the page to render
      const scrollToElement = () => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          // Calculate the offset to scroll a bit above the element
          const elementTop = element.offsetTop - 100; // 100px offset from top for better visibility
          
          // Use smooth scrolling with custom behavior
          window.scrollTo({
            top: elementTop,
            behavior: 'smooth'
          });
        } else {
          // If element not found yet, try again
          setTimeout(scrollToElement, 100);
        }
      };
      
      // Wait longer for page transition to complete
      setTimeout(scrollToElement, 500);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getPageSEO = () => {
    switch (currentPage) {
      case 'home':
        return {
          title: "DW-Bridging - Global Textile Sourcing & Supply Chain Solutions",
          description: "Leading textile buying house specializing in global sourcing, supply chain management, and premium textile trading. Connect with trusted suppliers across Asia for high-quality fabrics, yarn, and apparel materials.",
          keywords: "textile sourcing, buying house, global textile trade, supply chain management, fabric sourcing, yarn suppliers, textile manufacturing, apparel materials, Asia textile suppliers, textile buying, fabric wholesale, textile trading company"
        };
      case 'about':
        return {
          title: "About DW-Bridging - 15+ Years of Multi-Business Excellence",
          description: "Learn about DW-Bridging's 15+ years of experience across Exhibition Fabrication, Textile Sourcing, and Software Development. Discover our mission, vision, and commitment to excellence.",
          keywords: "about DW-Bridging, multi-business company, textile sourcing expertise, exhibition fabrication, software development, global business network, industry leaders"
        };
      case 'software':
        return {
          title: "Software Development - DW-Bridging Technology Solutions",
          description: "Innovative software development services including web applications, mobile apps, cloud solutions, and AI integration. Expert technology solutions for digital transformation.",
          keywords: "software development, web development, mobile apps, AI solutions, cloud services, technology consulting, digital transformation, custom software"
        };
      case 'fabrication':
        return {
          title: "Exhibition Fabrication - DW-Bridging Stall Design & Construction",
          description: "Professional exhibition stall fabrication and trade show booth design services. Complete solutions from concept to installation for international exhibitions.",
          keywords: "exhibition fabrication, stall design, trade show booths, exhibition construction, booth fabrication, display solutions, exhibition services"
        };
      case 'commodities':
        return {
          title: "Textile Commodities - DW-Bridging Global Textile Trading",
          description: "Global textile sourcing and trading solutions. Premium fabric sourcing, supply chain management, and quality assurance from trusted worldwide suppliers.",
          keywords: "textile commodities, fabric sourcing, textile trading, global sourcing, supply chain management, fabric suppliers, textile wholesale, apparel materials"
        };
      case 'gallery':
        return {
          title: "Gallery - DW-Bridging Projects & Business Operations",
          description: "Explore our comprehensive gallery showcasing exhibition projects, textile operations, software solutions, facilities, and business partnerships. Visual documentation of our multi-business excellence.",
          keywords: "DW-Bridging gallery, exhibition projects, textile operations, software solutions, business meetings, facility photos, partnership meetings"
        };
      // case 'clients':
        // return {
          // title: "Our Clients - Global Textile Partners & Testimonials",
          // description: "Meet our valued clients and read testimonials from global brands who trust DW-Bridging for their textile sourcing needs. Building partnerships worldwide.",
          // keywords: "textile clients, customer testimonials, global brands, textile partnerships, client success stories, textile sourcing clients"
        // };
      case 'resources':
        return {
          title: "Online Resources - Industry Insights & Digital Solutions",
          description: "Access comprehensive industry resources, educational materials, research reports, and professional insights across textile, exhibition, and software development sectors.",
          keywords: "industry resources, business reports, educational materials, market research, professional insights, digital solutions, multi-industry expertise"
        };
      case 'careers':
        return {
          title: "Careers at DW-Bridging - Join Our Multi-Business Team",
          description: "Explore career opportunities at DW-Bridging across Exhibition Fabrication, Textile Sourcing, and Software Development. Join our dynamic professional team.",
          keywords: "careers, job opportunities, exhibition careers, textile jobs, software development jobs, multi-business careers, professional growth"
        };
      default:
        return {
          title: "DW-Bridging - Multi-Business Excellence | Exhibition, Textile & Software Solutions",
          description: "Leading multi-business company specializing in Exhibition Stall Fabrication, Global Textile Sourcing, and Software Development solutions worldwide.",
          keywords: "multi-business company, exhibition fabrication, textile sourcing, software development, global business solutions"
        };
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'about':
        return <AboutPage />;
      case 'software':
        return <SoftwarePage />;
      case 'fabrication':
        return <FabricationPage />;
      case 'commodities':
        return <CommoditiesPage />;
      case 'gallery':
        return <GalleryPage />;
      // case 'clients':
        // return <ClientsPage />;
      case 'resources':
        return <OnlineResourcesPage />;
      case 'careers':
        return <CareersPage />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  // Show loader if still loading
  if (isLoading) {
    return (
      <AnimatePresence>
        <Loader />
      </AnimatePresence>
    );
  }

  const seoData = getPageSEO();

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <SEOHead 
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords}
          canonicalUrl={`https://dw-bridging.com/${currentPage === 'home' ? '' : currentPage}`}
        />
        
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
        
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer onNavigate={handleNavigation} />
      </div>
    </LanguageProvider>
  );
}