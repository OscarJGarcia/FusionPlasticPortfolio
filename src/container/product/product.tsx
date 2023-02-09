import { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useModal } from '../../hooks/usemodal';
import ProductDetail from '../product-detail/product-detail';
import Modal, { ModalType } from '../../components/modal/modal';
import images from '../../shared/constants/images';
import './product.scss';
import { ThreeCircles } from 'react-loader-spinner'

function Product() {
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { isOpen, toggle } = useModal();
    const [productsdb, setProductsdb] = useState<any[]>([]);
    const fetchProducts = async () => {
        await getDocs(collection(db, "products"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setProductsdb(newData);
                setIsLoading(false);
            })
    }
    useEffect(() => {
        fetchProducts();
    }, []);


    const openProductDetail: any = (product: any) => {
        setProduct(product);
        toggle();
    }
    return (
        <div id="product">
            <div className="products-description">
                <h2>Lo que ofrecemos</h2>
                <p>
                    Para suplir las necesidades de nuestros clientes estos son los productos que ofrecemos:
                </p>
            </div>
            <div className="product-container">
                {!isLoading &&
                    productsdb.map((product, index) => (
                        <div className="card" key={product.id}>
                            {product.images.length > 0 && <div className="image-container cursor-pointer" onClick={() => openProductDetail(product)}>
                                <img src={product.images[0]} alt={`img-${index}`} />
                            </div>}
                            {
                                product.images.length === 0 && <div className="image-container">
                                    <img src={images.noImage} alt="empty" />
                                </div>
                            }
                            <div className="card-title">
                                <h3>{product.name}</h3>
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
                                <button className='view-product' onClick={() => openProductDetail(product)}>Ver producto</button>
                            </div>
                        </div>
                    ))
                }
                {isLoading &&
                    <div className='w-full flex justify-center'>
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
                    </div>
                }
            </div>
            <Modal width="80vw" height="65vh" type={ModalType.CONTENT} isOpen={isOpen} toggle={toggle}>
                <ProductDetail product={product}></ProductDetail>
            </Modal>
        </div >
    );
}

export default Product;
