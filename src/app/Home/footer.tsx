import { Codearena } from "@/components/common/Codearena"
import { Copyright, Github, XIcon, } from "lucide-react"

const Footer = () => {
  return (<footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-fixed border border-transparent  border-t-gray-600  flex justify-between items-center">
    <div className="">
      <div className="flex gap-2 items-center ">
        <Codearena />
        <h1 className="text-gray-200 font-bold lowercase text-[20px]">Codearena</h1>
      </div>
      <div className="pl-2 flex justify-start items-center gap-2">
        <span>Copyright</span><Copyright size={12} /><span>2025</span>
      </div>
    </div>
    <div className="flex gap-4">
      <a href="https://x.com/thekbbohara" className="bg-[#1e293b] w-8 h-8 rounded-[1px] flex items-center justify-center p-2 "><XIcon className="bg-transparent" /></a>
      <a href="https://github.com/thekbbohara/codearena.pro" className="bg-[#1e293b] w-8 h-8 rounded-[1px] flex items-center justify-center p-2"><Github className="bg-transparent text-white" /></a>
    </div>
  </footer>)
}
export default Footer
