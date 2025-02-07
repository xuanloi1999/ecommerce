import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function CountdownBanner() {
    const { container, containerTimer, title, btn } = styles;
    const targetDate = '2025-12-31T00:00:00';

    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback</p>

            <div className={btn}>
                <Button content='Buy Now' />
            </div>
        </div>
    );
}

export default CountdownBanner;
