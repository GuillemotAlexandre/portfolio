import { useTranslation } from 'react-i18next';
import FadeUp from '../Animations/FadeUp';

const Contact = () => {
  const { t } = useTranslation();
  const email = "alexandreguillemot.mmi@gmail.com";
  const phone = "07 86 35 18 08";
  const linkedin = "https://www.linkedin.com/in/alexguillemot/";
  const github = "https://github.com/GuillemotAlexandre";

  return (
    <section id="contact" className="py-20 border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      <FadeUp>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 italic transition-colors">
              {t('contact.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <a href={`mailto:${email}`} className="p-4 bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-white/5 hover:border-brand transition-all group shadow-sm dark:shadow-none">
                <div className="text-xl mb-1 group-hover:scale-110 transition-transform">✉️</div>
                <h3 className="text-gray-900 dark:text-white font-bold text-sm transition-colors">{t('contact.email_label')}</h3>
                <p className="text-gray-500 text-xs truncate">{email}</p>
              </a>

              <a href={`tel:${phone.replace(/\s/g, '')}`} className="p-4 bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-white/5 hover:border-brand transition-all group shadow-sm dark:shadow-none">
                <div className="text-xl mb-1 group-hover:scale-110 transition-transform">📞</div>
                <h3 className="text-gray-900 dark:text-white font-bold text-sm transition-colors">{t('contact.phone_label')}</h3>
                <p className="text-gray-500 text-xs">{phone}</p>
              </a>

              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-white/5 hover:border-brand transition-all group shadow-sm dark:shadow-none">
                <div className="text-xl mb-1 group-hover:scale-110 transition-transform">🔗</div>
                <h3 className="text-gray-900 dark:text-white font-bold text-sm transition-colors">{t('contact.linkedin_label')}</h3>
                <p className="text-gray-500 text-xs">{t('contact.linkedin_sub')}</p>
              </a>

              <a href={github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-white/5 hover:border-brand transition-all group shadow-sm dark:shadow-none">
                <div className="text-xl mb-1 group-hover:scale-110 transition-transform">💻</div>
                <h3 className="text-gray-900 dark:text-white font-bold text-sm transition-colors">{t('contact.github_label')}</h3>
                <p className="text-gray-500 text-xs">{t('contact.github_sub')}</p>
              </a>
            </div>

            <div className="lg:col-span-2 p-8 bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-colors">
              <form action="https://formspree.io/f/meellryd" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-400 text-sm mb-2 transition-colors">{t('contact.form.name')}</label>
                    <input 
                      type="text" name="name" required
                      className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:border-brand transition-all"
                      placeholder={t('contact.form.name_placeholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-400 text-sm mb-2 transition-colors">{t('contact.form.email')}</label>
                    <input 
                      type="email" name="email" required
                      className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:border-brand transition-all"
                      placeholder={t('contact.form.email_placeholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-400 text-sm mb-2 transition-colors">{t('contact.form.subject')}</label>
                  <input 
                    type="text" name="subject" required
                    className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:border-brand transition-all"
                    placeholder={t('contact.form.subject_placeholder')}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-400 text-sm mb-2 transition-colors">{t('contact.form.message')}</label>
                  <textarea 
                    name="message" rows="4" required
                    className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:border-brand transition-all resize-none"
                    placeholder={t('contact.form.message_placeholder')}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold py-3 rounded-lg hover:bg-brand dark:hover:bg-brand dark:hover:text-white transition-all duration-300"
                >
                  {t('contact.form.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
};

export default Contact;