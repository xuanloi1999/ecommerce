import styles from '../styles.module.scss';
import TructIcon from '@icons/svgs/tructIcon.svg';

function InfoCard({ title, description, src }) {
    const {
        containerCart,
        containerContent,
        titleContent,
        descriptionContent,
    } = styles;

    return (
        <div className={containerCart}>
            <img width={40} height={41} src={src} alt='' />
            <div className={containerContent}>
                <div className={titleContent}>{title}</div>
                <div className={descriptionContent}>{description}</div>
            </div>
        </div>
    );
}

export default InfoCard;
