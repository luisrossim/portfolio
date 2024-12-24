import { ExternalLink, Github, Sparkles, Sun } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
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

export function CardProjeto() {
  const projetos = [
    {
        id: 1,
        title: "Sistema de QUIZ",
        link: "https://github.com/luisrossim/quiz",
        description: `Um sistema de gestão para jogos QUIZ, sendo possível cadastrar eventos, administradores, equipes e questões. O administrador realiza login no sistema e as equipes entram utilizando a funcionalidade de cookies sem necessidade de senha. O administrador é capaz de acompanhar a dinâmica, liberar questões, exibir resultados (pontuação e tempo de resposta de cada equipe) em tempo real. As equipes entram no sistema somente para responder as questões. As questões possuem um tempo limite para serem respondidas e uma pontuação, o sistema atribui automaticamente a pontuação da equipe de acordo com acerto, erro ou pela condição do tempo de envio.`,
        features: [
            { name: "Arquitetura MVC" },
            { name: "Login, Recuperar senha", detail: "CodeIgniter Session" },
            { name: "CRUD de eventos, usuários, equipes, questões" },
            { name: "Logs" },
            { name: "Ordernar questões", detail: "Drag-and-Drop" },
            { name: "TinyMCE", detail: "Formatador de texto inteligente" },
            { name: "Página de relatório de questões" },
            { name: "Tempo regressivo" },
            { name: "Recebimento e exibição das respostas das equipes em tempo real" },
            { name: "Envio de e-mail" },
            { name: "Layout padronizado e responsivo" },
        ],
        technologies: ["CodeIgniter (PHP)", "JavaScript", "MySQL", "Bootstrap", "JQuery"],
        images: [quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7],
    },
    {
        id: 2,
        title: "Sistema Parcerias",
        description: `O sistema Parcerias é uma plataforma integrada para facilitar a criação, gestão e acompanhamento de propostas e parcerias entre os campi do Instituto Federal do Espírito Santo (Ifes) e instituições externas. Empresas interessadas podem se cadastrar e enviar propostas direcionadas a um ou mais campi, incluindo documentação e informações gerais, que são analisadas pelos coordenadores responsáveis de cada campi. O sistema organiza os usuários em 4 tipos de atores com papéis bem definidos, como envio e validação de documentos, gerenciamento de projetos e visualização de informações sensíveis. O fluxo de propostas e parcerias seguem regras específicas distribuídas em um total de 12 estados (Aguardando documentação, Em análise, Habilitada, Pendente, Em execução, Cancelada, Aditamento, Finalizada, etc...), cada estado com suas regras de negocio bem definidas, como por exemplo, documentos obrigatório, atores responsáveis em enviar documentacao, validar documentos e visualizar informações sigilosas. O uso do framework Angular garante um sistema com uma arquitetura limpa e organizada de alta rastreabilidade, garantindo manutençao contínua facilitada.`,
        features: [
            { name: "Cadastro, Login, Recuperar senha", detail: "ngx-cookies, JWT" },
            { name: "Fluxo de estados com State Pattern" },
            { name: "Filtrar propostas e parcerias pelo estado, campus e empresa com paginação" },
            { name: "Upload de arquivos" },
            { name: "Envio de e-mails automáticos customizáveis" },
            { name: "Página para relatórios e gráficos estatísticos", detail: "Chart.js, PrimeNG" },
            { name: "4 tipos de atores", detail: "Administrador, Coordenador local, Coordenador de projetos e Instituição externa" },
        ],
        technologies: ["Angular 15 (TypeScript)", "Spring (Java)", "MySQL", "PrimeNG", "JQuery"],
        images: [parcerias1, parcerias2, parcerias3, parcerias4, parcerias5],
    },
    {
        id: 3,
        title: "To do list (JS Vanilla)",
        link: "https://github.com/luisrossim/zun-js-vanilla",
        description: `Uma aplicação to-do list com javascript puro para treinar conceitos e organização de código. Com uma separação de responsabilidades referente a manipulação de dom, localstorage e tratamento de dados.`,
        features: [
            { name: "CRUD de tarefas" },
            { name: "Modal" },
            { name: "LocalStorage" }
        ],
        technologies: ["JavaScript", "TailwindCSS", "Vite"],
        images: [zun1, zun2, zun3, zun4],
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projetos.map((projeto) => (
        <div key={projeto.id} id={`card-projeto-${projeto.id}`} className="p-6 border rounded-lg mb-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
                {projeto.link 
                    ?
                    <div className="inline-block">
                        <a href={projeto.link} target='_blank' className="flex items-center gap-2 bg-sky-800 text-slate-100 rounded-lg px-4 py-2">
                            <Github size={'15px'} />
                        </a>
                    </div>
                    :
                    <span className="inline-block items-center gap-2 bg-black text-slate-100 rounded-lg px-2 py-1">
                        Privado
                    </span>
                }
                <h2 className="text-2xl md:text-3xl font-semibold">{projeto.title}</h2>
            </div>

            <p className="text-slate-600 mb-6">{projeto.description}</p>
            
            {/* Funcionalidades */}
            <h3 className="flex items-center gap-2 text-lg font-medium mb-2">
              <Sparkles size={"20px"} /> Principais funcionalidades:
            </h3>
            <ul className="pl-2 mb-6">
              {projeto.features.map((feature, index) => (
                <li key={index}>
                  - {feature.name}{" "}
                  {feature.detail && <span className="text-slate-500">({feature.detail})</span>}
                </li>
              ))}
            </ul>

            {/* Tecnologias */}
            <h3 className="flex items-center gap-2 text-lg font-medium mb-2">
              <Sun size={"20px"} /> Tecnologias:
            </h3>
            <ul className="pl-2">
              {projeto.technologies.map((tech, index) => (
                <li key={index}>- {tech}</li>
              ))}
            </ul>
          </div>

          {/* Imagens */}
          <div className="mt-6 px-12">
            <Carousel>
              <CarouselContent>
                {projeto.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img src={image} className="w-auto h-auto mx-auto max-h-[320px]" alt={`Slide ${index + 1}`} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      ))}
    </div>
  );
}
