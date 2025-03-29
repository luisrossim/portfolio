import ifes from '../assets/ifes.png';
import leds from '../assets/leds.png';
import atip from '../assets/atip.png';
import perfil from '../assets/perfil.jpg';

export const profile = {
    image: perfil,
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
                `Iniciei minha jornada no curso de Sistemas de Informação no Instituto Federal do Espírito Santo, aprendendo lógica de programação, algoritmos, programação orientada a objetos, padrões de software e bancos de dados relacionais. Durante esse período, atuei com C, C++, Python, Java e PostgreSQL.`
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
                `Estágio como desenvolvedor Front-End Angular, atuando na plataforma Parcerias do IFES.`,
                `Especialização em interface e experiência do usuário, prototipação e design.`,
                'Desenvolvendo projetos Full-Stack com Angular e Java Spring, construindo APIs REST, adotando arquitetura em camadas, princípios SOLID, segurança web, RxJs e ORMs.'
            ],
        },
        {
            title: "2024",
            subtitle: "Desenvolvimento Mobile",
            descricao: [
                `Desenvolvendo aplicativos com Flutter e React Native (Expo).`
            ]
        },
        {
            title: "2025",
            subtitle: "SaaS, AWS e DevOps",
            descricao: [
                `Desenvolvendo pequenas plataformas, aplicativos e APIs integrando serviços para empresas locais.`,
                `Aprofundando em EC2, S3, CI/CD, Docker e Testes automatizados.`
            ]
        }
    ],
    formacaoAcademica: [
        {
            image: ifes,
            instituicao: "IFES - Instituto Federal do Espírito Santo",
            curso: "Bacharelado em Sistemas de Informação",
            local: "Campus Colatina",
            duracao: "2021 - 2024 (4 anos)"
        }
    ],
    experiencia: [
        {
            image: atip,
            empresa: "ATIP",
            cargo: "Full-Stack Developer",
            tipo: "Contrato",
            duracao: "2025",
            descricao: `Atuo no planejamento e desenvolvimento de sistemas, aplicativos, APIs e sites sob demanda, utilizando tecnologias modernas para criar soluções. Tenho impacto direto na criação e integração de novas ferramentas de gestão para empresas parceiras, transformando dados brutos em insights valiosos de forma interativa, permitindo um acompanhamento estratégico e otimizado das operações.

            Além do desenvolvimento de novos projetos, também atuo na atualização e modernização das tecnologias existentes na empresa, garantindo melhor desempenho, segurança e alinhamento com as melhores práticas atuais.

            Utilizo ferramentas como Angular, React, React Native, Java Spring, Node.js, Express, PostgreSQL, Firebird, Jest e Docker.`
        },
        {
            image: leds,
            empresa: "LEDS",
            cargo: "Front-End Developer",
            tipo: "Estágio (Híbrido)",
            duracao: "2023 - 2024",
            descricao: `Atuei no desenvolvimento da plataforma Parcerias do Instituto Federal do Espírito Santo, utilizando as ferramentas Angular e Java Spring. Fui responsável pelo desenvolvimento, manutenção, testes de novas funcionalidades, criação de interfaces e componentes responsivos, além da correção de falhas visuais e funcionais.

            Contribuí para a integração eficiente com o backend, propondo correções e validações que garantiram um ecossistema escalável. Durante esse período, adquiri experiência em API REST, JWT, web design responsivo, criação de relatórios interativos, modelagem de diagramas de estado e casos de uso, padrões de projetos, princípios SOLID, paginação e autenticação.

            Além disso, desenvolvi habilidades no uso de ferramentas de controle de gestão (Trello) e controle de versão (Git/GitHub), otimizando a organização e colaboração no desenvolvimento do projeto.`
        }
    ]
}