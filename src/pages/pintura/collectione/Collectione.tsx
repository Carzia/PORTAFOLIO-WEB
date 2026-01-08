import { Card, CardContent, } from "@/components/ui/card"
import { useState } from "react"
import { obras, } from "../data/data"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useNavigate } from "react-router";

const inPagina = 4;

export const Collectione = () => {

    const navigate = useNavigate();

  const [paginaActual, setPaginaActual] = useState<number>(0);

   

  const totalPaginas = Math.ceil(obras.length / inPagina );

  const inicio = paginaActual * inPagina
  
  const fin = inicio + inPagina;
    const listaPintura = obras.slice(inicio, fin);

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full max-w-[1400px] my-8">
        
        <div className="text-center">
            <h1 className="font-bold text-xl lg:text-4xl mb-5">
                Hola, este es el apartado de pintura.
            </h1>
            <p className="mb-5">Haz click sobre la obra que más te guste!</p>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mx-auto">

       {/* <Card className="cursor-pointer w-[220px] h-[220px] hover:bg-[#dff9ff] transition-colors">
       <CardContent className="flex flex-col items-center justify-center gap-1 h-full px-0">
       <img src="/imagines/pintura/pintura1.jpg" 
       className="w-48 h-42 object-contain" 
       alt="Sin titulo"
       />
       <h2 className="font-medium text-lg"> Sin Titulo, 2025</h2>
       </CardContent>
       </Card> */}
    
         {

           listaPintura.map( item => (
            <Card 
            key={ item.id }
            className="cursor-pointer w-[220px] h-[220px] hover:bg-[#dff9ff] transition-colors"
            >
           <CardContent
           onClick={()=> (
            navigate(`/pintura/Layout/collectione/${ item.id }`)
            )}
           className="flex flex-col items-center justify-center gap-1 h-full px-0">
           <img src={`/imagines/pintura/${ item.imago }`} 
            className="w-48 h-42 object-contain" 
            alt=""
            />
            <h2 className="font-medium text-lg"> {item.nomen}</h2>
            </CardContent>
            </Card>
           ))
           }
       
       

        </div>

      <Pagination className="mt-8">
      <PaginationContent className="flex justify-center gap-2">
        <PaginationItem>
          <PaginationPrevious  
          onClick={() => {
            if (paginaActual > 0) setPaginaActual(paginaActual -1);
           }}
           className={`${
            paginaActual === 0
            ?"pointer-events-none opacity-50"
            :"hover:bg-[#379cb0] hover:border hover:border-black"
           }`}
          
          />
        </PaginationItem>

        {
          [...Array(totalPaginas)].map((_, i) => (
            <PaginationItem key={i}>
            <PaginationLink
            isActive={ paginaActual === i}
            onClick={ () => {
              setPaginaActual(i)
            }}
            className={`${
            paginaActual === i
            ?"bg-[#3c8290] text-white border border-black"
            :"hover:bg-[#ffde00] hover:border hover:border-black"
           }`}
            >
              {i +1}
            </PaginationLink>
            </PaginationItem>
          ) )
        }
        
        <PaginationItem>
          <PaginationNext 
          onClick={() => {
            if (paginaActual < totalPaginas -1) setPaginaActual(paginaActual +1);
           }}
           className={`${
            paginaActual === totalPaginas -1
            ?"pointer-events-none opacity-50"
            :"hover:bg-[#379cb0] hover:border hover:border-black"
           }`}
          />
        </PaginationItem>

        
      </PaginationContent>
    </Pagination>
    
    </div>
  )
}
