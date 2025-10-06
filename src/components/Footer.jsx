import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">عبد الله عماد</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                مطور برمجيات ومواقع إلكترونية متخصص في تطوير الحلول التقنية المبتكرة. 
                أسعى لتقديم أفضل الخدمات التقنية لعملائي.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <span className="text-gray-300">تابعني على:</span>
                {/* Social media links can be added here */}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                    نبذة عني
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                    المشاريع
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
                    الخبرة
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    التواصل
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">معلومات التواصل</h3>
              <div className="space-y-2 text-gray-300">
                <p>📧 abdallahemadabdelmneem@gmail.com</p>
                <p>📱 +971 544570084</p>
                <p>📱 +20 1014222825</p>
                <p>📍 دولة الإمارات العربية المتحدة</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-300 text-center md:text-right mb-4 md:mb-0">
                © {currentYear} عبد الله عماد. جميع الحقوق محفوظة.
              </p>
              <p className="text-gray-300 flex items-center space-x-2 space-x-reverse">
                <span>صُنع بـ</span>
                <Heart className="text-red-500" size={16} />
                <span>في الإمارات</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 left-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="العودة إلى الأعلى"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
