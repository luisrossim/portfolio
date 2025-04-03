import { ProjetoElementProps } from "@/models/ProjetoElementProps";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { AlignLeft, Calendar, Check, Cog } from "lucide-react";


export function DialogTriggerContent(projeto: ProjetoElementProps){
    return (
        <DialogTrigger className="flex flex-col gap-4 w-full text-start group bg-white transition-all duration-300 ease-out hover:bg-blue-50 border relative border-blue-200 h-full p-6">
        <div className="flex items-center flex-wrap gap-4">
          { projeto.techIcons.map((icon, index) => (
            <img key={index} width={'20px'} src={icon} alt="icon-svg" />
          )) }
        </div>

        <div className="flex flex-col gap-1 py-4">
          <h1 className="text-lg md:text-xl font-medium text-neutral-700">{projeto.title}</h1>
          <p className="text-slate-700 font-light text-base">{projeto.description}</p>
        </div>

        <div className="flex justify-center mx-auto py-4">
          <img draggable={false} src={projeto.images[0]} className="text-center mx-auto max-h-[200px]" alt={`${projeto.title}-image`} />
        </div>

        <div className="flex items-center gap-2">
            <Calendar size={16} className="text-blue-500" />
            <p className="text-sm text-blue-500">{projeto.year}</p>
        </div>
        <ul className="flex flex-col gap-2">
          {projeto.features.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <div>
                <Check size={15} className="bg-green-500 text-white" />
              </div>
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col text-neutral-600 gap-2">
          {projeto.technologies.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Cog size={15} className="text-neutral-600" /> {item}
            </li>
          ))}
        </ul>

        <div className="absolute bottom-0 right-0 bg-blue-500 group-hover:bg-blue-600 transition-all duration-300 ease-out p-2">
            <AlignLeft className="text-white" />
        </div>
      </DialogTrigger>
    )
}