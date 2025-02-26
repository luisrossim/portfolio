import { projectsData } from "@/data/projectsData";
import { ProjectItem } from "./projectItem";

export function Projects(){
    return (
        <section className="container max-w-[92rem] mx-auto px-6 pb-36">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-8">Meus projetos</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                { projectsData.map((item, index) => (
                    <div key={index}>
                        <ProjectItem {...item} />
                    </div>
                )) }
            </div>
        </section>
    )
}