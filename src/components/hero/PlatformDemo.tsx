
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MessageCircle, Users, BarChart3, Settings, Megaphone, ChevronDown, Phone, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const PlatformDemo = () => {
  const [selectedFilter, setSelectedFilter] = useState('Aguardando advogado');
  
  const conversations = [
    {
      id: 1,
      title: "Solicitação de informações sobre aposentadoria",
      lead: "Ana Beatriz",
      whatsapp: "+55 87 8171 3643",
      status: "Aguardando advogado",
      lastUpdate: "10/05/2025 15:51",
      statusColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Consulta sobre processo de divórcio",
      lead: "Carlos Eduardo", 
      whatsapp: "+55 87 8171 3644",
      status: "Em Atendimento",
      lastUpdate: "10/05/2025 15:51",
      statusColor: "text-green-600"
    },
    {
      id: 3,
      title: "Dúvida sobre documentação para abertura de...",
      lead: "Mariana Souza",
      whatsapp: "+55 87 8171 3645", 
      status: "Em Atendimento",
      lastUpdate: "10/05/2025 15:51",
      statusColor: "text-green-600"
    },
    {
      id: 4,
      title: "Pedido de orientação sobre testamento",
      lead: "Felipe Gomes",
      whatsapp: "+55 87 8171 3646",
      status: "Desligado",
      lastUpdate: "10/05/2025 15:51", 
      statusColor: "text-gray-500"
    },
    {
      id: 5,
      title: "Solicitação de informações sobre herança",
      lead: "Juliana Costa",
      whatsapp: "+55 87 8171 3647",
      status: "Em Atendimento",
      lastUpdate: "10/05/2025 15:51",
      statusColor: "text-green-600"
    },
    {
      id: 6,
      title: "Consultoria sobre contrato de trabalho",
      lead: "Lucas Pereira",
      whatsapp: "+55 87 8171 3648",
      status: "Em Atendimento", 
      lastUpdate: "10/05/2025 15:51",
      statusColor: "text-green-600"
    },
    {
      id: 7,
      title: "Dúvidas sobre direitos trabalhistas",
      lead: "Beatriz Lima",
      whatsapp: "+55 87 8171 3649",
      status: "Em Atendimento",
      lastUpdate: "10/05/2025 15:51",
      statusColor: "text-green-600"
    },
    {
      id: 8,
      title: "Informações sobre revisão de pensão alimen...",
      lead: "Thiago Rocha", 
      whatsapp: "+55 87 8171 3650",
      status: "Em Atendimento",
      lastUpdate: "10/05/2025 15:51",
      statusColor: "text-green-600"
    },
    {
      id: 9,
      title: "Consulta sobre contrato de locação",
      lead: "Renata Silva",
      whatsapp: "+55 87 8171 3651",
      status: "Em Atendimento",
      lastUpdate: "10/05/2025 15:51",
      statusColor: "text-green-600"
    },
    {
      id: 10,
      title: "Pedido de esclarecimento sobre acordo de p...",
      lead: "Gabriel Oliveira",
      whatsapp: "+55 87 8171 3652",
      status: "Em Atendimento", 
      lastUpdate: "10/05/2025 15:51",
      statusColor: "text-green-600"
    },
    {
      id: 11,
      title: "Orientações sobre regularização de imóvel",
      lead: "Júlio César",
      whatsapp: "+55 87 8171 3646",
      status: "Em Atendimento",
      lastUpdate: "10/05/2025 15:51",
      statusColor: "text-green-600"
    }
  ];

  const filters = [
    { label: 'Aguardando advogado', active: true },
    { label: 'Novas conversas', active: false },
    { label: 'Reuniões agendadas', active: false }
  ];

  const navigationItems = [
    { icon: MessageCircle, label: 'Conversas', active: true },
    { icon: Users, label: 'Leads', active: false },
    { icon: Megaphone, label: 'Campanhas', active: false },
    { icon: BarChart3, label: 'Relatórios', active: false },
    { icon: Settings, label: 'Configurações', active: false }
  ];

  return (
    <div className="relative max-w-6xl mx-auto mb-20">
      {/* Gradient background */}
      <div className="absolute inset-0 -m-10 bg-gradient-to-br from-[#422D6D]/20 via-[#422D6D]/20 to-[#422D6D]/20 rounded-3xl blur-3xl opacity-40"></div>
      
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm bg-white flex h-[600px]">
        
        {/* Sidebar Navigation */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          {/* Office Info */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-[#422D6D] flex items-center justify-center">
                <span className="text-white font-bold text-sm">SG</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Silva Gomes</div>
                <div className="text-xs text-gray-500">Advogados associados</div>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-3 py-4">
            <div className="space-y-1">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                    item.active 
                      ? 'bg-green-100 text-green-700' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/64695da1-c7ef-42c4-84fc-f701b5d5e6ed.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900 text-sm">Dra. Mariana Gomes</div>
                <div className="text-xs text-gray-500">mariana@silvagomes.com</div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-white">
          
          {/* Search Bar */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Procurando alguma conversa?"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#422D6D] focus:border-transparent"
                />
              </div>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFilter(filter.label)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    filter.active || selectedFilter === filter.label
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                  {(filter.active || selectedFilter === filter.label) && (
                    <span className="ml-2 text-xs">×</span>
                  )}
                </button>
              ))}
              <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                +
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  <TableHead className="w-8">
                    <input type="checkbox" className="rounded" />
                  </TableHead>
                  <TableHead className="text-gray-500 font-medium">
                    <div className="flex items-center space-x-1">
                      <span>Título</span>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead className="text-gray-500 font-medium">
                    <div className="flex items-center space-x-1">
                      <span>Lead</span>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead className="text-gray-500 font-medium">
                    <div className="flex items-center space-x-1">
                      <span>Whatsapp</span>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead className="text-gray-500 font-medium">
                    <div className="flex items-center space-x-1">
                      <span>Status</span>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead className="text-gray-500 font-medium">
                    <div className="flex items-center space-x-1">
                      <span>Horário de atualização</span>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead className="text-gray-500 font-medium">
                    <div className="flex items-center space-x-1">
                      <span>Horário</span>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {conversations.map((conversation) => (
                  <TableRow key={conversation.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <TableCell>
                      <input type="checkbox" className="rounded" />
                    </TableCell>
                    <TableCell className="font-medium text-gray-900 text-sm">
                      {conversation.title}
                    </TableCell>
                    <TableCell className="text-gray-900 text-sm">
                      {conversation.lead}
                    </TableCell>
                    <TableCell className="text-gray-600 text-sm">
                      {conversation.whatsapp}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <div className={`w-2 h-2 rounded-full ${
                          conversation.status === 'Aguardando advogado' ? 'bg-blue-500' :
                          conversation.status === 'Em Atendimento' ? 'bg-green-500' :
                          'bg-gray-400'
                        }`}></div>
                        <span className={`text-sm ${conversation.statusColor}`}>
                          {conversation.status}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600 text-sm">
                      {conversation.lastUpdate}
                    </TableCell>
                    <TableCell className="text-gray-600 text-sm">
                      {conversation.lastUpdate}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>0 de 100 linha(s) selecionadas.</span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span>Linhas por página</span>
                  <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>11</option>
                    <option>25</option>
                    <option>50</option>
                  </select>
                </div>
                <span>Página 1 de 10</span>
                <div className="flex items-center space-x-1">
                  <button className="p-1 rounded hover:bg-gray-200">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-200">
                    <ChevronRight className="w-4 h-4" />
                  </button>
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
