import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function BoxIcon({ type, href }) {
    const { boxIcon } = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'ins':
                return insIcon;
            case 'ytb':
                return ytbIcon;
            case 'reload':
                return reloadIcon;
            case 'heart':
                return heartIcon;
            case 'cart':
                return cartIcon;
            default:
                break;
        }
    };
    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt='' />
        </div>
    );
}

export default BoxIcon;
