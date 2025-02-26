import { BriefcaseBusiness, RefreshCcw } from "lucide-react";
import { ReactElement } from "react";


interface HeaderProps {
    text: string
    icon: ReactElement
}


const HeaderItem = ({text, icon}: HeaderProps) => {
    return (
        <div className="flex items-center gap-2">
            {icon}
            <p className="font-light text-xs">{text}</p>
        </div>
    )
}


export function Header(){
    return (
        <header 
            className="fixed top-0 left-0 w-full z-50 text-slate-600 bg-white/50 backdrop-blur-md border-b"
        >
            <div className="container max-w-[92rem] mx-auto px-6 py-5">
                <div className="flex flex-wrap justify-between gap-2">
                    <HeaderItem text="Portfolio - Luis Gustavo Leal Rossim" icon={<BriefcaseBusiness size={'12px'} />} />
                    <HeaderItem text="22/02/2025" icon={<RefreshCcw size={'11px'} />} />
                </div>
            </div>
        </header>
    )
}