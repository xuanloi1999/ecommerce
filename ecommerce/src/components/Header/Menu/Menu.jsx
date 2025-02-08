import styles from '../styles.module.scss';

function Menu({ content, href, setIsSidebarOpen }) {
    const { menu } = styles;

    console.log('content:', content);

    return (
        <div className={menu} onClick={() => setIsSidebarOpen(true)}>
            {content}
        </div>
    );
}

export default Menu;
