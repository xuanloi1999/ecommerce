import styles from './styles.module.scss';

function HeaderSidebar({ icon, title }) {
    const { container, titleBox } = styles;

    return (
        <div className={container}>
            {icon}
            <div className={titleBox}>{title}</div>
        </div>
    );
}

export default HeaderSidebar;
