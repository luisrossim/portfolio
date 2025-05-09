import { projectsData } from "@/data/projects.data";
import { ProjetoElement } from "./ProjetoElement";

export function Projetos() {
  return (
    <div id="projetos" className="max-w-[1280px] mx-auto px-4 lg:px-6 py-20">
      <div className="flex flex-col gap-4">
        <div className="flex justify-start my-4">
          <h2 className="font-semibold text-2xl lg:text-3xl text-blue-600">Projetos recentes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-6">
          {projectsData.map((item, index) => (
            <div key={index}>
              <ProjetoElement {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}