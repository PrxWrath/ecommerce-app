import React, { Suspense, useContext, useState } from "react";
import { Route, Switch} from "react-router-dom";
import Header from "./components/Layout/Header";
import Banner from "./components/Layout/Banner";
import Context from "./store/Context";
import Loader from "./components/Layout/Loader";

const Products = React.lazy(()=>import('./components/Main/Products'));
const Home = React.lazy(()=>import("./components/Main/Home"));
const Cart = React.lazy(()=>import("./components/Cart/Cart"));
const About = React.lazy(()=>import("./components/Info/About"));
const Contact = React.lazy(()=>import("./components/Info/Contact"));
const UserForm = React.lazy(()=>import("./components/Auth/UserForm"));

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const authCtx = useContext(Context)

  return (
    <>
      <Header setShowCart={setShowCart} />
      <Banner />
      
      <Suspense fallback={<Loader/>}>
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
      </Suspense>
    </>
  );
};

export default App;
