import React, { useEffect, useState } from 'react';

const myContext = React.createContext();

function ContextProvider(props) {
    const [ allPhotos, setAllPhotos ] = useState([]);
    const [ cartItems, setCartItems ] = useState([]);
    const photoUrl = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

    async function getAllPhotos() {
        const res = await fetch(photoUrl);
        const data = await res.json();
        console.log(data);
        setAllPhotos(data);
    }

    useEffect(() => {
        getAllPhotos();
    }, []);

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

    return (
        <myContext.Provider 
            value={{
                allPhotos,
                toggleFavorite,
                cartItems,
                addImageToCart,
                removeItem
            }}
        >
            {props.children}
        </myContext.Provider>
    )
}

export { ContextProvider, myContext };