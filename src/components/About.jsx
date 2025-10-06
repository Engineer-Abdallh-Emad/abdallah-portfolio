import { useState, useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Languages, Star, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});
  const sectionRef = useRef(null);

  const personalInfo = [
    { icon: Calendar, label: t('age'), value: t('ageValue') },
    { icon: MapPin, label: t('residence'), value: t('residenceValue') },
    { icon: GraduationCap, label: t('education'), value: t('educationValue') },
    { icon: Languages, label: t('languages'), value: t('languagesValue') },
  ];

  const skills = [
    { 
      category: t('programmingLanguages'), 
      items: [
        { name: 'Python', level: 95, color: 'bg-yellow-500' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-400' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-500' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
        { name: 'Dart', level: 80, color: 'bg-blue-400' },
        { name: 'PHP', level: 75, color: 'bg-purple-500' },
        { name: 'Java', level: 70, color: 'bg-red-500' },
        { name: 'C#', level: 65, color: 'bg-green-500' },
        { name: 'C++', level: 60, color: 'bg-blue-600' },
        { name: 'SQL', level: 85, color: 'bg-indigo-500' }
      ]
    },
    { 
      category: t('frameworksLibraries'), 
      items: [
        { name: 'React', level: 90, color: 'bg-cyan-500' },
        { name: 'Vue.js', level: 80, color: 'bg-green-400' },
        { name: 'Angular', level: 75, color: 'bg-red-600' },
        { name: 'Flutter', level: 85, color: 'bg-blue-400' },
        { name: 'Node.js', level: 80, color: 'bg-green-600' },
        { name: 'Express.js', level: 85, color: 'bg-gray-600' },
        { name: 'Django', level: 75, color: 'bg-green-700' },
        { name: 'Laravel', level: 70, color: 'bg-red-500' },
        { name: 'Bootstrap', level: 90, color: 'bg-purple-600' },
        { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' }
      ]
    },
    { 
      category: t('databases'), 
      items: [
        { name: 'MySQL', level: 90, color: 'bg-blue-600' },
        { name: 'PostgreSQL', level: 80, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 85, color: 'bg-green-600' },
        { name: 'SQLite', level: 95, color: 'bg-gray-600' },
        { name: 'Redis', level: 70, color: 'bg-red-600' },
        { name: 'Firebase', level: 80, color: 'bg-yellow-500' }
      ]
    },
    { 
      category: t('operatingSystems'), 
      items: [
        { name: 'Windows', level: 95, color: 'bg-blue-500' },
        { name: 'Linux', level: 85, color: 'bg-yellow-600' },
        { name: 'macOS', level: 75, color: 'bg-gray-700' },
        { name: 'Ubuntu', level: 90, color: 'bg-orange-600' },
        { name: 'CentOS', level: 70, color: 'bg-purple-600' }
      ]
    },
    { 
      category: t('networkingSecurity'), 
      items: [
        { name: 'MikroTik', level: 85, color: 'bg-red-500' },
        { name: 'Firewall', level: 80, color: 'bg-orange-600' },
        { name: 'VPN', level: 75, color: 'bg-green-600' },
        { name: 'Network Security', level: 80, color: 'bg-red-600' },
        { name: 'CCTV Systems', level: 90, color: 'bg-gray-600' }
      ]
    },
    { 
      category: t('otherTools'), 
      items: [
        { name: 'Git', level: 90, color: 'bg-orange-500' },
        { name: 'Docker', level: 75, color: 'bg-blue-600' },
        { name: 'AWS', level: 70, color: 'bg-yellow-600' },
        { name: 'Microsoft Office', level: 95, color: 'bg-blue-500' },
        { name: 'Photoshop', level: 80, color: 'bg-blue-700' },
        { name: 'Figma', level: 75, color: 'bg-purple-500' },
        { name: 'AI Tools', level: 85, color: 'bg-green-500' }
      ]
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          setTimeout(() => {
            skills.forEach((skillGroup) => {
              skillGroup.items.forEach((skill, index) => {
                setTimeout(() => {
                  setAnimatedSkills(prev => ({
                    ...prev,
                    [skill.name]: skill.level
                  }));
                }, index * 100);
              });
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, index }) => (
    <div 
      className="mb-4 transform transition-all duration-500 hover:scale-105"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{animatedSkills[skill.name] || 0}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ 
            width: `${animatedSkills[skill.name] || 0}%`,
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Animation */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
              {t('aboutTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-blue-600">
              <Star size={20} className="animate-pulse" />
              <span className="text-lg font-medium">Professional Profile</span>
              <Star size={20} className="animate-pulse" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Information with Enhanced Animation */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Award className="mr-3 text-blue-600" size={24} />
                {t('personalInfo')}
              </h3>
              
              <div className="space-y-6 mb-8">
                {personalInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 space-x-reverse p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                      <p className="text-gray-800 font-semibold">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <TrendingUp className="mr-2 text-blue-600" size={20} />
                  {t('professionalSummary')}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {t('professionalSummaryText')}
                </p>
              </div>
            </div>

            {/* Skills with Advanced Animation */}
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Star className="mr-3 text-blue-600" size={24} />
                {t('technicalSkills')}
              </h3>
              
              <div className="space-y-8">
                {skills.map((skillGroup, groupIndex) => (
                  <div 
                    key={groupIndex} 
                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${groupIndex * 0.2}s` }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                      {skillGroup.category}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for shimmer effect */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
