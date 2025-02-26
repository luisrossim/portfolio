import { Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '@/data/profileData';
import perfil from '../assets/perfil.jpg';
import { Techs } from './techs';


interface FormacaoElementProps {
    image: string
    instituicao: string
    curso: string
    local: string
    duracao: string
}

interface ExperienciaElementProps {
    image: string
    empresa: string
    cargo: string
    tipo: string
    duracao: string
    descricao: string
}



const ExperienciaElement = (props: ExperienciaElementProps) => {
    return (
        <div className="flex flex-col gap-1 bg-slate-50 border p-6 text-slate-700">
            <div className="flex items-center gap-2 font-medium text-slate-900">
                <img width={'20px'} src={props.image} alt="exp" />
                <p className='text-lg'>
                    {props.empresa}
                </p>
            </div>
            <p>{props.cargo}</p>
            <p>{props.tipo}</p>
            <p>{props.duracao}</p>
            <hr className='my-1' />
            <p>{props.descricao}</p>
        </div>
    )
}

const FormacaoElement = ({...props}: FormacaoElementProps) => {
    return (
        <div className="flex flex-col gap-1 bg-slate-50 border p-6 text-slate-700">
            <div className="flex items-center gap-2 font-medium text-slate-900">
                <img width={'20px'} src={props.image} alt="ifes" />
                <p className='text-lg'>
                    {props.instituicao}
                </p>
            </div>
            <p>{props.curso}</p>
            <p>{props.local}</p>
            <p>{props.duracao}</p>
        </div>
    )
}

const ProfileTitle = ({title}: any) => {
    return (
        <h1 className='text-slate-900 text-xl md:text-2xl font-semibold mb-2'>
            {title}
        </h1>
    )
}

const ProfileHero = () => {
    return (
        <section className="container max-w-[92rem] mx-auto px-6 pt-36">
            <div className="flex flex-col gap-4">
                <img className="w-[60px] md:w-[80px]" src={perfil} alt="perfil-image" />
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900">
                        {profileData.nome}
                    </h1>
                    <p className="text-lg md:text-xl font-light text-slate-700">
                        {profileData.area}
                    </p>
                </div>
            </div>
        </section>
    )
}


export function Profile(){
    return (
        <section>
            <ProfileHero />

            <section className="container max-w-[92rem] mx-auto px-0 lg:px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className='flex flex-col gap-8 px-6 lg:px-0'>
                        <div>
                            <ProfileTitle title="Contato" />
                            
                            <div className="flex flex-col gap-1">
                                <div className='self-start'>
                                    <a
                                        href={profileData.linkedin}
                                        target="_blank"
                                        className="flex text-sky-600 items-center hover:underline gap-2"
                                    >
                                        <Linkedin size={15} />LinkedIn
                                    </a>
                                </div>

                                <p className='flex items-center gap-2 text-slate-700'>
                                    <Mail size={15} /> {profileData.email}
                                </p>
                            </div>
                        </div>

                        <div>
                            <ProfileTitle title="Perfis" />

                            <div className='flex self-start'>
                                <a 
                                    href={profileData.github} 
                                    target="_blank"
                                    className="flex text-sky-700 items-center hover:underline gap-2"
                                >
                                    <Github size={15} />Github
                                </a>
                            </div>
                        </div>

                        <div>
                            <ProfileTitle title="Formação Acadêmica" />

                            {profileData.formacaoAcademica.map((item, index) => (
                                <div key={index}>
                                    <FormacaoElement 
                                        image={item.image}
                                        instituicao={item.instituicao}
                                        curso={item.curso}
                                        local={item.local}
                                        duracao={item.duracao}
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            <ProfileTitle title="Experiências" />

                            <div className='flex flex-col gap-4'>
                                {profileData.experiencia.map((item, index) => (
                                    <div key={index}>
                                        <ExperienciaElement 
                                            image={item.image}
                                            empresa={item.empresa}
                                            cargo={item.cargo}
                                            tipo={item.tipo}
                                            duracao={item.duracao}
                                            descricao={item.descricao}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Techs />
                </div>
            </section>
        </section>
    )
}