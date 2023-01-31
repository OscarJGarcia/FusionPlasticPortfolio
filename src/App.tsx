import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import NotFound from './pages/not-found/not-found';
import TermsConditions from './pages/privacy-policy/privacy-policy';

function App() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy-policy' element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
