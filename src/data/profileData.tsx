import ifes from '../assets/ifes.png';
import leds from '../assets/leds.png';

export const profileData = {
    nome: "Luis Gustavo Leal Rossim",
    area: "Web Developer",
    linkedin: "https://www.linkedin.com/in/luisrossim/",
    github: "https://github.com/luisrossim",
    email: "luisrossim23@gmail.com",
    formacaoAcademica: [
        {
            image: ifes,
            instituicao: "IFES - Instituto Federal do Espírito Santo",
            curso: "Bacharelado em Sistemas de Informação",
            local: "Campus Colatina (Presencial)",
            duracao: "2021 - 2024 (4 anos)"
        }
    ],
    experiencia: [
        {
            image: leds,
            empresa: "LEDS",
            cargo: "Front-End Developer (Angular 15)",
            tipo: "Estágio (Híbrido)",
            duracao: "2023 - 2024 (1 ano e 8 meses)",
            descricao: "Desenvolvimento do sistema utilizando as ferramentas Angular 15 e Java Spring. Projetando, desenvolvendo e testando novas funcionalidades, criando interfaces e componentes responsivos, corrigindo falhas visuais e funcionais. Participação em levantamento de requisitos juntamente com os usuários. Participei na integração do backend, propondo melhores práticas, correções e validações garantindo um ecossistema escalável. Adquiri experiência em web design responsivo, criação de relatórios interativos, criação de diagramas de estado e de casos de uso, além de boas práticas de segurança para garantir um sistema seguro e eficiente. Também foi possível adquirir experiência com ferramentas de controle de gestão e versão, Trello e Git."
        }
    ]
}