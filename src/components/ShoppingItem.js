import React from "react";

function ShoppingItem({ item, toggleItem }){

    function handleItemClick(){
        toggleItem(item.id)
    }

    return (
        <>
            <label class="shopping-item">
                <input type="checkbox" checked={item.complete} onChange={handleItemClick} />
                {item.name}
            </label>
        </>
    )

}

export default ShoppingItem;