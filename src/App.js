import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header";
import Banner from "./components/Layout/Banner";
import Products from "./components/Home/Products";
import Cart from "./components/Cart/Cart";
import About from "./components/Info/About";
import ContextProvider from "./store/ContextProvider";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <BrowserRouter>
      <ContextProvider>
        <Header setShowCart={setShowCart} />
        <Banner />
        <Cart showCart={showCart} setShowCart={setShowCart} />
        <Switch>
          <Route exact path="/"><Products /></Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
