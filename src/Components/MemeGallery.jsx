import React, {
	useContext,
	useState,
} from "react";
import "./MemeGallery.css";
import MemeContext from "../Contexts/MemeContext";

function MemeGallery() {
	const {
		meme,
		setSelectedImage,
		selectedImagePosition,
		setSelectedImagePosition,
	} = useContext(MemeContext);

	const handleImageClick = (mem) => {
		setSelectedImage(
			 mem.src,
		);
		setSelectedImagePosition(
		{ position1: mem.position1, position2: mem.position2 }
	);
		console.log(selectedImagePosition);
	};

	return (
		<div className='width'>
			<div className='Gallery'>
				{meme.map((mem) => (
					<img
						key={mem.id}
						src={mem.src}
						alt={mem.alt}
						onClick={() => handleImageClick(mem)}
					/>
				))}
			</div>
		</div>
	);
}

export default MemeGallery;
