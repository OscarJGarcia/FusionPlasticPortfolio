import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import './product-detail.scss';
import images from '../../shared/constants/images';
import { products } from '../../shared/constants/legacy-data';
import { NavLink } from 'react-router-dom';

function ProductDetail(props: any) {
    const product = products.find(product => product.id === props.productId);
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        if (product && product.images.length > 0) {
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? product.images.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
        }
    };

    const nextSlide = () => {
        if (product && product.images.length > 0) {
            const isLastSlide = currentIndex === product?.images.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        }
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div id="product-detail">
            <div className="left-container">
                <div className='slider-container w-full relative group'>
                    <div
                        style={{ backgroundImage: `url(${product?.images[currentIndex]})` }}
                        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                    ></div>
                    {/* Left Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                    <div className='flex top-4 justify-center py-2'>
                        {product && product?.images.length > 0 && product?.images.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className='text-2xl cursor-pointer'
                            >
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="right-container">
                <h1>{product?.name}</h1>
                <p>{product?.description}</p>
                <div className="colors-container">
                    <h4>Colores</h4>
                    <div className="colors">
                        {product?.colors.map((color: any, i: number) => (
                            <div className='color-box' style={{ backgroundColor: color }} key={i + 'c'}></div>
                        ))}
                    </div>
                </div>
                <NavLink to="/contact" className="btn-primary">
                    Contactar
                </NavLink>
            </div>
        </div >
    );
}

export default ProductDetail;
