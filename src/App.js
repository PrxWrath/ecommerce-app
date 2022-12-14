import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Banner from "./components/Home/Banner";
import Products from "./components/Home/Products";
import Cart from "./components/Cart/Cart"
import ContextProvider from "./store/ContextProvider"

const App = () => {
  const [showCart, setShowCart] = useState(false);
  
  return (
    <ContextProvider>
      <Header setShowCart = {setShowCart}/>
      <Banner/>
      <Products/>
      <Cart showCart={showCart} setShowCart={setShowCart}/>
    </ContextProvider>
  );
}

export default App;
