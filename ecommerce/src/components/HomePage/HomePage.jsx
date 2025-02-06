import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';

function HomePage() {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
                <AdvanceHeadling />
            </div>
        </div>
    );
}

export default HomePage;
