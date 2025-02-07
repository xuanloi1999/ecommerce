import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';

function HeadlingListProduct() {
    const { container, containerItem } = styles;

    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadlingListProduct;
