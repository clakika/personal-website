import React, { Component } from 'react';
import './App.css';

import About from '../src/About';
import Header from '../src/Header';
import Contact from '../src/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Contact />
        <footer className="Footer">Claudia Kiril Cappai, Copyright &copy; 2020. All rights reserved.</footer>
      </div>
    );
  }
}

export default App;
