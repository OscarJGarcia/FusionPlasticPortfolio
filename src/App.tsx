import React from 'react';
import './App.scss';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import About from './container/about/about';
import Home from './container/home/home';
import Product from './container/product/product';
import Contact from './container/contact/contact';

function App() {
  return (
    <div className="Main">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Product></Product>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
