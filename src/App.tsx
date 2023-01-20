import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import About from './container/about/about';
import Home from './container/Header/home';
import Product from './container/product/product';

function App() {
  return (
    <div className="Main">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Product></Product>
    </div>
  );
}

export default App;
