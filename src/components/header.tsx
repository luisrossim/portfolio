import { profile } from "@/data/profile.data"
import { Code } from "lucide-react"
import bg from "../assets/bg.avif"
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export function Header(){
    return (
        <header id="sobre" className="container max-w-[95rem] mx-auto pt-24 lg:pt-32 px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <div className="flex items-center justify-between gap-4 mb-5">
                        <div className="flex items-center gap-2 lg:gap-3">
                            <Code size={28} className="text-blue-500"/>
                            <h1 className="text-2xl md:text-3xl font-medium text-blue-500">Sobre mim</h1>
                        </div>
                        <div className="flex items-center gap-6">
                            <a href={profile.linkedin}>
                                <img src={linkedin} alt="linkedin" className="opacity-50" width={20} height={20} />
                            </a>
                            <a href={profile.github}>
                                <img src={github} alt="github" className="opacity-50" width={20} height={20} />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        {profile.about.map((item, index ) => (
                            <div className="flex flex-col gap-1" key={index}>
                                <div className="flex gap-2 mb-1">
                                    <h2 className="text-blue-500 font-semibold">{item.title}</h2>
                                    <h3 className="font-medium">{item.subtitle}</h3>
                                </div>
                                <div className="flex flex-col gap-1 pl-5 ml-4 border-l border-blue-400 pb-8">
                                    {item.descricao.map((desc, index) => (
                                        <p key={index} className="text-sm md:text-base text-neutral-600">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div    
                    className="min-h-[300px]"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "left",
                        backgroundRepeat: "no-repeat"
                    }}
                ></div>
            </div>
        </header>
    )
}