import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  ShieldCheck, 
  TrendingDown, 
  ChevronRight, 
  CheckCircle2, 
  UtensilsCrossed, 
  Euro, 
  ClipboardCheck,
  Eye,
  Menu,
  X,
  Send
} from 'lucide-react';
import { useState, useMemo, FormEvent } from 'react';

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 max-w-lg w-full overflow-hidden"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-2">Gesendet!</h3>
                <p className="text-gray-500 font-medium">Wir melden uns in Kürze bei Ihnen.</p>
              </div>
            ) : (
              <>
                <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-6 h-6 text-gray-400" />
                </button>
                <h3 className="text-3xl font-black text-gray-900 mb-2">Jetzt anfragen</h3>
                <p className="text-gray-500 font-medium mb-8">Starten Sie die Revolution an Ihrem Tresen.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" placeholder="Name Ihres Gastro-Betriebs" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 ring-orange-500 font-bold text-gray-900" />
                  <input type="email" placeholder="E-Mail Adresse" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 ring-orange-500 font-bold text-gray-900" />
                  <textarea placeholder="Ihre Nachricht (optional)" rows={3} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 ring-orange-500 font-bold text-gray-900 resize-none" />
                  <button type="submit" className="w-full bg-orange-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-orange-200 hover:bg-orange-700 transition-colors flex items-center justify-center gap-3">
                    Absenden <Send className="w-5 h-5" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-2xl border-b border-gray-100 h-20 md:h-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-orange-600 p-2 rounded-xl shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-gray-900">Sedo<span className="text-orange-600">Gramm</span></span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
            <button onClick={() => scrollTo('vorteile')} className="hover:text-orange-600 transition-colors cursor-pointer">Vorteile</button>
            <button onClick={() => scrollTo('features')} className="hover:text-orange-600 transition-colors cursor-pointer">Features</button>
            <button onClick={() => scrollTo('finanzamt')} className="hover:text-orange-600 transition-colors cursor-pointer">Compliance</button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenContact}
              className="bg-gray-900 text-white px-8 py-4 rounded-2xl hover:bg-orange-600 transition-all shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
            >
              Anfragen
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden w-12 h-12 flex items-center justify-center text-gray-900 bg-gray-50 rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu toggle"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-gray-900/10 backdrop-blur-sm md:hidden z-[-1]"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-4 right-4 bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden md:hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] mt-2"
            >
              <div className="p-8 flex flex-col gap-6 text-center">
                <button onClick={() => scrollTo('vorteile')} className="text-2xl font-black text-gray-900 py-2">Vorteile</button>
                <button onClick={() => scrollTo('features')} className="text-2xl font-black text-gray-900 py-2">Features</button>
                <button onClick={() => scrollTo('finanzamt')} className="text-2xl font-black text-gray-900 py-2">Compliance</button>
                <div className="h-px bg-gray-100 my-2" />
                <button 
                  onClick={() => { setIsOpen(false); onOpenContact(); }}
                  className="bg-orange-600 text-white py-5 rounded-[2rem] font-black text-xl shadow-xl shadow-orange-100 active:scale-95 transition-transform"
                >
                  Kostenlose Beratung
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <section id="hero" className="relative pt-32 md:pt-48 pb-20 md:pb-40 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-full md:w-5/12 h-2/3 md:h-full bg-orange-50/30 rounded-bl-[100px] md:rounded-bl-[400px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100/50 border border-orange-200 text-orange-700 text-[10px] md:text-[11px] font-black mb-10 uppercase tracking-[0.3em]"
          >
            <Eye className="w-4 h-4" /> 100% Transparenz garantiert
          </motion.div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-black text-gray-900 leading-[0.9] mb-8 tracking-tighter break-words xl:whitespace-nowrap">
            Sedo<span className="text-orange-600">Gramm</span>.
          </h1>
          <p className="text-2xl sm:text-3xl md:text-5xl font-display italic text-gray-900 mb-10 leading-[1.1] tracking-tight">
            "Weil Transparenz das <br className="hidden sm:block" />
            <span className="text-orange-600 border-b-4 md:border-b-8 border-orange-200/50">wichtigste Gewürz</span> ist."
          </p>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-500 mb-12 max-w-xl leading-relaxed font-semibold">
            Die Hardware-Revolution für Ihren Döner-Laden. Schützen Sie Ihren Gewinn und gewinnen Sie das Vertrauen Ihrer Kunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenContact}
              className="bg-orange-600 text-white px-8 md:px-14 py-5 md:py-7 rounded-[2.5rem] font-black text-xl md:text-2xl shadow-2xl shadow-orange-300/40 flex items-center justify-center gap-4 transition-all"
            >
              System testen <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </motion.button>
            <motion.button 
              onClick={() => document.getElementById('vorteile')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-50 border-2 border-gray-100 text-gray-900 px-8 md:px-14 py-5 md:py-7 rounded-[2.5rem] font-black text-xl md:text-2xl hover:bg-gray-100 transition-colors text-center"
            >
              Details
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, rotate: 5, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative px-2 lg:px-0 mt-12 lg:mt-0"
        >
          <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.2)] bg-white p-3 md:p-6 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/kitchen-scale/1200/800" 
              alt="Präzisions Döner Waage" 
              className="rounded-[3rem] w-full h-auto object-cover aspect-[4/3] md:aspect-auto"
              referrerPolicy="no-referrer"
            />
            {/* Live Data Badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-6 md:top-12 md:right-12 bg-white/95 backdrop-blur px-6 md:px-9 py-4 md:py-6 rounded-[2.5rem] shadow-3xl border border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
                <span className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter">120,5g</span>
              </div>
              <p className="text-[10px] md:text-[13px] uppercase tracking-[0.3em] font-black text-orange-600 mt-2">Perfekte Portion</p>
            </motion.div>
          </div>
          <div className="absolute -top-10 -right-10 md:-top-24 md:-right-24 w-80 md:w-[450px] h-80 md:h-[450px] bg-orange-100/60 rounded-full blur-[100px] md:blur-[140px] opacity-70 mix-blend-multiply" />
          <div className="absolute -bottom-10 -left-10 md:-bottom-24 md:-left-24 w-80 md:w-[450px] h-80 md:h-[450px] bg-blue-100/40 rounded-full blur-[100px] md:blur-[140px] opacity-50 mix-blend-multiply" />
        </motion.div>
      </div>
    </section>
  );
};

const ValueProposition = () => {
  const container = useMemo(() => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }), []);

  const item = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  }), []);

  const values = [
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-orange-600" />,
      title: "Kundenzufriedenheit",
      desc: "Bieten Sie Transparenz, die Vertrauen schafft und Ihren Laden zum Gesprächsthema im Viertel macht."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-orange-600" />,
      title: "Gewinn-Maximierung",
      desc: "Präzises Abwiegen statt Schätzen sichert Ihre Marge bei jedem einzelnen Döner."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
      title: "Rechtssicherheit",
      desc: "Lückenlose Daten für das Finanzamt. Erfüllen Sie GoBD-Anforderungen ohne Mehraufwand."
    }
  ];

  return (
    <section id="vorteile" className="py-24 md:py-40 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            Ihre Vorteile
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">Erfolg ist messbar.</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-semibold">
            SedoGramm ist mehr als nur eine Waage. Es ist das neue Betriebssystem für Ihren Tresen.
          </p>
        </div>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white p-10 md:p-14 rounded-[3rem] border border-gray-100 shadow-[0_30px_70px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_45px_90px_rgba(0,0,0,0.08)]"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-50 rounded-3xl flex items-center justify-center mb-10 transition-transform group-hover:rotate-12">
                {v.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-5 tracking-tight">{v.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-semibold">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  return (
    <section id="features" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)]"
            >
              <img 
                src="https://picsum.photos/seed/doner-meat/1200/1000" 
                alt="Frisches Dönerfleisch" 
                className="w-full h-[400px] md:h-[650px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
                <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4">Wahre Qualität</span>
                <p className="text-white text-3xl md:text-4xl font-display italic leading-tight">
                  "Ehrliches Gewicht ist <br className="hidden sm:block" />der beste Beweis für Qualität."
                </p>
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-none">
                Gastro-<br />Hardware <br /><span className="text-orange-600">Next Level.</span>
              </h2>
            </motion.div>
            <div className="space-y-6 md:space-y-10">
              {[
                { t: "Echtzeit-Sichtbarkeit", d: "Spiegel-Display für Kunden sorgt für sofortiges Vertrauen." },
                { t: "Automatisierte Logik", d: "Intelligente Reports direkt auf Ihr Smartphone oder POS." },
                { t: "Hygiene-Standard", d: "Lebensmittelrechter Edelstahl für grenzenlose Sauberkeit." },
                { t: "Multi-Cloud", d: "Wachsen Sie sicher mit Support für unbegrenzte Filialen." }
              ].map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start group"
                >
                  <div className="mt-1 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-600 transition-all shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-1 tracking-tight">{f.t}</h4>
                    <p className="text-gray-500 font-semibold text-base md:text-lg">{f.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ComplianceSection = () => {
  return (
    <section id="finanzamt" className="py-24 md:py-40 bg-gray-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black mb-10 uppercase tracking-[0.3em]"
            >
              <ClipboardCheck className="w-4 h-4" /> GoBD & TSE Ready
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-[0.95] tracking-tighter">
              Finanzamt?<br />
              Völlig <span className="text-blue-500">entspannt.</span>
            </h2>
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-16 h-16 bg-blue-500/10 rounded-[2rem] flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Euro className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-2xl font-black mb-3 italic">Rechtssicher buchen</h4>
                  <p className="text-gray-400 text-lg leading-relaxed font-semibold">
                    Dokumentieren Sie Fleischankauf vs. Verkauf präzise. 
                    So haben Sie bei jeder Betriebsprüfung die perfekten Berichte parat.
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-16 h-16 bg-blue-500/10 rounded-[2rem] flex items-center justify-center shrink-0 border border-blue-500/20">
                  <ShieldCheck className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-2xl font-black mb-3 italic">Volle Kontrolle</h4>
                  <p className="text-gray-400 text-lg leading-relaxed font-semibold">
                    Verhindern Sie Schwund und Ungenauigkeiten. Mit Sedogramm ist jedes verkaufte Gramm Teil Ihrer offiziellen Buchhaltung.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, rotate: -5, y: 50 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 p-4 md:p-8 rounded-[3.5rem] shadow-3xl"
          >
            <img 
              src="https://picsum.photos/seed/dashboard-finance/1000/800" 
              alt="Compliance Dashboard" 
              className="rounded-[2.5rem] w-full h-[350px] md:h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] -translate-y-1/2 -z-0" />
    </section>
  );
};

const CTA = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <section className="py-24 md:py-48 bg-orange-600 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none"
        >
          Ihr Erfolg <br />startet hier.
        </motion.h2>
        <p className="text-orange-100 text-xl md:text-2xl mb-16 font-bold max-w-2xl mx-auto leading-relaxed">
          Werden Sie Teil der SedoGramm Community und setzen Sie neue Standards in Ihrer Stadt.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenContact}
            className="bg-gray-900 text-white px-12 py-6 rounded-[2.5rem] font-black text-xl hover:bg-black transition-all shadow-2xl w-full"
          >
            Gratis-Beratung anfordern
          </motion.button>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0B] py-24 text-gray-500 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 md:gap-24 mb-20">
          <div className="col-span-full md:col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <Scale className="w-10 h-10 text-orange-600" />
              <span className="text-3xl font-black tracking-tighter text-white">SedoGramm</span>
            </div>
            <p className="text-xl max-w-sm leading-relaxed mb-12">
              Innovation für die Gastronomie. <br />
              <span className="text-orange-600 font-display text-2xl font-black italic border-b-2 border-orange-600/20">"Weil Transparenz das wichtigste Gewürz ist."</span>
            </p>
            <div className="flex gap-4">
              {['Instagram', 'LinkedIn', 'YouTube'].map(social => (
                <a key={social} href="#" className="px-5 py-2.5 rounded-xl border border-gray-800 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-black text-white text-sm mb-10 uppercase tracking-[0.3em]">Produkt</h4>
            <ul className="space-y-4 font-bold text-gray-400">
              <li><a href="#" className="hover:text-orange-600 transition-all">Hardware</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-all">Software Hub</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-all">Schnittstellen</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-all">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-white text-sm mb-10 uppercase tracking-[0.3em]">Legal</h4>
            <ul className="space-y-4 font-bold text-gray-400">
              <li><a href="#" className="hover:text-orange-600 transition-all">Impressum</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-all">Datenschutz</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-all">AGB</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-all">Compliance-Zertifikate</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8 font-black text-[10px] uppercase tracking-widest">
          <p>© 2024 SedoGramm Systems GmbH.</p>
          <p className="text-gray-700">Präzisions-Hardware aus Deutschland</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-600 selection:text-white antialiased overflow-x-hidden">
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <main>
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <ValueProposition />
        <FeatureSection />
        <ComplianceSection />
        <CTA onOpenContact={() => setIsContactOpen(true)} />
      </main>
      <Footer />
    </div>
  );
}
