import React, { useContext } from "react";
import MemeContext from "../Contexts/MemeContext";
import "../Components/MemeText.css";

function MemeText() {
	const {
		txt,
		setTxt,
		txt2,
		setTxt2,
		selectedImage,
		setSelectedImage,
		selectedImagePosition,
		savedData,
		setSavedData,
	} = useContext(MemeContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (selectedImage && txt) {
			const newData = {
				src: selectedImage,
				text: txt,
				text2: txt2,
				position1: selectedImage.position1,
				position2: selectedImage.position2,
			};
			setSavedData([...savedData, newData]);
			console.log(savedData);
			setTxt("");
			setTxt2("");
			setSelectedImage("");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label> Text 1 : </label>
				<input
					type='text'
					id='txt1'
					placeholder='Write your text'
					value={txt}
					onChange={(e) => {
						setTxt(e.target.value);
					}}
				/>
				<br></br>
				<label> Text 2 : </label>
				{selectedImagePosition.position2 !==
				null ? (
					<input
						type='text'
						id='txt2'
						placeholder='Write your text 2'
						value={txt2}
						onChange={(e) => {
							setTxt2(e.target.value);
						}}
					/>
				) : (
					<input
						type='text'
						id='txt2'
						placeholder='Text 2 Disabled'
						value={txt2}
						onChange={(e) => {
							setTxt2(e.target.value);
						}}
						disabled
					/>
				)}

				<br></br>

				<button type='submit'> Submit </button>
			</form>
		</div>
	);
}

export default MemeText;
