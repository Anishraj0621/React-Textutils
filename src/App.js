import './App.css';
import Navbar from './Component/Navbar.js';
import Textform from './Component/Textform.js';
// import About from './Component/About';
import React, { useState } from 'react';
import Alert from './Component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const tooglemode = ()=>{
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#2d2a3f';
      showAlert("Dark mode has been enabled","sucess");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","sucess");
    }
    
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Textutils" abouttext="About Me" mode={mode} tooglemode={tooglemode} />
    <Alert alert={alert}/>        
    <div className='container my-4'>
    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exactd path="/"> */}
          {/* <Textform heading="Enter The Text Here" mode={mode} showAlert={showAlert}/>
          </Route>
    </Switch> */}
      <Textform heading="Enter The Text Here" mode={mode} showAlert={showAlert}/>
    
    {/* <About/> */}
    </div>
    {/* </Router> */}
  </>
  );
}

export default App;
