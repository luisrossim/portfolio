import { profile } from "@/data/profile.data";
import { Code } from "lucide-react";
import { ExperienciaElement } from "./ExperienciaElement";

export function Experiencia(){
    return (
        <section>
            <div className="flex items-center mb-5 gap-2 lg:gap-3">
                <Code size={28} className="text-blue-500"/>
                <h1 className="text-2xl md:text-3xl font-medium text-blue-500">Experiência</h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
                {profile.experiencia.map((item, index) => (
                    <div key={index} className="w-full">
                        <ExperienciaElement {...item} />
                    </div>
                ))}
            </div>
        </section>
    )
}