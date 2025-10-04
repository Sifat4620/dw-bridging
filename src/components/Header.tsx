import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from './LanguageContext';
import logoImage from 'figma:asset/281af89b943f74cae84989b6e4afa24fc9c315b8.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useLanguage();

  const navigationItems = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.about'), id: 'about' },
    { 
      name: 'Portfolio', 
      id: 'portfolio',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Software Development', id: 'software' },
        { name: 'Exhibition Fabrication', id: 'fabrication' },
        { name: 'Textile Commodities', id: 'commodities' }
      ]
    },
    { name: t('nav.gallery'), id: 'gallery' },
    // { name: t('nav.clients'), id: 'clients' },
    { name: t('nav.resources'), id: 'resources' },
    { name: t('nav.careers'), id: 'careers' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <motion.img
              src={logoImage}
              alt="DW-Bridging Logo"
              className="h-12 w-auto"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-3 py-2 text-sm transition-colors flex items-center gap-1 ${
                        ['software', 'fabrication', 'commodities'].includes(currentPage)
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                      {['software', 'fabrication', 'commodities'].includes(currentPage) && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                    
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg z-50"
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <motion.button
                              key={dropdownItem.id}
                              whileHover={{ backgroundColor: 'rgba(26, 141, 184, 0.1)' }}
                              onClick={() => {
                                onNavigate(dropdownItem.id);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left px-4 py-3 text-sm transition-colors border-b border-border last:border-b-0 first:rounded-t-lg last:rounded-b-lg ${
                                currentPage === dropdownItem.id
                                  ? 'text-primary bg-primary/5'
                                  : 'text-muted-foreground hover:text-primary'
                              }`}
                            >
                              {dropdownItem.name}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onNavigate(item.id)}
                    className={`relative px-3 py-2 text-sm transition-colors ${
                      currentPage === item.id
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                    {currentPage === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-2 py-4 border-t">
                {navigationItems.map((item, index) => (
                  <div key={item.id}>
                    {item.hasDropdown ? (
                      <div>
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className={`px-4 py-2 text-sm font-medium ${
                            ['software', 'fabrication', 'commodities'].includes(currentPage)
                              ? 'text-primary'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {item.name}
                        </motion.div>
                        {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                          <motion.button
                            key={dropdownItem.id}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: (index * 0.1) + (dropdownIndex * 0.05) }}
                            onClick={() => {
                              onNavigate(dropdownItem.id);
                              setIsMobileMenuOpen(false);
                            }}
                            className={`w-full text-left px-8 py-2 text-sm transition-colors ${
                              currentPage === dropdownItem.id
                                ? 'text-primary bg-accent'
                                : 'text-muted-foreground hover:text-primary hover:bg-accent'
                            }`}
                          >
                            {dropdownItem.name}
                          </motion.button>
                        ))}
                      </div>
                    ) : (
                      <motion.button
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => {
                          onNavigate(item.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                          currentPage === item.id
                            ? 'text-primary bg-accent'
                            : 'text-muted-foreground hover:text-primary hover:bg-accent'
                        }`}
                      >
                        {item.name}
                      </motion.button>
                    )}
                  </div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}