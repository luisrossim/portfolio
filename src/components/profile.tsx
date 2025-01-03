import { Github, ExternalLink, Linkedin, Mail } from 'lucide-react';
import perfil from '../assets/perfil.jpg';
import ifes from '../assets/ifes.png';
import leds from '../assets/leds.png';
import { Techs } from './techs';

export function Profile(){
    return (
        <section id="profile" className="my-20 md:my-24">
            <div className="flex flex-col items-center text-center gap-2 mb-12">
                <img className="w-[60px] md:w-[80px] rounded-full" src={perfil} alt="perfil" />
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1">
                        Luis Gustavo Leal Rossim
                    </h1>
                    <p className="text-base md:text-lg text-slate-700 font-light">
                        Web Developer
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4'>
                <div className="flex flex-col mx-auto gap-2 md:gap-4">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
                        <div className='flex flex-col gap-1 border rounded-xl p-5'>
                            <h2 className="text-xl md:text-2xl font-semibold mb-1">
                                Contato
                            </h2>
                            <div className="icon-text">
                                <Linkedin size={'15px'} />
                                <a href="https://www.linkedin.com/in/luisrossim/" target="_blank" className="flex text-sky-600 items-center hover:underline gap-1">
                                    LinkedIn<ExternalLink size={'12px'} />
                                </a>
                            </div>
                            <div className="icon-text"><Mail size={'15px'} />
                                luisrossim23@gmail.com
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 border rounded-xl p-5'>
                            <h2 className="text-xl md:text-2xl font-semibold mb-1">
                                Perfis
                            </h2>
                            <div className="icon-text">
                                <Github size={'15px'} />
                                <a href="https://github.com/luisrossim" target="_blank" className="flex text-sky-600 items-center hover:underline gap-1">
                                    Github<ExternalLink size={'12px'} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 border rounded-xl p-5'>
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">
                            Formação Acadêmica
                        </h2>
                        <div className="flex flex-col border bg-slate-50 rounded-xl p-5">
                            <div className="icon-text font-semibold">
                                <img width={'20px'} src={ifes} alt="ifes" />
                                <p>IFES - Instituto Federal do Espírito Santo</p>
                            </div>
                            <p>Bacharelado em Sistemas de Informação</p>
                            <p className='font-light'>Campus Colatina (Presencial)</p>
                            <p className="font-light">2021 - 2024 (4 anos)</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 border rounded-xl p-5'>
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">
                            Experiências
                        </h2>
                        <div className="flex flex-col border bg-slate-50 rounded-xl p-5">
                            <p className="icon-text font-semibold">
                                <img width={'25px'} src={leds} alt="leds" />
                                LEDS
                            </p>
                            <p>Front-End Developer (Angular 15)</p>
                            <p className='font-light'>Estágio (Híbrido)</p>
                            <p className="font-light">2023 - 2024 (1 ano e 8 meses)</p>
                            <hr className='my-2' />
                            <p className="font-light">
                                Desenvolvimento do sistema com foco em Angular e Java Spring, criando interfaces responsivas e corrigindo falhas visuais e funcionais. Participação em levantamento de requisitos, projetando, desenvolvendo e testando novas funcionalidades. Utilizei o Spring principalmente para corrigir funcionalidades no backend, garantindo integração com o frontend. Adquiri habilidades em web design responsivo, criação de diagramas de estado e de casos de uso, além de boas práticas de segurança para garantir um sistema seguro e eficiente. Também foi possível adquirir experiência com ferramentas de controle de gestão e versão, Trello e Git.
                            </p>
                        </div>
                    </div>
                </div>
                <Techs />
            </div>
        </section>
    )
}