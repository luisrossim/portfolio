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
import atip1 from "../assets/atip1.png";
import atip2 from "../assets/atip2.png";
import atip3 from "../assets/atip3.png";
import atip4 from "../assets/atip4.png";
import atip5 from "../assets/atip5.png";
import phpIcon from "../assets/icon-php.svg"
import express from "../assets/express.svg"
import nodejs from "../assets/nodejs.svg"
import ciIcon from "../assets/icon-ci.svg"
import angularIcon from "../assets/icon-angular.png"
import springIcon from "../assets/icon-spring.svg"
import nextIcon from "../assets/icon-nextjs.svg"
import tsIcon from "../assets/icon-ts.png"
import reactIcon from "../assets/icon-react.svg"
import javaIcon from "../assets/icon-java.svg"
import jsIcon from "../assets/icon-js.png"
import mysqlIcon from "../assets/icon-mysql.png"
import postgreIcon from "../assets/icon-postgre.png"
import mobile from "../assets/mobile.png";
import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";

export const projectsData = [
    {
      title: "Aplicativo para gestão financeira",
      repositorio: null,
      deploy: null,
      year: "2025",
      description: "Um aplicativo para extrair informações e acompanhar as operações da sua empresa. Com dashboards de vendas, tipo de pagamento, vendedor, itens, etc. Filtros para acompanhar vendas, caixa e recebimentos.",
      features: [
          "ExpressJS API",
          "JWT Authentication",
          "Async Storage",
          "Paginação",
          "Refresh Token",
          "Victory Charts",
          "Request Limiter",
          "Pino (logger)",
          "Jest (tests)",
          "Expo Router",
          "EAS Build",
          "Axios"
      ],
      technologies: ["React Native (React/TypeScript)", "Expo", "NodeJS", "Express", "PM2 (Gerenciador de processos)", "Windows Server", "Firebird"],
      images: [mobile1, mobile2],
      techIcons: [reactIcon, tsIcon, express, nodejs]
    },
    {
      title: "Sistema Parcerias",
      repositorio: null,
      deploy: null,
      year: "2023 - 2024",
      description: `O sistema Parcerias é uma plataforma integrada para facilitar a criação, gestão e acompanhamento de propostas e parcerias entre os campi do Instituto Federal do Espírito Santo e empresas.`,
      features: [
          "Cadastro, Login, Recuperar senha (ngx-cookies, JWT)",
          "Fluxo de estados com State Pattern",
          "Filtrar propostas e parcerias com paginação",
          "Upload de arquivos",
          "Envio de e-mails automáticos customizáveis por rotinas",
          "Página para relatórios e gráficos estatísticos com filtros (Chart.js, PrimeNG)",
          "4 atores",
      ],
      technologies: ["Angular 15 (TypeScript)", "Spring (Java)", "MySQL", "PrimeNG", "MaterializeCSS", "JQuery"],
      images: [parcerias1, parcerias2, parcerias3, parcerias4, parcerias5],
      techIcons: [angularIcon, springIcon, mysqlIcon]
    },
    {
      title: "Eletrônica",
      repositorio: "https://github.com/luisrossim/eletron",
      deploy: null,
      year: "2024",
      description: "Sistema protótipo para a gestão de uma eletrônica.",
      features: [
          "Login (ngx-cookies, JWT)",
          "User Roles",
          "Guardas de rota",
          "HTTP Interceptor",
          "Fluxo de estados com State Pattern",
          "Endpoints públicos e privados",
          "Exception Handler",
          "Swagger",
          "Logs",
          "Leaflet Map",
          "GSAP",
          "CRUD",
      ],
      technologies: ["Angular 19 (TypeScript)", "Spring (Java)", "PostgreSQL", "PrimeNG", "TailwindCSS"],
      images: [eletron1, eletron2, eletron3, eletron4],
      techIcons: [angularIcon, springIcon, postgreIcon]
    },
    {
      title: "Sistema de QUIZ",
      repositorio: "https://github.com/luisrossim/quiz",
      deploy: null,
      year: "2024",
      description: `Um sistema de gestão para jogos QUIZ, desenvolvido como parte da reformulação de um sistema legado. O projeto envolveu a adoção de um framework, a reestruturação da base de dados e a implementação de uma nova interface responsiva, garantindo mais eficiência e usabilidade.`,
      features: [
          "Arquitetura MVC",
          "Login, Recuperar senha (CodeIgniter Session)",
          "CRUD de eventos, usuários, equipes, questões",
          "Logs",
          "Ordernar questões (Drag-and-Drop)",
          "TinyMCE (Formatador de texto inteligente)",
          "Página de relatório de questões",
          "Tempo regressivo",
          "Recebimento e exibição das respostas das equipes em tempo real",
          "Envio de e-mail",
          "Layout padronizado e responsivo",
      ],
      technologies: ["CodeIgniter (PHP)", "JavaScript", "MySQL", "Bootstrap", "JQuery"],
      images: [quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7],
      techIcons: [ciIcon, phpIcon, jsIcon, mysqlIcon]
    },
    {
      title: "Aplicativo controle de estoque",
      repositorio: null,
      deploy: null,
      year: "2025",
      description: "Um aplicativo de controle de estoque, integrado a uma API desenvolvida com Node.js e Express, utilizando Firebird como banco de dados. O sistema oferece uma solução eficiente para gerenciar e monitorar o estoque em tempo real com alta performance.",
      features: [
          "JWT Authentication",
          "Async Storage",
          "Ler Bar Code",
          "Ler QR Code",
          "ExpressJS API",
          "Expo Router",
          "EAS Build",
          "Axios",
      ],
      technologies: ["React Native (React/TypeScript)", "Expo", "NodeJS", "Express", "PM2 (Gerenciador de processos)", "Windows Server", "Firebird"],
      images: [mobile],
      techIcons: [reactIcon, tsIcon, express, nodejs]
    },
    {
      title: "Site Institucional - ATIP",
      repositorio: null,
      deploy: "https://atipinformatica.com.br/",
      year: "2025",
      description: "Site vitrine para detalhar serviços da empresa, áreas de atuação e contato.",
      features: [
          "Media Queries",
          "AVIF images",
          "SPA (Single Page Application)",
          "Shadcn"
      ],
      technologies: ["NextJS (React/TypeScript)", "TailwindCSS"],
      images: [atip1, atip2, atip3, atip4, atip5],
      techIcons: [nextIcon, reactIcon, tsIcon]
    },
    {
      title: "Zun (JS)",
      repositorio: "https://github.com/luisrossim/zun-js-vanilla",
      deploy: "https://luisrossim.github.io/zun-js-vanilla",
      year: "2024",
      description: `Uma aplicação com javascript vanilla para treinar conceitos e organização de código. Com uma separação de responsabilidades referente a manipulação de dom, localstorage e tratamento de dados.`,
      features: [
          "Lista de tarefas",
          "Calculadora",
          "Formulário",
          "E-commerce",
          "Fetch",
          "Async/Await",
          "Validações",
          "Modal",
          "LocalStorage",
          "JSON"
      ],
      technologies: ["JavaScript", "TailwindCSS", "Vite"],
      images: [zun1, zun2, zun3, zun4, zun5, zun6 ],
      techIcons: [jsIcon]
    },
    {
      title: "Eletrônica (Java)",
      repositorio: "https://github.com/luisrossim/eletronica-java",
      deploy: null,
      year: "2022 - 2023",
      description: `Um sistema de gestão com java vanilla referente ao conserto de eletrônicos, venda de reformados e controle geral. Projeto realizado para fins de aprendizagem da programação orientada a objetos e hibernate.`,
      features: [
          "Login",
          "CRUD de eletronicos",
          "CRUD de serviço",
          "CRUD de vendas",
          "Hibernate para manipular dados"
      ],
      technologies: ["Java", "Java Swing", "Hibernate", "JasperReport", "MySQL"],
      images: [ele1, ele2, ele3],
      techIcons: [javaIcon]
    }
];