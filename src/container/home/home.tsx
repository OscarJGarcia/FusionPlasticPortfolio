import React from 'react';
import './home.scss';
import images from '../../shared/constants/images';
function Home() {
    const benefits: any[] = [{
        title: "Calidad",
        icon: images.qualityIcon
    }, {
        title: "Precio",
        icon: images.priceIcon
    }];
    return (
        <div id="home">
            <div className="left-container">
                <h2>Mejor Calidad.</h2>
                <h2>Menor precio.</h2>
                <p>Empresa dedicada a la fabricación de tapas plásticas para envases.</p>
                <button className="btn-info">
                    Contactar
                </button>
                <div className="benefits">
                    {benefits.map((benefit, index) => (
                        <span key={index} className='benefit mr-5'><img className='mr-1' src={benefit.icon} alt="" />{benefit.title}</span>
                    ))}
                </div>
            </div>
            <div className="right-container">
                <img src={images.homeImg} alt="Home image" />
            </div>
        </div>
    );
}

export default Home;
