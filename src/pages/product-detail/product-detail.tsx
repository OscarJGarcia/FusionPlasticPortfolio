import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import './product-detail.scss';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import NotFound from '../not-found/not-found';
import { ThreeCircles } from 'react-loader-spinner';

function ProductDetail() {
    const params = useParams();
    const productId: any = params.productId;
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState<any>();
    const [error, setError] = useState<boolean>(false);
    const fetchProduct = async () => {
        await getDoc(doc(db, "products", productId))
            .then((doc) => {
                if (!doc.data()) {
                    setError(true);
                }
                const newData = { ...doc.data(), id: doc.id };
                setProduct(newData);
                setIsLoading(false);
            }).catch(error => {
                setError(true);
            })
    }
    useEffect(() => {
        fetchProduct();
    }, []);

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


    if (error) {
        return <NotFound />
    }

    return (
        <div id="product-detail">
            {!isLoading && <>
                <div className="left-container">
                    <div className='slider-container relative group'>
                        <img src={product?.images[currentIndex]} alt={`img-${currentIndex}`} className="rounded-2xl" />
                        {/* Left Arrow */}
                        <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                            <BsChevronCompactLeft onClick={prevSlide} size={30} />
                        </div>
                        {/* Right Arrow */}
                        <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                            <BsChevronCompactRight onClick={nextSlide} size={30} />
                        </div>
                        <div className='flex top-4 justify-center py-2'>
                            {product && product?.images.length > 0 && product?.images.map((slide: any, slideIndex: number) => (
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
            </>}
            {isLoading &&
                <div className='loader'>
                    <ThreeCircles
                        height="100"
                        width="100"
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="three-circles-rotating"
                        outerCircleColor=""
                        innerCircleColor=""
                        middleCircleColor=""
                    />
                    <p className='mt-2'>Estamos cargando tu producto...</p>
                </div>
            }
        </div >
    );
}

export default ProductDetail;
