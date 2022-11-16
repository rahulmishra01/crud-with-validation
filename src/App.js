import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Valid from "./components/Valid";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Valid />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
