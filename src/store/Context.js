import React from 'react'

const Context = React.createContext({
    items: [],
    totalAmt: 0,
    addItem: (item)=>{},
    removeItem: (item)=>{}
})

export default Context