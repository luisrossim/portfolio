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
            <p className="text-sm">{text}</p>
        </div>
    )
}


export function Header(){
    return (
        <header 
            className="fixed top-0 left-0 w-full z-50 text-slate-700 bg-white/50 backdrop-blur-lg border-b"
        >
            <div className="container max-w-[90rem] mx-auto px-6 py-4">
                <div className="flex flex-wrap justify-between gap-2">
                    <HeaderItem text="Portfolio - Luis Gustavo Leal Rossim" icon={<BriefcaseBusiness size={'12px'} />} />
                    <HeaderItem text="22/02/2025" icon={<RefreshCcw size={'11px'} />} />
                </div>
            </div>
        </header>
    )
}