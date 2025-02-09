import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner';
import Filter from '@pages/OurShop/components/Filter';
import { OurShopProvider } from '@/contexts/OurShopProvider';
import ListProducts from '@pages/OurShop/components/ListProducts';
import Footer from '@components/Footer/Footer';

function OurShop() {
    const { container, functionBox, specialText, btnBack } = styles;
    const navigate = useNavigate();

    const handleNavigatePrevious = () => {
        navigate(-1);
    };
    return (
        <OurShopProvider>
            <Header />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>Home &gt; Shop</div>
                        <div
                            className={btnBack}
                            onClick={handleNavigatePrevious}
                        >
                            {' '}
                            &gt; Return to previous pages
                        </div>
                    </div>
                </div>

                <Banner />

                <div>
                    <Filter />

                    <ListProducts />
                </div>
            </MainLayout>

            <Footer />
        </OurShopProvider>
    );
}

export default OurShop;
