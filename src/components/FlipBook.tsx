import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Download, Share2, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import brochurePage1 from 'figma:asset/64551f93c58590b517ae631875133639ee5adda2.png';
import brochurePage2 from 'figma:asset/68279a273fa982d00b0b2a471e26d92028157bef.png';
import brochurePage3 from 'figma:asset/ace795a260cb81a024c10e0576b7b29d54ce871c.png';
import brochurePage4 from 'figma:asset/60328e9f4749ef018b70b8fed73f1b1267310297.png';
import companyLogo from 'figma:asset/281af89b943f74cae84989b6e4afa24fc9c315b8.png';

interface FlipBookPage {
  id: number;
  title: string;
  content: React.ReactNode;
  backgroundImage?: string;
}

interface FlipBookProps {
  pages: FlipBookPage[];
  title: string;
  subtitle?: string;
}

const flipBookContent = {
  en: {
    downloadBrochure: "Download Brochure",
    shareBrochure: "Share Brochure",
    fullscreen: "Fullscreen",
    exitFullscreen: "Exit Fullscreen",
    pageOf: "Page {current} of {total}",
    previousPage: "Previous Page",
    nextPage: "Next Page"
  },
  zh: {
    downloadBrochure: "下载手册",
    shareBrochure: "分享手册",
    fullscreen: "全屏",
    exitFullscreen: "退出全屏",
    pageOf: "第 {current} 页，共 {total} 页",
    previousPage: "上一页",
    nextPage: "下一页"
  },
  hi: {
    downloadBrochure: "ब्रोशर डाउनलोड करें",
    shareBrochure: "ब्रोशर साझा करें",
    fullscreen: "पूर्ण स्क्रीन",
    exitFullscreen: "पूर्ण स्क्रीन से बाहर निकलें",
    pageOf: "पृष्ठ {current} का {total}",
    previousPage: "पिछला पृष्ठ",
    nextPage: "अगला पृष्ठ"
  },
  vi: {
    downloadBrochure: "Tải Brochure",
    shareBrochure: "Chia Sẻ Brochure",
    fullscreen: "Toàn Màn Hình",
    exitFullscreen: "Thoát Toàn Màn Hình",
    pageOf: "Trang {current} trên {total}",
    previousPage: "Trang Trước",
    nextPage: "Trang Tiếp"
  },
  ur: {
    downloadBrochure: "بروشر ڈاؤن لوڈ کریں",
    shareBrochure: "بروشر شیئر کریں",
    fullscreen: "فل اسکرین",
    exitFullscreen: "فل اسکرین سے باہر نکلیں",
    pageOf: "صفحہ {current} از {total}",
    previousPage: "پچھلا صفحہ",
    nextPage: "اگلا صفحہ"
  },
  tr: {
    downloadBrochure: "Broşür İndir",
    shareBrochure: "Broşür Paylaş",
    fullscreen: "Tam Ekran",
    exitFullscreen: "Tam Ekrandan Çık",
    pageOf: "Sayfa {current} / {total}",
    previousPage: "Önceki Sayfa",
    nextPage: "Sonraki Sayfa"
  }
};

export function FlipBook({ pages, title, subtitle }: FlipBookProps) {
  const { language } = useLanguage();
  const content = flipBookContent[language as keyof typeof flipBookContent];
  const [currentPage, setCurrentPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const flipBookRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setPreviousPage(currentPage);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setTimeout(() => {
          setIsFlipping(false);
        }, isMobile ? 600 : 800); // Faster animation on mobile
      }, 100);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setPreviousPage(currentPage);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setTimeout(() => {
          setIsFlipping(false);
        }, isMobile ? 600 : 800); // Faster animation on mobile
      }, 100);
    }
  };

  // Touch/swipe handlers for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextPage();
    }
    if (isRightSwipe) {
      prevPage();
    }
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (flipBookRef.current?.requestFullscreen) {
        flipBookRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleDownload = () => {
    // Simulate download functionality
    console.log('Downloading brochure...');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: subtitle || 'Check out our company brochure',
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div
      ref={flipBookRef}
      className={`bg-background ${isFullscreen ? 'fixed inset-0 z-50 flex flex-col' : ''}`}
    >
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 border-b gap-3 sm:gap-0">
        <div className="w-full sm:w-auto">
          <h3 className="text-lg sm:text-xl">{title}</h3>
          {subtitle && <p className="text-muted-foreground text-sm sm:text-base">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-1 sm:gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <Badge variant="secondary" className="text-xs sm:text-sm">
            {content.pageOf
              .replace('{current}', (currentPage + 1).toString())
              .replace('{total}', pages.length.toString())}
          </Badge>
          <div className="flex items-center gap-1 sm:gap-2">
            <Button variant="outline" size="sm" onClick={handleDownload} className="h-8 w-8 sm:h-9 sm:w-auto px-2 sm:px-3">
              <Download className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline ml-1">Download</span>
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare} className="h-8 w-8 sm:h-9 sm:w-auto px-2 sm:px-3">
              <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline ml-1">Share</span>
            </Button>
            <Button variant="outline" size="sm" onClick={toggleFullscreen} className="h-8 w-8 sm:h-9 sm:w-auto px-2 sm:px-3">
              {isFullscreen ? <Minimize2 className="h-3 w-3 sm:h-4 sm:w-4" /> : <Maximize2 className="h-3 w-3 sm:h-4 sm:w-4" />}
              <span className="hidden sm:inline ml-1">{isFullscreen ? 'Exit' : 'Full'}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Realistic Book Container */}
      <div 
        className={`relative ${isFullscreen ? 'flex-1' : 'aspect-[4/3] sm:aspect-[4/3] md:aspect-[3/2]'} overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100`}
        onTouchStart={isMobile ? onTouchStart : undefined}
        onTouchMove={isMobile ? onTouchMove : undefined}
        onTouchEnd={isMobile ? onTouchEnd : undefined}
      >
        <div className="flex items-center justify-center h-full p-2 sm:p-4 md:p-8">
          {/* Book with realistic appearance */}
          <div className="relative max-w-5xl w-full h-full" style={{ perspective: isMobile ? '1200px' : '1500px' }}>
            {/* Book spine and shadow */}
            <div className="absolute left-1/2 top-0 w-4 sm:w-6 md:w-8 h-full bg-gradient-to-r from-slate-800 to-slate-700 transform -translate-x-1/2 z-0 rounded-r-sm shadow-2xl"></div>
            
            {/* Left page (previous or cover) */}
            <motion.div
              className="absolute left-0 top-0 w-1/2 h-full origin-right"
              style={{ 
                transformStyle: 'preserve-3d',
                zIndex: currentPage === 0 ? 10 : 5,
                filter: isFlipping ? 'drop-shadow(0 8px 15px rgba(0,0,0,0.12))' : 'none'
              }}
              animate={{
                rotateY: currentPage === 0 ? 0 : -25,
                scale: isFlipping ? 0.98 : 1,
                y: isFlipping ? -4 : 0
              }}
              transition={{ 
                duration: 1.8, 
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <div className="relative w-full h-full bg-white shadow-2xl border border-slate-200 rounded-l-lg overflow-hidden">
                {/* Page thickness effect */}
                <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-r from-slate-200 to-slate-300"></div>
                
                {currentPage === 0 ? (
                  /* Cover page */
                  <div className="h-full flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 bg-gradient-to-br from-primary/10 to-primary/5">
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4 md:mb-6 flex items-center justify-center">
                        <img 
                          src={companyLogo} 
                          alt="DW-Bridging Company Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-primary mb-2 sm:mb-3 md:mb-4">DW-Bridging</h1>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-3 sm:mb-4 md:mb-6">Company Brochure</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Your Global Partner in Textile Excellence</p>
                    </div>
                  </div>
                ) : (
                  /* Previous page content */
                  currentPage > 0 && pages[currentPage - 1] && (
                    <div className="h-full p-6 overflow-auto">
                      <h3 className="text-xl font-semibold mb-4 text-center">{pages[currentPage - 1].title}</h3>
                      <div className="text-sm">{pages[currentPage - 1].content}</div>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Right page (current) */}
            <motion.div
              key={currentPage}
              className="absolute right-0 top-0 w-1/2 h-full origin-left z-10"
              initial={{ 
                rotateY: isFlipping ? (currentPage > previousPage ? 180 : -180) : 0,
                scale: 0.96,
                y: isFlipping ? -8 : 0
              }}
              animate={{ 
                rotateY: 0,
                scale: 1,
                y: 0
              }}
              exit={{ 
                rotateY: isFlipping ? (currentPage > previousPage ? -180 : 180) : 0,
                scale: 0.96,
                y: -8
              }}
              transition={{ 
                duration: 2.2, 
                ease: [0.16, 1, 0.3, 1]
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                filter: isFlipping ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' : 'none'
              }}
            >
              <div className="relative w-full h-full bg-white shadow-2xl border border-slate-200 rounded-r-lg overflow-hidden">
                {/* Page thickness effect */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-r from-slate-300 to-slate-200"></div>
                
                {/* Page curl gradient during flip */}
                {isFlipping && (
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-100/30 to-slate-200/50 pointer-events-none z-20"></div>
                )}
                
                {pages[currentPage]?.backgroundImage && (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-5"
                    style={{
                      backgroundImage: `url(${pages[currentPage].backgroundImage})`
                    }}
                  />
                )}
                
                <div className="relative z-10 p-2 sm:p-4 md:p-6 h-full flex flex-col">
                  <h3 className="text-sm sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center text-primary">
                    {pages[currentPage]?.title}
                  </h3>
                  <div className="flex-1 overflow-auto text-xs sm:text-sm">
                    {pages[currentPage]?.content}
                  </div>
                  
                  {/* Page number */}
                  <div className="text-center text-xs text-muted-foreground mt-2 sm:mt-3 md:mt-4 border-t pt-1 sm:pt-2">
                    {currentPage + 1}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Book pages stack (showing remaining pages) */}
            {Array.from({ length: Math.max(0, pages.length - currentPage - 1) }, (_, i) => (
              <div
                key={i}
                className="absolute right-0 top-0 w-1/2 h-full bg-white border border-slate-200 rounded-r-lg shadow-lg"
                style={{
                  zIndex: 3 - i,
                  transform: `translateX(${(i + 1) * 2}px) translateY(${(i + 1) * 1}px)`,
                  opacity: 0.7 - i * 0.2
                }}
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-r from-slate-300 to-slate-200"></div>
              </div>
            ))}
            
            {/* Left pages stack */}
            {currentPage > 0 && Array.from({ length: Math.min(3, currentPage) }, (_, i) => (
              <div
                key={`left-${i}`}
                className="absolute left-0 top-0 w-1/2 h-full bg-white border border-slate-200 rounded-l-lg shadow-lg"
                style={{
                  zIndex: 2 - i,
                  transform: `translateX(-${(i + 1) * 2}px) translateY(${(i + 1) * 1}px)`,
                  opacity: 0.6 - i * 0.2
                }}
              >
                <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-r from-slate-200 to-slate-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="sm"
          className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 p-0"
          onClick={prevPage}
          disabled={currentPage === 0 || isFlipping}
          title={content.previousPage}
        >
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 p-0"
          onClick={nextPage}
          disabled={currentPage === pages.length - 1 || isFlipping}
          title={content.nextPage}
        >
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center p-3 sm:p-4 gap-2 sm:gap-3">
        {pages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentPage
                ? 'bg-primary'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            onClick={() => {
              if (!isFlipping && index !== currentPage) {
                setIsFlipping(true);
                setPreviousPage(currentPage);
                setTimeout(() => {
                  setCurrentPage(index);
                  setTimeout(() => {
                    setIsFlipping(false);
                  }, isMobile ? 600 : 800);
                }, 100);
              }
            }}
          />
        ))}
      </div>

      {/* Mobile Swipe Instruction */}
      {isMobile && (
        <div className="text-center pb-4">
          <p className="text-xs text-muted-foreground">
            👈 Swipe left or right to turn pages 👉
          </p>
        </div>
      )}
    </div>
  );
}

// Example brochure pages for DW-Bridging
export const dwBridgingBrochurePages: FlipBookPage[] = [
  {
    id: 1,
    title: "Company Brochure - Page 1",
    content: (
      <div className="h-full w-full relative overflow-hidden rounded-lg">
        {/* DW-Bridging Brochure Page 1 */}
        <img 
          src={brochurePage1}
          alt="DW-Bridging Company Brochure Page 1"
          className="w-full h-full object-cover"
        />
      </div>
    )
  },
  {
    id: 2,
    title: "Company Brochure - Page 2", 
    content: (
      <div className="h-full w-full relative overflow-hidden rounded-lg">
        {/* DW-Bridging Brochure Page 2 */}
        <img 
          src={brochurePage2}
          alt="DW-Bridging Company Brochure Page 2"
          className="w-full h-full object-cover"
        />
      </div>
    )
  },
  {
    id: 3,
    title: "Company Brochure - Page 3",
    content: (
      <div className="h-full w-full relative overflow-hidden rounded-lg">
        {/* DW-Bridging Brochure Page 3 */}
        <img 
          src={brochurePage3}
          alt="DW-Bridging Company Brochure Page 3"
          className="w-full h-full object-cover"
        />
      </div>
    )
  },
  {
    id: 4,
    title: "Company Brochure - Page 4",
    content: (
      <div className="h-full w-full relative overflow-hidden rounded-lg">
        {/* DW-Bridging Brochure Page 4 */}
        <img 
          src={brochurePage4}
          alt="DW-Bridging Company Brochure Page 4"
          className="w-full h-full object-cover"
        />
      </div>
    )
  }
];