import { motion } from 'motion/react';
import { 
  Check, 
  ChevronRight,
  Sparkles
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
    desc: "Das massive, lasergeschnittene Gehäuse besteht aus lebensmittelechtem, rostfreiem V2A Edelstahl (DIN 1.4301). Es trotzt härtesten Schlägen, heißem Fett und täglicher Reinigung, ohne an Form oder Wiege-Präzision zu verlieren. Konstruiert für jahrzehntelangen Dauereinsatz.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
    features: ["100% Rostfreier V2A Edelstahl", "Hitzestabil bis über 120°C", "Anti-Vibrations-Dämpfung", "Heavy-Duty Saugnapf-Füße"],
    liveTitle: "Edelstahl-Chassis & Stoßschutz",
    liveHighlight: "Dank der CNC-Fräsung liegt diese Baugruppe unerschütterlich auf jeder Gastro-Fläche.",
    specs: [
      { name: "Materialstärke", value: "3.5mm Edelstahl" },
      { name: "Schutz-Dämpfung", value: "Integrierte Absorb-Füße" },
      { name: "Chemische Resistenz", value: "Säuren, Salze, Laugen" },
      { name: "Gesamtgewicht", value: "4.2 kg (Absolut rutschfest)" }
    ]
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
    liveTitle: "Sensorkapsel & Erschütterungsfilter",
    liveHighlight: "Die mikroskopische Wiegezelle filtert Störungen der Schneidefläche digital heraus.",
    specs: [
      { name: "Messlatenz", value: "50 Millisekunden" },
      { name: "Schutzstandard", value: "IP67 Vollversiegelung" },
      { name: "Feinstauflösung", value: "0.1g Schritte" },
      { name: "Kompensation", value: "Temperaturbereich -10°C bis +60°C" }
    ]
  },
  {
    id: "display",
    num: "03",
    label: "DIE ERGONOMIE",
    title: "Split-Hub Spiegel-Monitor",
    tagline: "Perfektes Augenmaß. Kein herabschauen.",
    desc: "Traditionelle Waagen zwingen Ihre Crew, ständig nach unten zu blicken. Unser kontraststarkes Spiegel-Display wird erhöht, direkt im Sichtfeld des Schneide-Vorgangs montiert. Das spart Sekunden bei jedem Döner und schont die Crew.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
    features: ["Exakte Augenhöhe-Ausrichtung", "Echtzeit-Gewichtssortierung", "Fett- & feuchtigkeitsgeschützt", "Reflektionsarmes OLED-Segment"],
    liveTitle: "Ergonomisches Hochdisplay",
    liveHighlight: "Montage direkt auf Augenhöhe über der Schneidezone — beugt Haltungsfehlern vor.",
    specs: [
      { name: "Montagesystem", value: "Regelbares Teleskopgestänge" },
      { name: "Blickwinkel", value: "178° Ultra-Kontrast" },
      { name: "Zuleitungsschutz", value: "Gepanzerte Stahlwell-Spirale" },
      { name: "Helligkeit", value: "Sonnenlichttaugliches OLED" }
    ]
  },
  {
    id: "cleaning",
    num: "04",
    label: "DIE HYGIENE (HACCP)",
    title: "Abnehmbare Schnellfettwanne",
    tagline: "Reinigung in unter 15 Sekunden.",
    desc: "Hygiene ist das oberste Gastro-Gebot. Die aufliegende Edelstahl-Fettwanne leitet herabtropfendes Fett gezielt ab und lässt sich mit einem Handgriff abheben. Nach der Schicht einfach in die Spülmaschine werfen. Fertig.",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=1000",
    features: ["Werkzeuglos abnehmbar", "Spülmaschinenfest nach HACCP", "Integrierte Fettrinne", "Lebensmittelechte Oberflächen-Versiegelung"],
    liveTitle: "HACCP-Schnellabwasch-Wanne",
    liveHighlight: "Magnetisch gesteuerte Gleitführung erlaubt den schnellen Auswurf im laufenden Betrieb.",
    specs: [
      { name: "Wechseldauer", value: "Unter 10 Sekunden" },
      { name: "HACCP-Klasse", value: "Zertifiziert spülmaschinenfest" },
      { name: "Fettkapazität", value: "Bis zu 450ml Ablaufvolumen" },
      { name: "Verschlussart", value: "Magnetische Arretierung" }
    ]
  }
];

export default function AppleScaleShowcase({ onOpenContact }: { onOpenContact: () => void }) {
  const [activeTab, setActiveTab] = useState("housing");

  return (
    <section id="waagen-anatomy" className="scroll-mt-24 md:scroll-mt-28 py-20 md:py-32 bg-white text-zinc-950 relative overflow-hidden border-t border-b border-zinc-150">
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
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-300 text-xs sm:text-[11px] font-extrabold tracking-widest text-zinc-900 uppercase mb-4 shadow-3xs"
          >
            <Sparkles className="w-4 h-4 text-zinc-650" /> INDUSTRIELLES EDELSTAHL-DESIGN
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-tight"
          >
            Präzisions-Design für den härtesten Alltag.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-zinc-605 font-medium max-w-2xl mx-auto mt-4 leading-relaxed"
          >
            Die SedoGramm ist kein gewöhnlicher Helfer. Sie ist eine hochpräzise, spiegelblanke Anlage, konstruiert nach den anspruchsvollsten Gastro-Standards für extreme Beanspruchung.
          </motion.p>
        </div>

        {/* Scroll-Revealed Breakdown of parts (Alternating segments with smooth entrance) */}
        <div className="space-y-20 md:space-y-32">
          {showcaseItems.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={item.id} 
                className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Text Block */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.15, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-5 text-left ${!isEven ? 'lg:order-2' : ''}`}
                >
                  <span className="text-xs sm:text-[11px] uppercase font-black tracking-[0.2em] text-zinc-500 block mb-2">{item.label}</span>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-3xl sm:text-4xl font-extrabold text-zinc-300 font-mono tracking-tighter leading-none">{item.num}</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-950 tracking-tight leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 font-sans">{item.tagline}</p>
                  
                  <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed mb-6 font-sans">
                    {item.desc}
                  </p>

                  {/* Micro-Features Bullets with checked badges */}
                  <div className="space-y-3 border-t border-zinc-150 pt-5">
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

                {/* Image Container with Hover Motion */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-7 relative ${!isEven ? 'lg:order-1' : ''}`}
                >
                  <div className="relative group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-zinc-200 bg-zinc-50/50 p-3 md:p-4 shadow-xl transition-shadow duration-500 hover:shadow-2xl">
                    
                    {/* Chrome header */}
                    <div className="flex justify-between items-center px-4 pb-3 border-b border-zinc-200/60 text-[9px] md:text-[10px] font-mono text-zinc-400">
                      <div className="flex gap-1.5 items-center">
                        <span className="w-2 h-2 rounded-full bg-zinc-200" />
                        <span className="w-2 h-2 rounded-full bg-zinc-200" />
                        <span className="w-2 h-2 rounded-full bg-zinc-200" />
                      </div>
                      <span>SEDOGRAMM DETAILED DIAGRAM</span>
                    </div>

                    <div className="relative aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden mt-3 bg-zinc-100">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent h-1/3" />
                      
                      {/* Live Data Badge Overlay (Softer pulse colors for premium style) */}
                      <div className="absolute bottom-4 left-4 bg-white/95 border border-zinc-200/80 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md backdrop-blur-sm z-10">
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                        <span className="text-[9px] md:text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-widest">{item.id === 'sensor' ? 'TELEMETRY: ONLINE' : 'ZUSTAND: BEREIT'}</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
        
        {/* Interactive Exploded View Segment - CLEANER, REPETITION-FREE */}
        <div className="mt-24 md:mt-36 bg-zinc-50 border border-zinc-200 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-200/25 rounded-full blur-[80px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto mb-8">
            <span className="text-xs sm:text-[11px] uppercase font-black text-zinc-500 tracking-widest">INSPEKTOR</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-900 tracking-tight mt-1 mb-2">Die Baugruppen im Live-Check</h3>
            <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
              Klicken Sie auf ein Bauteil, um die technischen Kennzahlen und Spezifikationen direkt abzufragen.
            </p>
          </div>

          {/* Tab switches */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 max-w-md md:max-w-xl mx-auto relative z-10">
            {showcaseItems.map((st) => (
              <button
                key={st.id}
                onClick={() => setActiveTab(st.id)}
                className={`px-3 sm:px-4.5 py-2 sm:py-2.5 rounded-xl font-bold uppercase text-[9px] sm:text-[10px] tracking-widest transition-all border outline-none cursor-pointer ${
                  activeTab === st.id 
                    ? 'bg-zinc-950 border-zinc-950 text-white shadow-md' 
                    : 'bg-white border-zinc-200 hover:bg-zinc-100 text-zinc-600'
                }`}
              >
                {st.title.split(' ')[0]} {st.title.split(' ')[1] || ''}
              </button>
            ))}
          </div>

          {/* Selected Switch View - NO Paragraph text repetition, highly structured stats! */}
          <div className="bg-white border border-zinc-200 rounded-2xl md:rounded-[1.8rem] p-5 sm:p-8 md:p-10 relative overflow-hidden text-left min-h-[300px] flex flex-col md:flex-row gap-8 items-center z-10 shadow-xs">
            {showcaseItems.map((st) => {
              if (st.id !== activeTab) return null;
              return (
                <div key={st.id} className="grid md:grid-cols-12 gap-6 w-full items-center">
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <span className="text-xs sm:text-[11px] uppercase tracking-wider text-zinc-500 font-black">{st.label}</span>
                      <h4 className="text-xl sm:text-2xl font-black text-zinc-950 leading-tight mt-1">{st.liveTitle}</h4>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-zinc-605 font-medium leading-relaxed">
                      {st.liveHighlight}
                    </p>

                    {/* Highly Visual Specs Grid - Zero repetition of main paragraphs */}
                    <div className="border-t border-b border-zinc-100 py-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {st.specs.map((spec, index) => (
                        <div key={index} className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 font-mono">{spec.name}</span>
                          <span className="text-xs sm:text-sm font-black text-zinc-900 mt-0.5">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-1 items-center">
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-black font-mono">STATUS: GEPRÜFT (HACCP-KONFORM)</span>
                    </div>
                  </div>
                  
                  <div className="md:col-span-5 relative w-full aspect-[4/3] md:aspect-square rounded-xl overflow-hidden border border-zinc-205 bg-zinc-50 shadow-2xs">
                    <img 
                      src={st.image} 
                      alt={st.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent pointer-events-none" />
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
