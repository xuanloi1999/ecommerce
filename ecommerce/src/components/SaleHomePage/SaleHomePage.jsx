import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useEffect, useRef, useState } from 'react';
import { use } from 'react';
import useTranslateXImage from '@/hooks/useTranslateXImage';

function SaleHomePage() {
    const { container, content, title, btn, description, boxImg } = styles;
    const { translateXPosition } = useTranslateXImage();

    return (
        <div className={container}>
            <div
                className={boxImg}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.5s ease',
                }}
            >
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.1-min.jpg'
                    alt=''
                />
            </div>
            <div className={content}>
                <h2 className={title}>Sale of the year</h2>
                <p className={description}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.
                </p>
                <div className={btn}>
                    <Button content='Read More' isPrimary={false} />
                </div>
            </div>
            <div
                className={boxImg}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.5s ease',
                }}
            >
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.1-min.jpg'
                    alt=''
                />
            </div>
        </div>
    );
}

export default SaleHomePage;
