import { profile } from "@/data/profile.data";
import { Image } from "@/utils/images";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
	return (
		<div className="max-w-[1280px] mx-auto px-4 lg:px-6">
			<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
				<div className="flex flex-col gap-5 pt-32 pb-12 lg:pb-28">
					<h2 className="text-blue-600 font-medium text-sm">{profile.area}</h2>
					<h1 className="text-4xl lg:text-5xl font-bold">{profile.nome}</h1>
					<p className="text-slate-700 md:w-2/3">
						Mais de 2 anos de experiência desenvolvendo soluções digitais, com formação completa em Sistemas de Informação.
					</p>

					<a 
						href={profile.linkedin} 
						target="_blank" 
						className="bg-blue-600 px-16 py-4 mt-4 text-white self-start hover:bg-blue-700 duration-300 ease-out"
					>
						<span className="flex items-center gap-1">Contatar <ArrowUpRight size={18} /></span>
					</a>
				</div>

				<div
					style={{
						backgroundImage: `url(${Image.Hero})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat'
					}}
					className="relative h-[200px] lg:h-[460px] w-full"
				></div>
			</div>
		</div>
	)
}