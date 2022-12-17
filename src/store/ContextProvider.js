import React, { useState, useCallback, useEffect } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  //auth context management
  const localToken = localStorage.getItem('LOGIN_TOKEN');
  const localEmail  = localStorage.getItem('EMAIL')
  const [loginToken, setLoginToken] = useState(localToken);
  const [email, setEmail] = useState(localEmail);

  const isLoggedIn = !!loginToken;
    
  const userLogin = (token,email) =>{
    userLogout();
    setLoginToken(token);
    setEmail(email.replace('@', '').replace('.',''));
    localStorage.setItem('EMAIL',email.replace('@', '').replace('.',''));
    localStorage.setItem('LOGIN_TOKEN', token);
  }
  
  const userLogout = ()=>{
    setLoginToken(null);
    localStorage.clear();
  }


  //cart context management
  const [totalAmount, setTotalAmount] = useState(0);
  const [Items, setItems] = useState([]);
  

  const addToCart = (item) => {

      if (!Items || !Object.values(Items).filter((i)=>{return i.id===item.id}).length) {
        const itemInCart = {
          id: item.id,
          title: item.title,
          price: item.price,
          imageUrl: item.imageUrl
        };
        updateCart(itemInCart, 'PUT');
      }
    
  };

  const removeFromCart = (item) => {
      updateCart(item, 'DELETE');
  };

  const updateCart = async (item, req) => {
    
    let res 
     if(req==='PUT'){
        res = await fetch(`https://ecommerce-app-7640f-default-rtdb.firebaseio.com/cart${email}/${item.id}.json`,{
            method:req,
            body:JSON.stringify(item),
            headers:{
              'Content-Type':'application/json'
            }
          })
      }else{
        res = await fetch(`https://ecommerce-app-7640f-default-rtdb.firebaseio.com/cart${email}/${item.id}.json`,{
          method:req,
        })
      }

    if(!res.ok){
      console.log("Something went wrong");
    }
    loadCart();
  }

  const loadCart = useCallback(async () => {
    
    const res = await fetch(`https://ecommerce-app-7640f-default-rtdb.firebaseio.com/cart${email}.json`)
    const data = await res.json()
    if(!res.ok){
      console.log("Something went wrong")
    }
    let total = 0;
    if(data){
      Object.values(data).forEach(item=>{
        total+=item.price;
      })
    }
    setTotalAmount(total);
    setItems(data);
    
  },[email]);
 
  useEffect(()=>{
    loadCart();
  },[loadCart])

  return (
    <Context.Provider
      value={{
        isLoggedIn: isLoggedIn,
        logInToken: loginToken,
        userLogin: userLogin,
        userLogout: userLogout,
        items: Items,
        totalAmount: totalAmount,
        addItem: addToCart,
        removeItem: removeFromCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
