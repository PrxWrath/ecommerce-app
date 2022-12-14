import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Banner from "./components/Home/Banner";
import Products from "./components/Home/Products";
import Cart from "./components/Cart/Cart"
const App = () => {
  const [showCart, setShowCart] = useState(false)
  
  return (
    <>
      <Header setShowCart = {setShowCart}/>
      <Banner/>
      <Products/>
      <Cart showCart={showCart} setShowCart={setShowCart}/>
    </>
  );
}

export default App;
