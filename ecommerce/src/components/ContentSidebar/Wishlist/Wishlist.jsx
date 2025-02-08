import styles from './styles.module.scss';
import { FaRegHeart } from 'react-icons/fa';
import Button from '@components/Button/Button';
import HeaderSidebar from '@components/ContentSidebar/components/HeaderSidebar/HeaderSidebar';
import ItemProduct from '@components/ContentSidebar/components/ItemProduct/ItemProduct';

function Wishlist() {
    const { container, boxContent, boxBtn } = styles;
    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSidebar
                    icon={<FaRegHeart style={{ fontSize: '30px' }} />}
                    title='Wislist'
                />
                <ItemProduct />
            </div>

            <div className={boxBtn}>
                <Button content={'VIEW WISHLIST'} />
                <Button content={'ADD ALL TO CART'} isPrimary={false} />
            </div>
        </div>
    );
}

export default Wishlist;
