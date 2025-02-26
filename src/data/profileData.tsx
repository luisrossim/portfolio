import ifes from '../assets/ifes.png';
import leds from '../assets/leds.png';
import atip from '../assets/atip.png';

export const profileData = {
    nome: "Luis Gustavo Leal Rossim",
    area: "Full-Stack Developer",
    linkedin: "https://www.linkedin.com/in/luisrossim/",
    github: "https://github.com/luisrossim",
    email: "luisrossim23@gmail.com",
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
            descricao: "Atuo no planejamento e desenvolvimento de sistemas, aplicativos, APIs e sites sob demanda, liderando a escolha das tecnologias mais adequadas para cada projeto. Utilizo Angular, Next.js, React Native, Java Spring, Node.js, PostgreSQL e Firebird para garantir soluções eficientes."
        },
        {
            image: leds,
            empresa: "LEDS",
            cargo: "Front-End Developer (Angular 15)",
            tipo: "Estágio (Híbrido)",
            duracao: "2023 - 2024 (1 ano e 8 meses)",
            descricao: "Fui responsável pelo desenvolvimento do sistema utilizando as ferramentas Angular 15 e Java Spring. Projetando, desenvolvendo e testando novas funcionalidades, criando interfaces e componentes responsivos, corrigindo falhas visuais e funcionais. Participando na integração com o backend, propondo correções e validações garantindo um ecossistema escalável. Adquiri experiência em web design responsivo, criação de relatórios interativos, criação de diagramas de estado e de casos de uso, adotando boas práticas de segurança, manutenibilidade e performance. Adquiri experiência com ferramentas de controle de gestão (Trello) e versão (Git/Github)."
        }
    ]
}