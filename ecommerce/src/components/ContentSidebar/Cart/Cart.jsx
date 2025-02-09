import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import HeaderSidebar from '@components/ContentSidebar/components/HeaderSidebar/HeaderSidebar';
import ItemProduct from '@components/ContentSidebar/components/ItemProduct/ItemProduct';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { PiShoppingCartLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

function Cart() {
    const {
        container,
        total,
        boxBtn,
        price,
        containerListProductCart,
        overlayLoading,
        isEmpty,
        boxEmpty,
        boxBtnEmpty,
        containerListItem,
    } = styles;
    const { productsCart } = useContext(SidebarContext);

    const handleNavigateToShop = () => {
        navigate('/shop');
        setIsOpen(false);
    };

    const subTotal = productsCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    const handleNavigateToCart = () => {
        navigate('/cart');
        setIsOpen(false);
    };

    return (
        <div
            className={classNames(container, {
                [isEmpty]: !productsCart.length,
            })}
        >
            <HeaderSidebar
                icon={<PiShoppingCartLight style={{ fontSize: '30px' }} />}
                title='CART'
            />

            {productsCart.length ? (
                <div className={containerListItem}>
                    <div>
                        {isLoading ? (
                            <LoadingTextCommon />
                        ) : (
                            productsCart.map((item, index) => {
                                return (
                                    <ItemProduct
                                        key={index}
                                        src={item.images[0]}
                                        nameProduct={item.name}
                                        priceProduct={item.price}
                                        skuProduct={item.sku}
                                        sizeProduct={item.size}
                                        quantity={item.quantity}
                                        productId={item.productId}
                                        userId={item.userId}
                                    />
                                );
                            })
                        )}
                    </div>

                    <div>
                        <div className={total}>
                            <p>SUBTOTAL:</p>
                            <p className={price}>${subTotal.toFixed(2)}</p>
                        </div>

                        <div className={boxBtn}>
                            <Button
                                content={'VIEW CART'}
                                onClick={handleNavigateToCart}
                            />
                            <Button content={'CHECKOUT'} isPriamry={false} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={boxEmpty}>
                    <div>No products in the cart.</div>
                    <div className={boxBtnEmpty}>
                        <Button
                            content={'RETURN TO SHOP'}
                            onClick={handleNavigateToShop}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
