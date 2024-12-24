export function Experiencias(){
    return (
        <div id="experiencias" className="container mx-auto px-2 md:px-10 py-28">
            <div className='flex flex-col gap-4'>
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Experiências</h1>
                <div className="flex flex-col gap-2">
                    <div id="leds" className="flex flex-col md:flex-row items-center gap-4 w-full">
                        <span className="px-2 bg-slate-200 mr-0 md:mr-4">1</span>
                        <div className="flex flex-col py-0 md:py-6 pr-0 md:pr-8 border-0 md:border-r border-slate-300 md:text-start text-center">
                            <p className="text-2xl font-semibold">LEDS</p>
                            <p className="font-medium">Front-End Developer</p>
                            <p>2023 - 2024 (1 ano e 8 meses)</p>
                        </div>
                        <div className="px-4 w-full md:w-3/4">
                            <p className="text-slate-800">
                                Desenvolvimento do sistema com foco em Angular e Java Spring, criando interfaces responsivas e corrigindo falhas visuais e funcionais. Participação em levantamento de requisitos, projetando, desenvolvendo e testando novas funcionalidades. Utilizei o Spring principalmente para corrigir funcionalidades no backend, garantindo integração com o frontend. Adquiri habilidades em web design responsivo, criação de diagramas de estado e de casos de uso, além de boas práticas de segurança para garantir um sistema seguro e eficiente. Também foi possível adquirir experiência com ferramentas de controle de gestão e versão, Trello e Git.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}