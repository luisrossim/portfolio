import { ProjectItem } from "./projectItem";

export function Projects(){
    return (
        <section id="projetos" className="border rounded-xl mb-24 p-5">
            <h1 className="text-3xl md:text-4xl font-semibold text-center mt-5 mb-10">Meus projetos</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <ProjectItem />
            </div>
        </section>
    )
}