import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export const SEOHead = React.memo(({ 
  title = "DW-Bridging - Global Textile Sourcing & Supply Chain Solutions",
  description = "Leading textile buying house specializing in global sourcing, supply chain management, and premium textile trading. Connect with trusted suppliers across Asia for high-quality fabrics, yarn, and apparel materials.",
  keywords = "textile sourcing, buying house, global textile trade, supply chain management, fabric sourcing, yarn suppliers, textile manufacturing, apparel materials, Asia textile suppliers, textile buying, fabric wholesale, textile trading company, garment sourcing, textile exports, sustainable textiles",
  canonicalUrl = "https://dw-bridging.com"
}: SEOHeadProps) => {
  
  React.useEffect(() => {
    // Set document title
    document.title = title;
    
    // Update existing meta tags or create new ones
    const updateOrCreateMeta = (selector: string, attributes: Record<string, string>) => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    };

    const updateOrCreateLink = (selector: string, attributes: Record<string, string>) => {
      let element = document.querySelector(selector) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    };

    // Essential meta tags
    updateOrCreateMeta('meta[name="description"]', { name: 'description', content: description });
    updateOrCreateMeta('meta[name="keywords"]', { name: 'keywords', content: keywords });
    updateOrCreateMeta('meta[name="viewport"]', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' });
    
    // Open Graph tags
    updateOrCreateMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    updateOrCreateMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    updateOrCreateMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    updateOrCreateMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });

    // Twitter Card
    updateOrCreateMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });

    // Canonical URL
    updateOrCreateLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });

    // Language
    document.documentElement.lang = 'en';
    
  }, [title, description, keywords, canonicalUrl]);

  return null;
});