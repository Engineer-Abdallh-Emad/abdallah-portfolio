import { useState, useEffect, useRef } from 'react';
import { Monitor, Globe, Smartphone, ExternalLink, Github, Star, Zap, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('desktop');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const projectCategories = {
    desktop: {
      title: t('desktopApps'),
      icon: Monitor,
      projects: [
        {
          title: isRTL ? 'نظام إدارة الموارد البشرية' : 'HR Management System',
          description: isRTL 
            ? 'نظام شامل لإدارة الموارد البشرية مع تكامل أجهزة البصمة لتسجيل الحضور والانصراف، إدارة الرواتب، والإجازات.'
            : 'Comprehensive HR management system with biometric integration for attendance tracking, payroll management, and leave management.',
          technologies: ['Python', 'SQLite', 'Tkinter', 'Biometric Integration'],
          features: isRTL 
            ? ['تسجيل الحضور بالبصمة', 'إدارة الرواتب', 'تتبع الإجازات', 'تقارير شاملة']
            : ['Biometric Attendance', 'Payroll Management', 'Leave Tracking', 'Comprehensive Reports'],
          rating: 5,
          complexity: 'Advanced'
        },
        {
          title: isRTL ? 'نظام إدارة شؤون الطلاب' : 'Student Affairs Management System',
          description: isRTL
            ? 'نظام متكامل لإدارة شؤون الطلاب يشمل التسجيل، الدرجات، الجداول الدراسية، والتقارير الأكاديمية.'
            : 'Integrated student affairs management system including registration, grades, schedules, and academic reports.',
          technologies: ['Python', 'MySQL', 'PyQt', 'Report Generation'],
          features: isRTL
            ? ['تسجيل الطلاب', 'إدارة الدرجات', 'الجداول الدراسية', 'التقارير الأكاديمية']
            : ['Student Registration', 'Grade Management', 'Class Schedules', 'Academic Reports'],
          rating: 5,
          complexity: 'Advanced'
        },
        {
          title: isRTL ? 'نظام إدارة المخازن' : 'Inventory Management System',
          description: isRTL
            ? 'نظام لإدارة المخزون مع تتبع المنتجات، عمليات الإدخال والإخراج، وإدارة المخزون بشكل فعال.'
            : 'Inventory management system with product tracking, stock in/out operations, and efficient inventory control.',
          technologies: ['Python', 'SQLite', 'Tkinter', 'Barcode Scanner'],
          features: isRTL
            ? ['تتبع المخزون', 'إدارة الموردين', 'تقارير المخزون', 'تنبيهات النفاد']
            : ['Inventory Tracking', 'Supplier Management', 'Stock Reports', 'Low Stock Alerts'],
          rating: 4,
          complexity: 'Intermediate'
        },
        {
          title: isRTL ? 'نظام إدارة الحسابات' : 'Accounting Management System',
          description: isRTL
            ? 'نظام محاسبي شامل لإدارة الحسابات المالية، الفواتير، والتقارير المالية للشركات الصغيرة والمتوسطة.'
            : 'Comprehensive accounting system for financial management, invoicing, and financial reporting for SMEs.',
          technologies: ['Python', 'MySQL', 'PyQt', 'Financial Reports'],
          features: isRTL
            ? ['إدارة الفواتير', 'التقارير المالية', 'حسابات العملاء', 'الميزانية العمومية']
            : ['Invoice Management', 'Financial Reports', 'Customer Accounts', 'Balance Sheet'],
          rating: 5,
          complexity: 'Advanced'
        }
      ]
    },
    web: {
      title: t('websites'),
      icon: Globe,
      projects: [
        {
          title: isRTL ? 'موقع كيمت للمحاماة' : 'Kimet Law Firm Website',
          description: isRTL
            ? 'موقع إلكتروني احترافي لمكتب محاماة يعرض الخدمات القانونية، فريق العمل، والمقالات القانونية.'
            : 'Professional law firm website showcasing legal services, team members, and legal articles.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
          features: isRTL
            ? ['عرض الخدمات', 'نماذج التواصل', 'المقالات القانونية', 'تصميم متجاوب']
            : ['Service Showcase', 'Contact Forms', 'Legal Articles', 'Responsive Design'],
          link: '#',
          rating: 4,
          complexity: 'Intermediate'
        },
        {
          title: isRTL ? 'موقع فيوتشر برنت للمبيعات' : 'Future Print Sales Website',
          description: isRTL
            ? 'منصة إلكترونية للمبيعات تتيح عرض المنتجات، إدارة الطلبات، ونظام دفع آمن للعملاء.'
            : 'E-commerce platform for product showcase, order management, and secure payment system.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
          features: isRTL
            ? ['كتالوج المنتجات', 'سلة التسوق', 'نظام الدفع', 'لوحة الإدارة']
            : ['Product Catalog', 'Shopping Cart', 'Payment System', 'Admin Dashboard'],
          link: '#',
          rating: 5,
          complexity: 'Advanced'
        },
        {
          title: isRTL ? 'نظام إدارة المستشفى الشامل' : 'Comprehensive Hospital Management System',
          description: isRTL
            ? 'نظام ويب متكامل لإدارة المستشفيات يشمل إدارة المرضى، المواعيد، الطاقم الطبي، والفواتير.'
            : 'Integrated web-based hospital management system including patient management, appointments, medical staff, and billing.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
          features: isRTL
            ? ['إدارة المرضى', 'حجز المواعيد', 'السجلات الطبية', 'إدارة الصيدلية']
            : ['Patient Management', 'Appointment Booking', 'Medical Records', 'Pharmacy Management'],
          rating: 5,
          complexity: 'Expert'
        }
      ]
    },
    mobile: {
      title: t('mobileApps'),
      icon: Smartphone,
      projects: [
        {
          title: isRTL ? 'تطبيق كلية نظم المعلومات' : 'Information Systems Faculty App',
          description: isRTL
            ? 'تطبيق محمول للطلاب وأعضاء هيئة التدريس يوفر الوصول للجداول الدراسية، الدرجات، والإعلانات.'
            : 'Mobile app for students and faculty providing access to schedules, grades, and announcements.',
          technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
          features: isRTL
            ? ['الجداول الدراسية', 'عرض الدرجات', 'الإعلانات', 'التواصل مع الأساتذة']
            : ['Class Schedules', 'Grade Display', 'Announcements', 'Faculty Communication'],
          playStore: '#',
          appStore: '#',
          rating: 4,
          complexity: 'Intermediate'
        }
      ]
    }
  };

  const tabs = [
    { key: 'desktop', label: t('desktopApps'), icon: Monitor },
    { key: 'web', label: t('websites'), icon: Globe },
    { key: 'mobile', label: t('mobileApps'), icon: Smartphone },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-orange-500';
      case 'Expert': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  const StarRating = ({ rating }) => (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} transition-colors duration-200`}
        />
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Enhanced Animation */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center justify-center mb-4">
              <Rocket className="text-blue-600 mr-3 animate-pulse" size={32} />
              <h2 className="text-4xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                {t('projectsTitle')}
              </h2>
              <Zap className="text-purple-600 ml-3 animate-pulse" size={32} />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('projectsDescription')}
            </p>
          </div>

          {/* Enhanced Tabs with Animation */}
          <div className={`flex flex-wrap justify-center mb-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {tabs.map((tab, index) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 space-x-reverse px-6 py-3 m-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
                <div className={`w-2 h-2 rounded-full ${
                  activeTab === tab.key ? 'bg-white' : 'bg-blue-600'
                } transition-colors duration-300`}></div>
              </button>
            ))}
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projectCategories[activeTab].projects.map((project, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  background: hoveredProject === index ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Header */}
                <div className={`p-6 ${hoveredProject === index ? 'text-white' : ''} transition-colors duration-300`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold flex-1">{project.title}</h3>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <StarRating rating={project.rating} />
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(project.complexity)} text-white`}>
                        {project.complexity}
                      </span>
                    </div>
                  </div>
                  
                  <p className={`mb-4 leading-relaxed ${hoveredProject === index ? 'text-gray-100' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  {/* Technologies with Enhanced Styling */}
                  <div className="mb-4">
                    <h4 className={`text-sm font-semibold mb-2 ${hoveredProject === index ? 'text-gray-200' : 'text-gray-700'}`}>
                      {t('technologiesUsed')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-110 ${
                            hoveredProject === index 
                              ? 'bg-white/20 text-white border border-white/30' 
                              : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features with Animation */}
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold mb-2 ${hoveredProject === index ? 'text-gray-200' : 'text-gray-700'}`}>
                      {t('keyFeatures')}
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className={`flex items-center text-sm transition-all duration-300 ${
                            hoveredProject === index ? 'text-gray-100' : 'text-gray-600'
                          }`}
                          style={{ animationDelay: `${featureIndex * 0.1}s` }}
                        >
                          <span className={`w-2 h-2 rounded-full ${isRTL ? 'ml-2' : 'mr-2'} ${
                            hoveredProject === index ? 'bg-white' : 'bg-blue-600'
                          } transition-colors duration-300`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex space-x-3 space-x-reverse">
                    {project.link && (
                      <Button 
                        variant={hoveredProject === index ? "secondary" : "outline"} 
                        size="sm" 
                        className="flex items-center space-x-2 space-x-reverse transition-all duration-300 transform hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        <span>{t('viewProject')}</span>
                      </Button>
                    )}
                    {project.playStore && (
                      <Button 
                        variant={hoveredProject === index ? "secondary" : "outline"} 
                        size="sm" 
                        className="flex items-center space-x-2 space-x-reverse transition-all duration-300 transform hover:scale-105"
                      >
                        <Smartphone size={16} />
                        <span>Play Store</span>
                      </Button>
                    )}
                    <Button 
                      variant={hoveredProject === index ? "secondary" : "outline"} 
                      size="sm" 
                      className="flex items-center space-x-2 space-x-reverse transition-all duration-300 transform hover:scale-105"
                    >
                      <Github size={16} />
                      <span>{t('sourceCode')}</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for floating animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Projects;
