import { profile } from "@/data/profile.data";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export function Footer(){
    return (
        <footer className="bg-neutral-100 mt-28">
            <div className="container max-w-[95rem] mx-auto p-32">
                <div className="flex flex-col items-center gap-4 text-neutral-500">
                    <div className="flex flex-col text-center gap-2">
                        <p>&copy; {profile.nome}</p>
                        <p className="text-sm">{profile.area}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href={profile.linkedin}>
                            <img src={linkedin} alt="linkedin" className="opacity-50" width={20} height={20} />
                        </a>
                        <a href={profile.github}>
                            <img src={github} alt="github" className="opacity-50" width={20} height={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}