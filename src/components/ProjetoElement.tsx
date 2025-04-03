import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { DialogTriggerContent } from "./DialogTriggerContent";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ProjetoElementProps } from "@/models/ProjetoElementProps";

export const ProjetoElement = (props: ProjetoElementProps) => {
  return (
    <Dialog>
        <DialogTriggerContent {...props} />
        <DialogContent className="max-w-6xl">
            <DialogHeader>
                <DialogTitle className="text-start mb-5">
                  <div className="flex items-center flex-wrap gap-4">
                    { props.techIcons.map((icon, index) => (
                      <img key={index} width={'20px'} src={icon} alt="icon-svg" />
                    )) }
                  </div>
                  <div className="flex flex-col gap-1 py-4">
                    <h1 className="text-lg md:text-xl font-medium text-neutral-700">{props.title}</h1>
                  </div>
                </DialogTitle>
                <DialogDescription className="text-start">
                  <div className="self-center">
                    <Carousel>
                      <CarouselContent>
                        {props.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <img key={index} draggable={false} src={image} className="w-auto h-auto mx-auto max-h-[360px]" alt={`Slide ${index + 1}`} />
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