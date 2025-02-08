import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import { TfiReload } from 'react-icons/tfi';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
function BoxIcon({ type, href, setType }) {
    const { boxIcon } = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return <FaFacebook />;
            case 'ins':
                return <FaInstagram />;
            case 'ytb':
                return <FiYoutube />;
            case 'compare':
                return <TfiReload />;
            case 'wishlist':
                return <FaRegHeart />;
            case 'cart':
                return <AiOutlineShoppingCart />;
            default:
                break;
        }
    };
    return (
        <div className={boxIcon} onClick={() => setType(type)}>
            {handleRenderIcon(type)}
        </div>
    );
}

export default BoxIcon;
