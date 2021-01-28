import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

import NavBar from "./components/Navbar/Navbar"

import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { Project } from './components/Project';
import { Gallery } from './components/Gallery';
import  Footer  from './components/Footer';
import configParticles from './config/configParticles';


function App() {
  return (

    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      <div>
       
        <Particles height="400vh" width="100vw" params={configParticles} style={{ position: 'absolute'}} />
         
      </div>
      <React.Fragment>
  <Router>
  <NavBar />

  <Home/>
  <Project/>
  <Gallery/>
  <Footer/>
  </Router>
</React.Fragment>
     

    </div>

  );
}

export default App;