import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CarouselMain from './components/Carousel';
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
              <Header />
              <CarouselMain />
              <About />
              <Services />
              <Contact />
              <Footer />
            </div>
        );
    }
}

export default App;


