import React from 'react';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import About from './Components/About';
import './style.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function App() {
  return (
   <Router>
    <main>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

    <Route path="/" exact component={Home} />
    <Route path="/about"  component={About} />
    <Route path="/contact"  component={Contact} />

    </main>
</Router>
  );
}

const Home = () => (
  <React.Fragment>
    <h1>Home</h1>
    
  </React.Fragment>
  );

const About = () => (
  <React.Fragment>
    <h1>About</h1>
  </React.Fragment>
  );

const Contact = () => (
  <React.Fragment>
    <h1>Contact</h1>
  
  </React.Fragment>
  );
 