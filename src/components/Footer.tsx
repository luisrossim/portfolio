import { RefreshCcw } from "lucide-react";

export function Footer(){
  return (
    <div className="grid grid-cols-1 relative">
      <div className="h-12 bg-blue-100"></div>
      <div className="h-12 bg-blue-300"></div>
      <div className="h-44 bg-blue-700"></div>
      <div className="h-16 bg-black"></div>

      <div className="absolute bottom-5 right-5 flex gap-2 items-center text-slate-400">
        <RefreshCcw size={12} />
        <span className="text-xs">5/2025</span>
      </div>
    </div>
  )
}