import "./App.css";

import { ProviderMeme } from "./Contexts/MemeContext";
import MemeGallery from "./Components/MemeGallery";
import MemeDisplay from "./Components/MemeDisplay";
import MemeText from "./Components/MemeText";
import MemeShow from "./Components/MemeShow";

function App() {
	return (
		<>
			<div className='App'>
				<ProviderMeme>
					<MemeShow />
					<MemeDisplay />
					<div className='Group'>
						<MemeText />
						<MemeGallery />
					</div>
				</ProviderMeme>
			</div>
		</>
	);
}

export default App;
