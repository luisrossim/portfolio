import { profile } from "@/data/profile.data";
import { Image } from "@/utils/images";

export function Hero() {
	return (
		<div className="max-w-[1280px] mx-auto px-4 lg:px-6">
			<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
				<div className="flex flex-col gap-5 pt-28 pb-12 lg:pb-28">
					<h2 className="text-slate-600 font-light">{profile.area}</h2>
					<h1 className="text-4xl lg:text-5xl font-bold">{profile.nome}</h1>
					<p className="text-slate-800 md:w-2/3">
						Mais de 2 anos de experiência desenvolvendo soluções digitais, com formação completa em Sistemas de Informação.
					</p>

					<a 
						href={profile.linkedin} 
						target="_blank" 
						className="bg-blue-600 px-16 py-4 mt-4 text-white self-start hover:bg-blue-700 duration-300 ease-out"
					>
						<span>Contatar</span>
					</a>
				</div>

				<div
					style={{
						backgroundImage: `url(${Image.Hero})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat'
					}}
					className="relative h-[200px] lg:h-full w-full brightness-90"
				>
					<div className="absolute bottom-5 right-5 h-[5px] w-[150px] bg-white"></div>
					<div className="absolute bottom-5 right-5 h-[150px] w-[5px] bg-white"></div>
				</div>
			</div>
		</div>
	)
}