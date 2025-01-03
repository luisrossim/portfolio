import { Progress } from "./ui/progress";

export interface TechItemProps {
    name: string,
    icon: string,
    progress: number
}

export function Techitem({ name, icon, progress }: TechItemProps){
    return (
        <div className="icon-text">
            <img className="w-[20px]" src={icon} alt={name} />
            <p className="font-light w-[120px]">{name}</p>
            <Progress value={progress} />
        </div>
    )
}