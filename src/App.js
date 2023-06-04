import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Registrtion from './Components/registration/registration';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='registration' element={<Registrtion />}/>
    <Route path='login' element={<Login />}/>
    <Route path='home' element={<Home />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
