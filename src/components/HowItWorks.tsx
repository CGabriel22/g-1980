
import React, { useState } from 'react';
import { Target, Users, LineChart } from 'lucide-react';
import StepContent from './how-it-works/StepContent';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Steps data for Ju - AI assistant
  const steps = [
    {
      id: 1,
      icon: <Target className="w-4 h-4" />,
      title: "Ju Atende Seus Clientes Pelo WhatsApp",
      description: "Nossa super-assistente atende seus clientes de forma humanizada e personalizada, seguindo exatamente o seu modelo e estratégia de atendimento.",
      highlightText: "Ju automatiza:",
      highlightDetails: "Atendimento 24/7, respostas personalizadas e follow-ups automáticos",
      gifUrl: "/lovable-uploads/50d7bc89-98fd-49a5-b67f-94230c5d3ca5.png"
    },
    {
      id: 2,
      icon: <Users className="w-4 h-4" />,
      title: "Ju Organiza Sua Agenda e Processos",
      description: "A Ju marca reuniões automaticamente no Google Agenda, resume casos complexos e mantém todos os processos organizados.",
      highlightText: "Ju gerencia:",
      highlightDetails: "Agendamentos, resumos de casos e organização processual",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Frevolutioncomedy-handshake-revolutioncomedy-icommitcombustion-kFHbqSdogIS0qtX6Pf&embed=true&screenshot=true&meta=false"
    },
    {
      id: 3,
      icon: <LineChart className="w-4 h-4" />,
      title: "Ju Potencializa Sua Produtividade",
      description: "Com a Ju, seu escritório aumenta a produtividade, automatiza tarefas repetitivas e permite que você foque no que faz de melhor: advogar.",
      highlightText: "Ju entrega:",
      highlightDetails: "Aumento de produtividade, redução de erros e foco estratégico",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fchart-jtECu4TAPnhbGv2iwx&embed=true&screenshot=true&meta=false"
    }
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <section className="relative py-4 bg-white" id="how-it-works">
      <div className="container-section py-4">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="section-tag">
            Transformação Digital para Escritórios
          </div>
          <h2 className="heading-lg text-jus-purple mb-4">
            Conheça <span className="gradient-text">Ju</span> - A Super-Assistente do Seu Escritório
          </h2>
          <p className="text-jus-purple/80 text-lg max-w-2xl mx-auto">
            Nossa inteligência artificial foi desenvolvida especificamente para escritórios de advocacia, automatizando processos e elevando a produtividade da sua equipe.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-gray-100 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row h-[600px]">
            {/* Steps Section - Now on the left */}
            <div className="lg:w-1/3 flex flex-col gap-1 p-4 bg-gray-50">
              {steps.map((step) => (
                <StepContent
                  key={step.id}
                  stepNumber={step.id}
                  title={step.title}
                  description={step.description}
                  highlightText={step.highlightText}
                  highlightDetails={step.highlightDetails}
                  icon={step.icon}
                  isActive={activeStep === step.id}
                  onClick={() => handleStepClick(step.id)}
                />
              ))}
            </div>
            
            {/* Image Display - Now covering the entire right section */}
            <div className="lg:w-2/3 relative h-full">
              {steps.map((step) => (
                <motion.div 
                  key={step.id}
                  className="absolute inset-0 h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeStep === step.id ? 1 : 0,
                    zIndex: activeStep === step.id ? 10 : 1
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src={step.gifUrl} 
                    alt={`Step ${step.id}: ${step.title}`} 
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
