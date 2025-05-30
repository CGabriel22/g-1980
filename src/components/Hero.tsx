
import React, { useRef, useState, useEffect } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import PlatformDemo from './hero/PlatformDemo';
import StatsSection from './hero/StatsSection';

const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  
  // States for typing animation
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const phrases = [
    "cresce",
    "acelera",
    "no futuro"
  ];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentPhrase = phrases[currentTextIndex];
      
      if (isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(50); // Faster when deleting
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(150); // Normal speed when typing
      }
      
      // If we've fully typed the phrase
      if (!isDeleting && displayText === currentPhrase) {
        setIsDeleting(true);
        setTypingSpeed(1500); // Pause at the end of typing
      }
      
      // If we've deleted the phrase
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % phrases.length);
        setTypingSpeed(500); // Pause before typing next phrase
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, currentTextIndex, isDeleting]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-screen pt-20 pb-32 overflow-hidden bg-[#F9F6F3]">
      <AnimatedBackground />
      
      <div className="container-section relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-jus-purple/10 text-jus-purple mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium font-inter tracking-wide">Inteligência Artificial que integra, automatiza e transforma</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="font-inter font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight max-w-4xl mx-auto mb-6 text-jus-purple leading-[1.1]"
          >
            O seu <span className="text-[#FFC300] font-extrabold">escritório</span> <span className="text-[#422D6D] font-extrabold">{displayText}</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="font-inter text-xl text-jus-purple/80 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Soluções inteligentes que estão revolucionando escritórios de advocacia. Aumente sua produtividade, ganhe tempo e destaque-se em um mercado cada vez mais competitivo — comece agora e não fique para trás.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
          >
            <a href="#cta" className="button-primary flex items-center group font-inter font-medium">
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#how-it-works" className="button-outline font-inter">
              Como Funciona
            </a>
          </motion.div>
          
          {/* Modern Platform Showcase */}
          <motion.div 
            ref={demoRef}
            variants={itemVariants}
          >
            <PlatformDemo />
          </motion.div>
          
          {/* Stats Section - Enhanced with better styling and icons */}
          <StatsSection statsRef={statsRef} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
