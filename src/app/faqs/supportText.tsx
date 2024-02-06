import { ReactNode } from "react";

export const supportText = {
  
}



interface topicsProps {
  [key: string]: {
    question: string
    answer: ReactNode,
  }[];
}

export const topics: topicsProps = {
  LGPD: [
    {
      question: "Do que trata a Lei Geral de Proteção de Dados pessoais - LGPD?",
      answer: <p>A Lei Geral de Proteção de Dados Pessoais – LGPD (Lei n. 13.709, de 2018) dispõe sobre o tratamento de dados pessoais das pessoas naturais, definindo as hipóteses em que tais dados podem legitimamente ser utilizados por terceiros e estabelecendo mecanismos para proteger os titulares dos dados contra usos inadequados. A Lei é aplicável ao tratamento de dados realizado por pessoas naturais ou por pessoas jurídicas de direito público ou privado, e tem, conforme o art 1º, o objetivo de proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural.</p>
    },
    {
      question: "Quais dados são protegidos pela LGPD?",
      answer: <p>A LGPD garante proteção a todos os dados cujos titulares são pessoas naturais, estejam eles em formato físico ou digital. Assim, a LGPD não alcança os dados titularizados por pessoas jurídicas – os quais não são considerados dados pessoais para os efeitos da Lei.</p>
    },
    {
      question: "O que as empresas e o setor público precisam fazer para se adequar?",
      answer: <p>A LGPD estabelece uma série de providências que devem ser adotadas pelos agentes de tratamento, que incluem o mapeamento e o registro das operações de tratamento de dados pessoais que realizarem, incluindo a identificação das respectivas bases legais e finalidades; a adoção de medidas técnicas e administrativas e de processos e políticas internas que assegurem o cumprimento das normas de proteção de dados pessoais; e o estabelecimento de um canal de contato com os titulares de dados pessoais. A Lei determina, no art. 41, que os controladores de dados devem indicar um Encarregado para atuar como canal de comunicação entre o controlador, os titulares dos dados e a ANPD. Em determinadas circunstâncias, conforme a natureza e o porte da entidade ou o volume de operações de tratamento de dados, a ANPD poderá estabelecer hipóteses de dispensa da necessidade de sua indicação (art. 41, § 3º).</p>
    },
    {
      question: "Como a Quintera pode ajudar no processo de adequação à LGPD?",
      answer: <p>A Quintera oferta um programa de adequação completo, Programa de Conformidade e Governança Continuada para LGPD. Esse programa tem como base o sistema GestãoX – LGPD Business Suite, que foi desenvolvido por profissionais Certificados pela EXIN: DPO e ISO e é Homologado pela APDADOS. O licenciamento do sistema garante aos nossos clientes uma operação assistida multidisciplinar, para juntos percorremos toda a trilha de conformidade exigida pela Lei</p>
    },
    {
      question: "Já iniciamos nosso processo de adequação à LGPD com recursos próprios, temos que voltar à estaca zero?",
      answer: <p>Todo e qualquer avanço no processo de adequação e conformidade com a LGPD é aproveitado. O sistema foi desenvolvido com viés colaborativo, portanto, está apto a receber carga de diversas origens de dados. Trazemos para esse momento, inclusive, uma revisão junto a equipe multidisciplinar para validar se o material qualifica a conformidade ou precisa de algum ajuste e, após a inserção no sistema já é possível identificar nos indicadores a informação de avanço no projeto</p>      
    }

  ],
  Cibersegurança: [
    {
      question: "O que são ataques cibernéticos?",
      answer: "Ataques cibernéticos são atividades ilegais realizadas em meios digitais. Esses crimes têm intenções variadas e atingem empresas e pessoas físicas. Os objetivos, normalmente, são conseguir dinheiro de maneira ilícita, prejudicar reputações, violar privacidades, fazer chantagens e extorsões."
    },
    {
      question: "Quais são os tipos mais comuns de ataques cibernéticos?",
      answer: <div>As soluções XDR, em contraste com EPP tradicionais, oferecem:<br/>
      <ul className="list-disc pl-4">
        <li>Melhoria na detecção e resposta aos incidentes de segurança do dia-a-dia.</li>
        <li>Aumento da produtividade geral do pessoal de segurança.</li>
        <li>Redução do custo total de propriedade (TCO) da pilha de segurança.</li>
        <li>Detecção de ameaças avançadas no ambiente cibernético.</li>
        <li>Correção de falhas antes que o erro aconteça.</li>
        <li>Monitoramento contínuo de endpoints, quer estejam online ou offline.</li>
        <li>Armazenamento de eventos e incidentes de malwares no endpoint.</li>
        <li>Capacidade de resposta em tempo real.</li>
        <li>Unificação das informações dos endpoints.</li>
      </ul>
      </div>
    }
  ],
  Infraestrutura: [
    {
      question: "Porque devo considerar um datacenter próprio com tanta oferta de nuvem?",
      answer: <p>A decisão de investir ou não em um datacenter próprio está totalmente relacionada a necessidade e resultado esperado. Questões como segurança nacional e prevenção de vazamento de dados, restrição de acesso físico, resposta à legislações específicas, disponibilidade, latência, performance ou até mesmo um alto volume de dados trafegados formatam a necessidade de um ambiente privado.</p>
    }, 
    {
      question: "Há uma série de opções no mercado, o que devo considerar?",
      answer: <p>A LGPD garante proteção a todos os dados cujos titulares são pessoas naturais, estejam eles em formato físico ou digital. Assim, a LGPD não alcança os dados titularizados por pessoas jurídicas – os quais não são considerados dados pessoais para os efeitos da Lei.</p>
    },
    {
      question: "O que as empresas e o setor público precisam fazer para se adequar?",
      answer: <div>Como todo mercado, o segmento de construção de datacenter expandiu bastante, com isso produtos dos mais diversos foram disponibilizados. Ao longo de todo o tempo, quem de fato se sustentou no mercado, são fabricantes que trabalham com produtos renomados e diferenciados. Nesse sentido podemos resumir o mercado hoje com as seguintes opções: 
        <ul className="list-disc pl-4">
        <li>Para até 03 Racks pode-se adotar o enclausuramento dentro do próprio rack, com climatização, no-break, detecção precoce e combate a incêndio e proteção de acesso integrados</li> 
        <li>Projetos acima de 03 racks pode-se adotar o enclausuramento modular, simulando um container marítimo, com climatização de precisão, no-break, detecção precoce e combate a incêndio, proteção de acesso.</li>
        <li>Projetos acima de 04 racks pode-se adotar o conceito de sala segura ou sala cofre. O que diverge entre esses dois modelos é a capacidade da Sala Cofre em obter certificação que inclui auditoria e avaliação periódica do processo produtivo, desde o projeto, fabricação, implementação até manutenção da solução por uma entidade independente (acreditada pelo Inmetro).</li>
        </ul>
        </div>
    }
  ],
}









