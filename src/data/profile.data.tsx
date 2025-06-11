import { Image } from '@/utils/images';

export const profile = {
    nome: "Luis Gustavo Rossim",
    area: "Full-Stack Developer",
    linkedin: "https://www.linkedin.com/in/luisrossim/",
    github: "https://github.com/luisrossim",
    email: "luisrossim23@gmail.com",
    about: [
        {
            title: "2021",
            subtitle: "Início",
            descricao: [
                `Iniciei minha jornada no curso de Sistemas de Informação no Instituto Federal do Espírito Santo, aprendendo lógica de programação, algoritmos, programação orientada a objetos, padrões de projeto, bancos de dados relacionais e ferramentas UML. Atuando com C, C++, Python, Java e PostgreSQL.`
            ]
        },
        {
            title: "2022",
            subtitle: "Desenvolvimento Web",
            descricao: [
                `Me aprofundei no desenvolvimento web com HTML, CSS e JavaScript. Colocando em prática conceitos de responsividade, manipulação de DOM, gerenciadores de dependências, formulários, Fetch, JQuery e funções assíncronas.`,
                `Primeiros passos no Angular e React com TypeScript focando na componentização e APIs REST.`
            ]
        },
        {
            title: "2023",
            subtitle: "Experiência Front-End, UI/UX e Projetos Full-Stack",
            descricao: [
                `Estágio como desenvolvedor Front-End Angular, desenvolvendo a plataforma Parcerias do IFES.`,
                `Especialização em interface e experiência do usuário, prototipação e design.`,
                'Desenvolvendo projetos Full-Stack com Angular e Java Spring, construindo APIs REST, adotando arquitetura em camadas, princípios SOLID, segurança web, RxJs e ORMs.'
            ],
        },
        {
            title: "2024",
            subtitle: "Desenvolvimento Mobile",
            descricao: [
                `Desenvolvendo aplicativos com React Native (Expo).`
            ]
        },
        {
            title: "2025",
            subtitle: "SaaS, AWS e DevOps",
            descricao: [
                `Desenvolvendo sistemas web, aplicativos mobile e APIs integrando serviços para empresas locais.`,
                `Aprofundando em AWS EC2, AWS RDS, AWS S3, micro-serviços, CI/CD, Docker e Testes automatizados.`
            ]
        }
    ],
    formacaoAcademica: [
        {
            image: Image.IFES,
            instituicao: "IFES - Instituto Federal do Espírito Santo",
            curso: "Bacharelado em Sistemas de Informação",
            local: "Campus Colatina",
            duracao: "2021 - 2024 (4 anos)"
        }
    ],
    experiencia: [
        {
            image: Image.ATIP,
            empresa: "ATIP",
            cargo: "Full-Stack Developer",
            tipo: "Contrato",
            duracao: "2025 - o momento",
            descricao: `- Desenvolvo módulos ERP sob demanda e sob medida para empresas parceiras, incluindo sistemas, aplicativos mobile, APIs e sites institucionais, integrando serviços internos e externos. - Implantação de software em infraestrutura on-premises e cloud-based. - Atuo também na reformulação de sistemas legados, proporcionando uma usabilidade mais contemporânea. - Organizo o fluxo de desenvolvimento com Kanban, Git Patterns, Jest e aplicando princípios SOLID, SoC e API Design.`
        },
        {
            image: Image.LEDS,
            empresa: "LEDS",
            cargo: "Front-End Developer",
            tipo: "Estágio (Híbrido)",
            duracao: "2023 - 2024",
            descricao: `- Atuo no desenvolvimento da plataforma Parcerias do Instituto Federal do Espírito Santo, utilizando Angular e Java Spring. - Responsável pelo desenvolvimento, manutenção, testes de novas funcionalidades, criação de interfaces e componentes responsivos, além da correção de falhas visuais e funcionais. - Colaboração com a equipe Back-End, propondo fluxos e validações que garantem um ecossistema escalável. - Atuação com API REST, JWT, web design responsivo, criação de relatórios interativos, modelagem de diagramas de estado e casos de uso, padrões de projetos, princípios SOLID, arquitetura em camadas, paginação, autenticação e agendamento de tarefas. Utilização de ferramentas de gestão Kanban e versionamento com Git/GitHub.`
        }
    ]
}