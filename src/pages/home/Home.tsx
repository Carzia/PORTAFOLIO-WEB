

import { Button } from "@/components/ui/button";
import { NavLink } from 'react-router';



export const Home = () => {

  
  return (
    <>

      <div className="bg-[rgb(255,255,255)] h-screen text-black font-sans text-center
     flex flex-col items-center justify-center gap-12">

       <img className="fixed opacity-70" src="./ilustracion.png" alt="" />

     <h1 className=" text-5xl md:text-7xl lg:text-8xl font-bold pb-5 md:pd-20 z-10 transition-all">
      <span>Portfolio Web</span>
     </h1>

      

      <div className="z-10">
       <Button variant="default" className="bg-[rgb(252,30,30)] mt-70 mr-2 md:py-5 md:px-6 md:text-lg hover:bg-[rgba(151,196,227,0.7)] transition-all grid-cols-2">
       <NavLink to="/fotografia">Fotografía</NavLink>
       </Button>

       <Button variant="default" className="bg-[rgb(252,30,30)] mt-70 mr-2 md:py-5 md:px-6 md:text-lg hover:bg-[rgba(151,196,227,0.7)] transition-all">
       <NavLink to="/pintura">Pintura</NavLink>
       </Button>
      </div>

      </div>

      
    
    </>
  )
}
