import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './styles.module.scss';

function HeaderSidebar() {
    const { container, title } = styles;

    return (
        <div className={container}>
            <AiOutlineShoppingCart />
            <div className={title}>Compare</div>
        </div>
    );
}

export default HeaderSidebar;
