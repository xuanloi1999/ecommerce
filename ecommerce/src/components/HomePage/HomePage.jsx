import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadlingListProduct from '@components/HeadlingListProduct/HeadlingListProduct';
import { useEffect } from 'react';
import { getProducts } from '@apis/productService';

function HomePage() {
    const { container } = styles;

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadlingListProduct />
            </div>
        </div>
    );
}

export default HomePage;
