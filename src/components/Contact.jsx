import FadeUp from '../Animations/FadeUp';

const Contact = () => {
  const email = "alexandreguillemot.mmi@gmail.com";
  const phone = "07 86 35 18 08";
  const linkedin = "https://www.linkedin.com/in/alexguillemot/";
  const github = "https://github.com/GuillemotAlexandre"; // Remplace si besoin

  return (
    <section id="contact" className="py-20 border-t border-white/5">
      <FadeUp>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 italic">Me contacter</h2>
            <p className="text-gray-400">
              Recherche d'un contrat de stage du 16 mars au 26 juin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne Gauche : Réseaux & Infos */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <a href={`mailto:${email}`} className="p-4 bg-[#1a1a1a] rounded-2xl border border-white/5 hover:border-brand transition-all group">
                <div className="text-xl mb-1 group-hover:scale-110 transition-transform">✉️</div>
                <h3 className="text-white font-bold text-sm">Email</h3>
                <p className="text-gray-500 text-xs truncate">{email}</p>
              </a>

              <a href={`tel:${phone.replace(/\s/g, '')}`} className="p-4 bg-[#1a1a1a] rounded-2xl border border-white/5 hover:border-brand transition-all group">
                <div className="text-xl mb-1 group-hover:scale-110 transition-transform">📞</div>
                <h3 className="text-white font-bold text-sm">Téléphone</h3>
                <p className="text-gray-500 text-xs">{phone}</p>
              </a>

              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-[#1a1a1a] rounded-2xl border border-white/5 hover:border-brand transition-all group">
                <div className="text-xl mb-1 group-hover:scale-110 transition-transform">🔗</div>
                <h3 className="text-white font-bold text-sm">LinkedIn</h3>
                <p className="text-gray-500 text-xs">Mon profil pro</p>
              </a>

              <a href={github} target="_blank" rel="noopener noreferrer" className="p-4 bg-[#1a1a1a] rounded-2xl border border-white/5 hover:border-brand transition-all group">
                <div className="text-xl mb-1 group-hover:scale-110 transition-transform">💻</div>
                <h3 className="text-white font-bold text-sm">GitHub</h3>
                <p className="text-gray-500 text-xs">Mes projets</p>
              </a>
            </div>

            {/* Colonne Droite : Formulaire */}
            <div className="lg:col-span-2 p-8 bg-[#1a1a1a] rounded-2xl border border-white/5">
              <form action="https://formspree.io/f/meellryd" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Nom</label>
                    <input 
                      type="text" name="name" required
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email</label>
                    <input 
                      type="email" name="email" required
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Objet</label>
                  <input 
                    type="text" name="subject" required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea 
                    name="message" rows="4" required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors resize-none"
                    placeholder="Comment puis-je vous aider ?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-brand hover:text-white transition-all duration-300"
                >
                  Envoyer le message
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