import { Tech } from "./Tech";

export function Tecnologias() {
  return (
    <div id="tecnologias" className="max-w-[1280px] mx-auto px-4 lg:px-6 py-20">
      <div className="flex flex-col gap-4">
        <div className="flex justify-start my-4">
          <h2 className="font-semibold text-2xl lg:text-3xl text-blue-600">Tecnologias mais utilizadas</h2>
        </div>

        <Tech />
      </div>
    </div>
  )
}