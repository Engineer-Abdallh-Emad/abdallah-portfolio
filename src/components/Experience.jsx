import { Calendar, MapPin, Building, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Concord Stars Contracting LLC',
      position: 'فني دعم تقني',
      location: 'دولة الإمارات العربية المتحدة',
      period: '2025 - حتى الآن',
      current: true,
      responsibilities: [
        'إدارة البنية التحتية لتكنولوجيا المعلومات شاملة الأجهزة والشبكات والطابعات والبريد الإلكتروني وأنظمة البصمة',
        'القيام بأعمال الصيانة والإصلاح واستكشاف الأخطاء وإصلاحها',
        'تكوين كاميرات الأمان وإعدادات الإنترنت',
        'إدارة حسابات المستخدمين وخدمات البريد الإلكتروني',
        'متابعة أجهزة البصمة وحل مشاكل التعطل',
        'إعداد قاعات الاجتماعات',
        'متابعة أعطال الطابعات وحلها',
        'تثبيت الأنظمة للموظفين الجدد في المكاتب'
      ]
    },
    {
      company: 'كلية نظم المعلومات',
      position: 'فني دعم تقني',
      location: 'مصر',
      period: '2021 - 2025',
      current: false,
      responsibilities: [
        'تقديم الدعم التقني للطلاب وأعضاء هيئة التدريس',
        'إدارة المختبرات والشبكات',
        'صيانة البرمجيات والأجهزة',
        'تطوير تطبيق محمول للكلية',
        'إدارة أنظمة المعلومات الأكاديمية',
        'تدريب المستخدمين على الأنظمة الجديدة'
      ]
    }
  ];

  const achievements = [
    'أكثر من 4 سنوات خبرة في مجال الدعم التقني',
    'تطوير أكثر من 10 مشاريع برمجية متنوعة',
    'خبرة في إدارة البنية التحتية لتكنولوجيا المعلومات',
    'إتقان متعدد المنصات (Windows, Linux, macOS)',
    'خبرة في تطوير تطبيقات الهاتف المحمول والويب',
    'مهارات متقدمة في استكشاف الأخطاء وإصلاحها'
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">الخبرة المهنية</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              رحلتي المهنية في مجال تكنولوجيا المعلومات وتطوير البرمجيات
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Experience Timeline */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">التاريخ المهني</h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Line */}
                    {index !== experiences.length - 1 && (
                      <div className="absolute right-6 top-16 w-0.5 h-full bg-gray-200"></div>
                    )}
                    
                    <div className="flex items-start space-x-4 space-x-reverse">
                      {/* Timeline Dot */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        exp.current ? 'bg-blue-600' : 'bg-gray-400'
                      }`}>
                        <Building className="text-white" size={20} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 bg-gray-50 rounded-lg p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-gray-800">{exp.position}</h4>
                            <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                          </div>
                          {exp.current && (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0">
                              الوظيفة الحالية
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-4 space-x-reverse text-gray-600 mb-4">
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">المسؤوليات الرئيسية:</h5>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start space-x-2 space-x-reverse text-gray-600">
                                <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                                <span className="text-sm leading-relaxed">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">الإنجازات الرئيسية</h3>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Summary */}
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">المهارات الأساسية</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>الدعم التقني</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>تطوير البرمجيات</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>إدارة الشبكات</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>تطوير الويب</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
