import React from 'react'

const Context = React.createContext({
    isLoggedIn: false,
    logInToken: null,
    userLogin: (token, email)=>{},
    userLogout: ()=>{},
    items:[],
    totalAmount:0,
    addItem: (item)=>{},
    removeItem: (item)=>{}
})

export default Context