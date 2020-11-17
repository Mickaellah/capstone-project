import React, { useState } from 'react';

function Image({className, photo}) {
    const [ hovered, setHovered ] = useState(false);

    const heartIcon = hovered && <i className="ri-heart-line favorite"></i>;
    const plusIcon = hovered && <i className="ri-add-circle-line cart"></i>;

    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`${className} image-container`}>
            <img src={photo} className="image-grid" />
            {heartIcon}
            {plusIcon}
        </div>
    )
}

export default Image