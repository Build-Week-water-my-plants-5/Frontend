//Pre-Installed Imports
import React from 'react';
import './App.css';

//My Imports 
import Header from './components/Header';     // Styled-Component
import Welcome from "./components/Welcome";  // JSX Div
import Login from "./components/Login";     // Formik - State, useEffect, axios
import SignUp from "./components/SignUp";  // Formik - State, useEffect, axios


function App() {
  return (
    <div className="App">
          <Header> <Welcome/> </Header>
         
      <div className='Log-N-Sign'>
        <div className='Log'> <Login/> <br></br> <span>Forgot Password?</span> </div>
        <div className='Sign'> <SignUp/>  </div>
        
      </div>

    </div>
  );
}

export default App;
