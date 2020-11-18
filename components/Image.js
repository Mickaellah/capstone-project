import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import {myContext} from '../Context';

function Image({className, photo, id, allPhotos, isFavorite}) {
    const {toggleFavorite, addImageToCart, cartItems, removeItem} = useContext(myContext);
    const [ hovered, setHovered ] = useState(false);

    function heartIcon() {
        if (isFavorite) {
            return <i onClick={() => toggleFavorite(id)} className="ri-heart-fill favorite"></i>;
        } else if (hovered) {
            return <i onClick={() => toggleFavorite(id)} className="ri-heart-line favorite"></i>;
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some((item) => item.id === id);
        if (alreadyInCart) {
            return <i 
                onClick={() => removeItem()} 
                className="ri-shopping-cart-fill cart"
            ></i>
        } else if (hovered) {
            return <i 
                onClick={() => addImageToCart(allPhotos)} 
                className="ri-add-circle-line cart"
            ></i>;
        }
    }

    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`${className} image-container`}>
            <img src={photo} className="image-grid" />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image