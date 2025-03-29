import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { AlignLeft } from "lucide-react"


interface ExperienciaElementProps {
    image: string
    empresa: string
    cargo: string
    tipo: string
    duracao: string
    descricao: string
}

export const ExperienciaElement = (props: ExperienciaElementProps) => {
    return (
        <>
            <Dialog>
                <DialogTrigger className="w-full text-start group">
                    <div className="flex flex-col gap-1 bg-white group-hover:bg-blue-50 transition-all duration-300 ease-out border-blue-200 border py-6 pl-6 pr-12 text-neutral-700 relative">
                        <div className="flex items-center gap-2 font-medium text-slate-900">
                            <img width={'20px'} src={props.image} alt="exp" />
                            <p className='text-lg'>
                                {props.empresa}
                            </p>
                        </div>
                        <p>{props.cargo}</p>
                        <p>{props.tipo}</p>
                        <p>{props.duracao}</p>

                        <div className="absolute bottom-0 right-0 bg-blue-500 group-hover:bg-blue-600 transition-all duration-300 ease-out p-2">
                            <AlignLeft className="text-white" />
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-start mb-5">
                            <div className="flex items-center gap-4 font-medium text-slate-900">
                                <img width={'40px'} src={props.image} alt="exp" />
                                <div className="flex flex-col">
                                    <p className='text-lg'>
                                        {props.empresa}
                                    </p>
                                    <span className="text-neutral-600 font-light text-base">{props.cargo}</span>
                                </div>
                            </div>
                        </DialogTitle>
                        <DialogDescription className="text-start">
                            {props.descricao}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}