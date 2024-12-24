import { BriefcaseBusiness, RefreshCcw } from "lucide-react";

export function Header(){
    return (
        <header className="fixed top-0 left-0 w-full z-50 text-slate-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-slate-300">
            <div className="container mx-auto px-4 md:px-10 py-4">
                <div className="flex justify-between gap-2">
                    <small className="flex items-center gap-2"><BriefcaseBusiness size={'12px'} /> Portfolio - Luis Gustavo Leal Rossim</small>
                    <small className="flex items-center gap-2"><RefreshCcw size={'11px'} /> 16/12/2024</small>
                </div>
            </div>
        </header>
    )
}