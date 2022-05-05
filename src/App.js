import './App.css';
import React from 'react';
import Main from './Main.js';
import Footer from './Footer';
import Header from './Header';
import About from './About';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div class="content">
        <Main></Main>
        <About></About>
        <Products />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
