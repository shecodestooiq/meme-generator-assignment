import React, { useContext } from "react";
import MemeContext from "../Contexts/MemeContext";

function MemeShow() {
	const { savedData } = useContext(MemeContext);

	return (
		<div>
			<div className='Display'>
				{savedData.map((data, index) => (
					<div
						key={index}
						className='ShowMem'
					>
						<img
							src={data.src}
							alt={`Saved Meme ${index}`}
						/>
						<p>{data.text}</p>
						<p>{data.text2}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default MemeShow;
