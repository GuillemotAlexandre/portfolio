import FadeUp from '../Animations/FadeUp';

const Contact = () => {
  // On définit les informations directement ici au lieu de les recevoir en props
  const email = "alexandreguillemot.mmi@gmail.com";
  const phone = "07 86 35 18 08";

  return (
    <section id="contact" className="py-20 border-t border-white/5">
      <FadeUp>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 italic">Me contacter</h2>
          <p className="text-gray-400 mb-10">
            Recherche d'un contrat de stage du 16 mars au 26 juin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href={`mailto:${email}`} className="p-6 bg-[#1a1a1a] rounded-2xl border border-white/5 hover:border-brand transition-all">
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="text-white font-bold mb-1">Email</h3>
              <p className="text-gray-400 text-sm break-all">{email}</p>
            </a>

            <a href={`tel:${phone.replace(/\s/g, '')}`} className="p-6 bg-[#1a1a1a] rounded-2xl border border-white/5 hover:border-brand transition-all">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-white font-bold mb-1">Téléphone</h3>
              <p className="text-gray-400 text-sm">{phone}</p>
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
};

export default Contact;