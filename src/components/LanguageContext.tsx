import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh' | 'hi' | 'vi' | 'ur' | 'tr';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translations object
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.gallery': 'Gallery',
    'nav.clients': 'Clients',
    'nav.resources': 'Online Resources',
    'nav.careers': 'Careers',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.readMore': 'Read More',
    'common.contact': 'Contact Us',
    'common.getQuote': 'Get Quote',
    'common.years': 'Years',
    'common.experience': 'Experience',
    
    // Home Page
    'home.hero.title': 'Global Textile Sourcing Excellence',
    'home.hero.subtitle': 'Your trusted partner for premium textile sourcing and supply chain solutions worldwide',
    'home.hero.cta': 'Explore Our Services',
    'home.stats.suppliers': 'Trusted Suppliers',
    'home.stats.countries': 'Countries Served',
    'home.stats.satisfaction': 'Client Satisfaction',
    
    // About Page
    'about.title': 'About DW-Bridging',
    'about.subtitle': 'Leading the textile industry with 15+ years of expertise',
    'about.description': 'We are a premier textile buying house specializing in global sourcing and supply chain management.',
    
    // Services
    'services.title': 'Our Services',
    'services.sourcing.title': 'Global Sourcing',
    'services.sourcing.description': 'Connect with verified suppliers worldwide',
    'services.quality.title': 'Quality Assurance',
    'services.quality.description': 'Rigorous quality control processes',
    'services.logistics.title': 'Supply Chain Management',
    'services.logistics.description': 'End-to-end logistics solutions',
    
    // Quote Form
    'quote.title': 'Request a Quote',
    'quote.subtitle': 'Get a personalized quote for your textile sourcing needs',
    'quote.form.personalInfo': 'Personal Information',
    'quote.form.name': 'Full Name',
    'quote.form.email': 'Email Address',
    'quote.form.phone': 'Phone Number',
    'quote.form.company': 'Company Name',
    'quote.form.position': 'Your Position',
    'quote.form.projectDetails': 'Project Details',
    'quote.form.productType': 'Product Type',
    'quote.form.productType.fabric': 'Fabric',
    'quote.form.productType.yarn': 'Yarn',
    'quote.form.productType.apparel': 'Apparel Materials',
    'quote.form.productType.accessories': 'Accessories',
    'quote.form.productType.other': 'Other',
    'quote.form.quantity': 'Estimated Quantity',
    'quote.form.timeline': 'Required Timeline',
    'quote.form.timeline.urgent': 'Urgent (1-2 weeks)',
    'quote.form.timeline.standard': 'Standard (3-4 weeks)',
    'quote.form.timeline.flexible': 'Flexible (1-2 months)',
    'quote.form.budget': 'Budget Range',
    'quote.form.requirements': 'Additional Requirements',
    'quote.form.requirements.placeholder': 'Please describe your specific requirements, quality standards, certifications needed, etc.',
    'quote.form.submit': 'Submit Quote Request',
    'quote.form.required': 'Required field',
    'quote.success.title': 'Quote Request Submitted!',
    'quote.success.message': 'Thank you for your interest. Our team will review your request and contact you within 24 hours.',

    // Footer
    'footer.description': 'Leading textile buying house with global reach and local expertise.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.followUs': 'Follow Us',
    'footer.payWith': 'Pay With:',
    'footer.rights': 'All rights reserved.'
  },
  
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.services': '服务',
    'nav.products': '产品',
    'nav.gallery': '展示',
    'nav.clients': '客户',
    'nav.resources': '在线资源',
    'nav.careers': '招聘',
    
    // Common
    'common.learnMore': '了解更多',
    'common.readMore': '阅读更多',
    'common.contact': '联系我们',
    'common.getQuote': '获取报价',
    'common.years': '年',
    'common.experience': '经验',
    
    // Home Page  
    'home.hero.title': '全球纺织品采购卓越服务',
    'home.hero.subtitle': '您值得信赖的全球优质纺织品采购和供应链解决方案合作伙伴',
    'home.hero.cta': '探索我们的服务',
    'home.stats.suppliers': '可信供应商',
    'home.stats.countries': '服务国家',
    'home.stats.satisfaction': '客户满意度',
    
    // About Page
    'about.title': '关于DW-Bridging',
    'about.subtitle': '15年+专业经验，引领纺织行业',
    'about.description': '我们是专业的纺织品采购公司，专注于全球采购和供应链管理。',
    
    // Services
    'services.title': '我们的服务',
    'services.sourcing.title': '全球采购',
    'services.sourcing.description': '连接全球认证供应商',
    'services.quality.title': '质量保证',
    'services.quality.description': '严格的质量控制流程',
    'services.logistics.title': '供应链管理',
    'services.logistics.description': '端到端物流解决方案',
    
    // Quote Form
    'quote.title': '申请报价',
    'quote.subtitle': '为您的纺织品采购需求获取个性化报价',
    'quote.form.personalInfo': '个人信息',
    'quote.form.name': '姓名',
    'quote.form.email': '电子邮箱',
    'quote.form.phone': '电话号码',
    'quote.form.company': '公司名称',
    'quote.form.position': '您的职位',
    'quote.form.projectDetails': '项目详情',
    'quote.form.productType': '产品类型',
    'quote.form.productType.fabric': '面料',
    'quote.form.productType.yarn': '纱线',
    'quote.form.productType.apparel': '服装材料',
    'quote.form.productType.accessories': '配件',
    'quote.form.productType.other': '其他',
    'quote.form.quantity': '预估数量',
    'quote.form.timeline': '所需时间',
    'quote.form.timeline.urgent': '紧急 (1-2周)',
    'quote.form.timeline.standard': '标准 (3-4周)',
    'quote.form.timeline.flexible': '灵活 (1-2个月)',
    'quote.form.budget': '预算范围',
    'quote.form.requirements': '附加要求',
    'quote.form.requirements.placeholder': '请描述您的具体要求、质量标准、所需认证等。',
    'quote.form.submit': '提交报价申请',
    'quote.form.required': '必填字段',
    'quote.success.title': '报价申请已提交！',
    'quote.success.message': '感谢您的关注。我们的团队将审查您的申请并在24小时内与您联系。',

    // Footer
    'footer.description': '领先的纺织品采购公司，具有全球视野和本地专业知识。',
    'footer.quickLinks': '快速链接',
    'footer.contact': '联系信息',
    'footer.followUs': '关注我们',
    'footer.payWith': '支付方式：',
    'footer.rights': '版权所有。'
  },
  
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.services': 'सेवाएं',
    'nav.products': 'उत्पाद',
    'nav.gallery': 'गैलरी',
    'nav.clients': 'ग्राहक',
    'nav.resources': 'ऑनलाइन संसाधन',
    'nav.careers': 'करियर',
    
    // Common
    'common.learnMore': 'और जानें',
    'common.readMore': 'और पढ़ें',
    'common.contact': 'संपर्क करें',
    'common.getQuote': 'कोटेशन प्राप्त करें',
    'common.years': 'वर्ष',
    'common.experience': 'अनुभव',
    
    // Home Page
    'home.hero.title': 'वैश्विक टेक्सटाइल सोर्सिंग एक्सीलेंस',
    'home.hero.subtitle': 'विश्वव्यापी प्रीमियम टेक्सटाइल सोर्सिंग और सप्लाई चेन समाधान के लिए आपका विश्वसनीय साझीदार',
    'home.hero.cta': 'हमारी ���ेवाओं का अन्वेषण करें',
    'home.stats.suppliers': 'विश्वसनीय आपूर्तिकर्ता',
    'home.stats.countries': 'सेवा प्रदान देश',
    'home.stats.satisfaction': 'ग्राहक संतुष्टि',
    
    // About Page
    'about.title': 'DW-Bridging के बारे में',
    'about.subtitle': '15+ वर्षों की विशेषज्ञता के साथ टेक्सटाइल उद्योग का नेतृत्व',
    'about.description': 'हम एक प्रमुख टेक्सटाइल खरीदारी घर हैं जो वैश्विक सोर्सिंग और सप्लाई चेन प्रबंधन में विशेषज्ञता रखते हैं।',
    
    // Services
    'services.title': 'हमारी सेवाएं',
    'services.sourcing.title': 'वैश्विक सोर्सिंग',
    'services.sourcing.description': 'दुनियाभर के सत्यापित आपूर्तिकर्ताओं से जुड़ें',
    'services.quality.title': 'गुणवत्ता आश्वासन',
    'services.quality.description': 'कठोर गुणवत्ता नियंत्रण प्रक्रियाएं',
    'services.logistics.title': 'सप्लाई चेन प्रबंधन',
    'services.logistics.description': 'एंड-टू-एंड लॉजिस्टिक्स समाधान',
    
    // Quote Form
    'quote.title': 'कोटेशन का अनुरोध करें',
    'quote.subtitle': 'अपनी टेक्सटाइल सोर्सिंग आवश्यकताओं के लिए व्यक्तिगत कोटेशन प्राप्त करें',
    'quote.form.personalInfo': 'व्यक्तिगत जानकारी',
    'quote.form.name': 'पूरा नाम',
    'quote.form.email': 'ईमेल पता',
    'quote.form.phone': 'फोन नंबर',
    'quote.form.company': 'कंपनी का नाम',
    'quote.form.position': 'आपका पद',
    'quote.form.projectDetails': 'परियोजना विवरण',
    'quote.form.productType': 'उत्पाद प्रकार',
    'quote.form.productType.fabric': 'कपड़ा',
    'quote.form.productType.yarn': 'धागा',
    'quote.form.productType.apparel': 'परिधान सामग्री',
    'quote.form.productType.accessories': 'सहायक उपकरण',
    'quote.form.productType.other': 'अन्य',
    'quote.form.quantity': 'अनुमानित मात्रा',
    'quote.form.timeline': 'आवश्यक समयसीमा',
    'quote.form.timeline.urgent': 'तत्काल (1-2 सप्ताह)',
    'quote.form.timeline.standard': 'मानक (3-4 सप्ताह)',
    'quote.form.timeline.flexible': 'लचीला (1-2 महीने)',
    'quote.form.budget': 'बजट सीमा',
    'quote.form.requirements': 'अतिरिक्त आवश्यकताएं',
    'quote.form.requirements.placeholder': 'कृपया अपनी विशिष्ट आवश्यकताओं, गुणवत्ता मानकों, आवश्यक प्रमाणपत्रों आदि का वर्णन करें।',
    'quote.form.submit': 'कोटेशन अनुरोध जमा करें',
    'quote.form.required': 'आवश्यक फ़ील्ड',
    'quote.success.title': 'कोटेशन अनुरोध जमा किया गया!',
    'quote.success.message': 'आपकी रुचि के लिए धन्यवाद। हमारी टीम आपके अनुरोध की समीक्षा करेगी और 24 घंटों के भीतर आपसे संपर्क करेगी।',

    // Footer
    'footer.description': 'वैश्विक पहुंच और स्थानीय विशेषज्ञता के साथ अग्रणी टेक्सटाइल खरीदारी घर।',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.contact': 'संपर्क जानकारी',
    'footer.followUs': 'हमें फॉलो करें',
    'footer.payWith': 'भुगतान विकल्प:',
    'footer.rights': 'सभी अधिकार सुरक्षित।'
  },
  
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.about': 'Về chúng tôi',
    'nav.services': 'Dịch vụ',
    'nav.products': 'Sản phẩm',
    'nav.gallery': 'Thư viện',
    'nav.clients': 'Khách hàng',
    'nav.resources': 'Tài liệu trực tuyến',
    'nav.careers': 'Tuyển dụng',
    
    // Common
    'common.learnMore': 'Tìm hiểu thêm',
    'common.readMore': 'Đọc thêm',
    'common.contact': 'Liên hệ',
    'common.getQuote': 'Nhận báo giá',
    'common.years': 'Năm',
    'common.experience': 'Kinh nghiệm',
    
    // Home Page
    'home.hero.title': 'Xuất sắc trong nguồn cung dệt may toàn cầu',
    'home.hero.subtitle': 'Đối tác đáng tin cậy cho giải pháp nguồn cung dệt may cao cấp và chuỗi cung ứng toàn cầu',
    'home.hero.cta': 'Khám phá dịch vụ',
    'home.stats.suppliers': 'Nhà cung cấp đáng tin cậy',
    'home.stats.countries': 'Quốc gia phục vụ',
    'home.stats.satisfaction': 'Sự hài lòng của khách hàng',
    
    // About Page
    'about.title': 'Về DW-Bridging',
    'about.subtitle': 'Dẫn đầu ngành dệt may với hơn 15 năm chuyên môn',
    'about.description': 'Chúng tôi là công ty mua sắm dệt may hàng đầu chuyên về nguồn cung toàn cầu và quản lý chuỗi cung ứng.',
    
    // Services
    'services.title': 'Dịch vụ của chúng tôi',
    'services.sourcing.title': 'Nguồn cung toàn cầu',
    'services.sourcing.description': 'Kết nối với các nhà cung cấp đã được xác minh trên toàn thế giới',
    'services.quality.title': 'Đảm bảo chất lượng',
    'services.quality.description': 'Quy trình kiểm soát chất lượng nghiêm ngặt',
    'services.logistics.title': 'Quản lý chuỗi cung ứng',
    'services.logistics.description': 'Giải pháp logistics từ đầu đến cuối',
    
    // Quote Form
    'quote.title': 'Yêu cầu báo giá',
    'quote.subtitle': 'Nhận báo giá cá nhân hóa cho nhu cầu nguồn cung dệt may của bạn',
    'quote.form.personalInfo': 'Thông tin cá nhân',
    'quote.form.name': 'Họ và tên',
    'quote.form.email': 'Địa chỉ email',
    'quote.form.phone': 'Số điện thoại',
    'quote.form.company': 'Tên công ty',
    'quote.form.position': 'Vị trí của bạn',
    'quote.form.projectDetails': 'Chi tiết dự án',
    'quote.form.productType': 'Loại sản phẩm',
    'quote.form.productType.fabric': 'Vải',
    'quote.form.productType.yarn': 'Sợi',
    'quote.form.productType.apparel': 'Vật liệu may mặc',
    'quote.form.productType.accessories': 'Phụ kiện',
    'quote.form.productType.other': 'Khác',
    'quote.form.quantity': 'Số lượng ước tính',
    'quote.form.timeline': 'Thời gian yêu cầu',
    'quote.form.timeline.urgent': 'Khẩn cấp (1-2 tuần)',
    'quote.form.timeline.standard': 'Tiêu chuẩn (3-4 tuần)',
    'quote.form.timeline.flexible': 'Linh hoạt (1-2 tháng)',
    'quote.form.budget': 'Phạm vi ngân sách',
    'quote.form.requirements': 'Yêu cầu bổ sung',
    'quote.form.requirements.placeholder': 'Vui lòng mô tả các yêu cầu cụ thể, tiêu chuẩn chất lượng, chứng nhận cần thiết, v.v.',
    'quote.form.submit': 'Gửi yêu cầu báo giá',
    'quote.form.required': 'Trường bắt buộc',
    'quote.success.title': 'Đã gửi yêu cầu báo giá!',
    'quote.success.message': 'Cảm ơn sự quan tâm của bạn. Đội ngũ của chúng tôi sẽ xem xét yêu cầu và liên hệ với bạn trong vòng 24 giờ.',

    // Footer
    'footer.description': 'Công ty mua sắm dệt may hàng đầu với tầm nhìn toàn cầu và chuyên môn địa phương.',
    'footer.quickLinks': 'Liên kết nhanh',
    'footer.contact': 'Thông tin liên hệ',
    'footer.followUs': 'Theo dõi chúng tôi',
    'footer.payWith': 'Thanh toán bằng:',
    'footer.rights': 'Bản quyền được bảo lưu.'
  },
  
  ur: {
    // Navigation (Pakistan - Urdu)
    'nav.home': 'ہوم',
    'nav.about': 'ہمارے بارے میں',
    'nav.services': 'خدمات',
    'nav.products': 'پروڈکٹس',
    'nav.gallery': 'گیلری',
    'nav.clients': 'کلائنٹس',
    'nav.resources': 'آن لائن وسائل',
    'nav.careers': 'کیریئر',
    
    // Common
    'common.learnMore': 'مزید جانیں',
    'common.readMore': 'مزید پڑھیں',
    'common.contact': 'رابطہ کریں',
    'common.getQuote': 'قیمت حاصل کریں',
    'common.years': 'سال',
    'common.experience': 'تجربہ',
    
    // Home Page
    'home.hero.title': 'عالمی ٹیکسٹائل سورسنگ میں بہترین',
    'home.hero.subtitle': 'عالمی پریمیم ٹیکسٹائل سورسنگ اور سپلائی چین حل کے لیے آپ کا قابل اعتماد شریک',
    'home.hero.cta': 'ہماری خدمات دیکھیں',
    'home.stats.suppliers': 'قابل اعتماد سپلائرز',
    'home.stats.countries': 'ممالک کی خدمت',
    'home.stats.satisfaction': 'کلائنٹ کی اطمینان',
    
    // About Page
    'about.title': 'DW-Bridging کے بارے میں',
    'about.subtitle': '15+ سال کی مہارت کے ساتھ ٹیکسٹائل انڈسٹری میں قیادت',
    'about.description': 'ہم ایک معروف ٹیکسٹائل خریداری کمپنی ہیں جو عالمی سورسنگ اور سپلائی چین منیجمنٹ میں مہارت رکھتے ہیں۔',
    
    // Services
    'services.title': 'ہماری خدمات',
    'services.sourcing.title': 'عالمی سورسنگ',
    'services.sourcing.description': 'دنیا بھر کے تصدیق شدہ سپلائرز سے رابطہ',
    'services.quality.title': 'کوالٹی یقین دہانی',
    'services.quality.description': 'سخت کوالٹی کنٹرول کے عمل',
    'services.logistics.title': 'سپلائی چین منیجمنٹ',
    'services.logistics.description': 'مکمل لاجسٹک حل',
    
    // Quote Form
    'quote.title': 'قیمت کی درخواست کریں',
    'quote.subtitle': 'اپنی ٹیکسٹائل سورسنگ کی ضروریات کے لیے ذاتی قیمت حاصل کریں',
    'quote.form.personalInfo': 'ذاتی معلومات',
    'quote.form.name': 'مکمل نام',
    'quote.form.email': 'ای میل پتہ',
    'quote.form.phone': 'فون نمبر',
    'quote.form.company': 'کمپنی کا نام',
    'quote.form.position': 'آپ کا عہدہ',
    'quote.form.projectDetails': 'پروجیکٹ کی تفصیلات',
    'quote.form.productType': 'پروڈکٹ کی قسم',
    'quote.form.productType.fabric': 'کپڑا',
    'quote.form.productType.yarn': 'سوت',
    'quote.form.productType.apparel': 'ملبوسات کا مال',
    'quote.form.productType.accessories': 'لوازمات',
    'quote.form.productType.other': 'دیگر',
    'quote.form.quantity': 'تخمینی مقدار',
    'quote.form.timeline': 'مطلوبہ وقت',
    'quote.form.timeline.urgent': 'فوری (1-2 ہفتے)',
    'quote.form.timeline.standard': 'معیاری (3-4 ہفتے)',
    'quote.form.timeline.flexible': 'لچکدار (1-2 مہینے)',
    'quote.form.budget': 'بجٹ کی حد',
    'quote.form.requirements': 'اضافی ضروریات',
    'quote.form.requirements.placeholder': 'براہ کرم اپنی مخصوص ضروریات، کوالٹی کے معیار، ضروری سرٹیفیکیشن وغیرہ بیان کریں۔',
    'quote.form.submit': 'قیمت کی درخواست جمع کریں',
    'quote.form.required': 'لازمی فیلڈ',
    'quote.success.title': 'قیمت کی درخواست جمع ہو گئی!',
    'quote.success.message': 'آپ کی دلچسپی کا شکریہ۔ ہماری ٹیم آپ کی درخواست کا جائزہ لے گی اور 24 گھنٹوں کے اندر آپ سے رابطہ کرے گی۔',

    // Footer
    'footer.description': 'عالمی رسائی اور مقامی مہارت کے ساتھ معروف ٹیکسٹائل خریداری کمپنی۔',
    'footer.quickLinks': 'فوری لنکس',
    'footer.contact': 'رابطہ کی معلومات',
    'footer.followUs': 'ہمیں فالو کریں',
    'footer.payWith': 'ادائیگی کریں:',
    'footer.rights': 'تمام حقوق محفوظ ہیں۔'
  },
  
  tr: {
    // Navigation (Turkey - Turkish)
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.services': 'Hizmetler',
    'nav.products': 'Ürünler',
    'nav.gallery': 'Galeri',
    'nav.clients': 'Müşteriler',
    'nav.resources': 'Çevrimiçi Kaynaklar',
    'nav.careers': 'Kariyer',
    
    // Common
    'common.learnMore': 'Daha Fazla Öğren',
    'common.readMore': 'Devamını Oku',
    'common.contact': 'İletişim',
    'common.getQuote': 'Teklif Al',
    'common.years': 'Yıl',
    'common.experience': 'Deneyim',
    
    // Home Page
    'home.hero.title': 'Küresel Tekstil Tedarik Mükemmelliği',
    'home.hero.subtitle': 'Küresel premium tekstil tedarik ve tedarik zinciri çözümleri için güvenilir ortağınız',
    'home.hero.cta': 'Hizmetlerimizi Keşfedin',
    'home.stats.suppliers': 'Güvenilir Tedarikçiler',
    'home.stats.countries': 'Hizmet Verilen Ülkeler',
    'home.stats.satisfaction': 'Müşteri Memnuniyeti',
    
    // About Page
    'about.title': 'DW-Bridging Hakkında',
    'about.subtitle': '15+ yıllık uzmanlıkla tekstil endüstrisinde öncülük',
    'about.description': 'Küresel tedarik ve tedarik zinciri yönetiminde uzmanlaşmış önde gelen tekstil satın alma şirketiyiz.',
    
    // Services
    'services.title': 'Hizmetlerimiz',
    'services.sourcing.title': 'Küresel Tedarik',
    'services.sourcing.description': 'Dünya çapında doğrulanmış tedarikçilerle bağlantı',
    'services.quality.title': 'Kalite Güvencesi',
    'services.quality.description': 'Titiz kalite kontrol süreçleri',
    'services.logistics.title': 'Tedarik Zinciri Yönetimi',
    'services.logistics.description': 'Uçtan uca lojistik çözümleri',
    
    // Quote Form
    'quote.title': 'Teklif Talep Et',
    'quote.subtitle': 'Tekstil tedarik ihtiyaçlarınız için kişiselleştirilmiş teklif alın',
    'quote.form.personalInfo': 'Kişisel Bilgiler',
    'quote.form.name': 'Ad Soyad',
    'quote.form.email': 'E-posta Adresi',
    'quote.form.phone': 'Telefon Numarası',
    'quote.form.company': 'Şirket Adı',
    'quote.form.position': 'Pozisyonunuz',
    'quote.form.projectDetails': 'Proje Detayları',
    'quote.form.productType': 'Ürün Tipi',
    'quote.form.productType.fabric': 'Kumaş',
    'quote.form.productType.yarn': 'İplik',
    'quote.form.productType.apparel': 'Giyim Malzemeleri',
    'quote.form.productType.accessories': 'Aksesuarlar',
    'quote.form.productType.other': 'Diğer',
    'quote.form.quantity': 'Tahmini Miktar',
    'quote.form.timeline': 'Gerekli Zaman Çizelgesi',
    'quote.form.timeline.urgent': 'Acil (1-2 hafta)',
    'quote.form.timeline.standard': 'Standart (3-4 hafta)',
    'quote.form.timeline.flexible': 'Esnek (1-2 ay)',
    'quote.form.budget': 'Bütçe Aralığı',
    'quote.form.requirements': 'Ek Gereksinimler',
    'quote.form.requirements.placeholder': 'Lütfen özel gereksinimlerinizi, kalite standartlarını, gerekli sertifikaları vb. açıklayın.',
    'quote.form.submit': 'Teklif Talebini Gönder',
    'quote.form.required': 'Gerekli alan',
    'quote.success.title': 'Teklif Talebi Gönderildi!',
    'quote.success.message': 'İlginiz için teşekkür ederiz. Ekibimiz talebinizi inceleyecek ve 24 saat içinde sizinle iletişime geçecek.',

    // Footer
    'footer.description': 'Küresel erişim ve yerel uzmanlığa sahip önde gelen tekstil satın alma şirketi.',
    'footer.quickLinks': 'Hızlı Bağlantılar',
    'footer.contact': 'İletişim Bilgileri',
    'footer.followUs': 'Bizi Takip Edin',
    'footer.payWith': 'Ödeme Yöntemleri:',
    'footer.rights': 'Tüm hakları saklıdır.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = React.useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  const contextValue = React.useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};