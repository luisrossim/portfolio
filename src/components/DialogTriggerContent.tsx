import { ProjetoElementProps } from "@/types/ProjetoElementProps";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Calendar, Check, Cog } from "lucide-react";


export function DialogTriggerContent(projeto: ProjetoElementProps){
    return (
        <DialogTrigger className="flex text-start flex-col w-full h-full hover:bg-slate-100 duration-300 ease-out border-2 p-4">
          <div className="flex justify-center items-center mx-auto">
            <img 
              draggable={false} 
              src={projeto.images[0]} 
              className="text-center mx-auto max-h-[180px]" 
              alt={`${projeto.title}-image`} 
            />
          </div>

          <p className="mt-6 mb-2 font-medium text-lg">
            {projeto.title}
          </p>
          <p className="text-sm text-slate-600">
            {projeto.description}
          </p>

          <div className="flex flex-wrap gap-4 my-6">
            { projeto.techIcons.map((icon, index) => (
              <img key={index} width={'20px'} src={icon} alt="tech-icon" />
            )) }
          </div>

          <div className="flex items-center gap-2 text-blue-600">
            <Calendar size={16} />
            <p className="text-sm">{projeto.year}</p>
          </div>

          <ul className="flex flex-col gap-2 my-6">
            {projeto.features.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <div>
                  <Check size={15} className="bg-green-500 text-white" />
                </div>
                <p className="text-sm">{item}</p>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col text-slate-600 gap-2">
            {projeto.technologies.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <Cog size={15} />
                <p className="text-sm">{item}</p>
              </li>
            ))}
          </ul>
      </DialogTrigger>
    )
}