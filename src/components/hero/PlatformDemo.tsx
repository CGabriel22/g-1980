
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Phone, MessageCircle, User, ChevronDown, MoreHorizontal, Home, Calendar, Settings, BarChart3, Users, FileText } from 'lucide-react';

const PlatformDemo = () => {
  const [selectedLead, setSelectedLead] = useState(0);
  
  const leads = [
    {
      id: 1,
      title: "Solicitação de informações sobre aposentadoria",
      client: "Ana Beatriz",
      phone: "+55 87 8171 3643",
      status: "Aguardando advogado",
      time: "10/05/2025 15:51",
      statusColor: "bg-blue-100 text-blue-700"
    },
    {
      id: 2,
      title: "Consulta sobre processo de divórcio",
      client: "Carlos Eduardo",
      phone: "+55 87 8171 3644",
      status: "Em Atendimento",
      time: "10/05/2025 15:51",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: 3,
      title: "Dúvida sobre documentação para abertura de...",
      client: "Mariana Souza",
      phone: "+55 87 8171 3645",
      status: "Em Atendimento",
      time: "10/05/2025 15:51",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: 4,
      title: "Pedido de orientação sobre testamento",
      client: "Felipe Gomes",
      phone: "+55 87 8171 3646",
      status: "Desligado",
      time: "10/05/2025 15:51",
      statusColor: "bg-gray-100 text-gray-700"
    },
    {
      id: 5,
      title: "Solicitação de informações sobre herança",
      client: "Juliana Costa",
      phone: "+55 87 8171 3647",
      status: "Em Atendimento",
      time: "10/05/2025 15:51",
      statusColor: "bg-green-100 text-green-700"
    }
  ];

  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: false },
    { icon: MessageCircle, label: "Conversas", active: true },
    { icon: Users, label: "Leads", active: false },
    { icon: Calendar, label: "Campanhas", active: false },
    { icon: BarChart3, label: "Relatórios", active: false },
    { icon: FileText, label: "Documentos", active: false },
    { icon: Settings, label: "Configurações", active: false },
  ];

  return (
    <div className="relative max-w-6xl mx-auto mb-20">
      {/* Gradient background */}
      <div className="absolute inset-0 -m-10 bg-gradient-to-br from-[#422D6D]/20 via-[#422D6D]/20 to-[#422D6D]/20 rounded-3xl blur-3xl opacity-40"></div>
      
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm bg-white flex h-[500px]">
        
        {/* Sidebar Navigation */}
        <div className="w-64 bg-[#422D6D] text-white flex flex-col">
          {/* Logo/Brand */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-[#422D6D] font-bold text-sm">JU</span>
              </div>
              <span className="font-semibold text-white">Jus Digital</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-2">
              {sidebarItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                    item.active 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-white">Dra. Mariana Gomes</div>
                <div className="text-xs text-white/70">Silva Gomes Advogados</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Page Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Conversas</h1>
                <p className="text-sm text-gray-500">Gerencie suas conversas com clientes</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm text-gray-600">Silva Gomes</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex">
            {/* Filters Sidebar */}
            <div className="w-56 bg-gray-50 border-r border-gray-200 p-4">
              <div className="space-y-3">
                <div className="flex items-center p-2 bg-green-100 rounded-lg text-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Aguardando advogado</span>
                  <ChevronDown className="w-4 h-4 ml-auto" />
                </div>
                
                <div className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <span className="text-sm">Novas conversas</span>
                </div>
                
                <div className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <span className="text-sm">Reuniões agendadas</span>
                </div>
                
                <div className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <span className="text-sm">Em andamento</span>
                </div>
              </div>
            </div>

            {/* Main Table Area */}
            <div className="flex-1 p-6">
              {/* Search and Filters */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Procurando alguma conversa?"
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-80 text-sm"
                    />
                  </div>
                  <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtros
                  </button>
                </div>
              </div>

              {/* Table Header */}
              <div className="bg-gray-50 rounded-t-lg border border-gray-200">
                <div className="grid grid-cols-12 gap-4 px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="col-span-1">
                    <input type="checkbox" className="rounded" />
                  </div>
                  <div className="col-span-4">Título</div>
                  <div className="col-span-2">Lead</div>
                  <div className="col-span-2">WhatsApp</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-1">Horário</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="border-l border-r border-gray-200">
                {leads.map((lead, index) => (
                  <div 
                    key={lead.id}
                    className={`grid grid-cols-12 gap-4 px-4 py-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedLead === index ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => setSelectedLead(index)}
                  >
                    <div className="col-span-1">
                      <input type="checkbox" className="rounded" />
                    </div>
                    <div className="col-span-4">
                      <span className="text-sm text-gray-900">{lead.title}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-sm text-gray-900">{lead.client}</span>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center">
                        <Phone className="w-3 h-3 mr-1 text-gray-400" />
                        <span className="text-sm text-gray-600">{lead.phone}</span>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${lead.statusColor}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-current mr-1"></div>
                        {lead.status}
                      </span>
                    </div>
                    <div className="col-span-1">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1 text-gray-400" />
                        <span className="text-xs text-gray-500">{lead.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Table Footer */}
              <div className="bg-gray-50 rounded-b-lg border-l border-r border-b border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">0 de 100 linha(s) selecionadas.</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">Linhas por página</span>
                    <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                      <option>11</option>
                      <option>25</option>
                      <option>50</option>
                    </select>
                    <span className="text-sm text-gray-500">Página 1 de 10</span>
                    <div className="flex space-x-1">
                      <button className="p-1 rounded hover:bg-gray-200">
                        <ChevronDown className="w-4 h-4 rotate-90" />
                      </button>
                      <button className="p-1 rounded hover:bg-gray-200">
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant Notification */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -right-8 top-1/3 z-10"
        >
          <div className="animate-float bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 max-w-xs">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#422D6D] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">JU</span>
              </div>
              <div>
                <div className="text-gray-800 text-sm font-medium">Ju - Assistente IA</div>
                <div className="text-gray-600 text-xs mt-1">
                  "Identifiquei 3 novos leads qualificados para aposentadoria. Devo agendar consultas?"
                </div>
                <div className="flex space-x-2 mt-2">
                  <button className="text-xs bg-[#422D6D] text-white px-2 py-1 rounded">Sim</button>
                  <button className="text-xs border border-gray-300 px-2 py-1 rounded">Ver mais</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlatformDemo;
