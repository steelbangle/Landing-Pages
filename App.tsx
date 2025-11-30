import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Donation from './components/Donation';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-earth-50">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Donation />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
