import { projectsData } from "@/data/projects.data";
import { Code } from "lucide-react";
import { ProjetoElement } from "./ProjetoElement";

export function Projeto(){
    return (
        <div id="projetos" className="container max-w-[95rem] mx-auto pt-32 px-5">
            <div className="flex items-center mb-5 gap-2 lg:gap-3">
                <Code size={28} className="text-blue-500"/>
                <h1 className="text-2xl md:text-3xl font-medium text-blue-500">Projetos</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((item, index) => (
                    <div key={index}>
                        <ProjetoElement {...item} />
                    </div>
                ))}
            </div>
        </div>
    )
}