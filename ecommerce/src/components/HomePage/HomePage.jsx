import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadlingListProduct from '@components/HeadlingListProduct/HeadlingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import Footer from '@components/Footer/Footer';

function HomePage() {
    const [products, setProducts] = useState([]);
    const { container } = styles;

    useEffect(() => {
        const query = {
            sorttype: 0,
            page: 1,
            limit: 10,
        };
        getProducts(query).then((res) => {
            setProducts(res.contents);
        });
    }, []);

    return (
        <div className={container}>
            <Header />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadlingListProduct data={products.slice(0, 2)} />
            <PopularProduct data={products.slice(2)} />
            <SaleHomePage />
            <Footer />
        </div>
    );
}

export default HomePage;
