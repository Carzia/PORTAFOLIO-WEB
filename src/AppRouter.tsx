import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import { Home, Fotografia, Pintura, Layout, Circa, Collectione, Quote, } from "./pages"






export const AppRouter = () => {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={ <Home />} />
         <Route path="/fotografia" element={<Fotografia/>} />
         <Route path="/pintura" element={<Pintura/>} />

           <Route path="/pintura/Layout" element={<Layout/>} >
           <Route index element={<Circa/>}/>
           <Route path="/pintura/Layout/collectione" element={<Collectione/>}/>
           <Route path="/pintura/Layout/collectione/:id" element={<Quote />} />
           </Route>
          
            

        <Route path="*" element={ <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
