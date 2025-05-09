import { profile } from "@/data/profile.data";

export function Trajetoria() {
	return (
		<div id="trajetoria" className="max-w-[1280px] mx-auto px-4 lg:px-6 py-20">
			<div className="flex flex-col gap-4">
				<div className="flex justify-start my-4">
          <h2 className="font-semibold text-2xl lg:text-3xl text-blue-600">Trajetória</h2>
        </div>
				
				<div className="flex flex-col gap-1">
					{profile.about.map((item, index ) => (
						<div className="flex flex-col gap-1" key={index}>
							<div className="flex gap-2 mb-1">
								<h2 className="text-blue-500 font-semibold">{item.title}</h2>
								<h3 className="font-semibold text-neutral-900">{item.subtitle}</h3>
							</div>
							<div className="flex flex-col gap-1 pl-5 ml-4 border-l border-blue-500 pb-12">
								{item.descricao.map((desc, index) => (
									<p key={index} className="text-neutral-700">
										{desc}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}