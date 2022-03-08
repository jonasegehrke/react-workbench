import React from "react";
import ShoppingItem from "./ShoppingItem"

function ShoppingList({ items, toggleItem }){
    return(
        items.map(item =>{
            return <ShoppingItem key={item.id} toggleItem={toggleItem} item={item}/>
        })
    )
}

export default ShoppingList