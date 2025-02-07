import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadlingListProduct from '@components/HeadlingListProduct/HeadlingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@apis/productService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';

function HomePage() {
    const [products, setProducts] = useState([]);
    const { container } = styles;

    useEffect(() => {
        getProducts().then((res) => {
            setProducts(res.contents);
        });
    }, []);

    console.log(products);

    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadlingListProduct data={products.slice(0, 2)} />
                <PopularProduct data={products.slice(2)} />
                <SaleHomePage />

                <div style={{ height: '500px' }}></div>
            </div>
        </div>
    );
}

export default HomePage;
