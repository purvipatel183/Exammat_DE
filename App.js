 import './App.css';
 import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home';
import MaterialComputer from './MaterialComputer';
import MaterialIt from './MaterialIt';
import MaterialIct from './MaterialIct';
import VideoComputer from './VideoComputer';
import VideoIt from './VideoIt';
import VideoIct from './VideoIct';
import Events from './Events';
import Contect from './Contect';
import Profile from './Profile';
import Signin from './Signin';

function App() {
  return <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Computer_Material' element={<MaterialComputer/> } />
          <Route path='/It_Material' element={<MaterialIt/> } />
          <Route path='/Ict_Material' element={<MaterialIct/> } />
          <Route path='/Computer_Video' element={<VideoComputer/>}/>
          <Route path='/It_Video' element={<VideoIct/>}/>
          <Route path='/Ict_Video' element={<VideoIt/>}/>
          <Route path="/events" element={<Events />}/>
          <Route path='/contect' element={<Contect />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/signin' element={<Signin/>}/>
      

      </Routes>

  </BrowserRouter>;
}

export default App;

