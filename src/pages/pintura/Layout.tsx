import { Button } from '@/components/ui/button';
import { Outlet, NavLink } from 'react-router';



export const Layout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        
        
        
        <header className="bg-[#3c8290] w-full border border-[#2f4448]">
             
            
        
            <div className="flex flex-col md:flex-row justify-between items-center p-3 mx-auto max-w-[1200px] md:px-20 gap-6 pt-3 ">
              <NavLink 
              to={'/pintura/Layout/collectione'}
              className={({ isActive }) => isActive ? 'font-bold' : ''}
              >
              Obras
              </NavLink>


              <NavLink 
              to={'/pintura/Layout'}
              className={ ({ isActive }) => isActive ? 'font-bold' : '' }
              end={true}
               >
              Sobre mi
              </NavLink>
                

                <Button variant="tertiarius" size="elongatis" >
                  <NavLink to={'/pintura'}>Exit</NavLink>
                </Button>
                
            </div>
        </header>

         <main>

         <Outlet />

         </main>

         <footer className="bg-[#3c8290] w-full border border-[#2f4448] text-center py-6">
            <div>
	       <strong>Apps y arte multimedia</strong> - 2025
            </div>

           <small>
	          This app was done by Carmen García
           </small>
         </footer>

           </div>
  )
}
