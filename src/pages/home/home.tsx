import React from 'react';
import './home.scss';
import images from '../../shared/constants/images';
import { useModal } from '../../hooks/usemodal';
import About from '../../container/about/about';
import Product from '../../container/product/product';
import { NavLink } from 'react-router-dom';
function Home() {
    const benefits: any[] = [{
        title: "Calidad",
        icon: images.qualityIcon
    }, {
        title: "Precio",
        icon: images.priceIcon
    }];
    const { toggle } = useModal();
    return (
        <div id="home">
            <div className="header">
                <div className="left-container">
                    <h2>Mejor Calidad.</h2>
                    <h2>Menor precio.</h2>
                    <p>Empresa dedicada a la fabricación de tapas plásticas para envases.</p>
                    <NavLink to="/contact" className="btn-info">
                        Contactar
                    </NavLink>
                    <div className="benefits">
                        {benefits.map((benefit, index) => (
                            <span key={index} className='benefit mr-5'><img className='mr-1' src={benefit.icon} alt="benefit.title" />{benefit.title}</span>
                        ))}
                    </div>
                </div>
                <div className="right-container">
                    <img src={images.home} alt="Home" />
                </div>
            </div>
            <About></About>
            <Product></Product>
        </div>
    );
}

export default Home;
