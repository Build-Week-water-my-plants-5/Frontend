# Frontend - Using React Components 

# Steps taken to create product

# Setup
[] Clone - empty from build week repo
[] Branch - Vrndavana-Hines
[] code .  - run
[] CRA - create-react-app water
[] cd - water
[] npm or yarn 
-----------------------------------------
# Clean
[] Delete everything in the App.js return besides <div className='app'>
[] App.css - .App {
  text-align: center;
  background-color: #"green";
  height: 100vh;
}
^^^^^^^ Render the whole application green ^^^^^^^^^^^
----------------------------------------
# Terminal
[] Keep Terminal 1 running
[] New VST - install dependencies - (below)
[] CD - Make sure you cd back into the application before installing any dependencies 
[] yarn add react-router-dom  --- to utilize BrowserRouter - Router - Route - Switch 
----------------------------------------
# Install - Index.js - Import
[] Index.js - import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; --- Wrapp <App>
[] ReactDOM.render(<Router><App />
    </Router>, document.getElementById('root'));
----------------------------------------
# Create Components 
[] Folder - components 
[] Files - Header.js Welcome.js Login.js  SignUp.js
[] Build - Create components & render them into the App ( check components and App return to see how they utilized)
---------------------------------------
# Import - Header.js
[] Styled Component - yarn add styled-component - import styled from "styled-components"; 
[] See header 
--------------------------------------
# Install - Login.js SignUp.js  - Form (Formik)
[] Formik - yarn add formik
[] import - import { withFormik, Form, Field } from "formik"; <- Build skeleton!
--------------------------------------

