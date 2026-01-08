import { Button } from "./components/ui/button"

function App() {


  return (
    <div className="mx-4">

      <h1 className="text-3xl font-bold underline my-5">
        Hola Mundo!
      </h1>

      <Button className="mr-4">Click me</Button>

      <Button variant="destructive">Click me</Button>

    </div>
    

  )
}

export default App
