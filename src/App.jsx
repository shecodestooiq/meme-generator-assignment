import "./App.css";
import MainInput from "./components/MainInput";
import MemesPhotos from "./components/MemesPhotos";
import SecondaryInput from "./components/SecondaryInput";
import { InputTextProvider } from "./data/InputProvider";

function App() {
  return (
    <>
      <center>
        <h1>Meme Generator app</h1>
      </center>
      <InputTextProvider>
        <MainInput />
        <SecondaryInput />
        <MemesPhotos />
      </InputTextProvider>
    </>
  );
}

export default App;
