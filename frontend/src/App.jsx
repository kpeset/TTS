import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Success from "./Pages/Success"
import { Route, Routes } from "react-router-dom";
import "./Styles/app.css"

function App() {
  return (
  
  <div className="App">
<Navbar />
    <div className="content">
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/success" element={<Success />} />
  <Route path="/github" component={() => {
    window.location.href = "https://github.com/kpeset/test-technique-strateg";
    return null;
  }} />
  </Routes>
  </div>
  </div>
)}


export default App;
