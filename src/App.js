

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./components/Navbar"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Data from "./components/Data"
import Beds from "./components/Beds"
import Oxygen from "./components/Oxygen"
import Medicine from "./components/Medicine"
import Plasma from "./components/Plasma"
import {Switch,Route,Redirect, BrowserRouter, Routes} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
   
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />

        <Route  path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/data" element={<Data/>} />
        <Route exact path="/beds" element={<Beds/>} />
        <Route exact path="/oxygen" element={<Oxygen/>} />
        <Route exact path="/medicine" element={<Medicine/>} />
        <Route exact path="/plasma" element={<Plasma/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
