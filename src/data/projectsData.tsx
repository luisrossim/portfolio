import parcerias1 from "../assets/parcerias-login.png";
import parcerias2 from "../assets/parcerias-propostas.png";
import parcerias3 from "../assets/parcerias-doc.png";
import parcerias4 from "../assets/parcerias-estatisticas.png";
import parcerias5 from "../assets/parcerias-graph.png";
import quiz1 from "../assets/quiz-login.png";
import quiz2 from "../assets/quiz-acesso.png";
import quiz3 from "../assets/quiz-adm.png";
import quiz4 from "../assets/quiz-large.png";
import quiz5 from "../assets/quiz-medium.png";
import quiz6 from "../assets/quiz-small.png";
import quiz7 from "../assets/quiz-tinymce.png";
import zun1 from "../assets/zun-1.png";
import zun2 from "../assets/zun-2.png";
import zun3 from "../assets/zun-3.png";
import zun4 from "../assets/zun-4.png";
import zun5 from "../assets/zun-5.png";
import zun6 from "../assets/zun-6.png";
import ele1 from "../assets/ele1.png";
import ele2 from "../assets/ele2.png";
import ele3 from "../assets/ele3.png";
import eletron1 from "../assets/eletron1.png";
import eletron2 from "../assets/eletron2.png";
import eletron3 from "../assets/eletron3.png";
import eletron4 from "../assets/eletron4.png";
import phpIcon from "../assets/icon-php.svg"
import ciIcon from "../assets/icon-ci.svg"
import angularIcon from "../assets/icon-angular.png"
import springIcon from "../assets/icon-spring.svg"
import javaIcon from "../assets/icon-java.svg"
import jsIcon from "../assets/icon-js.png"
import mysqlIcon from "../assets/icon-mysql.png"
import postgreIcon from "../assets/icon-postgre.png"

export const projectsData = [
    {
      id: 1,
      title: "Eletrônica V2 (Angular 19 + Java Spring)",
      repositorio: "https://github.com/luisrossim/eletron",
      deploy: null,
      year: "2024 - 2025",
      description: "Sistema de gestão de uma eletrônica.",
      features: [
          { name: "Login (ngx-cookies, JWT)" },
          { name: "User Roles" },
          { name: "Guardas de rota" },
          { name: "HTTP Interceptor" },
          { name: "State Pattern" },
          { name: "API's (endpoints) públicas e privadas" },
          { name: "Exception Handler" },
          { name: "Swagger" },
          { name: "Logs" },
          { name: "Leaflet Map" },
          { name: "GSAP" },
          { name: "CRUD de eletronicos" },
          { name: "CRUD de serviço" },
          { name: "CRUD de vendas" },
      ],
      technologies: ["Angular 19 (TypeScript)", "Spring (Java)", "PostgreSQL", "PrimeNG", "TailwindCSS"],
      images: [eletron1, eletron2, eletron3, eletron4],
      techIcons: [angularIcon, springIcon, postgreIcon]
    },
    {
      id: 2,
      title: "Sistema de QUIZ (CodeIgniter)",
      repositorio: "https://github.com/luisrossim/quiz",
      deploy: null,
      year: "2024",
      description: `Um sistema de gestão para jogos QUIZ, sendo possível cadastrar eventos, administradores, equipes e questões. O administrador realiza login no sistema e as equipes entram utilizando a funcionalidade de cookies sem necessidade de senha. O administrador é capaz de acompanhar a dinâmica, liberar questões, exibir resultados (pontuação e tempo de resposta de cada equipe) em tempo real. As equipes entram no sistema somente para responder as questões. As questões possuem um tempo limite para serem respondidas e uma pontuação, o sistema atribui automaticamente a pontuação da equipe de acordo com acerto, erro ou pela condição do tempo de envio.`,
      features: [
          { name: "Arquitetura MVC" },
          { name: "Login, Recuperar senha (CodeIgniter Session)" },
          { name: "CRUD de eventos, usuários, equipes, questões" },
          { name: "Logs" },
          { name: "Ordernar questões (Drag-and-Drop)" },
          { name: "TinyMCE (Formatador de texto inteligente)" },
          { name: "Página de relatório de questões" },
          { name: "Tempo regressivo" },
          { name: "Recebimento e exibição das respostas das equipes em tempo real" },
          { name: "Envio de e-mail" },
          { name: "Layout padronizado e responsivo" },
      ],
      technologies: ["CodeIgniter (PHP)", "JavaScript", "MySQL", "Bootstrap", "JQuery"],
      images: [quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7],
      techIcons: [ciIcon, phpIcon, jsIcon, mysqlIcon]
    },
    {
      id: 3,
      title: "Sistema Parcerias (Angular 15 + Java Spring)",
      repositorio: null,
      deploy: null,
      year: "2023 - 2024",
      description: `O sistema Parcerias é uma plataforma integrada para facilitar a criação, gestão e acompanhamento de propostas e parcerias entre os campi do Instituto Federal do Espírito Santo (Ifes) e instituições externas. Empresas interessadas podem se cadastrar e enviar propostas direcionadas a um ou mais campi, incluindo documentação e informações gerais, que são analisadas pelos coordenadores responsáveis de cada campi. O sistema organiza os usuários em 4 tipos de atores com papéis bem definidos, como envio e validação de documentos, gerenciamento de projetos e visualização de informações sensíveis. O fluxo de propostas e parcerias seguem regras específicas distribuídas em um total de 12 estados (Aguardando documentação, Em análise, Habilitada, Pendente, Em execução, Cancelada, Aditamento, Finalizada, etc...), cada estado com suas regras de negocio bem definidas, como por exemplo, documentos obrigatório, atores responsáveis em enviar documentacao, validar documentos e visualizar informações sigilosas.`,
      features: [
          { name: "Cadastro, Login, Recuperar senha (ngx-cookies, JWT)" },
          { name: "Fluxo de estados com State Pattern" },
          { name: "Filtrar propostas e parcerias com paginação" },
          { name: "Upload de arquivos" },
          { name: "Envio de e-mails automáticos customizáveis" },
          { name: "Página para relatórios e gráficos estatísticos (Chart.js, PrimeNG)" },
          { name: "4 tipos de atores" },
      ],
      technologies: ["Angular 15 (TypeScript)", "Spring (Java)", "MySQL", "PrimeNG", "JQuery"],
      images: [parcerias1, parcerias2, parcerias3, parcerias4, parcerias5],
      techIcons: [angularIcon, springIcon, mysqlIcon]
    },
    {
      id: 4,
      title: "Zun (JavaScript Vanilla)",
      repositorio: "https://github.com/luisrossim/zun-js-vanilla",
      deploy: "https://luisrossim.github.io/zun-js-vanilla",
      year: "2024",
      description: `Uma aplicação com javascript vanilla para treinar conceitos e organização de código. Com uma separação de responsabilidades referente a manipulação de dom, localstorage e tratamento de dados.`,
      features: [
          { name: "Lista de tarefas" },
          { name: "Calculadora" },
          { name: "Formulário" },
          { name: "E-commerce" },
          { name: "Fetch" },
          { name: "Async/Await" },
          { name: "Validações" },
          { name: "Modal" },
          { name: "LocalStorage" },
          { name: "JSON" }
      ],
      technologies: ["JavaScript", "TailwindCSS", "Vite"],
      images: [zun1, zun2, zun3, zun4, zun5, zun6 ],
      techIcons: [jsIcon]
    },
    {
      id: 5,
      title: "Eletrônica V1 (Java + Hibernate)",
      repositorio: "https://github.com/luisrossim/eletronica-java",
      deploy: null,
      year: "2023",
      description: `Um sistema de gestão com java puro referente ao conserto de eletrônicos, venda de reformados e controle geral. Projeto realizado para fins de aprendizagem da programação orientada a objetos e hibernate.`,
      features: [
          { name: "Login" },
          { name: "CRUD de eletronicos" },
          { name: "CRUD de serviço" },
          { name: "CRUD de vendas" },
          { name: "Hibernate para manipular dados" }
      ],
      technologies: ["Java", "Java Swing", "Hibernate", "JasperReport", "MySQL"],
      images: [ele1, ele2, ele3],
      techIcons: [javaIcon]
    }
];