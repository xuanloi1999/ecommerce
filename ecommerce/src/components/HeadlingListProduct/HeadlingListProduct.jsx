import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadlingListProduct({ data }) {
    const { container, containerItem } = styles;

    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    {data.map((item) => (
                        <ProductItem
                            key={item.id}
                            data={item}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            productPrice={item?.price}
                            name={item.name}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadlingListProduct;
