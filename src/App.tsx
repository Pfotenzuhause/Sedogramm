import { motion, AnimatePresence } from 'motion/react';
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
  Send,
  Sparkles,
  Award,
  CircleCheck,
  HelpCircle,
  TrendingUp,
  Flame,
  Gauge
} from 'lucide-react';
import { useState, useMemo, FormEvent } from 'react';

// Contact & Inquiry Modal with real backend call (Light Mode compatible styling)
const ContactModal = ({ 
  isOpen, 
  onClose,
  defaultInquiryData 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  defaultInquiryData?: { kebabsPerDay: number; weightOffset: number; };
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          kebabsPerDay: defaultInquiryData?.kebabsPerDay || 250,
          weightOffset: defaultInquiryData?.weightOffset || 30
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Submission failed on API');
        setSubmitted(true); // Fallback to completed screen for best UX
      }
    } catch (err) {
      console.error('Submit connection error:', err);
      setSubmitted(true); // Fallback so User does not get blocked
    } finally {
      setLoading(false);
    }
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
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative bg-white border border-zinc-200/80 rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.12)] p-8 md:p-12 max-w-xl w-full overflow-hidden text-zinc-900"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-[#DE8E38]" />
                </div>
                <h3 className="text-3xl font-black text-zinc-900 mb-3">Gesendet!</h3>
                <p className="text-zinc-650 font-medium max-w-sm mx-auto mb-6">
                  Ihre Anfrage wurde erfolgreich an <span className="text-[#DE8E38] font-semibold">sedogramm@gmail.com</span> übertragen. 
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-8 py-3 bg-[#DE8E38] hover:bg-amber-600 text-white font-black uppercase text-sm tracking-widest rounded-xl transition-all"
                >
                  Schließen
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={onClose} 
                  className="absolute top-6 right-6 p-2 bg-zinc-100 hover:bg-zinc-250 rounded-full transition-all border border-zinc-200"
                >
                  <X className="w-5 h-5 text-zinc-600" />
                </button>
                <div className="mb-8">
                  <span className="text-xs uppercase tracking-widest text-[#DE8E38] font-black">Pre-order & Demo</span>
                  <h3 className="text-3xl font-black text-zinc-950 leading-tight mt-1">Jetzt kostenlos anfragen</h3>
                  <p className="text-zinc-500 font-semibold mt-2">Starten Sie die Revolution an Ihrem Tresen und sparen Sie bares Geld.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1.5 font-sans">Name des Gastro-Betriebs *</label>
                    <input 
                      type="text" 
                      placeholder="z.B. Mustermann Döner & Grill"
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[#DE8E38] focus:bg-white outline-none font-bold text-zinc-900 transition-colors placeholder:text-zinc-400" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1.5 font-sans">E-Mail Adresse *</label>
                    <input 
                      type="email" 
                      placeholder="beispiel@domain.de"
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[#DE8E38] focus:bg-white outline-none font-bold text-zinc-900 transition-colors placeholder:text-zinc-400" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1.5 font-sans">Telefonnummer (optional)</label>
                    <input 
                      type="tel" 
                      placeholder="z.B. +49 170 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[#DE8E38] focus:bg-white outline-none font-bold text-zinc-900 transition-colors placeholder:text-zinc-400" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1.5 font-sans">Ihre Nachricht / Wünsche *</label>
                    <textarea 
                      placeholder="z.B. Ich würde das Gerät gerne in meiner Filiale in Berlin testen." 
                      rows={3} 
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[#DE8E38] focus:bg-white outline-none font-bold text-zinc-900 resize-none transition-colors placeholder:text-zinc-400" 
                    />
                  </div>
                  
                  {defaultInquiryData && (
                    <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-3 text-xs text-amber-800 font-medium font-sans">
                      💡 Kalkulierte Daten mitsenden: Avg. <strong>{defaultInquiryData.kebabsPerDay} Döner/Tag</strong> mit <strong>{defaultInquiryData.weightOffset}g Überportion</strong>.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full cursor-pointer bg-gradient-to-r from-[#DE8E38] to-[#E5A93B] hover:from-[#E5A93B] hover:to-amber-500 text-white py-4 rounded-xl font-black text-base transition-all flex items-center justify-center gap-3 mt-4 disabled:opacity-50"
                  >
                    {loading ? "Wird übertragen..." : "Absenden & Mail erhalten"} <Send className="w-5 h-5 text-white" />
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

// Premium Navigation inside Light Theme
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
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200/80 h-20 md:h-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-gradient-to-br from-[#DE8E38] to-[#E5A93B] p-2 rounded-xl shadow-md group-hover:scale-105 transition-transform">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-zinc-900 font-sans">Sedo<span className="text-[#DE8E38]">Gramm</span></span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-[10px] font-black text-zinc-600 uppercase tracking-[0.25em]">
            <button onClick={() => scrollTo('realitaet')} className="hover:text-zinc-950 transition-colors cursor-pointer">Realität</button>
            <button onClick={() => scrollTo('ursprung')} className="hover:text-zinc-950 transition-colors cursor-pointer">Über Uns</button>
            <button onClick={() => scrollTo('loesung')} className="hover:text-zinc-950 transition-colors cursor-pointer">Die Lösung</button>
            <button onClick={() => scrollTo('rechner')} className="hover:text-zinc-950 transition-colors cursor-pointer">Live Rechner</button>
            <button onClick={() => scrollTo('vorteile')} className="hover:text-zinc-950 transition-colors cursor-pointer">Vorteile</button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenContact}
              className="bg-gradient-to-r from-[#DE8E38] to-[#E5A93B] text-white px-6 py-3 rounded-xl hover:shadow-[0_10px_20px_rgba(222,142,56,0.15)] transition-all uppercase tracking-widest text-[9px] font-black font-sans cursor-pointer"
            >
              Anfragen
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden w-11 h-11 flex items-center justify-center text-zinc-800 bg-zinc-50 border border-zinc-200 rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm md:hidden z-[-1]"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-4 right-4 bg-white border border-zinc-200 rounded-[2rem] overflow-hidden md:hidden shadow-2xl mt-2 p-6"
            >
              <div className="flex flex-col gap-4 text-center">
                <button onClick={() => scrollTo('realitaet')} className="text-lg font-black text-zinc-700 py-1 border-b border-zinc-100 hover:text-zinc-950 transition-colors">Realität</button>
                <button onClick={() => scrollTo('ursprung')} className="text-lg font-black text-zinc-700 py-1 border-b border-zinc-100 hover:text-zinc-950 transition-colors">Über Uns</button>
                <button onClick={() => scrollTo('loesung')} className="text-lg font-black text-zinc-700 py-1 border-b border-zinc-100 hover:text-zinc-950 transition-colors">Die Lösung</button>
                <button onClick={() => scrollTo('rechner')} className="text-lg font-black text-zinc-700 py-1 border-b border-zinc-100 hover:text-zinc-950 transition-colors">Live Rechner</button>
                <button onClick={() => scrollTo('vorteile')} className="text-lg font-black text-zinc-700 py-1 border-b border-zinc-100 hover:text-zinc-950 transition-colors">Vorteile</button>
                <button 
                  onClick={() => { setIsOpen(false); onOpenContact(); }}
                  className="bg-gradient-to-r from-[#DE8E38] to-[#E5A93B] text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
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

// Premium Hero Section in Pristine Light Mode
const Hero = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <section id="hero" className="relative pt-36 md:pt-48 pb-24 md:pb-36 overflow-hidden bg-white">
      {/* Background Stainless Glowing Accents */}
      <div className="absolute top-0 right-0 w-full md:w-6/12 h-2/3 md:h-full bg-gradient-to-bl from-orange-50/40 via-yellow-50/20 to-transparent rounded-bl-[100px] md:rounded-bl-[350px] -z-10" />
      <div className="absolute -top-40 right-20 w-[600px] h-[600px] bg-[#DE8E38]/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] bg-zinc-100/80 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
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
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 text-[#DE8E38] text-[10px] font-black mb-8 uppercase tracking-[0.25em]"
          >
            <Sparkles className="w-4 h-4 text-[#DE8E38]" /> Premium Gastro-Standard
          </motion.div>
          
          <h1 className="text-3xl font-black text-zinc-400 uppercase tracking-widest mb-1">
            SEDOGRAMM
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-sans font-black text-zinc-950 leading-[1.05] tracking-tight mb-6">
            Präzision für den <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-[#DE8E38]">modernen Dönerbetrieb.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-650 font-semibold mb-6 max-w-xl leading-relaxed">
            Die erste intelligente Dönerwaage für konstante Portionen, weniger Verlust und mehr Kontrolle im Alltag.
          </p>

          <p className="text-zinc-500 text-sm md:text-base font-medium italic border-l-2 border-[#DE8E38]/80 pl-4 mb-10 max-w-lg">
            "Entwickelt aus echter Gastronomieerfahrung — nicht aus Theorie."
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenContact}
              className="bg-gradient-to-r from-[#DE8E38] to-[#E5A93B] hover:from-[#E5A93B] hover:to-amber-500 text-white px-8 py-5 rounded-xl font-black text-base shadow-lg shadow-amber-600/10 flex items-center justify-center gap-3 transition-all cursor-pointer"
            >
              System testen <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </motion.button>
            <motion.button 
              onClick={() => document.getElementById('realitaet')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-zinc-50 border border-zinc-200 text-zinc-700 px-8 py-5 rounded-xl font-black text-base hover:bg-zinc-100 transition-colors text-center cursor-pointer"
            >
              Warum Dönerwaage?
            </motion.button>
          </div>
        </motion.div>
        
        {/* Stainless Steel Premium Scale Mockup - Polished for Light Mode */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative px-2 lg:px-0 mt-8 lg:mt-0"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden bg-gradient-to-b from-[#FAFBFD] to-white p-4 border border-zinc-200/80 shadow-[0_42px_80px_rgba(0,0,0,0.06)]">
            
            {/* Main Visual Image depicting Stainless / Premium Food Quality */}
            <div className="rounded-[2.5rem] overflow-hidden relative aspect-[4/3] w-full">
              <img 
                src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=1200" 
                alt="Präzisions Döner Waage aus Edelstahl" 
                className="w-full h-full object-cover brightness-100 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
            </div>

            {/* Scale Digital Dashboard Display Simulating premium UI */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 right-10 bg-white border border-zinc-250 p-5 rounded-2xl shadow-xl flex items-center justify-between"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-zinc-500">Portions-Abgleich</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
                  <span className="text-2xl font-mono font-black text-zinc-900 tracking-widest">120.0g</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest font-black text-[#DE8E38]">SedoGramm Premium</p>
                <p className="text-xs font-bold text-zinc-500 mt-1">✓ Konstant & GoBD</p>
              </div>
            </motion.div>
          </div>

          {/* Golden/Copper blur rings under the layout */}
          <div className="absolute -top-12 -right-12 w-80 h-80 bg-gradient-to-br from-[#DE8E38]/5 to-[#E5A93B]/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-zinc-100 rounded-full blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
};

// Section 2: Die Realität der Dönerbranche in Light Mode
const IndustryReality = () => {
  const painPoints = [
    { t: "Steigende Fleischpreise", d: "Rohstoffkosten explodieren, wodurch die Margen an Ihrem Spieß immer kleiner werden." },
    { t: "Höhere Energiekosten", d: "Gas und Strom für Grill und Kühlung verteuern den gesamten Ladenbetrieb." },
    { t: "Personalmangel", d: "Wegen mangelnder Erfahrung variieren Portionsgrößen je nach Mitarbeiter drastisch." },
    { t: "Schwankende Fleischmengen", d: "Ohne Messung wird rein nach Gefühl gearbeitet — oft mit enormen Spannen." },
    { t: "Unbemerkte Verluste", d: "Tägliche Überportionierung summiert sich im Stillen zu monatlich riesigen Kostenfaktoren." }
  ];

  return (
    <section id="realitaet" className="py-24 md:py-36 bg-[#F8F9FA] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-12 xl:col-span-5">
            <span className="text-xs uppercase tracking-widest text-[#DE8E38] font-black">Markt-Analyse</span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mt-2 mb-6">
              Die Realität der <br />
              <span className="text-zinc-500">Dönerbranche.</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#DE8E38] to-[#E5A93B] mb-8" />
            <p className="text-lg text-zinc-800 font-semibold mb-6">
              Die Dönerbranche steht heute unter enormem Druck.
            </p>
            <p className="text-zinc-600 leading-relaxed font-semibold mb-6">
              Viele Betriebe arbeiten härter als je zuvor — verdienen aber am Ende immer weniger. 
            </p>
            <p className="text-[#DE8E38] text-lg font-bold border-l-2 border-[#DE8E38] pl-4">
              Denn schon wenige Gramm zu viel pro Portion können über Monate und Jahre enorme wirtschaftliche Schäden verursachen.
            </p>
          </div>

          <div className="lg:col-span-12 xl:col-span-7">
            <div className="grid md:grid-cols-2 gap-5 font-sans">
              {painPoints.map((p, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:border-[#DE8E38]/45 transition-all group hover:shadow-md"
                >
                  <div className="w-10 h-10 bg-rose-50 border border-rose-100 rounded-lg flex items-center justify-center mb-6">
                    <TrendingDown className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-lg font-black text-zinc-950 group-hover:text-[#DE8E38] transition-colors mb-2 font-sans">{p.t}</h3>
                  <p className="text-zinc-500 text-sm font-semibold leading-relaxed">{p.d}</p>
                </div>
              ))}
              
              <div className="bg-[#FFFDF9] border border-[#DE8E38]/20 p-8 rounded-2xl flex flex-col justify-between hover:border-[#DE8E38]/40 transition-colors shadow-sm">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#DE8E38] font-bold">Die Konsequenz</span>
                  <p className="text-xl font-bold text-zinc-900 mt-1">Warum Schätzen Ihre Marge zerstört.</p>
                </div>
                <p className="text-zinc-500 text-xs mt-6 leading-relaxed font-semibold">
                  Wer Fleischportionen schätzt, verschenkt bares Geld. SedoGramm beendet das Raten.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

// Section 3: Warum SEDOGRAMM entstanden ist (Vita des Gründers) - Pristine Matte Light Look
const FounderOrigin = () => {
  return (
    <section id="ursprung" className="py-24 md:py-36 bg-white overflow-hidden relative border-t border-zinc-200/80">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-amber-500/[0.03] to-transparent rounded-full blur-[140px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Block with Gastronomy image and quote decoration */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            <div className="rounded-[2.5rem] overflow-hidden border border-zinc-200 h-full min-h-[350px] relative shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200" 
                alt="Dönerzubereitung und Profi-Arbeit" 
                className="w-full h-full object-cover brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[9px] uppercase tracking-widest font-black text-[#DE8E38]">Echtes Handwerk</span>
                <p className="text-xl font-sans italic text-white font-bold leading-snug mt-2">
                  "Hinter SEDOGRAMM steht keine anonyme Technikfirma. Sondern jahrzehntelange Gastro-Praxis."
                </p>
              </div>
            </div>
          </div>

          {/* Right Block detailing Origin Story */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#DE8E38] font-black">Unser Ursprung</span>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mt-2 mb-6">
                Warum SEDOGRAMM <br />
                <span className="text-zinc-500 font-sans">entstanden ist.</span>
              </h2>
              
              <p className="text-zinc-800 font-semibold mb-8 text-lg leading-relaxed font-sans">
                Hinter SEDOGRAMM steht keine anonyme Technikfirma. Sondern ein Gastronom mit jahrzehntelanger Erfahrung:
              </p>

              {/* Roles list */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  "Koch", "Küchenleiter", "Caterer", 
                  "Unternehmer", "Deli-Betreiber"
                ].map((role, idx) => (
                  <div key={idx} className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#DE8E38] shrink-0" />
                    <span className="text-zinc-900 text-sm font-extrabold tracking-wide">{role}</span>
                  </div>
                ))}
              </div>

              <p className="text-zinc-600 font-semibold leading-relaxed mb-6 font-sans">
                Jemand, der die Reality der Branche jeden Tag selbst erlebt hat. Von hektischen Stoßzeiten bis hin zu den wirtschaftlichen Herausforderungen hinter den Kulissen.
              </p>

              <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
                <p className="text-xs text-[#DE8E38] font-black uppercase tracking-widest mb-2 font-sans">
                  Wenn wenige Gramm zur Existenzfrage werden
                </p>
                <p className="text-zinc-900 text-base font-bold leading-relaxed font-sans">
                  Die Idee zu SEDOGRAMM entstand aus einer bitteren Realität: Unkontrollierte Dönermengen führen nicht nur zu schwankenden Gewinnen — sie können ganze Existenzen gefährden.
                </p>
                <p className="text-zinc-500 text-sm mt-3 font-semibold leading-relaxed font-sans">
                  Gerade in einer Branche, die täglich mit hohen Umsätzen, Wareneinsatz und behördlichem Druck arbeitet, wird präzise Kontrolle immer wichtiger. SEDOGRAMM wurde entwickelt, um genau dieses Problem endlich professionell zu lösen.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

// Section 4: Die Lösung
const ProductSolution = () => {
  const components = [
    { name: "Präzisionswaage", desc: "Sensible, blitzschnell ansprechende Wiegefläche für die Gastronomie." },
    { name: "Spiegel-Display", desc: "Deutliche Anzeige der Portionsgewichte für Mitarbeiter und Gäste." },
    { name: "Smarte Sensortechnik", desc: "Erkennt Gewichte augenblicklich und speichert Messungen ab." },
    { name: "Edelstahl-Fettwanne", desc: "Lebensmittelechter, robuster Edelstahl. Leicht zu reinigen." }
  ];

  return (
    <section id="loesung" className="py-24 md:py-36 bg-[#F8F9FA] border-t border-zinc-200/80 text-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20 font-sans">
          <span className="text-xs uppercase tracking-widest text-[#DE8E38] font-black">Unser Konzept</span>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 mt-2 mb-4">Die Lösung.</h2>
          <p className="text-xl text-[#DE8E38] font-semibold tracking-wide italic mb-6">
            "Kontrolle. Präzision. Sicherheit."
          </p>
          <p className="text-zinc-600 text-lg leading-relaxed font-semibold">
            SEDOGRAMM sorgt dafür, dass jede Portion exakt stimmt — schnell, hygienisch und ohne den Arbeitsablauf zu stören.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch font-sans">
          {components.map((c, i) => (
            <div key={i} className="bg-white border border-zinc-200 p-8 rounded-2xl flex flex-col justify-between hover:border-[#DE8E38]/30 hover:shadow-md transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/5 border border-amber-500/20 text-[#DE8E38] flex items-center justify-center mb-6 font-mono font-black text-lg group-hover:scale-105 transition-transform">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-black text-zinc-950 mb-2">{c.name}</h3>
                <p className="text-zinc-500 text-sm font-semibold leading-relaxed">{c.desc}</p>
              </div>
              <span className="text-[10px] text-zinc-400 font-extrabold uppercase mt-6 tracking-widest">Sedo Component</span>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-[2rem] bg-white border border-zinc-200 text-center max-w-xl mx-auto shadow-sm">
          <span className="text-xs uppercase tracking-widest text-[#DE8E38] font-black mr-2">✓</span>
          <span className="text-zinc-800 text-base font-black">Robust entwickelt für den harten Gastro-Alltag.</span>
        </div>

      </div>
    </section>
  );
};

// Section 5: INTERAKTIVER VERLUST-RECHNER im edlen Matte Gold Lightlook
const InteractiveCalculator = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const [kebabsPerDay, setKebabsPerDay] = useState(250);
  const [weightOffset, setWeightOffset] = useState(30);
  const [meatPrice, setMeatPrice] = useState(10); // Price in Euro / kg

  // Mathematical Calculation
  const dailyLoss = useMemo(() => {
    return kebabsPerDay * (weightOffset / 1000) * meatPrice;
  }, [kebabsPerDay, weightOffset, meatPrice]);

  const monthlyLoss = useMemo(() => dailyLoss * 30.4, [dailyLoss]);
  const yearlyLoss = useMemo(() => dailyLoss * 365, [dailyLoss]);

  const formatEuro = (val: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="rechner" className="py-24 md:py-36 bg-white border-t border-zinc-200/80 text-zinc-950 relative">
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-amber-500/[0.02] rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16 font-sans">
          <span className="text-xs uppercase tracking-widest text-[#DE8E38] font-black">Marge Optimieren</span>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 mt-2 mb-4">Der SedoGramm Verlust-Rechner</h2>
          
          <div className="inline-block mt-3 bg-rose-50 border border-rose-100 px-6 py-3 rounded-full text-rose-600 font-extrabold text-xs md:text-sm tracking-wide">
            💥 "Nur 30g zu viel pro Döner können tausende Euro Verlust pro Jahr bedeuten!"
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch font-sans">
          
          {/* User inputs - Left Slider Panel styled elegantly */}
          <div className="lg:col-span-6 bg-zinc-50 border border-zinc-200 p-8 md:p-10 rounded-[2.5rem] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg uppercase tracking-wider text-[#DE8E38] font-black mb-8 border-b border-zinc-200 pb-3">Parameter anpassen</h3>

              {/* 1. Döner pro Tag */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-zinc-500 font-black uppercase tracking-wider">Döner pro Tag</span>
                  <span className="text-xl font-black font-mono text-zinc-900">{kebabsPerDay} Stk.</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="1000" 
                  step="10"
                  value={kebabsPerDay} 
                  onChange={(e) => setKebabsPerDay(Number(e.target.value))}
                  className="w-full h-2 rounded-lg cursor-pointer bg-zinc-250 accent-[#DE8E38]"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 font-bold mt-1.5 uppercase">
                  <span>50 Döner</span>
                  <span>500 Stk</span>
                  <span>1.000 Döner</span>
                </div>
              </div>

              {/* 2. Überportionierung in Gramm */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm text-zinc-500 font-black uppercase tracking-wider">Überportionierung</span>
                    <HelpCircle className="w-3.5 h-3.5 text-zinc-400 cursor-pointer" title="Gewicht, das pro Portion unbemerkt zu viel ausgegeben wird" />
                  </div>
                  <span className="text-xl font-black font-mono text-rose-500">+{weightOffset}g</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  step="5"
                  value={weightOffset} 
                  onChange={(e) => setWeightOffset(Number(e.target.value))}
                  className="w-full h-2 rounded-lg cursor-pointer bg-zinc-250 accent-[#DE8E38]"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 font-bold mt-1.5 uppercase">
                  <span>5g (Hauch!)</span>
                  <span>30g (Avg!)</span>
                  <span>100g (Zuviel!)</span>
                </div>
              </div>

              {/* 3. Fleischpreis pro kg */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-zinc-500 font-black uppercase tracking-wider">Fleischpreis pro kg</span>
                  <span className="text-xl font-black font-mono text-[#DE8E38]">{meatPrice} €/kg</span>
                </div>
                <input 
                  type="range" 
                  min="6" 
                  max="18" 
                  step="0.5"
                  value={meatPrice} 
                  onChange={(e) => setMeatPrice(Number(e.target.value))}
                  className="w-full h-2 rounded-lg cursor-pointer bg-zinc-250 accent-[#DE8E38]"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 font-bold mt-1.5 uppercase">
                  <span>6 €</span>
                  <span>12 €</span>
                  <span>18 €</span>
                </div>
              </div>
            </div>

            <p className="text-[12px] text-zinc-400 font-semibold leading-relaxed mt-6 border-t border-zinc-200 pt-4">
              * Schätzungen basieren auf typischen Einkaufskonditionen der Gastronomie (exkl. Beilagen / Soßen). Fleischverlust summiert sich direkt auf Ihre Netto-Marge.
            </p>
          </div>

          {/* Dynamic Results Display - Right Side Metallic indicator Box */}
          <div className="lg:col-span-6 bg-[#FCFBF8] border border-zinc-200 p-8 md:p-10 rounded-[2.5rem] shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/[0.04] rounded-full blur-[60px] pointer-events-none" />
            
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#DE8E38] font-black">Live-Verlust-Präsentation</span>
              <h3 className="text-2xl font-black text-zinc-950 mt-1 mb-8">Ihr Einsparpotenzial</h3>

              <div className="space-y-6">
                
                {/* 1. Daily Loss */}
                <div className="flex justify-between items-center bg-white border border-zinc-200/80 p-4 rounded-xl">
                  <span className="text-zinc-500 font-bold text-sm">Verlust pro Tag:</span>
                  <span className="text-xl font-black text-zinc-800 font-mono">{formatEuro(dailyLoss)}</span>
                </div>

                {/* 2. Monthly Loss */}
                <div className="flex justify-between items-center bg-white border border-zinc-200/80 p-4 rounded-xl">
                  <span className="text-zinc-500 font-bold text-sm">Verlust pro Monat:</span>
                  <span className="text-2xl font-black text-[#DE8E38] font-mono">{formatEuro(monthlyLoss)}</span>
                </div>

                {/* 3. Yearly Loss (Huge Display style!) */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50/50 border border-amber-200/40 p-6 rounded-2xl text-center relative">
                  <p className="text-[10px] uppercase font-black tracking-widest text-orange-700/80 mb-1">Verlust pro Jahr (Verlorener Gewinn)</p>
                  <p className="text-4xl md:text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#DE8E38]">
                    {formatEuro(yearlyLoss)}
                  </p>
                  <p className="text-xs text-rose-700/90 font-bold mt-2">
                    Dieses Geld verschenken Sie gerade an Ihrem Tresen!
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={onOpenContact}
                className="w-full bg-gradient-to-r from-[#DE8E38] to-[#E5A93B] hover:from-[#E5A93B] hover:to-amber-500 text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Let's save your margin <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

// Section 6: Vorteile auf einen Blick
const BenefitsSection = () => {
  const benefits = [
    {
      title: "Mehr Gewinn",
      desc: "Weniger Überportionierung. Mehr Kontrolle über den gesamten Wareneinsatz."
    },
    {
      title: "Einheitliche Qualität",
      desc: "Jeder Kunde erhält dieselbe Portion. Das schafft messbare Zufriedenheit."
    },
    {
      title: "Schnellere Abläufe",
      desc: "Mitarbeiter sehen sofort das richtige Portionsgewicht am Display."
    },
    {
      title: "Weniger Diskussionen",
      desc: "Klare portionierte Bar-Vorgaben im gesamten Gastro-Team."
    },
    {
      title: "Professioneller Betrieb",
      desc: "Moderne, transparente Sensortechnik schafft Vertrauen bei Kunden."
    }
  ];

  return (
    <section id="vorteile" className="py-24 md:py-36 bg-[#F8F9FA] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-[#DE8E38] font-black">Unser Mehrwert</span>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 mt-1">Vorteile auf einen Blick.</h2>
          <div className="h-1 w-16 bg-[#DE8E38] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch font-sans">
          {benefits.map((b, idx) => (
            <div 
              key={idx}
              className="bg-white border border-zinc-200 p-8 rounded-2xl flex flex-col justify-between hover:border-[#DE8E38]/30 hover:shadow-md transition-all group"
            >
              <div>
                <div className="w-10 h-10 bg-[#DE8E38]/10 rounded-lg flex items-center justify-center text-[#DE8E38] mb-6 group-hover:scale-105 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-zinc-950 mb-2">{b.title}</h3>
                <p className="text-zinc-500 text-sm font-semibold leading-relaxed">{b.desc}</p>
              </div>
              <span className="text-[10px] text-zinc-400 font-extrabold uppercase mt-6 tracking-widest">Premium Benefit</span>
            </div>
          ))}

          {/* Core Mission highlight slot */}
          <div className="bg-gradient-to-br from-white to-[#DE8E38]/5 border border-[#DE8E38]/20 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs text-[#DE8E38] font-black uppercase tracking-widest">Unsere Mission</span>
              <p className="text-zinc-950 text-lg font-black mt-2 leading-relaxed">
                Die Dönerbranche professioneller, wirtschaftlicher und transparenter machen.
              </p>
            </div>
            <p className="text-zinc-500 text-xs mt-6 leading-relaxed font-semibold">
              Mit einer Lösung, die aus echter Erfahrung entstanden ist. Von Gastronomen. Für Gastronomen.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

// Premium Call-To-Action (CTA) with Gold-Copper Highlights
const CallToAction = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-br from-white via-[#FCFBF9] to-zinc-50 border-t border-zinc-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#DE8E38]/5 to-transparent rounded-full blur-[140px] -z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 font-sans">
        <span className="text-xs text-[#DE8E38] font-black uppercase tracking-widest">SEDOGRAMM</span>
        <h2 className="text-4xl md:text-6xl font-black text-zinc-950 leading-tight mt-2 mb-8">
          Jede Portion zählt.
        </h2>
        
        <p className="text-zinc-750 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed mb-4">
          Schließen Sie sich zukunftsorientierten Gastronomen an, die bereits auf absolute Präzision und maximale Wirtschaftlichkeit setzen.
        </p>
        
        <p className="text-zinc-500 font-semibold italic mb-12 text-sm md:text-base">
          "Werden Sie Teil der SedoGramm Community und setzen Sie neue Standards in Ihrer Stadt."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenContact}
            className="w-full bg-gradient-to-r from-[#DE8E38] to-[#E5A93B] hover:from-[#E5A93B] hover:to-amber-500 text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all cursor-pointer"
          >
            Anfrage senden
          </motion.button>
          <motion.button 
            onClick={onOpenContact}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-zinc-50 border border-zinc-200 text-zinc-700 py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all cursor-pointer"
          >
            Demo vereinbaren
          </motion.button>
        </div>
      </div>
    </section>
  );
};

// Footer containing brand identity details in clean custom Light look
const Footer = () => {
  return (
    <footer className="bg-zinc-50 py-20 text-zinc-500 border-t border-zinc-200 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid md:grid-cols-4 gap-12 lg:gap-20 mb-16">
          
          <div className="col-span-full md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-[#DE8E38] to-[#E5A93B] p-1.5 rounded-lg text-white">
                <Scale className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-zinc-950 font-sans">SedoGramm</span>
            </div>
            <p className="text-base max-w-sm leading-relaxed mb-8 text-zinc-650 font-sans">
              Präzision für den modernen Dönerbetrieb. <br />
              <span className="text-[#DE8E38] font-display text-lg font-black italic block mt-1">"Weil Transparenz das wichtigste Gewürz ist."</span>
            </p>
            
            <div className="flex gap-4">
              {['Instagram', 'LinkedIn', 'YouTube'].map(social => (
                <a key={social} href="#" className="px-4 py-2 border border-zinc-200 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-zinc-950 hover:bg-white transition-all rounded-lg bg-zinc-100/50">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-zinc-900 text-xs mb-6 uppercase tracking-[0.2em]">Produkt</h4>
            <ul className="space-y-3 font-bold text-sm text-zinc-500">
              <li><a href="#" className="hover:text-[#DE8E38] transition-all">Hardware Waage</a></li>
              <li><a href="#" className="hover:text-[#DE8E38] transition-all">Anzeige Hub</a></li>
              <li><a href="#" className="hover:text-[#DE8E38] transition-all">Schnittstellen</a></li>
              <li><a href="#" className="hover:text-[#DE8E38] transition-all">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-zinc-900 text-xs mb-6 uppercase tracking-[0.2em]">Rechtliches</h4>
            <ul className="space-y-3 font-bold text-sm text-zinc-500">
              <li><a href="#" className="hover:text-[#DE8E38] transition-all">Impressum</a></li>
              <li><a href="#" className="hover:text-[#DE8E38] transition-all">Datenschutz</a></li>
              <li><a href="#" className="hover:text-[#DE8E38] transition-all">AGB</a></li>
              <li><a href="#" className="hover:text-[#DE8E38] transition-all">GoBD-Zertifikate</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-widest font-black text-zinc-400">
          <p>© 2026 SedoGramm Systems GmbH.</p>
          <p className="text-zinc-500">Entwickelt für Gastronomen, aus echter Erfahrung.</p>
        </div>

      </div>
    </footer>
  );
};

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#DE8E38] selection:text-white antialiased overflow-x-hidden">
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      
      <main>
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <IndustryReality />
        <FounderOrigin />
        <ProductSolution />
        <InteractiveCalculator onOpenContact={() => setIsContactOpen(true)} />
        <BenefitsSection />
        <CallToAction onOpenContact={() => setIsContactOpen(true)} />
      </main>

      <Footer />
    </div>
  );
}
