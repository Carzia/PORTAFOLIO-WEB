

import { Button } from "@/components/ui/button"
import "./estilus.css"
import { NavLink } from "react-router"


export const Pintura = () => {
  return (

    <div className="bg-[#3c8290] min-h-screen text-center p-4 flex flex-col items-center justify-center">

     <h1 className="text-xl my-1 font-medium text-white">
      Bienvenido a mi portfolio de pintura!
    </h1>

    <div>
      <strong>En el encontrarás algunos de mis trabajos artísticos</strong>
    </div>

    <div className="mt-8 flex gap-5">
      <Button variant="tertiarius" size="elongatis">
        <NavLink to={'/'}>Exit</NavLink>
      </Button>

      <Button variant="tertiarius" size="elongatis">
        <NavLink to={'/pintura/Layout'}>Enter</NavLink>
      </Button>

    </div>

    <div className="flex gap-12">
      <img src="/imagines/pintura/Ilustracion2.png" className="object-contain hidden md:block" alt="" width="650px" />

    </div>

    </div>
  
  )
}
