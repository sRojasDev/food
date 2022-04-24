import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from './pages/landing/index';
import  {Home}  from './pages/home/index';
import { Detail } from './pages/detail/index';
import  {NewRecipe  }from './pages/newrecipe/index.js';
import { Navbar } from './components/navbar/index';
import { Footer } from './components/footer/index';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/newgame" element={<NewRecipe/>} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
