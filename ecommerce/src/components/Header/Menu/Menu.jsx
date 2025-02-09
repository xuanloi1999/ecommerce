import { SidebarContext } from '@/contexts/SidebarProvider';
import styles from '../styles.module.scss';
import { useContext, useState } from 'react';
import { StoreContext } from '@/contexts/StoreProvider';
import { useNavigate } from 'react-router-dom';

function Menu({ content, href }) {
    const { menu, subMenu } = styles;

    const { setIsSidebarOpen, setType } = useContext(SidebarContext);
    const { userInfo, handleLogout } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const navigate = useNavigate();

    const handleClickShowLogin = () => {
        if (content === 'Sign in' && !userInfo) {
            setIsSidebarOpen(true);
            setType('login');
        }

        if (content === 'Our Shop') {
            navigate('/shop');
        }
    };

    const handleContent = (content) => {
        if (content === 'Sign in' && userInfo) {
            return `Hello, ${userInfo?.username}`;
        }
        return content;
    };

    const handleHover = () => {
        if (content === 'Sign in' && userInfo) {
            setIsShowSubMenu(true);
        }
    };

    return (
        <div
            className={menu}
            onClick={handleClickShowLogin}
            onMouseEnter={handleHover}
        >
            {handleContent(content)}

            {isShowSubMenu && (
                <div
                    className={subMenu}
                    onMouseLeave={() => setIsShowSubMenu(false)}
                    onClick={handleLogout}
                >
                    LOG OUT
                </div>
            )}
        </div>
    );
}

export default Menu;
