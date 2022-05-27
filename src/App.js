import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Challenges from "./pages/Challenges";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/challenges" element={<Challenges />} />
      </Routes>
    </div>
  );
}

export default App;
