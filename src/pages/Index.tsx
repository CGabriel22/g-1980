
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-jus-dark-purple overflow-hidden">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main className="pt-16">
        <Hero />
        <ProblemStatement />
        <HowItWorks />
        {/* <Testimonials /> */}
        
        <section className="py-16 px-6" id="cta">
          <div className="container mx-auto max-w-5xl">
            <div 
              className="rounded-2xl overflow-hidden relative bg-jus-dark-purple"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/lovable-uploads/eada8c8b-332c-4ac7-813d-42884f942368.png" 
                  alt="Escritório Advocacia" 
                  className="w-full h-full object-cover object-center opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-jus-dark-purple via-jus-dark-purple/90 to-jus-dark-purple/80"></div>
              </div>
              
              <div className="relative z-10 p-12 md:p-16 text-white">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="max-w-lg"
                >
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-jus-purple/20 text-white mb-6">
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium font-inter tracking-wide">Comece sua jornada digital hoje</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    Pronto para transformar seu 
                    <span className="text-[#FFC300] font-extrabold"> escritório </span> 
                    com
                    <span className="text-[#FFC300] font-extrabold"> Inteligência Artificial</span>?
                  </h2>
                  
                  <p className="text-lg text-gray-100 mb-8">
                    Junte-se a dezenas de escritórios que já elevaram sua produtividade com nossas soluções de IA.
                  </p>
                  
                  <div className="flex flex-col space-y-3 mb-8">
                    {[
                      "Automação de processos repetitivos",
                      "Atendimento 24/7 para seus clientes",
                      "IA personalizada para sua área de atuação"
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-[#FFC300] mr-2 flex-shrink-0" />
                        <span className="text-gray-100 text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    onClick={() => window.location.href = 'https://wa.me/5588988651157'}
                    className="button-primary flex items-center text-lg px-8 py-4 shadow-lg shadow-jus-purple/10 hover:shadow-xl hover:shadow-jus-purple/20 rounded-full group"
                  >
                    Começar Grátis – Sem Cartão de Crédito
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0"
            >
              <h3 className="text-2xl font-bold text-jus-purple">Jus Digital</h3>
              <p className="text-sm text-gray-600 mt-2">© {new Date().getFullYear()} Jus Digital. Todos os direitos reservados.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-8"
            >
              <a href="#" className="text-gray-600 hover:text-jus-purple transition-colors">Privacidade</a>
              <a href="#" className="text-gray-600 hover:text-jus-purple transition-colors">Termos</a>
              <a href="#" className="text-gray-600 hover:text-jus-purple transition-colors">Contato</a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
