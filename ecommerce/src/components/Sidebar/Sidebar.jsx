import { useContext } from 'react';
import styles from './styles.module.scss';
import { SidebarContext } from '@/contexts/SidebarProvider';
import classNames from 'classnames';
import { IoMdClose } from 'react-icons/io';
import Login from '@components/ContentSidebar/Login/Login';
import Compare from '@components/ContentSidebar/Compare/Compare';

function Sidebar() {
    const { container, overlay, sidebar, slideSidebar, boxIcon } = styles;
    const { isSidebarOpen, setIsSidebarOpen, type } =
        useContext(SidebarContext);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'register':
                return null;
            case 'compare':
                return <Compare />;
            case 'wishlist':
                return null;
            default:
                return null;
        }
    };

    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isSidebarOpen,
                })}
                onClick={handleToggleSidebar}
            ></div>
            <div
                className={classNames(sidebar, {
                    [slideSidebar]: isSidebarOpen,
                })}
            >
                {isSidebarOpen && (
                    <div className={boxIcon} onClick={handleToggleSidebar}>
                        <IoMdClose />
                    </div>
                )}
                {handleRenderContent()}
            </div>
        </div>
    );
}

export default Sidebar;
