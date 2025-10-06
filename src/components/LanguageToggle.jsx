import { useState } from 'react';
import { Globe, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button.jsx';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleLanguage();
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleToggle}
      className={`flex items-center space-x-2 space-x-reverse transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 ${
        isAnimating ? 'scale-110' : ''
      }`}
    >
      <div className={`transition-transform duration-300 ${isAnimating ? 'rotate-180' : ''}`}>
        <Languages size={18} />
      </div>
      <span className="font-medium">
        {language === 'ar' ? 'EN' : 'عربي'}
      </span>
    </Button>
  );
};

export default LanguageToggle;
