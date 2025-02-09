import { deleteCart } from '@apis/CartService';
import styles from './styles.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import Cookies from 'js-cookie';
import { ToastContext } from '@/contexts/ToastProvider';
import { useContext, useState } from 'react';
import { SidebarContext } from '@/contexts/SidebarProvider';

function ItemProduct({
    src,
    name,
    sizeProduct,
    productPrice,
    quantity,
    sku,
    productId,
}) {
    const {
        container,
        boxContent,
        title,
        price,
        boxClose,
        size,
        overlayLoading,
    } = styles;
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);
    const { handleGetProductsCart } = useContext(SidebarContext);

    const userId = Cookies.get('userId');
    const handleDeleteProductsOnCart = () => {
        setIsLoading(true);
        deleteCart({
            productId,
            userId,
        })
            .then((res) => {
                toast.success('Delete Product successfully!');
                setIsLoading(false);
                handleGetProductsCart(userId, 'cart');
            })
            .catch((err) => {
                toast.error('Delete Product failed!');
                setIsLoading(false);
            });
    };
    return (
        <div className={container}>
            <img src={src} alt='' />

            <div
                className={boxClose}
                onClick={() => handleDeleteProductsOnCart()}
            >
                <IoCloseOutline
                    style={{
                        fontSize: '25px',
                        color: 'c1c1c1',
                    }}
                />
            </div>

            <div className={boxContent}>
                <div className={title}>{name}</div>
                <div className={size}>Size: {sizeProduct}</div>
                <div className={price}>
                    {quantity} x ${productPrice}
                </div>
                <div className={price}>SKU: {sku}</div>
            </div>
        </div>
    );
}

export default ItemProduct;
