import { linguagens, ferramentas, databases, outros } from "@/data/techs.data";
import { TechElement, TechElementProps } from "./TechElement";
import { Code } from "lucide-react";

interface TechSectionProps {
    title: string;
    techData: TechElementProps[];
}

interface TechSectionStringProps {
    title: string;
    techData: String[];
}

const TechSection = ({ title, techData }: TechSectionProps) => (
    <div className="flex flex-col gap-3 text-blue-200 my-2">
        <div className="flex items-center justify-between gap-2">
            <h1 className="text-2xl">{title}</h1>
            <span className="font-extralight">({techData.length})</span>
        </div>
        { techData.map((tech) => (
            <TechElement
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                progress={tech.progress}
            />
        )) }
    </div>
);

const TechSectionString = ({ title, techData }: TechSectionStringProps) => (
    <div>
        <h2 className="text-xl mb-1">
            {title} <small className="font-light">({techData.length})</small>
        </h2>
        <div className="flex flex-wrap gap-1">
            { techData.map((outro, index) => (
                <span className="font-light" key={index}>
                    {outro}
                    {((index + 1) == techData.length) ? "." : ", "}
                </span>
            )) }
        </div>
    </div>
);

export function Tech(){
    return (
        <section id="tecnologias" className="container max-w-[95rem] mx-auto pt-32 px-5">
            <div className="flex items-center mb-5 gap-2 lg:gap-3">
                <Code size={28} className="text-blue-500"/>
                <h1 className="text-2xl md:text-3xl font-medium text-blue-500">Tecnologias</h1>
            </div>

            <div className="flex flex-col gap-12 p-8 bg-gray-900 text-blue-400">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-12">
                        <TechSection title="Linguagens" techData={linguagens} />
                        <TechSection title="Banco de dados" techData={databases} />
                    </div>
                    <div className="flex flex-col gap-12">
                        <TechSection title="Ferramentas, Bibliotecas e Plataformas" techData={ferramentas} />
                        <TechSectionString title="Outros" techData={outros} />
                    </div>
                </div>
            </div>
        </section>
    )
}