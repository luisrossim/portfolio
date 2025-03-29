import { Progress } from "./ui/progress";

export interface TechElementProps {
    name: string,
    icon: string,
    progress: number
}

export function TechElement({ name, icon, progress }: TechElementProps){
    return (
        <div className="flex items-center gap-2">
            <img className="w-[20px]" src={icon} alt={name} />
            <p className="text-blue-400 font-light w-[120px]">{name}</p>
            <Progress value={progress} />
        </div>
    )
}