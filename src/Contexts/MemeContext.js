import React, {
	createContext,
	useState,
} from "react";

//Assets
import MemeImage from "../Assets/img/1.png";
import MemeImage2 from "../Assets/img/2.png";
import MemeImage3 from "../Assets/img/3.png";
import MemeImage4 from "../Assets/img/4.png";
import MemeImage5 from "../Assets/img/5.png";
import MemeImage6 from "../Assets/img/6.png";
import MemeImage7 from "../Assets/img/7.png";
import MemeImage8 from "../Assets/img/8.png";
import MemeImage9 from "../Assets/img/9.png";
import MemeImage10 from "../Assets/img/10.jpeg";

//Array of Objects to show Memes
const MemesList = [
	{
		id: 1,
		src: MemeImage,
		alt: "Meme 1",
		position1: "Center",
		position2: null,
	},
	{
		id: 2,
		src: MemeImage2,
		alt: "Meme 2",
		position1: "Top-Left",
		position2: "Top-Right",
	},
	{
		id: 3,
		src: MemeImage3,
		alt: "Meme 3",
		position1: "Top-Left",
		position2: "Top-Right",
	},
	{
		id: 4,
		src: MemeImage4,
		alt: "Meme 4",
		position1: "Left",
		position2: null,
	},

	{
		id: 5,
		src: MemeImage5,
		alt: "Meme 5",
		position1: "Top-Right",
		position2: null,
	},
	{
		id: 6,
		src: MemeImage6,
		alt: "Meme 6",
		position1: "Top-Right",
		position2: "Buttom-Left",
	},
	{
		id: 7,
		src: MemeImage7,
		alt: "Meme 7",
		position1: "Top-Left",
		position2: "Top-Right",
	},
	{
		id: 8,
		src: MemeImage8,
		alt: "Meme 8",
		position1: "Top-Center",
		position2: null,
	},
	{
		id: 9,
		src: MemeImage9,
		alt: "Meme 9",
		position1: "Top-Center",
		position2: "Buttom-Center",
	},
	{
		id: 10,
		src: MemeImage10,
		alt: "Meme 10",
		position1: "Top-Center",
		position2: null,
	},
];

const Memes = createContext();

export function ProviderMeme({ children }) {
	const [meme, setMeme] = useState(MemesList);
	const [selectedImage, setSelectedImage] =
		useState("");

	const [
		selectedImagePosition,
		setSelectedImagePosition,
	] = useState([
		{ position1: "", position2: "" },
	]);

	const [txt, setTxt] = useState("");
	const [txt2, setTxt2] = useState("");
	const [savedData, setSavedData] = useState([]);

	return (
		<Memes.Provider
			value={{
				meme,
				setMeme,
				selectedImage,
				setSelectedImage,
				selectedImagePosition,
				setSelectedImagePosition,
				txt,
				setTxt,
				txt2,
				setTxt2,
				savedData,
				setSavedData,
			}}
		>
			{children}
		</Memes.Provider>
	);
}

export default Memes;
