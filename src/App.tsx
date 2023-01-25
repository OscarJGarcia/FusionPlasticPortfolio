import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';

function App() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
