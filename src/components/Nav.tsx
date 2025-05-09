import { profile } from "@/data/profile.data";
import useScrollPosition from "@/hooks/useScroll";
import { ArrowUpRight, Menu, XIcon } from "lucide-react";
import { useState } from "react";

interface NavItemProps {
  title: string;
  redirectTo: string;
  closeMenu?: () => void
  icon?: boolean
}

const NavItem = (props: NavItemProps) => {
  return (
    <li>
        <a 
            href={props.redirectTo} 
            onClick={props.closeMenu}
            className="relative group"
        >
            <span className="flex items-center group-hover:text-blue-600 duration-300 text-2xl lg:text-base">
                <span>{props.title}</span>
                {props.icon && <ArrowUpRight className="ml-1 mb-1" size={15} />}
            </span>
            <span className="absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-700 lg:duration-300 w-0 group-hover:w-full"></span>
        </a>
    </li>
  );
};

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollY = useScrollPosition();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
        {isMenuOpen && (
            <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={closeMenu}
            />
        )}

        <div className={`sticky top-0 z-50 w-full ${isMenuOpen ? "bg-white" : "bg-white/75"} backdrop-blur-xl border-b`}>
            <div className="max-w-[1280px] mx-auto py-4 px-4 lg:px-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 h-[40px] lg:h-[50px]">
                        <img 
                            src="https://avatars.githubusercontent.com/luisrossim" 
                            alt="icon" 
                            width={40} 
                            draggable="false" 
                            className="rounded-full"
                        />

                        <div className="flex flex-col">
                            <div className={`transition-all duration-500 overflow-hidden ${
                                (scrollY > 180 || isMenuOpen) ? "opacity-100 max-h-10" : "opacity-0 max-h-0"
                                }`}
                            >
                                <p className="text-xs mt-1">
                                    {profile.area}
                                </p>
                                <p className="font-medium">
                                    {profile.nome}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        className="lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <XIcon size={32} /> : <Menu size={32} /> }
                    </button>

                    <nav
                    className={`${isMenuOpen ? "block bg-white" : "hidden"} absolute top-full left-0 lg:right-0 lg:w-max w-full p-2 lg:static lg:block border-b lg:border-b-0`}
                    >
                        <ul className="flex flex-col p-4 lg:flex-row gap-8 lg:p-0">
                            <NavItem title="Projetos" redirectTo="#projetos" closeMenu={closeMenu} />
                            <NavItem title="Tecnologias" redirectTo="#tecnologias" closeMenu={closeMenu} />
                            <NavItem title="Trajetoria" redirectTo="#trajetoria" closeMenu={closeMenu} />
                            <NavItem title="Github" redirectTo={profile.github} icon={true} />
                            <NavItem title="Linkedin" redirectTo={profile.linkedin} icon={true} />
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </>
  );
}
