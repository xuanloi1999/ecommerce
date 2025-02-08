import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import HeaderSidebar from '@components/ContentSidebar/components/HeaderSidebar/HeaderSidebar';
import ItemProduct from '@components/ContentSidebar/components/ItemProduct/ItemProduct';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Cart() {
    const { container, boxContent, boxBtn, total, price, subtotal } = styles;
    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSidebar
                    icon={
                        <AiOutlineShoppingCart style={{ fontSize: '30px' }} />
                    }
                    title='Cart'
                />
                <ItemProduct />
            </div>

            <div>
                <div className={total}>
                    <p className={subtotal}>Subtotal:</p>
                    <p className={price}>$0.00</p>
                </div>

                <div className={boxBtn}>
                    <Button content={'VIEW CART'} />
                    <Button content={'CHECKOUT'} isPrimary={false} />
                </div>
            </div>
        </div>
    );
}

export default Cart;
