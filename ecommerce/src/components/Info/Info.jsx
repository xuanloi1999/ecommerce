import MainLayout from '@components/Layout/Layout';
import { dataInfo } from '@components/Info/constants';
import InfoCard from '@components/Info/InfoCard/InfoCard';
import styles from './styles.module.scss';

function Info() {
    const { container } = styles;

    return (
        <div>
            <MainLayout>
                <div className={container}>
                    {dataInfo.map((data) => (
                        <InfoCard
                            title={data.title}
                            description={data.description}
                            src={data.src}
                        />
                    ))}
                </div>
            </MainLayout>
        </div>
    );
}

export default Info;
