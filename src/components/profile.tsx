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
        <div className="flex flex-col gap-1 border p-8 rounded-2xl text-slate-700">
            <div className="flex items-center gap-2 font-medium">
                <img width={'20px'} src={props.image} alt="ifes" />
                <p className='text-lg'>
                    {props.empresa}
                </p>
            </div>
            <p>{props.cargo}</p>
            <p>{props.tipo}</p>
            <p>{props.duracao}</p>
            <p className='text-slate-600'>{props.descricao}</p>
        </div>
    )
}

const FormacaoElement = ({...props}: FormacaoElementProps) => {
    return (
        <div className="flex flex-col gap-1 border p-8 rounded-2xl text-slate-700">
            <div className="flex items-center gap-2 font-medium">
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
        <h1 className='text-slate-700 text-2xl font-medium mb-4'>
            {title}
        </h1>
    )
}

const ProfileHero = () => {
    return (
        <div className="flex flex-col gap-4">
            <img className="w-[60px] md:w-[80px] rounded-full" src={perfil} alt="perfil-image" />
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-slate-900">
                    {profileData.nome}
                </h1>
                <p className="text-lg md:text-xl text-slate-500">
                    {profileData.area}
                </p>
            </div>
        </div>
    )
}


export function Profile(){
    return (
        <section className="container max-w-[90rem] mx-auto px-6 py-36">
            <ProfileHero />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-16">
                <div className="bg-slate-100 p-8 rounded-2xl">
                    <ProfileTitle title="Contato" />
                    
                    <div className="flex flex-col gap-2 text-lg">
                        <a
                            href={profileData.linkedin}
                            target="_blank"
                            className="flex text-sky-600 items-center hover:underline gap-2"
                        >
                            <Linkedin size={15} />LinkedIn
                        </a>

                        <p className='flex items-center gap-2 text-slate-700'>
                            <Mail size={15} /> {profileData.email}
                        </p>
                    </div>
                </div>


                <div className="bg-slate-100 p-8 rounded-2xl">
                    <ProfileTitle title="Perfis" />

                    <a 
                        href={profileData.github} 
                        target="_blank"
                        className="flex text-sky-600 items-center hover:underline gap-2"
                    >
                        <Github size={15} />Github
                    </a>
                </div>


                <div className="flex flex-col lg:col-span-2 bg-slate-100 p-8 rounded-2xl gap-4">
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

                <div className="lg:col-span-2 bg-slate-100 p-8 rounded-2xl">
                    <ProfileTitle title="Experiências" />

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

            <Techs />
        </section>
    )
}