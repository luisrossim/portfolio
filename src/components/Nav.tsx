import { useState } from "react";
import { profile } from "@/data/profile.data";
import { ArrowRight, Menu, X } from "lucide-react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 border-b bg-white">
            <div className="container max-w-[100rem] mx-auto p-5">
                <div className="flex justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <img src={profile.image} className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-full" alt="profile-image" />
                        <div className="flex flex-col">
                            <h1 className="text-base lg:text-lg">{profile.nome}</h1>
                            <h2 className="text-sm lg:text-base font-light text-gray-600">{profile.area}</h2>
                        </div>
                    </div>
                    
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
                        { isMenuOpen ? <X size={28} /> : <Menu size={28} /> }
                    </button>

                    <nav className={`${isMenuOpen ? "block" : "hidden"} lg:flex absolute lg:static top-20 left-0 w-full bg-white lg:w-auto lg:bg-transparent shadow-md lg:shadow-none p-16 lg:p-0`}>
                        <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                            <li>
                                <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="relative group text-neutral-600">
                                    <span className="p-1 font-light">Sobre mim</span>
                                    <span className="absolute left-0 -bottom-2 h-[2px] bg-blue-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#projetos" onClick={() => setIsMenuOpen(false)} className="relative group text-neutral-600">
                                    <span className="p-1 font-light">Projetos</span>
                                    <span className="absolute left-0 -bottom-2 h-[2px] bg-blue-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#tecnologias" onClick={() => setIsMenuOpen(false)} className="relative group text-neutral-600">
                                    <span className="p-1 font-light">Tecnologias</span>
                                    <span className="absolute left-0 -bottom-2 h-[2px] bg-blue-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                                </a>
                            </li>
                            <li>
                                <a href={profile.linkedin} className="flex items-center gap-16 bg-blue-600 text-white font-light px-5 py-3">
                                    <span>Entrar em contato</span>
                                    <ArrowRight size={20} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
