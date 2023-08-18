import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import HomePage from "./pages/HomePage";
import EdiPage from "./pages/Edit";

import './style.css'

function App() {
  return (
    <div className="container">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EdiPage />} />
      </Routes>

    </div>
  );
}

export default App;
