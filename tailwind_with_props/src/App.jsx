import "./App.css"
import Card from "./components/card"


function App() {
  

  return (
    <div className="ring-4 p-4 rounded-xl">
      <h1 className="bg-green-500 m-4 rounded-xl">hello</h1>

      <div className="flex ">
      <Card name="Mudasir" src="../src/assets/img.jpg"/>
      <Card name="Mudasir" src="../src/assets/img1.jpg"/>
      </div>
     </div>
  )
}

export default App
