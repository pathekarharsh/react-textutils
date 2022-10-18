//import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TestForm from './component/TextArea';
import About from './component/About';
//import Alert from './component/Alert';
import { useState } from 'react';
/*
import {
  BrowserRouter,
  Routes,     //there is a new syntax for react route v6 so checkout
  Route,    //currently we are here for single homepage so neglecting routing
  //Link
} from "react-router-dom";
*/

function App(props) {
  const[mode, setMode] = useState('light');
  //const[alert, setAlert] = useState(null);

  /*
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null)
      }, 2000);
  }
  */
  
  const toggleMode = () => {
    if (mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      //showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      //showAlert("light Mode has been enabled", "success")
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <div className='container my-3'>
            <TestForm /*showAlert={showAlert}*/ heading="Enter the text" mode={mode} />
            <About />
        </div>
    </>
  );
}

export default App;