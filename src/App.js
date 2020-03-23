import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './portfolioData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header portfolioData={portfolioData} />
        <About portfolioData={portfolioData} />
        <Portfolio portfolioData={portfolioData} />
        <Projects portfolioData={portfolioData} />
        <Contact portfolioData={portfolioData} />
        <Footer portfolioData={portfolioData} />
      </div>
    );
  }
}

export default App;
