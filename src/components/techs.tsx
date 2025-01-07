import { linguagens, ferramentas, databases, outros } from "@/data/techsData";
import { Techitem, TechItemProps } from "./techItem";

interface TechSectionProps {
    title: string;
    techData: TechItemProps[];
}

interface TechSectionStringProps {
    title: string;
    techData: String[];
}

const TechSection = ({ title, techData }: TechSectionProps) => (
    <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl font-semibold mb-1">
            {title} <small className="font-extralight">({techData.length})</small>
        </h2>
        { techData.map((tech) => (
            <Techitem
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
        <h2 className="text-xl md:text-2xl font-semibold mb-1">
            {title} <small className="font-extralight">({techData.length})</small>
        </h2>
        <div className="flex flex-wrap gap-1">
            { techData.map((outro, index) => (
                <span key={index} className="font-light text-neutral-300">
                    {outro}
                    {((index + 1) == techData.length) ? "." : ", "}
                </span>
            )) }
        </div>
    </div>
);

export function Techs(){
    return (
        <section id="tecnologias" className="flex flex-col gap-12 border rounded-xl p-5 bg-slate-900 text-slate-200">
            <TechSection title="Linguagens" techData={linguagens} />
            <TechSection title="Ferramentas e Bibliotecas" techData={ferramentas} />
            <TechSection title="Banco de dados" techData={databases} />
            <TechSectionString title="Outros" techData={outros} />
        </section>
    )
}