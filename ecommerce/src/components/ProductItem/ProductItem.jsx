import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function ProductItem({ src, prevSrc, name, productPrice }) {
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        price,
    } = styles;

    return (
        <div>
            <div className={boxImg}>
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
                    alt=''
                />
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg'
                    alt=''
                    className={showImgWhenHover}
                />

                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                </div>
            </div>

            <div className={title}>10K Yellow Gold</div>
            <div className={price}>$99.99</div>
        </div>
    );
}

export default ProductItem;
