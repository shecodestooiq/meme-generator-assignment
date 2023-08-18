import './App.css';
import Gallery from './components/Gallery';
import { ImagesProvider } from './store/store';

function App() {
  return (
    <>
      <ImagesProvider>
        <h1 className='mainH1'>Meme Generator App</h1>
        <Gallery />
      </ImagesProvider>
    </>
  )

}

export default App;
