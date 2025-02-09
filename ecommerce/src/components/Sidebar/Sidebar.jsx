import { useContext } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import Login from '@components/ContentSideBar/Login/Login';
import Compare from '@components/ContentSideBar/Compare/Compare';
import WishList from '@components/ContentSideBar/WishList/WishList';
import Cart from '@components/ContentSideBar/Cart/Cart';
import DetailProduct from '@components/ContentSideBar/DetailProduct/DetailProduct';
import { SidebarContext } from '@/contexts/SidebarProvider';

function SideBar() {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isSidebarOpen, setIsSidebarOpen, type } =
        useContext(SidebarContext);

    const handleToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare />;
            case 'wishlist':
                return <WishList />;
            case 'cart':
                return <Cart />;
            case 'detail':
                return <DetailProduct />;

            default:
                return <Login />;
        }
    };

    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isSidebarOpen,
                })}
                onClick={handleToggle}
            />
            <div
                className={classNames(sideBar, {
                    [slideSideBar]: isSidebarOpen,
                })}
            >
                {isSidebarOpen && (
                    <div className={boxIcon} onClick={handleToggle}>
                        <TfiClose />
                    </div>
                )}

                {handleRenderContent()}
            </div>
        </div>
    );
}

export default SideBar;
