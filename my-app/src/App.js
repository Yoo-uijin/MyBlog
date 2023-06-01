import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Music from "./pages/Music";
import Poetry from "./pages/Poetry";
import Develop from "./pages/Develop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/music/:id" element={<Music />} />
          <Route path="/poetry/:id" element={<Poetry />} />
          <Route path="/develop/:id" element={<Develop />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
