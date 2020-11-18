import React, { useContext } from 'react';

import {myContext} from '../Context';

import Image from '../components/Image';
import {getClass} from '../utils';

function Photos() {
	const context = useContext(myContext);
	const allPhotos = context.allPhotos;
	return (
		<main className="photos">
			<h1>Images go here</h1>
			{allPhotos.map((photo, index) => 
				<Image key={photo.id} id={photo.id} isFavorite={photo.isFavorite} allPhotos={photo} photo={photo.url} className={getClass(index)}/>
			)}
		</main>
	);
}

export default Photos;
