import React, {  useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  //auth context management
  const localToken = localStorage.getItem('LOGIN_TOKEN');
  const [loginToken, setLoginToken] = useState(localToken);
  const isLoggedIn = !!loginToken;
    
  const userLogin = (token) =>{
    setLoginToken(token);
    localStorage.setItem('LOGIN_TOKEN', token);
  }

  const userLogout = ()=>{
    setLoginToken(null);
    localStorage.clear();
  }
  //cart context management
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (item) => {

    if (!cartItems.filter((i)=>{return i.id===item.id}).length) {
      const itemInCart = {
        id: item.id,
        title: item.title,
        price: item.price,
        amount: item.amount,
        imageUrl: item.imageUrl
      };

      setCartItems((prev) => {
        return [ ...prev, itemInCart];
      });

      setTotalAmount((prev)=>{return prev + item.price*itemInCart.amount})
    }

    else{
       cartItems.forEach(obj=>{
        if(obj.id===item.id){
            obj.amount++;
        }
       })

       setTotalAmount((prev)=>{return prev + item.price})
    }
  };

  const removeFromCart = (item) => {
     
    if(item.amount>1){    
        cartItems.forEach(obj=>{
            if(obj.id===item.id){
                obj.amount--;
            }
           })
        
        setTotalAmount((prev)=>{return prev - item.price})
    }

    else{
        setCartItems([
            ...cartItems.filter((i)=>{return i.id!==item.id})
        ])
        setTotalAmount((prev)=>{return prev - item.price})
    }
  };

  return (
    <Context.Provider
      value={{
        isLoggedIn: isLoggedIn,
        logInToken: loginToken,
        userLogin: userLogin,
        userLogout: userLogout,
        items: cartItems,
        totalAmt: totalAmount,
        addItem: addToCart,
        removeItem: removeFromCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
