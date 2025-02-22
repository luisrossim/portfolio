import { Calendar, Check, Cog, Github, Globe, Moon, Sparkles } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface ProjectItemProps {
  title: string;
  repositorio: string | null;
  deploy: string | null;
  year: string;
  description: string;
  features: string[];
  technologies: string[];
  images: string[];
  techIcons: string[];
}

export function ProjectItem({...props}: ProjectItemProps) {
  return (
    <div className="bg-slate-100 p-6 border rounded-xl">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-4 border-b pb-6">
          { props.techIcons.map((icon) => (
            <img width={'25px'} src={icon} alt="icon-svg" />
          )) }
        </div>

        <div className="flex flex-col gap-1 py-4">
          <h1 className="text-xl md:text-2xl font-semibold text-slate-800">{props.title}</h1>
          <p className="text-slate-600">{props.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          { props.repositorio 
            ? (
              <div className="flex">
                <a href={props.repositorio} target='_blank' className="flex items-center gap-2 bg-sky-600 text-slate-100 font-medium text-sm rounded-full px-4 py-2">
                  <Github size={15} /> Repositório
                </a>
              </div>
            ) 
            : (
              <div className="bg-slate-400 text-slate-100 font-medium text-sm rounded-full px-4 py-2">
                  Privado
              </div>
            )
          }

          { props.deploy && (
            <div className="flex items-center">
              <a href={props.deploy} target='_blank' className="flex items-center gap-2 bg-emerald-600 text-slate-100 font-medium text-sm rounded-full px-4 py-2">
                  <Globe size={15} /> Deploy
                </a>
            </div>
          ) }
        </div>

        <h3 className="flex items-center gap-2 text-slate-700 font-medium my-4">
          <Calendar size={20} /> {props.year}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="py-4">
          <h3 className="flex items-center gap-2 text-lg font-medium text-slate-700 mb-2">
            <Sparkles size={20} /> Principais funcionalidades:
          </h3>
          <ul className="flex flex-col gap-2 border-l ml-[0.70rem] pl-4">
            {props.features.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check size={15} className="bg-green-500 text-white rounded-full" /> {item}
              </li>
            ))}
          </ul>

          <h3 className="flex items-center gap-2 text-lg font-medium text-slate-700 mt-6 mb-2">
            <Moon size={"20px"} /> Tecnologias:
          </h3>
          <ul className="flex flex-col gap-2 border-l ml-[0.70rem] pl-4">
            {props.technologies.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <Cog size={15} className="text-slate-600" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="self-center">
          <Carousel>
            <CarouselContent>
              {props.images.map((image, index) => (
                <CarouselItem key={index}>
                  <img src={image} className="w-auto h-auto mx-auto max-h-[380px]" alt={`Slide ${index + 1}`} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
