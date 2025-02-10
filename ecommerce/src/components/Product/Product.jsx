import React from 'react';
import styles from './styles.module.scss'; // Import the CSS module for styling

function Product({ src, description }) {
    return (
        <div className={styles.productContainer}>
            <div className={styles.imageWrapper}>
                <img src={src} alt='Product' className={styles.productImage} />
            </div>
            <div className={styles.productDescription}>{description}</div>
        </div>
    );
}

export default Product;
