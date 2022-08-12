import React from 'react';
import './App.css';
import Navbar from './Comonents/Navbar/Navbar';
import Searchpage from './Comonents/Searchpage/Searchpage';
import { MuiThemeProvider } from '@material-ui/core';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './Comonents/Homepage/Homepage';
import ImageResult from './Comonents/ImageResult/ImageResult';

function App() {
  return (
<div>
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Homepage/>}/>
    
    <Route path = "/results/:query" element = {<ImageResult/>}/>
  </Routes>
  </BrowserRouter>
</div>
  );
}

export default App;
