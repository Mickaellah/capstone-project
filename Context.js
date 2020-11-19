import React, { useEffect, useState } from 'react';

const myContext = React.createContext();

function ContextProvider(props) {
    const [ allPhotos, setAllPhotos ] = useState([]);
    const [ cartItems, setCartItems ] = useState([]);
    const [ buttonText, setButtonText ] = useState('Place order');
    const photoUrl = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

    async function getAllPhotos() {
        const lsAllPhotos = JSON.parse(localStorage.getItem('allPhotos'));
        if (lsAllPhotos) {
            console.log({lsAllPhotos});
            setAllPhotos(lsAllPhotos);
        } else {
            console.log("Nothing in the list");
            const res = await fetch(photoUrl);
            const data = await res.json();
            console.log(data);
            setAllPhotos(data);
        }
    }

    function initCartItem() {
        const lsCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (lsCartItems) {
            setCartItems(lsCartItems);
        }
    }

    // When component mount.
    useEffect(() => {
        getAllPhotos();
        initCartItem();
    }, []);

    // When all photos are updated.
    useEffect(() => {
        if (allPhotos.length > 0) {
            console.log('All photo that have been changed');
            localStorage.setItem('allPhotos', JSON.stringify(allPhotos));
        }
    }, [allPhotos]);

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    function toggleFavorite(id) {
        const newPhotosArray = allPhotos.map(photo => {
            // if it is the one, let's return an updated object.
            if (photo.id === id) {
                // update this element
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite,
                };
            }
            return photo;
        })
        setAllPhotos(newPhotosArray);
    }

    function addImageToCart(photo) {
        setCartItems(prevItems => [...prevItems, photo]);
    }

    function removeItem(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    function placeOrder(buttonText) {
        setButtonText(buttonText);
        setTimeout(() => {
            console.log(buttonText);
            console.log(cartItems);
            setButtonText('Place order');
            setCartItems([]);
        }, 3000);
    }

    return (
        <myContext.Provider 
            value={{
                allPhotos,
                toggleFavorite,
                cartItems,
                addImageToCart,
                removeItem,
                buttonText,
                placeOrder
            }}
        >
            {props.children}
        </myContext.Provider>
    )
}

export { ContextProvider, myContext };