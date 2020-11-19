import React, { useContext, useState } from 'react';
import {myContext} from '../Context';
import useHover from '../hooks/useHover';

function CartItem({item}) {
    const {removeItem} = useContext(myContext);
    const [hovered, ref] = useHover();
    const iconClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
    return (
        <div className="cart-item">
            <i  
                onClick={() => removeItem(item.id)} 
                className={iconClass}
                ref={ref}
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem
