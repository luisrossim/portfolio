import { linguagens, ferramentas, databases, outros } from "@/data/techs.data";
import { TechElement, TechElementProps } from "./TechElement";

interface TechSectionProps {
    title: string;
    techData: TechElementProps[];
}

interface TechSectionStringProps {
    title: string;
    techData: string[];
}

const TechSection = ({ title, techData }: TechSectionProps) => (
    <div className="flex flex-col gap-3 my-2">
        <h1 className="text-lg">{title}</h1>
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
        <h2 className="text-xl my-2">
            {title}
        </h2>
        <div className="flex flex-wrap gap-1">
            { techData.map((outro, index) => (
                <span className="text-sm" key={index}>
                    {outro}
                    {((index + 1) == techData.length) ? "." : ", "}
                </span>
            )) }
        </div>
    </div>
);

export function Tech(){
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <TechSection title="Ferramentas, Bibliotecas e Plataformas" techData={ferramentas} />
            <TechSection title="Linguagens" techData={linguagens} />
            <TechSection title="Bancos de dados" techData={databases} />
            <TechSectionString title="Outros" techData={outros} />
        </div>
    )
}