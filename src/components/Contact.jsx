import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email sending logic here
    alert('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      details: ['+971 544570084', '+20 1014222825'],
      action: 'tel:+971544570084'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['abdallahemadabdelmneem@gmail.com'],
      action: 'mailto:abdallahemadabdelmneem@gmail.com'
    },
    {
      icon: MapPin,
      title: 'الموقع',
      details: ['دولة الإمارات العربية المتحدة', 'مصر'],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">تواصل معي</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              هل لديك مشروع في ذهنك؟ أو تحتاج إلى استشارة تقنية؟ لا تتردد في التواصل معي
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">معلومات التواصل</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 mb-1">
                          {info.action ? (
                            <a 
                              href={info.action} 
                              className="hover:text-blue-600 transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">تواصل سريع</h4>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2 space-x-reverse"
                    onClick={() => window.open('https://wa.me/971544570084', '_blank')}
                  >
                    <MessageCircle size={20} />
                    <span>واتساب</span>
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center justify-center space-x-2 space-x-reverse"
                    onClick={() => window.open('tel:+971544570084')}
                  >
                    <Phone size={20} />
                    <span>اتصال مباشر</span>
                  </Button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">لماذا تختارني؟</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2 space-x-reverse">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>خبرة أكثر من 4 سنوات في المجال</span>
                  </li>
                  <li className="flex items-center space-x-2 space-x-reverse">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>تطوير حلول مخصصة حسب احتياجاتك</span>
                  </li>
                  <li className="flex items-center space-x-2 space-x-reverse">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>دعم فني مستمر بعد التسليم</span>
                  </li>
                  <li className="flex items-center space-x-2 space-x-reverse">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>أسعار تنافسية وجودة عالية</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">أرسل رسالة</h3>
              
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    الموضوع *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="موضوع الرسالة"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Send size={20} />
                  <span>إرسال الرسالة</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
