import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';

function PopularProduct({ data }) {
    const { container } = styles;
    return (
        <MainLayout>
            <div className={container}>
                {data.map((item) => (
                    <ProductItem
                        key={item.id}
                        data={item}
                        src={item.images[0]}
                        prevSrc={item.images[1]}
                        price={item?.price}
                        name={item.name}
                        detail={item}
                    />
                ))}
            </div>
        </MainLayout>
    );
}

export default PopularProduct;
