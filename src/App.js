import React, { useContext, useState } from "react";
import { Route, Switch} from "react-router-dom";
import Header from "./components/Layout/Header";
import Banner from "./components/Layout/Banner";
import Products from "./components/Main/Products";
import Home from "./components/Main/Home";
import Cart from "./components/Cart/Cart";
import About from "./components/Info/About";
import Contact from "./components/Info/Contact";
import UserForm from "./components/Auth/UserForm";
import Context from "./store/Context";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const authCtx = useContext(Context)

  return (
    <>
      <Header setShowCart={setShowCart} />
      <Banner />
      <Cart showCart={showCart} setShowCart={setShowCart} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/store">
          {authCtx.isLoggedIn&&<Products setShowCart={setShowCart} />}
          {!authCtx.isLoggedIn&&<UserForm/>}
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/auth">
          <UserForm />
        </Route>
      </Switch>
    </>
  );
};

export default App;
