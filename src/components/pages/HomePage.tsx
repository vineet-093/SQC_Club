// HPI 1.7-V
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, TrendingUp, Users, Award, ArrowRight, Terminal, Cpu, ChevronRight, Activity, Globe, Zap } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Canonical Data Sources ---
const FEATURES_DATA = [
  {
    icon: Code2,
    title: 'Algorithmic Trading',
    description: 'Develop and backtest trading strategies using Python and advanced statistical methods.',
    stat: '01'
  },
  {
    icon: TrendingUp,
    title: 'Data Analysis',
    description: 'Extract insights from financial data using machine learning and quantitative techniques.',
    stat: '02'
  },
  {
    icon: Users,
    title: 'Collaborative Projects',
    description: 'Work on real-world projects with fellow members and industry mentors.',
    stat: '03'
  },
  {
    icon: Award,
    title: 'Competitions',
    description: 'Participate in hackathons, trading competitions, and coding challenges.',
    stat: '04'
  }
];

const TECH_STACK = [
  "Python", "C++", "R", "TensorFlow", "Pandas", "NumPy", "PyTorch", "Solidity"
];

// --- Utility Components ---

const SectionDivider = () => (
  <div className="w-full h-px bg-secondary/20 overflow-hidden relative">
    <div className="absolute inset-0 bg-accentcyan/50 w-1/2 blur-3xl opacity-20" />
  </div>
);

const Marquee = ({ items, direction = "left" }: { items: string[], direction?: "left" | "right" }) => {
  return (
    <div className="relative flex overflow-hidden py-6 bg-primary border-y border-secondary/10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="text-4xl md:text-6xl font-heading font-black text-transparent stroke-text-secondary opacity-30 uppercase tracking-tighter">
              {item}
            </span>
            <Activity className="w-6 h-6 text-accentcyan mx-6 opacity-50" />
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />
    </div>
  );
};

// --- Main Page Component ---

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-primary text-primary-foreground selection:bg-accentcyan selection:text-primary overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accentcyan z-50 origin-left"
        style={{ scaleX }}
      />

      <Header />

      {/* HERO SECTION - Split Layout based on Inspiration */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden">
        {/* Left Panel - Content */}
        <div className="w-full lg:w-1/2 bg-primary flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 relative z-10 border-r border-secondary/10">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accentcyan/5 rounded-full blur-[100px]" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-accentcyan" />
              <span className="font-paragraph text-accentcyan tracking-[0.2em] text-sm uppercase font-semibold">
                Est. 2024
              </span>
            </div>

            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8 text-secondary">
              BUILDING<br />
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentcyan to-white">FUTURE</span>
            </h1>

            <p className="font-paragraph text-lg md:text-xl text-secondary/60 max-w-xl mb-12 leading-relaxed">
              Where quantitative analysis meets algorithmic innovation. We are the architects of the next generation of financial technology.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link 
                to="/contact"
                className="group relative px-8 py-4 bg-accentcyan text-primary font-heading font-bold text-lg tracking-wide overflow-hidden rounded-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  JOIN THE CLUB <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
              
              <Link 
                to="/about"
                className="group px-8 py-4 border border-secondary/20 text-secondary font-heading font-bold text-lg tracking-wide hover:bg-secondary/5 transition-colors rounded-sm"
              >
                EXPLORE
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Panel - Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden bg-secondary/5">
          <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-20 mix-blend-overlay" />
          
          <motion.div 
            className="w-full h-full"
            initial={{ scale: 1.1, filter: "grayscale(100%)" }}
            animate={{ scale: 1, filter: "grayscale(0%)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image 
              src="https://static.wixstatic.com/media/34a768_bbfadef1be91453993b14fdf09f28cc6~mv2.png?originWidth=1152&originHeight=576"
              alt="Abstract geometric structure representing quantitative data"
              className="w-full h-full object-cover"
              width={1200}
            />
          </motion.div>

          {/* Decorative Overlay Elements */}
          <div className="absolute bottom-12 left-12 z-30 hidden lg:block">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-accentcyan font-mono text-xs">
                <Activity className="w-4 h-4" />
                <span>SYSTEM_STATUS: ONLINE</span>
              </div>
              <div className="w-32 h-1 bg-secondary/20 overflow-hidden">
                <motion.div 
                  className="h-full bg-accentcyan"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={["QUANTITATIVE", "ALGORITHMIC", "FINANCE", "DATA SCIENCE", "MACHINE LEARNING"]} />

      {/* STICKY SCROLL SECTION - Who We Are */}
      <section className="relative w-full bg-primary py-32 px-4 md:px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            {/* Sticky Title */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="font-heading text-5xl md:text-7xl text-secondary mb-8">
                  WHO<br />WE ARE
                </h2>
                <div className="w-24 h-2 bg-accentcyan mb-8" />
                <p className="font-paragraph text-secondary/60 text-lg max-w-sm">
                  Super Quant Coders is a premier college club bridging the gap between theoretical mathematics and practical financial engineering.
                </p>
              </div>
            </div>

            {/* Scrolling Content */}
            <div className="lg:w-2/3 flex flex-col gap-24">
              {[
                {
                  title: "The Mission",
                  text: "To empower students with the skills needed to dominate in quantitative finance, algorithmic trading, and data science. We don't just study the market; we decode it.",
                  img: "https://static.wixstatic.com/media/34a768_5ba68bbdb48540aba444218615afa2fe~mv2.png?originWidth=768&originHeight=448"
                },
                {
                  title: "The Method",
                  text: "Through rigorous workshops, hackathons, and collaborative projects, we apply advanced statistical methods to real-world financial datasets. Theory meets execution.",
                  img: "https://static.wixstatic.com/media/34a768_ef4995290d68425fac756a75bb3bcdf9~mv2.png?originWidth=768&originHeight=448"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <div className="relative h-[400px] md:h-[500px] w-full mb-8 overflow-hidden rounded-sm border border-secondary/10">
                    <div className="absolute inset-0 bg-accentcyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                    <Image 
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      width={800}
                    />
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl text-secondary mb-4 flex items-center gap-4">
                    <span className="text-accentcyan font-mono text-xl">0{idx + 1}</span>
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-xl text-secondary/70 leading-relaxed max-w-2xl">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FEATURES GRID - What We Do */}
      <section className="relative w-full bg-primary py-32 px-4 md:px-8 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-[120rem] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl text-secondary mb-4">
                CORE <span className="text-accentcyan">MODULES</span>
              </h2>
              <p className="font-paragraph text-secondary/60 text-lg">
                Our curriculum covers the full spectrum of quantitative finance.
              </p>
            </div>
            <div className="hidden md:block">
              <Terminal className="w-12 h-12 text-secondary/20" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES_DATA.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-secondary/5 border border-secondary/10 p-8 hover:border-accentcyan/50 transition-colors duration-300 h-full flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-accentcyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-secondary/10 rounded-sm text-accentcyan group-hover:bg-accentcyan group-hover:text-primary transition-colors duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-secondary/30 text-xl font-bold">
                      {feature.stat}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-2xl text-secondary mb-4 group-hover:text-accentcyan transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-paragraph text-secondary/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-secondary/10 flex items-center text-sm font-mono text-secondary/40 group-hover:text-accentcyan transition-colors">
                  <span>EXPLORE_MODULE</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK MARQUEE */}
      <div className="py-12 bg-secondary/5 border-y border-secondary/10">
        <Marquee items={TECH_STACK} direction="right" />
      </div>

      {/* VISUAL BREATHER - Parallax */}
      <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://static.wixstatic.com/media/34a768_4daf9257783d4be6b2fa466cf3c798e6~mv2.png?originWidth=1920&originHeight=768"
            alt="Data visualization background"
            className="w-full h-full object-cover opacity-30"
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Cpu className="w-16 h-16 text-accentcyan mx-auto mb-8 animate-pulse" />
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-secondary mb-8 leading-tight">
              "WE DON'T PREDICT THE FUTURE.<br />
              WE <span className="text-accentcyan">ENGINEER</span> IT."
            </h2>
            <div className="w-24 h-1 bg-secondary/20 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative w-full bg-primary py-32 px-4 md:px-8 border-t border-secondary/10">
        <div className="max-w-[120rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-6xl md:text-8xl text-secondary mb-6">
              READY TO<br />
              <span className="text-accentcyan">LEVEL UP?</span>
            </h2>
            <p className="font-paragraph text-xl text-secondary/60 mb-12 max-w-lg">
              Join a community of passionate coders, analysts, and innovators. Access exclusive workshops, mentorship, and career opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-accentcyan text-primary font-heading font-bold text-xl rounded-sm hover:bg-white transition-colors duration-300"
              >
                APPLY NOW
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 border border-secondary/20 text-secondary font-heading font-bold text-xl rounded-sm hover:bg-secondary/10 transition-colors duration-300"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] w-full rounded-sm overflow-hidden border border-secondary/10 group">
            <div className="absolute inset-0 bg-accentcyan/10 z-10 mix-blend-overlay" />
            <Image 
              src="https://static.wixstatic.com/media/34a768_330f9ddd2aa3457aae4762f56213a0ad~mv2.png?originWidth=960&originHeight=576"
              alt="Team working on code"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              width={1000}
            />
            
            {/* Decorative UI Overlay */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6 border-t border-secondary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
              <div className="flex items-center gap-4">
                <Globe className="w-8 h-8 text-accentcyan" />
                <div>
                  <p className="font-heading text-secondary text-lg">GLOBAL NETWORK</p>
                  <p className="font-mono text-xs text-secondary/50">CONNECTING MINDS ACROSS CAMPUS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Custom Styles for specific effects */}
      <style>{`
        .stroke-text-secondary {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}