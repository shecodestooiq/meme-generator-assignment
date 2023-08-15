import React, { useContext } from "react";
import MemeContext from "../Contexts/MemeContext";
import "../Components/MemeDisplay.css";

function MemeDisplay() {
	const {
		selectedImage,
		selectedImagePosition,
		txt,
		txt2,
	} = useContext(MemeContext);
	// console.log(selectedImage);

	return (
		<div className='Middle'>
			<div className='SelectedImage'>
				{selectedImage && (
					<div className='Parent'>
						<img
							src={selectedImage}
							alt='Selected Meme'
						/>

						<div
							className={`txt ${
								selectedImagePosition.position1 ==
								"Center"
									? "Center"
									: ""
							}`}
						>
							
						</div>

						
						{/* { console.log(selectedImagePosition.position1)} */}
						{/* <div className='Position'>{txt2}</div> */}
					</div>
				)}
			</div>
		</div>
	);
}

export default MemeDisplay;
