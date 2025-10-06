import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');
  const [isRTL, setIsRTL] = useState(true);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'ar';
    setLanguage(savedLanguage);
    setIsRTL(savedLanguage === 'ar');
    
    // Update document direction and language
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLanguage;
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLanguage);
    setIsRTL(newLanguage === 'ar');
    localStorage.setItem('language', newLanguage);
    
    // Update document direction and language
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
  };

  const value = {
    language,
    isRTL,
    toggleLanguage,
    t: (key) => translations[language][key] || key
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'نبذة عني',
    projects: 'المشاريع',
    experience: 'الخبرة',
    contact: 'التواصل',
    
    // Hero Section
    name: 'عبد الله عماد',
    title: 'مطور برمجيات ومواقع إلكترونية',
    heroDescription: 'متخصص دعم تقني متحمس مع أكثر من 4 سنوات من الخبرة العملية في تطوير البرمجيات وإدارة أنظمة تكنولوجيا المعلومات. خبرة واسعة في تطوير تطبيقات سطح المكتب، المواقع الإلكترونية، وتطبيقات الهاتف المحمول.',
    contactMe: 'تواصل معي',
    downloadCV: 'تحميل السيرة الذاتية',
    
    // About Section
    aboutTitle: 'نبذة عني',
    personalInfo: 'المعلومات الشخصية',
    age: 'العمر',
    residence: 'الإقامة',
    education: 'التعليم',
    languages: 'اللغات',
    professionalSummary: 'الملخص المهني',
    technicalSkills: 'المهارات التقنية',
    programmingLanguages: 'لغات البرمجة',
    frameworksLibraries: 'الأطر والمكتبات',
    databases: 'قواعد البيانات',
    operatingSystems: 'أنظمة التشغيل',
    networkingSecurity: 'الشبكات والأمان',
    otherTools: 'أدوات أخرى',
    
    // Projects Section
    projectsTitle: 'المشاريع',
    projectsDescription: 'مجموعة متنوعة من المشاريع التي طورتها في مجالات مختلفة من البرمجة وتطوير التطبيقات',
    desktopApps: 'سطح المكتب',
    websites: 'المواقع',
    mobileApps: 'الهاتف المحمول',
    technologiesUsed: 'التقنيات المستخدمة:',
    keyFeatures: 'المميزات الرئيسية:',
    viewProject: 'عرض المشروع',
    sourceCode: 'الكود المصدري',
    
    // Experience Section
    experienceTitle: 'الخبرة المهنية',
    experienceDescription: 'رحلتي المهنية في مجال تكنولوجيا المعلومات وتطوير البرمجيات',
    professionalHistory: 'التاريخ المهني',
    currentJob: 'الوظيفة الحالية',
    keyResponsibilities: 'المسؤوليات الرئيسية:',
    keyAchievements: 'الإنجازات الرئيسية',
    coreSkills: 'المهارات الأساسية',
    
    // Contact Section
    contactTitle: 'تواصل معي',
    contactDescription: 'هل لديك مشروع في ذهنك؟ أو تحتاج إلى استشارة تقنية؟ لا تتردد في التواصل معي',
    contactInfo: 'معلومات التواصل',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    location: 'الموقع',
    quickContact: 'تواصل سريع',
    whatsapp: 'واتساب',
    directCall: 'اتصال مباشر',
    whyChooseMe: 'لماذا تختارني؟',
    sendMessage: 'أرسل رسالة',
    fullName: 'الاسم الكامل',
    subject: 'الموضوع',
    message: 'الرسالة',
    sendButton: 'إرسال الرسالة',
    
    // Footer
    quickLinks: 'روابط سريعة',
    contactInfoFooter: 'معلومات التواصل',
    allRightsReserved: 'جميع الحقوق محفوظة',
    madeWith: 'صُنع بـ',
    inUAE: 'في الإمارات',
    backToTop: 'العودة إلى الأعلى',
    
    // Values
    ageValue: '26 سنة',
    residenceValue: 'دولة الإمارات العربية المتحدة',
    educationValue: 'بكالوريوس نظم المعلومات الإدارية',
    languagesValue: 'العربية (الأم) - الإنجليزية (جيد)',
    locationValue: 'دولة الإمارات العربية المتحدة',
    
    // Professional Summary
    professionalSummaryText: 'متخصص دعم تقني متحمس وذو خبرة تقنية مع أكثر من 4 سنوات من الخبرة العملية في إدارة الأجهزة والبرمجيات والشبكات وأنظمة تكنولوجيا المعلومات. ماهر في حل المشاكل التقنية بكفاءة، والحفاظ على مستويات عالية من الخدمة، وضمان الأداء الأمثل للبنية التحتية الرقمية. شغوف بالتعلم المستمر، خاصة في مجال الذكاء الاصطناعي وتطوير التطبيقات المحمولة وأتمتة الأنظمة.'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    
    // Hero Section
    name: 'Abdallah Emad',
    title: 'Software Developer & Web Developer',
    heroDescription: 'Motivated and tech-savvy IT Support Specialist with over 4 years of hands-on experience in software development and IT systems management. Extensive experience in developing desktop applications, websites, and mobile applications.',
    contactMe: 'Contact Me',
    downloadCV: 'Download CV',
    
    // About Section
    aboutTitle: 'About Me',
    personalInfo: 'Personal Information',
    age: 'Age',
    residence: 'Residence',
    education: 'Education',
    languages: 'Languages',
    professionalSummary: 'Professional Summary',
    technicalSkills: 'Technical Skills',
    programmingLanguages: 'Programming Languages',
    frameworksLibraries: 'Frameworks & Libraries',
    databases: 'Databases',
    operatingSystems: 'Operating Systems',
    networkingSecurity: 'Networking & Security',
    otherTools: 'Other Tools',
    
    // Projects Section
    projectsTitle: 'Projects',
    projectsDescription: 'A diverse collection of projects I have developed in various fields of programming and application development',
    desktopApps: 'Desktop',
    websites: 'Websites',
    mobileApps: 'Mobile',
    technologiesUsed: 'Technologies Used:',
    keyFeatures: 'Key Features:',
    viewProject: 'View Project',
    sourceCode: 'Source Code',
    
    // Experience Section
    experienceTitle: 'Professional Experience',
    experienceDescription: 'My professional journey in information technology and software development',
    professionalHistory: 'Professional History',
    currentJob: 'Current Position',
    keyResponsibilities: 'Key Responsibilities:',
    keyAchievements: 'Key Achievements',
    coreSkills: 'Core Skills',
    
    // Contact Section
    contactTitle: 'Contact Me',
    contactDescription: 'Do you have a project in mind? Or need technical consultation? Feel free to contact me',
    contactInfo: 'Contact Information',
    phone: 'Phone',
    email: 'Email',
    location: 'Location',
    quickContact: 'Quick Contact',
    whatsapp: 'WhatsApp',
    directCall: 'Direct Call',
    whyChooseMe: 'Why Choose Me?',
    sendMessage: 'Send Message',
    fullName: 'Full Name',
    subject: 'Subject',
    message: 'Message',
    sendButton: 'Send Message',
    
    // Footer
    quickLinks: 'Quick Links',
    contactInfoFooter: 'Contact Information',
    allRightsReserved: 'All rights reserved',
    madeWith: 'Made with',
    inUAE: 'in UAE',
    backToTop: 'Back to Top',
    
    // Values
    ageValue: '26 years old',
    residenceValue: 'United Arab Emirates',
    educationValue: 'Bachelor\'s in Management Information Systems',
    languagesValue: 'Arabic (Native) - English (Good)',
    locationValue: 'United Arab Emirates',
    
    // Professional Summary
    professionalSummaryText: 'Motivated and tech-savvy IT Support Specialist with over 4 years of hands-on experience in managing hardware, software, networks, and IT systems. Adept at solving technical issues efficiently, maintaining high levels of service, and ensuring optimal performance of digital infrastructure. Demonstrates a strong ability to work with diverse technologies, including Windows, Linux, macOS, and mobile platforms. Passionate about continuous learning, especially in AI, mobile development, and system automation.'
  }
};
