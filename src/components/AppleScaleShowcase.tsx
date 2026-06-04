import { motion } from 'motion/react';
import { 
  Layers, 
  Cpu, 
  Monitor, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  ChevronRight,
  Flame,
  Activity,
  Award
} from 'lucide-react';
import { useState } from 'react';

// Apple-style structural highlights
const showcaseItems = [
  {
    id: "housing",
    num: "01",
    label: "DAS FUNDAMENT",
    title: "Nahtloser V2A Edelstahl-Panzer",
    tagline: "Unverwüstlich. Hygienisch. Präzise.",
    desc: "Das massive, lasergeschnittene Gehäuse besteht zu 100% aus lebensmittelechtem, rostfreiem V2A Edelstahl (DIN 1.4301). Es trotzt härtesten Schlägen, heißem Fett und täglicher Säuberung, ohne an Präzision zu verlieren. Entwickelt für 10+ Jahre Dauereinsatz.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
    features: ["100% Rostfreier V2A Edelstahl", "Hitzestabil bis über 120°C", "Anti-Vibrations-Dämpfung", "Heavy-Duty Saugnapf-Füße"],
    color: "from-zinc-100 to-zinc-200"
  },
  {
    id: "sensor",
    num: "02",
    label: "DIE SPEZIAL-SENSORIK",
    title: "Versiegelte High-Speed Wiegekapsel",
    tagline: "0.1g Auflösung mit 50ms Latenz.",
    desc: "Im Inneren der Edelstahl-Plattform ruht unsere patentierte, IP67-wassergeschützte Kraftsensorkapsel. Sie tastet das Gewicht in Echtzeit ab und filtert Erschütterungen aus der Arbeitsplatte vollautomatisch weg. Jedes Gramm wird sofort registriert.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    features: ["IP67 Staub- & Wasserschutz", "Millisekundenschnelles Ansprechverhalten", "Automatischer Vibrations-Filter", "Kalibrierungsfreie Sensor-Technik"],
    color: "from-zinc-200 to-zinc-300"
  },
  {
    id: "display",
    num: "03",
    label: "DIE ERGONOMIE",
    title: "Split-Hub Spiegel-Monitor",
    tagline: "Perfektes Augenmaß. Kein herabschauen.",
    desc: "Traditionelle Waagen zwingen Ihre Crew, ständig nach unten zu blicken. Unser kontraststarkes Spiegel-Display wird erhöht, direkt im Sichtfeld des Schneide-Vorgangs montiert. Das spart Sekunden bei jedem Döner und schont die Wirbelsäule.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
    features: ["Exakte Augenhöhe-Ausrichtung", "Echtzeit-Gewichtssortierung", "Fett- & feuchtigkeitsgeschützt", "Reflektionsarmes OLED-Segment"],
    color: "from-zinc-50 to-zinc-150"
  },
  {
    id: "cleaning",
    num: "04",
    label: "DIE HYGIENE (HACCP)",
    title: "Abnehmbare Schnellfettwanne",
    tagline: "Reinigung in unter 15 Sekunden.",
    desc: "Hygiene ist oberstes Gastro-Gebot. Die aufliegende Edelstahl-Fettwanne leitet herabtropfendes Fett gezielt ab und lässt sich mit einem Handgriff abheben. Nach der Schicht einfach in die Gastro-Spülmaschine werfen. Fertig.",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=1000",
    features: ["Werkzeuglos abnehmbar", "Spülmaschinenfest nach HACCP", "Integrierte Fettrinne", "Lebensmittelechte Oberflächen-Versiegelung"],
    color: "from-zinc-100 to-zinc-250"
  }
];

export default function AppleScaleShowcase({ onOpenContact }: { onOpenContact: () => void }) {
  const [activeTab, setActiveTab] = useState("housing");

  return (
    <section id="waagen-anatomy" className="scroll-mt-24 md:scroll-mt-28 py-24 md:py-32 bg-white text-zinc-950 relative overflow-hidden border-t border-b border-zinc-150">
      {/* Decorative premium structural background lines */}
      <div className="absolute inset-0 bg-grid-zinc-100 [mask-image:linear-gradient(to_bottom,white,transparent_30%,transparent_70%,white)] opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Apple Style Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-300 text-[10px] font-black tracking-widest text-zinc-900 uppercase mb-4 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-650" /> INDUSTRIELLES EDELSTAHL-DESIGN
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-zinc-950 tracking-tight leading-tight"
          >
            Bis ins kleinste Detail durchdacht.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-zinc-650 font-medium max-w-2xl mx-auto mt-4 leading-relaxed"
          >
            SedoGramm ist kein einfacher Küchenhelfer. Sie ist eine hochentwickelte, spiegelblanke Präzisions-Anlage, konstruiert nach den anspruchsvollsten Gastro-Standards im Land.
          </motion.p>
        </div>

        {/* Scroll-Revealed Breakdown of parts (Apple style alternating segments with smooth entrance animations) */}
        <div className="space-y-24 md:space-y-36">
          {showcaseItems.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={item.id} 
                className={`grid lg:grid-cols-12 gap-8 md:gap-16 items-center`}
              >
                {/* Text Block */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.2, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-5 text-left ${!isEven ? 'lg:order-2' : ''}`}
                >
                  <span className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-550 block mb-2">{item.label}</span>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-4xl font-extrabold text-zinc-300 font-mono tracking-tighter leading-none">{item.num}</span>
                    <h3 className="text-2xl sm:text-3.5xl font-black text-zinc-950 tracking-tight leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-4 font-sans">{item.tagline}</p>
                  
                  <p className="text-sm text-zinc-650 font-semibold leading-relaxed mb-6 font-sans">
                    {item.desc}
                  </p>

                  {/* Micro-Features Bullets with checked badges */}
                  <div className="space-y-3 border-t border-zinc-150 pt-6">
                    {item.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-zinc-100 border border-zinc-250 text-zinc-900 flex items-center justify-center shrink-0 shadow-3xs">
                          <Check className="w-3 h-3 text-zinc-900 stroke-[3]" />
                        </div>
                        <span className="text-xs text-zinc-800 font-bold">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <button 
                      onClick={onOpenContact}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-zinc-950 hover:text-zinc-650 transition-colors"
                    >
                      Mehr erfahren <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </motion.div>

                {/* Massive Premium Image Container with Custom Framing & Hover Motion */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-7 relative ${!isEven ? 'lg:order-1' : ''}`}
                >
                  <div className="relative group rounded-[2.5rem] overflow-hidden border border-zinc-200/90 bg-zinc-50/50 p-4 shadow-xl transition-shadow duration-500 hover:shadow-2xl">
                    
                    {/* Apple aesthetics chrome window header */}
                    <div className="flex justify-between items-center px-4 pb-3 border-b border-zinc-200/60 text-[9px] font-mono text-zinc-400">
                      <div className="flex gap-1.5 items-center">
                        <span className="w-2 h-2 rounded-full bg-zinc-200" />
                        <span className="w-2 h-2 rounded-full bg-zinc-200" />
                        <span className="w-2 h-2 rounded-full bg-zinc-200" />
                      </div>
                      <span>SEDOGRAMM V2 ANATOMY DISPLAY</span>
                    </div>

                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mt-3 bg-zinc-100">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent h-1/3" />
                      
                      {/* Live Data Badge Overlay mimicking dynamic digital status lights */}
                      <div className="absolute bottom-4 left-4 bg-white/95 border border-zinc-200/80 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md backdrop-blur-sm z-10">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-mono font-bold text-zinc-800 uppercase tracking-widest">{item.id === 'sensor' ? 'TELEMETRY: ACTIVE' : 'SYSTEM: OK'}</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
        
        {/* Interactive Exploded View Segment mimicking Apple AirPods Custom Feature Selection */}
        <div className="mt-28 md:mt-40 bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-200/25 rounded-full blur-[80px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto mb-10">
            <span className="text-[10px] uppercase font-black text-zinc-500 tracking-widest">INTERACTIVE ANATOMY</span>
            <h3 className="text-2xl md:text-3.5xl font-black text-zinc-900 tracking-tight mt-1 mb-3">Die Baugruppen im Live-Check</h3>
            <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
              Drücken Sie auf die einzelnen Baugruppen der SedoGramm, um die Details zu entkoppeln und das ergonomische Meisterwerk zu erkunden.
            </p>
          </div>

          {/* Tab switches */}
          <div className="flex flex-wrap gap-2 justify-center mb-10 max-w-md md:max-w-xl mx-auto relative z-10">
            {showcaseItems.map((st) => (
              <button
                key={st.id}
                onClick={() => setActiveTab(st.id)}
                className={`px-4.5 py-2.5 rounded-xl font-bold uppercase text-[10px] tracking-widest transition-all border outline-none cursor-pointer ${
                  activeTab === st.id 
                    ? 'bg-zinc-950 border-zinc-950 text-white shadow-md' 
                    : 'bg-white border-zinc-200 hover:bg-zinc-100 text-zinc-650'
                }`}
              >
                {st.title.split(' ')[0]} {st.title.split(' ')[1] || ''}
              </button>
            ))}
          </div>

          {/* Selected Switch View */}
          <div className="bg-white border border-zinc-200 rounded-[1.8rem] p-6 md:p-10 relative overflow-hidden text-left min-h-[350px] flex flex-col md:flex-row gap-8 items-center z-10 shadow-xs">
            {showcaseItems.map((st) => {
              if (st.id !== activeTab) return null;
              return (
                <div key={st.id} className="grid md:grid-cols-12 gap-6 w-full items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-black">{st.label}</span>
                    <h4 className="text-2xl font-black text-zinc-950 leading-tight">{st.title}</h4>
                    <p className="text-xs text-zinc-800 font-bold uppercase tracking-widest font-mono p-1 px-2.5 bg-zinc-100 border border-zinc-200 rounded-lg inline-block">{st.tagline}</p>
                    <p className="text-sm text-zinc-650 font-semibold leading-relaxed mt-1 font-sans">
                      {st.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {st.features.map((feat, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="text-xs font-bold text-zinc-800">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-5 relative w-full aspect-square rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
                    <img 
                      src={st.image} 
                      alt={st.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
