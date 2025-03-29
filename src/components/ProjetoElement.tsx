import { AlignLeft, Check, Cog } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ProjetoElementProps {
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

export const ProjetoElement = (props: ProjetoElementProps) => {
  return (
    <Dialog>
        <DialogTrigger className="flex flex-col gap-4 w-full text-start group bg-white transition-all duration-300 ease-out hover:bg-blue-50 border relative border-blue-200 h-full p-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-4">
              { props.techIcons.map((icon) => (
                <img width={'20px'} src={icon} alt="icon-svg" />
              )) }
            </div>
            <p className="text-sm text-blue-500">{props.year}</p>
          </div>

          <div className="flex flex-col gap-1 py-4">
            <h1 className="text-lg md:text-xl font-medium text-neutral-700">{props.title}</h1>
            <p className="text-slate-700 font-light text-base">{props.description}</p>
          </div>

          <div className="flex justify-center py-4">
            <img draggable={false} src={props.images[0]} className="max-h-[200px]" alt={`${props.title}-image`} />
          </div>

          <ul className="flex flex-col gap-2">
            {props.features.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <div>
                  <Check size={15} className="bg-green-500 text-white" />
                </div>
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-2">
            {props.technologies.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
              <Cog size={15} className="text-slate-600" /> {item}
              </li>
            ))}
          </ul>

          <div className="absolute bottom-0 right-0 bg-blue-500 group-hover:bg-blue-600 transition-all duration-300 ease-out p-2">
              <AlignLeft className="text-white" />
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-6xl">
            <DialogHeader>
                <DialogTitle className="text-start mb-5">
                  <div className="flex flex-wrap gap-4">
                    { props.techIcons.map((icon) => (
                      <img width={'20px'} src={icon} alt="icon-svg" />
                    )) }
                  </div>
                  <div className="flex flex-col gap-1 py-4">
                    <h1 className="text-lg md:text-xl font-medium text-neutral-700">{props.title}</h1>
                    <p className="text-neutral-600 font-light text-base">{props.description}</p>
                  </div>
                </DialogTitle>
                <DialogDescription className="text-start">
                  <div className="self-center">
                    <Carousel>
                      <CarouselContent>
                        {props.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <img draggable={false} src={image} className="w-auto h-auto mx-auto max-h-[380px]" alt={`Slide ${index + 1}`} />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}