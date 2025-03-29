interface FormacaoElementProps {
    image: string
    instituicao: string
    curso: string
    local: string
    duracao: string
}

export const FormacaoElement = ({...props}: FormacaoElementProps) => {
    return (
        <div className="flex flex-col gap-1 bg-neutral-100 border p-6 text-neutral-700">
            <div className="flex items-center gap-2 font-medium text-neutral-900">
                <img width={'20px'} src={props.image} alt="ifes" />
                <p className='text-lg'>
                    {props.instituicao}
                </p>
            </div>
            <p>{props.curso}</p>
            <p>{props.local}</p>
            <p>{props.duracao}</p>
        </div>
    )
}