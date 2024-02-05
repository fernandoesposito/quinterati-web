import { ReactNode } from "react";

import lgpd_emx from "../../../public/lgpd_emx.svg";

import cyber_hack from "../../../public/cyber_hack.svg";
import cyber_ranking from "../../../public/cyber_ranking.svg";

import infra_cables from "../../../public/infra_cables.svg"
import infra_datacenter from "../../../public/infra_datacenter.svg"
import infra_datarack from "../../../public/infra_datarack.svg"
import infra_group from "../../../public/infra_group.svg"
import infra_monitoring from "../../../public/infra_monitoring.svg"



interface CardProps {
  type: string;
  header: string;
  content: string;
  image: string;
  id: number;
  expandedText: ReactNode
}

export const topics: string[] = [
  "LGPD",
  "Infraestrura",
  "Cibersegurança"
]

const lgpdCard: CardProps[] = [
  {
    id: 0,
    type: "LGPD",
    header: "Proteja sua Organização e evite riscos legais e financeiros!",
    content: "O GestãoX LGPD BS é uma framework completa criada para auxiliar as organizações na conformidade com a Lei Geral de Proteção de Dados. A solução oferece recursos e funcionalidades que contempla desde o projeto de adequaçã... ",
    image: lgpd_emx,
    expandedText: 
    <p className="font-roboto leading-6 text-support">
      O GestãoX LGPD BS é uma framework completa criada para auxiliar as organizações na conformidade com a Lei Geral de Proteção de Dados.<br/><br/>
      A solução oferece recursos e funcionalidades que contempla desde o projeto de adequação passo a passo até auditorias para diagnóstico de requisitos LGPD e conformidade, além de entregáveis automatizados exigidos pela lei.<br/><br/>
      A plataforma garante ao seu negócio um alto nível de proteção de dados de forma eficiente e segura.
    <br/>
    <br/>
    <br/>
    <ul className="list-disc px-6">
      <li>Gestão de todo o projeto por fases</li>
      <li>Auditoria de Maturidade LGPD</li>
      <li>Portal do Titular</li>
      <li>Mapeamentos</li>
      <li>Gestão de Riscos</li>
      <li>Planos de Ação</li>
      <li>Gestão de Consentimento</li>
      <li>Gestão de Cookies</li>
      <li>Gestão de Incidentes e Notificações</li>
      <li>Gestão de Contratos RIPD</li>
    </ul>
    </p>
  }
]

const infraCard: CardProps[] = [
  {
    id: 0,
    type: "Infraestrutura",
    header: "Solução modular para datacenter",
    content: "A solução é testada para atender as mais rígidas normas europeias e brasileiras, com certificação emitida por entidade independente e acreditada pelo Inmetro. Todo processo de fabricação, implementação e manutenção são auditados e controlados pela certificadora A montagem da infraestrutura é feita usando painéis modulares que se encaixam com... ",
    image: infra_datacenter,
    expandedText: <p className="font-roboto leading-6 text-support">
      A solução é testada para atender as mais rígidas normas europeias e brasileiras, com certificação emitida por entidade independente e acreditada pelo Inmetro. Todo processo de fabricação, implementação e manutenção são auditados e controlados pela certificadora.<br/><br/>
      A montagem da infraestrutura é feita usando painéis modulares que se encaixam como blocos de montar, permitindo rápida expansão, desmontagem ou realocação e transporte.<br/><br/>
      Os projetos são realizados de acordo com a necessidade do cliente e o espaço disponível. Estamos prontos para atender aos mais variados propósitos relevantes para a sua operação.
    </p>
  },
  {
    id: 1,
    type: "Infraestrutura",
    header: "Um centro de dados completo, em gabinete independente, pronto para aplicações que exigem baixa latência para computação de borda",
    content: "Solução única e autônoma para implementação de equipamentos de TI que precisam estar próximos da fonte geradora dos dados... ",
    image: infra_datarack,
    expandedText: <p className="font-roboto leading-6 text-support">
      Solução única e autônoma para implementação de equipamentos de TI que precisam estar próximos da fonte geradora dos dados.<br/><br/>
      Projetos desenvolvidos em parceria com o cliente para garantir alto nível de customização.<br/><br/>
      Sempre acompanhado por profissionais certificados para montar, operar e monitorar a solução em tempo real.<br/><br/>

      Em TIC, o Rack Edge conta com comunicação (switches de alta performance), armazenamento (storage híbrido com discos mecânicos de alta performance/resiliência) e processamento por meio de servidores/soluções hiperconvergentes. Sendo ideal também para empresas de varejo, educação, telecomunicações, entretenimento e qualquer outra que precise de agilidade, padronização e eficiência no processamento de dados.<br/><br/>
      A infraestrutura tem grau de proteção IP54 no conjunto, racks com montagem sem ferramentas, parte elétrica com um ponto único de entrada e UPS integrado, além de climatização com funcionamento híbrido (compressor ou free cooling). Menos esforço e muito mais eficiência. 
    </p>
  },
  { 
    id: 2,
    type: "Infraestrutura",
    header: "Comando e controle para ambientes críticos",
    content: "Concentrar dados e informações produzidas por diversos atores em um único centro operacional é fundamental para a geração de conhecimento que dará mais assertividade na tomada de decisão dos gestores – seja a respeito de políticas públicas, na administração de crises ou na gestão empresarial. Este recurso, denominado Centro de Comando e Controle (C2), é peça-chave para uma ge... ",
    image: infra_group,
    expandedText: <p className="font-roboto leading-6 text-support">
      Concentrar dados e informações produzidas por diversos atores em um único centro operacional é fundamental para a geração de conhecimento que dará mais assertividade na tomada de decisão dos gestores – seja a respeito de políticas públicas, na administração de crises ou na gestão empresarial.<br/><br/>
      Este recurso, denominado Centro de Comando e Controle (C2), é peça-chave para uma gestão eficiente de ambientes de missão crítica, diretamente ligados a atividades econômicas, serviços municipais, administração de crises ou até mesmo a segurança de um país. Ele acelera o tempo de resposta em momentos de crise e promove um conhecimento situacional que permite antecipar ou mitigar o impacto de eventos negativos, tanto na vida das pessoas, quanto na performance das empresas.​
    </p>
  },
  {
    id: 3,
    type: "Infraestrutura",
    header: "Soluções para nuvem privada, backup e sustentação de aplicações",
    content: "Solução para modernização de datacenter tendo como cerne a implantação de sistema Hyper-Converged Infrastructure (HCI) que virtualiza o processamento, armazenamento e comunicação de rede do datacenter elevando a velocidade de processamento, segurança de dados, implantações ágeis e redução de custos.​.. ",
    image: infra_cables,
    expandedText: <p className="font-roboto leading-6 text-support">
      Solução para modernização de datacenter tendo como cerne a implantação de sistema Hyper-Converged Infrastructure (HCI) que virtualiza o processamento, armazenamento e comunicação de rede do datacenter elevando a velocidade de processamento, segurança de dados, implantações ágeis e redução de custos.<br/><br/>
      Para garantir a disponibilidade das aplicações, uma solução robusta de balanceamento de link e aplicações garante manutenção das sessões nas aplicações, criptografia de link e detectando e prevenindo ataques DDOS.
    </p>
  },
  {
    id: 4,
    type: "Infraestrutura",
    header: "Monitoramento, gestão e serviços continuados para ambientes de Missão Crítica​",
    content: "Um Centro de Excelência disponível 24x7x365 e que reúne toda a experiência de um time de especialistas para o monitoramento remoto dos data centers em tempo real. Sob processos rigorosos em todos os serviços prestados, os resultados são intervençõe... ",
    image: infra_monitoring,
    expandedText: <p className="font-roboto leading-6 text-support">
      Um Centro de Excelência disponível 24x7x365 e que reúne toda a experiência de um time de especialistas para o monitoramento remoto dos data centers em tempo real.<br/><br/>
      Sob processos rigorosos em todos os serviços prestados, os resultados são intervenções primorosas e com alto nível de exigência de qualidade no ambiente de TI.<br/><br/>
      Todas as ações são registradas em uma Plataforma de Gestão Integrada (PGI) permitindo gerencia de toda a infraestrutura de TI em um único dashboard.
    </p>
  },
]

const cyberCard: CardProps[] = [
  {
    id: 0,
    type: "Cibersegurança",
    header: "Soluções para prevenção contra ataques e restauração automatizada",
    content: "Solução de segurança para serviços e usuários finais baseada em inteligência artificial e machine learning, atuando desde a detecção e prevenção de ataques de negação de serviço até detecção e resposta nas estações de trabalho, podendo reverter um sistema criptografado por ransomware de forma automatizada... ",
    image: cyber_hack,
    expandedText: <p className="font-roboto leading-6 text-support">
      Solução de segurança para serviços e usuários finais baseada em inteligência artificial e machine learning, atuando desde a detecção e prevenção de ataques de negação de serviço até detecção e resposta nas estações de trabalho, podendo reverter um sistema criptografado por ransomware de forma automatizada.
    </p>
  },
  {
    id: 1,
    type: "Cibersegurança",
    header: "Solução de Rating de segurança com identificação, gestão e classificação de vulnerabilidades de app e infraestrutura",
    content: "Pontuação de risco cibernético através da descoberta, gestão e classificação de vulnerabilidades nos ambientes de tecnologia. Varreduras periódicas em aplicações e ... ",
    image: cyber_ranking,
    expandedText: <p className="font-roboto leading-6 text-support">
      Pontuação de risco cibernético através da descoberta, gestão e classificação de vulnerabilidades nos ambientes de tecnologia.<br/><br/>
      Varreduras periódicas em aplicações e elementos de infraestrutura buscando vulnerabilidades conhecidas. Apresenta uma série de dashboards para monitorar o risco e a evolução.​
      Execução de testes de penetração (PenTest).<br/><br/>
      Tecnologia para classificações de segurança, insights baseados em dados, automatização da gestão com questionários de segurança, inteligência de superfície de ataque, detecção automática de fornecedores, quantificação cibernética de Risco.<br/><br/>
      Gestão de eventos centralizados em uma única plataforma, capaz de correlacionar eventos de dispositivos diferentes identificando origem/causa raiz.​
    </p>
  }
]

export const cardsDescription: CardProps[][] = [
  lgpdCard,
  infraCard,
  cyberCard,
]