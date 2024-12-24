import { BrainCog, ExternalLink, Linkedin, Mail, MapPinHouse, UserRound } from 'lucide-react';
import perfil from '../assets/perfil.jpg';
import ifes from '../assets/ifes.png';
import leds from '../assets/leds.png';

export function Profile(){
    return (
        <div id="profile" className="container mx-auto px-2 md:px-10 my-24">
            <div className="flex items-center gap-4 mb-6 px-2">
                <img className="w-[60px] md:w-[90px] rounded-full" src={perfil} alt="perfil" />
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                        Luis Gustavo Leal Rossim
                    </h1>
                    <p className="text-slate-500">
                        Web Developer
                    </p>
                </div>
            </div>

            {/* CONTATO */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="flex flex-col gap-10 p-4">
                    <div className='flex flex-col gap-1'>
                        <h2 className="text-xl md:text-2xl font-semibold mb-1">
                            Contato
                        </h2>
                        <p className="flex items-center gap-2">
                            <Linkedin size={'15px'} />
                            <a href="https://www.linkedin.com/in/luisrossim/" target="_blank" className="flex text-sky-600 items-center hover:underline gap-1">
                                LinkedIn<ExternalLink size={'12px'} />
                            </a>
                        </p>
                        <p className="flex items-center gap-2"><Mail size={'15px'} />
                            luisrossim23@gmail.com
                        </p>
                    </div>

                    {/* SOBRE MIM */}
                    <div className='flex flex-col gap-1'>
                        <h2 className="text-xl md:text-2xl font-semibold mb-1">
                            Sobre mim
                        </h2>
                        <p className="flex items-center gap-2"><UserRound size={'15px'} />22 anos</p>
                        <p className="flex items-center gap-2"><MapPinHouse size={'15px'} />Nova Venécia, ES, Brasil</p>
                        <p className="flex items-center gap-2"><BrainCog size={'15px'} />Programação, Inovação, Design, Simplicidade</p>
                    </div>

                    {/* FORMACAO */}
                    <div className='flex flex-col self-start gap-1'>
                        <h2 className="text-xl md:text-2xl font-semibold mb-1">
                            Formação Acadêmica <small className="text-slate-400">(1)</small>
                        </h2>
                        <div className="flex flex-col bg-slate-50 border rounded-xl p-4">
                            <div className="flex items-center gap-2 font-semibold">
                                <img width={'15px'} src={ifes} alt="ifes" />
                                <p>IFES - Instituto Federal do Espírito Santo</p>
                            </div>
                            <p>Bacharelado em Sistemas de Informação</p>
                            <p>Campus Colatina</p>
                            <p className="font-light">2021 - 2024</p>
                        </div>
                    </div>

                    {/* EXPERIENCIA */}
                    <div className='flex flex-col self-start gap-1'>
                        <h2 className="text-xl md:text-2xl font-semibold mb-1">
                            Experiências <small className="text-slate-400">(1)</small>
                        </h2>
                        <div className="flex flex-col bg-slate-50 border rounded-xl p-4">
                            <p className="flex items-center gap-2 font-semibold">
                                <img width={'15px'} src={leds} alt="leds" />
                                LEDS
                            </p>
                            <p>Front-End Developer</p>
                            <p className="font-light">2023 - 2024 (1 ano e 8 meses)</p>
                        </div>
                    </div>

                    {/* PERFIS */}
                    <div className='flex flex-col self-start gap-1'>
                        <h2 className="text-xl md:text-2xl font-semibold mb-1">
                            Perfis <small className="text-slate-400">(3)</small>
                        </h2>
                        <div className="grid grid-cols-3 gap-2">
                            <a href='https://www.linkedin.com/in/luisrossim/' target='_blank' className="flex items-center gap-2 bg-sky-800 text-slate-100 rounded-lg px-4 py-2">
                                LinkedIn <ExternalLink size={'12px'} />
                            </a>
                            <a href='https://github.com/luisrossim' target='_blank' className="flex items-center gap-2 bg-sky-800 text-slate-100 rounded-lg px-4 py-2">
                                GitHub <ExternalLink size={'12px'} />
                            </a>
                            <a href='#' className="flex items-center gap-2 bg-sky-800 text-slate-100 rounded-lg px-4 py-2">
                                Behance <ExternalLink size={'12px'} />
                            </a>
                        </div>
                    </div>
                </div>
                <div id='bg-profile' className='bg-sky-900 rounded-3xl'></div>
            </div>
        </div>
    )
}