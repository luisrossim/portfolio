import { ProjectItem } from "./projectItem";

export function Projects(){
    return (
        <section id="projetos" className="mb-24 mt-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center mt-5 mb-10">Meus projetos</h1>
            <div className="grid grid-cols-1 gap-8">
                <ProjectItem />
            </div>
        </section>
    )
}