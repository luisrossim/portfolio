import { BriefcaseBusiness, RefreshCcw } from "lucide-react";

export function Header(){
    return (
        <header className="fixed top-0 left-0 w-full z-50 text-slate-700 font-light bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="container mx-auto px-4 md:px-10 py-2">
                <div className="flex justify-between gap-2">
                    <small className="icon-text"><BriefcaseBusiness size={'12px'} /> Portfolio - Luis Gustavo Leal Rossim</small>
                    <small className="icon-text"><RefreshCcw size={'11px'} /> 03/01/2025</small>
                </div>
            </div>
        </header>
    )
}