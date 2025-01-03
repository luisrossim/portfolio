import { Calendar, Github, Globe, Moon, Sparkles } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { projectsData } from "@/data/projectsData";

export function ProjectItem() {
  return (
    <>
      { projectsData.map((projeto) => (
        <div key={projeto.id} id={`card-projeto-${projeto.id}`} className="bg-slate-50 p-5 border rounded-xl">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl md:text-2xl font-semibold">{projeto.title}</h1>
            <p>{projeto.description}</p>
            
            { projeto.repositorio 
              ?
              <div className="flex flex-wrap gap-2 self-start my-4">
                  <a href={projeto.repositorio} target='_blank' className="icon-text bg-sky-600 text-slate-100 font-semibold text-sm rounded-full px-3 py-1">
                      <Github size={'12px'} /> Repositório
                  </a>
                  { projeto.deploy 
                    ?
                    <a href={projeto.deploy} target='_blank' className="icon-text bg-emerald-600 text-slate-100 font-semibold text-sm rounded-full px-3 py-1">
                      <Globe size={'15px'} /> Deploy
                    </a>
                    : 
                    ""
                  }
              </div>
              :
              <div className="self-start bg-black text-slate-100 font-semibold text-sm rounded-full px-3 py-1 my-4">
                  Privado
              </div>
            }

            <h3 className="flex items-center gap-2 text-lg font-light mb-4">
              <Calendar size={"20px"} /> {projeto.year}
            </h3>
          </div>
            
          {/* Funcionalidades */}
          <h3 className="flex items-center gap-2 text-lg font-medium mb-2">
            <Sparkles size={"20px"} /> Principais funcionalidades:
          </h3>
          <ul className="pl-8 mb-6">
            {projeto.features.map((feature, index) => (
              <li key={index}>
                - {feature.name}
              </li>
            ))}
          </ul>

          {/* Tecnologias */}
          <h3 className="flex items-center gap-2 text-lg font-medium mb-2">
            <Moon size={"20px"} /> Tecnologias:
          </h3>
          <ul className="pl-8">
            {projeto.technologies.map((tech, index) => (
              <li key={index}>- {tech}</li>
            ))}
          </ul>

          {/* Imagens */}
          <div className="mt-6">
            <Carousel>
              <CarouselContent>
                {projeto.images.map((image, index) => (
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
      ))}
    </>
  );
}
