import { profile } from "@/data/profile.data";
import { FormacaoElement } from "./FormacaoElement";
import { Code } from "lucide-react";

export function Formacao(){
    return (
        <section>
            <div className="flex items-center mb-5 gap-2 lg:gap-3">
                <Code size={28} className="text-blue-500"/>
                <h1 className="text-2xl md:text-3xl font-medium text-blue-500">Formação Acadêmica</h1>
            </div>

            {profile.formacaoAcademica.map((item, index) => (
                <div key={index}>
                    <FormacaoElement {...item} />
                </div>
            ))}
        </section>
    )
}