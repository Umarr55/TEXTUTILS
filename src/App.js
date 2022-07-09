import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
  
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const setMyAlert = (message,type)=>{
    setAlert(
      {
       msg : message,
       type : type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743'
      setMyAlert("Dark Mode has been Enabled!","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
      setMyAlert("Light Mode has been Enabled!","success");
    }
  }
  return (
    <>
    <Router>
     <Navbar title = "TextUtils" about = "About" mode ={mode} toggleMode = {toggleMode} />
     <Alert alert = {alert}/>
     <div className="container my-3" >
     <Routes>
        <Route path="/" element={<TextForm  setMyAlert = {setMyAlert} heading = "Enter Text you wanna Analyze!" mode ={mode}/>} />
        <Route path="about/" element={<About head = "About Us "  mode ={mode}/>} />
      </Routes>
     </div>
     {/* <div className="container my-4">
      <About head = "About Us "/>
     </div> */}
      
     </Router>
    </>
  ); 
}

export default App;
