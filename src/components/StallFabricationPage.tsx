import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Ruler, Palette, Zap, CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stallFabricationContent = {
  en: {
    title: "Exhibition Stall Fabrication",
    subtitle: "Professional Exhibition Stands & Trade Show Solutions",
    heroDescription: "Transform your exhibition presence with our custom-designed and expertly fabricated stalls. From concept to completion, we deliver exceptional trade show experiences.",
    
    services: {
      title: "Our Fabrication Services",
      items: [
        {
          icon: Building2,
          title: "Custom Stall Design",
          description: "Unique, brand-focused designs tailored to your exhibition needs and space requirements."
        },
        {
          icon: Ruler,
          title: "Precise Fabrication",
          description: "Expert craftsmanship using premium materials and advanced manufacturing techniques."
        },
        {
          icon: Palette,
          title: "Creative Solutions",
          description: "Innovative display concepts that capture attention and engage your target audience."
        },
        {
          icon: Zap,
          title: "Complete Setup",
          description: "End-to-end installation and dismantling services with professional project management."
        }
      ]
    },
    
    features: {
      title: "Why Choose Our Stall Fabrication",
      items: [
        "15+ Years of Exhibition Experience",
        "International Quality Standards",
        "On-Time Project Delivery",
        "Comprehensive Design Support",
        "Global Installation Services",
        "Cost-Effective Solutions"
      ]
    },
    
    process: {
      title: "Our Fabrication Process",
      steps: [
        {
          step: "01",
          title: "Consultation & Planning",
          description: "Understanding your requirements, brand identity, and exhibition objectives."
        },
        {
          step: "02",
          title: "Design & Visualization",
          description: "Creating detailed 3D designs and renderings for your approval."
        },
        {
          step: "03",
          title: "Material Selection",
          description: "Choosing premium materials that align with your budget and design vision."
        },
        {
          step: "04",
          title: "Fabrication & Quality Control",
          description: "Precise manufacturing with rigorous quality checks at every stage."
        },
        {
          step: "05",
          title: "Installation & Support",
          description: "Professional setup, support during the event, and post-event dismantling."
        }
      ]
    },
    
    gallery: {
      title: "Our Stall Portfolio",
      subtitle: "Showcasing Excellence in Exhibition Design"
    },
    
    cta: {
      title: "Ready to Create Your Perfect Exhibition Stall?",
      description: "Let's discuss your upcoming exhibition requirements and create a standout presence.",
      button: "Get Free Quote"
    }
  },
  zh: {
    title: "展台制作",
    subtitle: "专业展台设计与贸易展览解决方案",
    heroDescription: "用我们定制设计和专业制作的展台提升您的展览形象。从概念到完成，我们提供卓越的贸易展体验。",
    
    services: {
      title: "我们的制作服务",
      items: [
        {
          icon: Building2,
          title: "定制展台设计",
          description: "根据您的展览需求和空间要求量身定制的独特品牌设计。"
        },
        {
          icon: Ruler,
          title: "精密制作",
          description: "使用优质材料和先进制造技术的专业工艺。"
        },
        {
          icon: Palette,
          title: "创意解决方案",
          description: "吸引注意力并吸引目标受众的创新展示概念。"
        },
        {
          icon: Zap,
          title: "完整安装",
          description: "端到端的安装和拆卸服务，配备专业项目管理。"
        }
      ]
    },
    
    features: {
      title: "选择我们展台制作的理由",
      items: [
        "15年以上展览经验",
        "国际质量标准",
        "按时项目交付",
        "全面设计支持",
        "全球安装服务",
        "成本效益解决方案"
      ]
    },
    
    process: {
      title: "我们的制作流程",
      steps: [
        {
          step: "01",
          title: "咨询与规划",
          description: "了解您的要求、品牌形象和展览目标。"
        },
        {
          step: "02",
          title: "设计与可视化",
          description: "创建详细的3D设计和渲染图供您批准。"
        },
        {
          step: "03",
          title: "材料选择",
          description: "选择符合您预算和设计愿景的优质材料。"
        },
        {
          step: "04",
          title: "制作与质量控制",
          description: "精密制造，每个阶段都进行严格的质量检查。"
        },
        {
          step: "05",
          title: "安装与支持",
          description: "专业安装、活动期间支持和活动后拆卸。"
        }
      ]
    },
    
    gallery: {
      title: "我们的展台作品集",
      subtitle: "展示展览设计的卓越品质"
    },
    
    cta: {
      title: "准备创建您的完美展台了吗？",
      description: "让我们讨论您即将到来的展览要求，创造突出的展示效果。",
      button: "获取免费报价"
    }
  },
  hi: {
    title: "प्रदर्शनी स्टॉल निर्माण",
    subtitle: "पेशेवर प्रदर्शनी स्टैंड और ट्रेड शो समाधान",
    heroDescription: "हमारे कस्टम-डिज़ाइन और विशेषज्ञ रूप से निर्मित स्टॉल के साथ अपनी प्रदर्शनी की उपस्थिति को बदलें।",
    
    services: {
      title: "हमारी निर्माण सेवाएं",
      items: [
        {
          icon: Building2,
          title: "कस्टम स्टॉल डिज़ाइन",
          description: "आपकी प्रदर्शनी आवश्यकताओं के अनुरूप अद्वितीय, ब्रांड-केंद्रित डिज़ाइन।"
        },
        {
          icon: Ruler,
          title: "सटीक निर्माण",
          description: "प्रीमियम सामग्री और उन्नत निर्माण तकनीकों का उपयोग करके विशेषज्ञ शिल्प कौशल।"
        },
        {
          icon: Palette,
          title: "रचनात्मक समाधान",
          description: "नवाचार प्रदर्शन अवधारणाएं जो ध्यान आकर्षित करती हैं।"
        },
        {
          icon: Zap,
          title: "पूर्ण सेटअप",
          description: "पेशेवर प्रोजेक्ट प्रबंधन के साथ संपूर्ण इंस्टॉलेशन सेवाएं।"
        }
      ]
    },
    
    features: {
      title: "हमारे स्टॉल निर्माण को क्यों चुनें",
      items: [
        "15+ वर्षों का प्रदर्शनी अनुभव",
        "अंतर्राष्ट्रीय गुणवत्ता मानक",
        "समय पर प्रोजेक्ट डिलीवरी",
        "व्यापक डिज़ाइन सहायता",
        "वैश्विक इंस्टॉलेशन सेवाएं",
        "लागत-प्रभावी समाधान"
      ]
    },
    
    process: {
      title: "हमारी निर्माण प्रक्रिया",
      steps: [
        {
          step: "01",
          title: "परामर्श और योजना",
          description: "आपकी आवश्यकताओं, ब्रांड पहचान और प्रदर्शनी उद्देश्यों को समझना।"
        },
        {
          step: "02",
          title: "डिज़ाइन और विज़ुअलाइज़ेशन",
          description: "आपकी अनुमति के लिए विस्तृत 3D डिज़ाइन और रेंडरिंग बनाना।"
        },
        {
          step: "03",
          title: "सामग्री चयन",
          description: "आपके बजट और डिज़ाइन दृष्टि के अनुरूप प्रीमियम सामग्री का चयन।"
        },
        {
          step: "04",
          title: "निर्माण और गुणवत्ता नियंत्रण",
          description: "हर चरण में कठोर गुणवत्ता जांच के साथ सटीक निर्माण।"
        },
        {
          step: "05",
          title: "इंस्टॉलेशन और सहायता",
          description: "पेशेवर सेटअप, इवेंट के दौरान सहायता और इवेंट के बाद विघटन।"
        }
      ]
    },
    
    gallery: {
      title: "हमारा स्टॉल पोर्टफोलियो",
      subtitle: "प्रदर्शनी डिज़ाइन में उत्कृष्टता प्रदर्शित करना"
    },
    
    cta: {
      title: "अपना परफेक्ट प्रदर्शनी स्टॉल बनाने के लिए तैयार हैं?",
      description: "आइए आपकी आगामी प्रदर्शनी आवश्यकताओं पर चर्चा करें।",
      button: "मुफ्त कोटेशन प्राप्त करें"
    }
  },
  vi: {
    title: "Gia Công Gian Hàng Triển Lãm",
    subtitle: "Giải Pháp Gian Hàng Triển Lãm & Hội Chợ Thương Mại Chuyên Nghiệp",
    heroDescription: "Biến đổi sự hiện diện triển lãm của bạn với các gian hàng được thiết kế tùy chỉnh và gia công chuyên nghiệp.",
    
    services: {
      title: "Dịch Vụ Gia Công Của Chúng Tôi",
      items: [
        {
          icon: Building2,
          title: "Thiết Kế Gian Hàng Tùy Chỉnh",
          description: "Thiết kế độc đáo, tập trung vào thương hiệu phù hợp với nhu cầu triển lãm của bạn."
        },
        {
          icon: Ruler,
          title: "Gia Công Chính Xác",
          description: "Tay nghề chuyên môn sử dụng vật liệu cao cấp và kỹ thuật sản xuất tiên tiến."
        },
        {
          icon: Palette,
          title: "Giải Pháp Sáng Tạo",
          description: "Các khái niệm trưng bày sáng tạo thu hút sự chú ý và thu hút đối tượng mục tiêu."
        },
        {
          icon: Zap,
          title: "Lắp Đặt Hoàn Chỉnh",
          description: "Dịch vụ lắp đặt và tháo dỡ toàn diện với quản lý dự án chuyên nghiệp."
        }
      ]
    },
    
    features: {
      title: "Tại Sao Chọn Gia Công Gian Hàng Của Chúng Tôi",
      items: [
        "Hơn 15 Năm Kinh Nghiệm Triển Lãm",
        "Tiêu Chuẩn Chất Lượng Quốc Tế",
        "Giao Dự Án Đúng Thời Hạn",
        "Hỗ Trợ Thiết Kế Toàn Diện",
        "Dịch Vụ Lắp Đặt Toàn Cầu",
        "Giải Pháp Hiệu Quả Chi Phí"
      ]
    },
    
    process: {
      title: "Quy Trình Gia Công Của Chúng Tôi",
      steps: [
        {
          step: "01",
          title: "Tư Vấn & Lập Kế Hoạch",
          description: "Hiểu rõ yêu cầu, bản sắc thương hiệu và mục tiêu triển lãm của bạn."
        },
        {
          step: "02",
          title: "Thiết Kế & Trực Quan Hóa",
          description: "Tạo thiết kế 3D chi tiết và hình ảnh kết xuất để bạn phê duyệt."
        },
        {
          step: "03",
          title: "Lựa Chọn Vật Liệu",
          description: "Chọn vật liệu cao cấp phù hợp với ngân sách và tầm nhìn thiết kế của bạn."
        },
        {
          step: "04",
          title: "Gia Công & Kiểm Soát Chất Lượng",
          description: "Sản xuất chính xác với kiểm tra chất lượng nghiêm ngặt ở mọi giai đoạn."
        },
        {
          step: "05",
          title: "Lắp Đặt & Hỗ Trợ",
          description: "Lắp đặt chuyên nghiệp, hỗ trợ trong sự kiện và tháo dỡ sau sự kiện."
        }
      ]
    },
    
    gallery: {
      title: "Danh Mục Gian Hàng Của Chúng Tôi",
      subtitle: "Thể Hiện Sự Xuất Sắc Trong Thiết Kế Triển Lãm"
    },
    
    cta: {
      title: "Sẵn Sàng Tạo Gian Hàng Triển Lãm Hoàn Hảo?",
      description: "Hãy thảo luận về yêu cầu triển lãm sắp tới của bạn và tạo ra sự hiện diện nổi bật.",
      button: "Nhận Báo Giá Miễn Phí"
    }
  },
  ur: {
    title: "نمائشی اسٹال کی تعمیر",
    subtitle: "پیشہ ورانہ نمائشی اسٹینڈز اور ٹریڈ شو حل",
    heroDescription: "اپنے کسٹم ڈیزائن اور ماہرانہ طور پر تیار کردہ اسٹالز کے ساتھ اپنی نمائش کی موجودگی کو تبدیل کریں۔",
    
    services: {
      title: "ہماری تعمیراتی خدمات",
      items: [
        {
          icon: Building2,
          title: "کسٹم اسٹال ڈیزائن",
          description: "آپ کی نمائشی ضروریات کے مطابق منفرد، برانڈ پر مرکوز ڈیزائن۔"
        },
        {
          icon: Ruler,
          title: "درست تعمیر",
          description: "پریمیم مواد اور جدید مینوفیکچرنگ تکنیکوں کا استعمال کرتے ہوئے ماہر کاریگری۔"
        },
        {
          icon: Palette,
          title: "تخلیقی حل",
          description: "جدید ڈسپلے تصورات جو توجہ اور ہدف کے سامعین کو راغب کرتے ہیں۔"
        },
        {
          icon: Zap,
          title: "مکمل سیٹ اپ",
          description: "پیشہ ورانہ پروجیکٹ مینجمنٹ کے ساتھ مکمل انسٹالیشن اور ڈسمنٹلنگ خدمات۔"
        }
      ]
    },
    
    features: {
      title: "ہمارے اسٹال کی تعمیر کو کیوں منتخب کریں",
      items: [
        "15+ سال کا نمائشی تجربہ",
        "بین الاقوامی معیار کی کوالٹی",
        "وقت پر پروجیکٹ کی ڈیلیوری",
        "جامع ڈیزائن سپورٹ",
        "عالمی انسٹالیشن خدمات",
        "لاگت مؤثر حل"
      ]
    },
    
    process: {
      title: "ہمارا تعمیراتی عمل",
      steps: [
        {
          step: "01",
          title: "مشاورت اور منصوبہ بندی",
          description: "آپ کی ضروریات، برانڈ کی شناخت اور نمائشی اہداف کو سمجھنا۔"
        },
        {
          step: "02",
          title: "ڈیزائن اور تصوراتی",
          description: "آپ کی منظوری کے لیے تفصیلی 3D ڈیزائن اور رینڈرنگ بنانا۔"
        },
        {
          step: "03",
          title: "مواد کا انتخاب",
          description: "آپ کے بجٹ اور ڈیزائن ویژن کے مطابق پریمیم مواد کا انتخاب۔"
        },
        {
          step: "04",
          title: "تعمیر اور معیار کنٹرول",
          description: "ہر مرحلے میں سخت معیار کی جانچ کے ساتھ درست مینوفیکچرنگ۔"
        },
        {
          step: "05",
          title: "انسٹالیشن اور سپورٹ",
          description: "پیشہ ورانہ سیٹ اپ، ایونٹ کے دوران سپورٹ اور ایونٹ کے بعد ڈسمنٹلنگ۔"
        }
      ]
    },
    
    gallery: {
      title: "ہمارا اسٹال پورٹ فولیو",
      subtitle: "نمائشی ڈیزائن میں بہترین کا مظاہرہ"
    },
    
    cta: {
      title: "اپنا کامل نمائشی اسٹال بنانے کے لیے تیار ہیں؟",
      description: "آئیے آپ کی آنے والی نمائشی ضروریات پر بات کریں اور ایک نمایاں موجودگی بنائیں۔",
      button: "مفت قیمت حاصل کریں"
    }
  },
  tr: {
    title: "Fuar Standı İmalatı",
    subtitle: "Profesyonel Fuar Standları ve Ticaret Fuarı Çözümleri",
    heroDescription: "Özel tasarlanmış ve uzman şekilde imal edilmiş standlarımızla fuar varlığınızı dönüştürün.",
    
    services: {
      title: "İmalat Hizmetlerimiz",
      items: [
        {
          icon: Building2,
          title: "Özel Stand Tasarımı",
          description: "Fuar ihtiyaçlarınıza ve alan gereksinimlerinize göre benzersiz, marka odaklı tasarımlar."
        },
        {
          icon: Ruler,
          title: "Hassas İmalat",
          description: "Premium malzemeler ve gelişmiş üretim teknikleri kullanarak uzman işçilik."
        },
        {
          icon: Palette,
          title: "Yaratıcı Çözümler",
          description: "Dikkat çeken ve hedef kitlenizi meşgul eden yenilikçi sergileme konseptleri."
        },
        {
          icon: Zap,
          title: "Komple Kurulum",
          description: "Profesyonel proje yönetimi ile uçtan uca kurulum ve söküm hizmetleri."
        }
      ]
    },
    
    features: {
      title: "Stand İmalatımızı Neden Seçmelisiniz",
      items: [
        "15+ Yıl Fuar Deneyimi",
        "Uluslararası Kalite Standartları",
        "Zamanında Proje Teslimatı",
        "Kapsamlı Tasarım Desteği",
        "Küresel Kurulum Hizmetleri",
        "Maliyet Etkin Çözümler"
      ]
    },
    
    process: {
      title: "İmalat Sürecimiz",
      steps: [
        {
          step: "01",
          title: "Danışmanlık ve Planlama",
          description: "İhtiyaçlarınızı, marka kimliğinizi ve fuar hedeflerinizi anlama."
        },
        {
          step: "02",
          title: "Tasarım ve Görselleştirme",
          description: "Onayınız için detaylı 3D tasarımlar ve renderlar oluşturma."
        },
        {
          step: "03",
          title: "Malzeme Seçimi",
          description: "Bütçeniz ve tasarım vizyonunuzla uyumlu premium malzemeler seçme."
        },
        {
          step: "04",
          title: "İmalat ve Kalite Kontrolü",
          description: "Her aşamada titiz kalite kontrolü ile hassas üretim."
        },
        {
          step: "05",
          title: "Kurulum ve Destek",
          description: "Profesyonel kurulum, etkinlik sırasında destek ve etkinlik sonrası söküm."
        }
      ]
    },
    
    gallery: {
      title: "Stand Portföyümüz",
      subtitle: "Fuar Tasarımında Mükemmelliği Sergiliyor"
    },
    
    cta: {
      title: "Mükemmel Fuar Standınızı Oluşturmaya Hazır mısınız?",
      description: "Yaklaşan fuar gereksinimlerinizi tartışalım ve öne çıkan bir varlık yaratalım.",
      button: "Ücretsiz Teklif Alın"
    }
  }
};

export function StallFabricationPage() {
  const { language } = useLanguage();
  const content = stallFabricationContent[language as keyof typeof stallFabricationContent];
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const stallImages = [
    {
      url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1926&auto=format&fit=crop",
      title: "Modern Exhibition Stand"
    },
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      title: "Interactive Display Setup"
    },
    {
      url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop",
      title: "Trade Show Booth"
    },
    {
      url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
      title: "Exhibition Hall Setup"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-accent/20 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              {content.subtitle}
            </Badge>
            <h1 className="mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {content.title}
            </h1>
            <p className="mb-8 text-muted-foreground max-w-2xl mx-auto">
              {content.heroDescription}
            </p>
            <Button size="lg" className="gap-2">
              {content.cta.button}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{content.services.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8">{content.features.title}</h2>
              <div className="space-y-4">
                {content.features.items.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
                alt="Exhibition stall fabrication process"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{content.process.title}</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {content.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{content.gallery.title}</h2>
            <p className="text-muted-foreground">{content.gallery.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stallImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover rounded-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <p className="text-white font-medium">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="mb-4 text-white">{content.cta.title}</h2>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto">
              {content.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Us Now
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-white text-white hover:bg-white hover:text-primary">
                <Mail className="h-4 w-4" />
                Email Inquiry
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}