
import { NavLink } from "react-router"
import "./estilus.css"
import {Home, Instagram, Loader2, Mail, MapPin, Menu } from "lucide-react"
import {
  NavigationMenu,

  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  
  
} from "@/components/ui/navigation-menu"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Calendar } from "@/components/ui/calendar"

const photos = ["bodegon2", "bodegon4", "experi1", "experi2","experi4","experi5","metro1","metro2","metro4","metro5","paisaje3", "paisaje5", "paisaje8"]

export const Fotografia = () => {

   const [estLoading, setEstLoading] = useState<boolean>(false)
    const [dies, setDies] = useState<Date>();


  const [videreMenu, setVidereMenu] = useState<boolean>(true);
   const handleResize = () => {

  if (window.innerWidth <= 640 ) {
    setVidereMenu(false)
  } else { setVidereMenu(true)}
 }
  
 useEffect(() => {
  
  window.addEventListener("resize", handleResize)

   return () => {
     window.removeEventListener("resize", handleResize)
   }
 }, []);
  
 
  const mittereSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

     setEstLoading(true);


    await new Promise(resolve => setTimeout(resolve, 2000));

    setEstLoading(false);


    window.location.reload();
   }

 
  return (
     <div className="fotografia">
        
        <Toggle
    className="fixed top-2 right-2 z-50 bg-white sm:hidden"
    onClick={()=> setVidereMenu ( !videreMenu )}
    >
     <Menu className="size-9"/>
    </Toggle>

       
       {

         videreMenu && (

           
          <nav className="extra-nav flex flex-col sm:flex-row justify-between px-3"> 
        <NavLink to="/">
       <Home className="icon-home"/>
       </NavLink>

       <NavigationMenu>
       <NavigationMenuList className="flex flex-col sm:flex-row">
       
        <NavigationMenuItem>
        <a href="#">
          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-md hover:bg-[#2a2829] hover:text-white transition-all ` }>
            Portada
            </NavigationMenuLink>
        </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
        <a href="#imagenes">
          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-md hover:bg-[#2a2829] hover:text-white transition-all ` }>
            Obras
            </NavigationMenuLink>
        </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
        <a href="#videre">
          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-md hover:bg-[#2a2829] hover:text-white transition-all ` }>
            Galeria
            </NavigationMenuLink>
        </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
        <a href="#contactus">
          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-md hover:bg-[#2a2829] hover:text-white transition-all ` }>
            Contacto
            </NavigationMenuLink>
        </a>
        </NavigationMenuItem>


        </NavigationMenuList>
        </NavigationMenu>


       </nav>

         ) 
       }

       <header className="titulus">
        <h1>Fotografía</h1>
        
        <div id="titulus-foto" className="titulus-img">
        
        </div>
       </header>


       <section id="imagenes">
    <div className="bodegon-arca">
      <div className="item unus">
        <div className="notitia">
          <h2 className="font-bold">Bodegon Irreal</h2>
          <p>Serie fotográfica basada en la idea del escenificar una escena, en este caso la obra se inspira en un bodegón clásico pero con un toque moderno y atipico lejos de una naturaleza muerta clásica.</p>
          <small>Foto realizada con Kodak PixPro AZ401</small>
        </div>
        <img src="./imagines/fotografia/bodegon4.jpg"/>
      </div>

      <div className="item duo">
        <div className="notitia">
          <h2 className="font-bold">Metro</h2>
          <p> Este proyecto fotografico fue realizado en el metro, este espacio refleja un lugar impersonal pero que cobra vida con el flujo constante de personas que lo atraviesan volviendo el espacio habitado en un escenario lleno de narrativas.</p>
          <small> Foto realizada con Kodak PixPro AZ401</small>
        </div>
        <img src="./imagines/fotografia/metro1.jpg"/>
      </div>
      
      <div className="item tribus">
        <div className="notitia">
          <h2 className="font-bold">Experimentación</h2>
          <p>La idea para realizar esta serie fotográfica era la de experimentar con el material intentando adaptarse a las utilidades de una cámara digital más bien de uso cotidiano, casero lejos de un material profesional. </p>
          <small>Canon Ixus 8x </small>
        </div>
        <img src="./imagines/fotografia/experi5.jpg"/>
      </div>
    </div>

    <div className="foto-titulus">
      <h1>Fotografías realizadas en 2024-2025 </h1>
    </div>
 </section>

 <section id="videre" className="w-full flex justify-center min-h-[60vh] lg:min-h[65vh] bg-[#B22222]">
        
       <Carousel 
       className="w-full max-w-md md:max-w-2xl lg:max-w-4xl bg-[#B22222]"
       plugins={[Autoplay ({ delay: 2000})]}
       opts={{
        loop:true
       }}
       
       >
      
      <CarouselContent>
        { photos.map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-[#f2efec] border-none">
                <CardContent className="flex aspect-[5/5] items-center justify-center p-6">
                 <img 
                 src= {`./imagines/fotografia/${photos[index]}.jpg`} 
                 alt="{ `Imagen ${index + 1} de Fotografia`}" 
                 className="w-full h-full object-cover"
                 />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious  className="hidden md:flex justify-center items-center text-white
      bg-black"/>
      <CarouselNext className="hidden md:flex justify-center items-center text-white
      bg-black"/>
    </Carousel>


 </section>

  <section id="contactus" className="w-full py-12 bg-white">

        <div className="container mx-auto max-w-5xl px-4">

          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contacta conmigo para más información!</h2>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center">

            {/* Mapa de Google Maps */}
            <div className="hidden lg:block w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-square">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.753567212221!2d-0.41279639999999995!3d39.3618169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604daaac26adfb%3A0x1292be7dd8949828!2sRambla%20de%20la%20Independ%C3%A8ncia%2C%209%2C%2046460%20Silla%2C%20Val%C3%A8ncia!5e0!3m2!1ses!2ses!4v1765314940759!5m2!1ses!2ses" 
                  className="w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Formulario */}
              <div className="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">
              <form  
              className="space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square"
              onSubmit={ mittereSubmit}
              >
                <div className="space-y-2">
            

                  <Label htmlFor="nomen">Nombre</Label>
                 <Input id="nomen" required />

                </div>
                
                <div className="space-y-2">
              
                 <Label htmlFor="cognomen">Apellidos</Label>
                 <Input id="cognomen" required />

                </div>

                <div className="space-y-2">

                 <Label> Tipo de consulta </Label>

                  <Select required>
                <SelectTrigger className="border-gray-200 text-gray-500 bg-white">
                <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                 <SelectContent className="bg-white">
                   <SelectItem value="contrato">¿Cuál es tu tarifa según el tipo de encargo?</SelectItem>
                       <SelectItem value="entrega">¿En que formato me entregarás el trabajo?</SelectItem>
                  <SelectItem value="estilo">¿Que estilos manejas?</SelectItem>
                  <SelectItem value="tiempo">¿En caso de querer comprar/pactar un proyecto cuanto tardaría?</SelectItem>
                  <SelectItem value="mas">Otro tipo de consulta</SelectItem>
                     </SelectContent>
                       </Select>

                </div>

                <div className="space-y-2">

                  <Label>Reserva una cita para contactar conmigo </Label>
                   
                   <Popover>
                   <PopoverTrigger asChild>
                        <Button variant={"outline"}>
                       
                       { dies 
                       ? dies.toLocaleDateString() 
                       : <span>Selecciona una fecha</span>
                       }
                       
                      
                  </Button>
                   </PopoverTrigger>
                   <PopoverContent>
                     <Calendar
                    mode="single"
                    selected={dies}
                    onSelect={setDies}
                    className="rounded-lg border"
                        />
                   </PopoverContent>
                   </Popover>

                </div>

                <Button 
               type="submit"
               className="w-full bg-[rgb(228,24,24)] hover:bg-[#B22222] text-white text-md"
              disabled={ estLoading }
               >
               

               {
                estLoading ? (<Loader2 className="mr-2 h-4 animate-spin" />) 
                : null
               }

               {
                estLoading 
                ? "Enviando"
                : "Enviar solicitud"
               }        


               </Button>
              
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#B22222] text-white py-12">
        <div className="flex flex-col md:flex-row md:justify-around gap-8 max-w-3xl mx-auto">

          <div className="space-y-4 text-center md:text-left">

            <h3 className="text-xl font-bold text-white">Información de Contacto</h3>
            
            <div className="space-y-2">
              <p className="flex items-center gap-2 justify-center md:justify-start">


              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-5 h-5"/>
                carmegargui@gmail.com

              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                
                <MapPin/>
                Silla, Valencia (España)

              </p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4 text-center md:text-left text-white">
            <h3 className="text-xl font-bold text-white">Puedes seguirme y ver más de mi trabajo en:</h3>
            <div className="flex gap-8 justify-center">
        
             <Instagram className="x-10 h-10 hover:text-white"/>
              @carzia_
              
            </div>
          </div>
        </div>
      </footer>

   </div>
  )
}



