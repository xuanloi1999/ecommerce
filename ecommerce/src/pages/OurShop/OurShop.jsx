import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner';

function OurShop() {
    const { container, functionBox, specialText, btnBack } = styles;
    const navigate = useNavigate();

    const handleNavigatePrevious = () => {
        navigate(-1);
    };
    return (
        <div>
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
            </MainLayout>
        </div>
    );
}

export default OurShop;
