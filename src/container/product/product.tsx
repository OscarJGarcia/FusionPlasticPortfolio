import { useState } from 'react';
import './product.scss';
import images from '../../shared/constants/images';
import { products } from '../../shared/constants/legacy-data';
import Modal, { ModalType } from '../../components/modal/modal';
import { useModal } from '../../hooks/usemodal';
import ProductDetail from '../product-detail/product-detail';
function Product() {
    const [productId, setProductId] = useState("");
    const { isOpen, toggle } = useModal();

    const openProductDetail: any = (productId: string) => {
        setProductId(productId);
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
                {
                    products.map((product, index) => (
                        <div className="card" key={product.id}>
                            {product.images.length > 0 && <div className="image-container">
                                <img src={product.images[0]} alt={`img-${index}`} />
                            </div>}
                            {
                                product.images.length === 0 && <div className="image-container">
                                    <img src={images.noImage} alt="no-image" />
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
                                <button className='view-product' onClick={() => openProductDetail(product.id)}>Ver producto</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Modal width="80vw" height="65vh" type={ModalType.CONTENT} isOpen={isOpen} toggle={toggle}>
                <ProductDetail productId={productId}></ProductDetail>
            </Modal>
        </div >
    );
}

export default Product;
