import { useContext } from 'react';
import styles from './styles.module.scss';
import { SidebarContext } from '@/contexts/SidebarProvider';
import classNames from 'classnames';
import { IoMdClose } from 'react-icons/io';

function Sidebar() {
    const { container, overlay, sidebar, slideSidebar, boxIcon } = styles;
    const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    console.log('isSidebarOpen', isSidebarOpen);

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
                SideBar
            </div>
        </div>
    );
}

export default Sidebar;
