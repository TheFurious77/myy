import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//  Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode,setmode]=useState("light");
  const [alert,setalert]=useState(null);

  const showAlert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setalert(null)
    },777 );
  }
  const toggle =() =>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode has Enabled","success")
      document.title="DARK_MODE"
    }
    else{
      setmode("light")
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has Enabled","success")
      document.title="LIGHT_MODE"
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Utils" aboutText="Among Us" mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
    <div className="container my-3">

    /<TextForm showAlert={showAlert} heading="Write What you Believe is True" mode={mode}/>
    {/* <Routes>
      <Route path="/about" element={<About mode={mode}/>}/>
      {/* <Route path='/' element={<TextForm showAlert={showAlert} heading="Write What you Believe is True" mode={mode}/>}/> */}
      {/* <Route path='/' element={<TextForm showAlert={showAlert} heading="Write What you Believe is True" mode={mode}/>}/> */}
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    
    
        </>
  );
}

export default App;
