import { CardProjeto } from "./card-projeto";

export function Projetos(){
    return (
        <div id="projetos">
            <div className="container mx-auto px-2 md:px-10 py-28">
                <div className='flex flex-col gap-4'>
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Projetos</h1>
                    <CardProjeto/>
                </div>
            </div>
        </div>
    )
}