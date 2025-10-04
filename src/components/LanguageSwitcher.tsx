import React from 'react';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from './LanguageContext';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸', country: 'United States' },
  { code: 'zh' as Language, name: '中文', flag: '🇨🇳', country: 'China' },
  { code: 'hi' as Language, name: 'हिंदी', flag: '🇮🇳', country: 'India' },
  { code: 'vi' as Language, name: 'Tiếng Việt', flag: '🇻🇳', country: 'Vietnam' },
  { code: 'ur' as Language, name: 'اردو', flag: '🇵🇰', country: 'Pakistan' },
  { code: 'tr' as Language, name: 'Türkçe', flag: '🇹🇷', country: 'Turkey' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 hover:bg-primary/10 transition-colors"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1"
          >
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm">{currentLanguage?.flag}</span>
          </motion.div>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-white/95 backdrop-blur-sm border border-border/50 shadow-lg"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer hover:bg-primary/10 transition-colors ${
              language === lang.code ? 'bg-primary/5 text-primary' : ''
            }`}
          >
            <motion.div
              whileHover={{ x: 2 }}
              className="flex items-center gap-3 w-full"
            >
              <span className="text-lg">{lang.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium text-sm">{lang.name}</span>
                <span className="text-xs text-muted-foreground">{lang.country}</span>
              </div>
              {language === lang.code && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto w-2 h-2 bg-primary rounded-full"
                />
              )}
            </motion.div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};