import React, { useEffect, useState } from 'react';

const myContext = React.createContext();

function ContextProvider(props) {
    const [ allPhotos, setAllPhotos ] = useState([]);
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

    return (
        <myContext.Provider value={{allPhotos: allPhotos}}>
            {props.children}
        </myContext.Provider>
    )
}

export { ContextProvider, myContext };