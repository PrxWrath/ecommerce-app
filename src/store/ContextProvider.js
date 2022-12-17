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

      if (!Items.filter((i)=>{return i.id===item.id}).length) {
        const itemInCart = {
          id: item.id,
          title: item.title,
          price: item.price,
          imageUrl: item.imageUrl
        };
        updateCart(itemInCart, 'POST');
      }
    
  };

  const removeFromCart = (item) => {
      updateCart(item, 'DELETE');
  };

  const updateCart = async (item, req) => {
    
    let res 
     if(req==='POST'){
        res = await fetch(`https://crudcrud.com/api/9482301ca3604e5eb0b39f8d773d9abf/cart${email}`,{
            method:req,
            body:JSON.stringify(item),
            headers:{
              'Content-Type':'application/json'
            }
          })
      }else{
        res = await fetch(`https://crudcrud.com/api/9482301ca3604e5eb0b39f8d773d9abf/cart${email}/${item._id}`,{
          method:req,
        })
      }

    if(!res.ok){
      console.log("Something went wrong");
    }
    loadCart();
  }

  const loadCart = useCallback(async () => {
    
    const res = await fetch(`https://crudcrud.com/api/9482301ca3604e5eb0b39f8d773d9abf/cart${email}`)
    const data = await res.json()
    if(!res.ok){
      console.log("Something went wrong")
    }
    let total = data.reduce((initial, item)=>{
      return initial+item.price
    },0)
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
