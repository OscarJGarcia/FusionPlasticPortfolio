import React from 'react';
import './product.css';
import images from '../../shared/constants/images';
function Product() {
    const products: any[] = [
        {
            title: "Tapa aireador #18",
            img: images.homeImg,
            colors: ['#FFFFFF', '#000000']
        },
        {
            title: "Tapa de seguridad #18",
            img: images.homeImg,
            colors: ['#FFFFFF', '#000000']
        },
        {
            title: "Tapón aireador #18",
            img: images.homeImg,
            colors: ['#FFFFFF', '#000000']
        },
        {
            title: "Tapa perforada #18",
            img: images.homeImg,
            colors: ['#FFFFFF', '#000000']
        },
    ];

    return (
        <div id="product">
            <div className="products-description">
                <h2>Lo que ofrecemos</h2>
                <p>
                    Para suplir las necesidades de nuestros clientes estos son los productos que ofrecemos:
                </p>
            </div>
            <div className="product-container">
                {
                    products.map((product, index) => (
                        <div className="card" key={index}>
                            <div className="image-container">
                                <img src={product.img} alt="" />
                            </div>
                            <div className="card-title">
                                <h3>{product.title}</h3>
                            </div>
                            <div className="card-content">
                                <div className="colors-container">
                                    <h4>Colores</h4>
                                    <div className="colors">
                                        {product.colors.map((color: any, i: number) => (
                                            <div className='color-box' style={{ backgroundColor: color }} key={i + 'c'}></div>
                                        ))}
                                    </div>
                                </div>
                                <button className='view-product'>Ver producto</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default Product;
