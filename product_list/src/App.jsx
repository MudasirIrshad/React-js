import Header from './compnents/header'
import './App.css'
import Products from './compnents/product'

function App() {
  
  return (
    <>
    <Header/>

    <Products img="../src/assets/jacket.jpg" name="Honda Jacket" price="5000"/>


    <Products img="../src/assets/ybr.png" name="Yamaha YBR" price="250000"/>


    <Products img="../src/assets/iphone.jpg" name="Iphone 15 pro" price="1000"/>


    <Products img="../src/assets/rado.jpg" name="Rado Watch" price="5000"/>
    </>
  )
}

export default App
