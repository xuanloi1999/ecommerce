import { SidebarContext } from '@/contexts/SidebarProvider';
import styles from '../styles.module.scss';
import { useContext } from 'react';

function Menu({ content, href }) {
    const { menu } = styles;

    const { setIsSidebarOpen, setType } = useContext(SidebarContext);

    const handleClickShowLogin = () => {
        if (content === 'Sign in') {
            setIsSidebarOpen(true);
            setType('login');
        }
    };
    return (
        <div className={menu} onClick={handleClickShowLogin}>
            {content}
        </div>
    );
}

export default Menu;
