import { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Phone, Sparkles, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);

  const titles = [
    t('title'),
    'Full Stack Developer',
    'Mobile App Developer',
    'IT Support Specialist',
    'System Administrator'
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FloatingIcon = ({ icon: Icon, delay, position }) => (
    <div 
      className={`absolute ${position} animate-bounce opacity-20 text-blue-400`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      <Icon size={24} />
    </div>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 relative overflow-hidden">
      {/* Floating Background Icons */}
      <FloatingIcon icon={Code} delay={0} position="top-20 left-10" />
      <FloatingIcon icon={Sparkles} delay={1} position="top-32 right-20" />
      <FloatingIcon icon={Zap} delay={2} position="bottom-32 left-20" />
      <FloatingIcon icon={Code} delay={1.5} position="bottom-20 right-10" />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image with Advanced Animation */}
          <div className={`mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl hover:scale-105 transition-transform duration-300">
                {isRTL ? 'ع.ع' : 'A.E'}
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Main Content with Staggered Animation */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 hover:text-blue-600 transition-colors duration-300">
              {t('name')}
            </h1>
          </div>
          
          {/* Animated Title Carousel */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="h-20 flex items-center justify-center mb-6">
              <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold transition-all duration-500 transform">
                {titles[currentTitle]}
              </h2>
            </div>
          </div>

          {/* Description with Typewriter Effect */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('heroDescription')}
            </p>
          </div>

          {/* Contact Info with Slide Animation */}
          <div className={`transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 sm:space-x-reverse mb-8">
              <div className="flex items-center space-x-2 space-x-reverse text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-105">
                <Phone size={20} />
                <span>+971 544570084</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-105">
                <Mail size={20} />
                <span>abdallahemadabdelmneem@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Action Buttons with Hover Effects */}
          <div className={`transform transition-all duration-1000 delay-1100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse mb-12">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className={`${isRTL ? 'ml-2' : 'mr-2'}`} size={20} />
                {t('contactMe')}
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className={`${isRTL ? 'ml-2' : 'mr-2'}`} size={20} />
                {t('downloadCV')}
              </Button>
            </div>
          </div>

          {/* Scroll Indicator with Enhanced Animation */}
          <div className={`transform transition-all duration-1000 delay-1300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button 
              onClick={scrollToAbout}
              className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors duration-300 transform hover:scale-110 group"
            >
              <div className="flex flex-col items-center">
                <ArrowDown size={32} className="group-hover:translate-y-1 transition-transform duration-300" />
                <span className="text-sm mt-2 opacity-70">{isRTL ? 'تابع القراءة' : 'Scroll Down'}</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
