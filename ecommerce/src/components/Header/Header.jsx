import BoxIcon from '@components/Header/BoxIcon/BoxIcon';
import { dataBoxIcon } from '@components/Header/BoxIcon/constaints';
import styles from './styles.module.scss';
import { dataMenu } from '@components/Header/BoxIcon/constaints';
import Menu from '@components/Header/Menu/Menu';
import Logo from '@images/Logo-retina.png';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { TfiReload } from 'react-icons/tfi';
import { BsHeart } from 'react-icons/bs';
import { PiShoppingCart } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

function Header() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader,
        boxCart,
        quantity,
    } = styles;

    const [fixed, setFixed] = useState(false);
    const { scrollPosition } = useScrollHandling();
    const { isSidebarOpen, setIsSidebarOpen, type, setType, productsCart } =
        useContext(SidebarContext);

    const navigate = useNavigate();

    const handleOpenSidebar = (type) => {
        setIsSidebarOpen(true);
        setType(type);
    };

    useEffect(() => {
        setFixed(scrollPosition > 80);
    }, [scrollPosition]);
    return (
        <div className={classNames(container, { [fixedHeader]: fixed })}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.slice(0, 3).map((icon) => (
                            <BoxIcon type={icon.type} href={icon.href} />
                        ))}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((menu) => (
                            <Menu content={menu.content} />
                        ))}
                    </div>
                </div>
                <div onClick={() => navigate('/')}>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{ width: '153px', height: '53px' }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3).map((menu) => (
                            <Menu
                                content={menu.content}
                                setIsSidebarOpen={setIsSidebarOpen}
                            />
                        ))}
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{
                                fontSize: '20px',
                            }}
                            onClick={() => handleOpenSidebar('compare')}
                        />
                        <BsHeart
                            style={{
                                fontSize: '20px',
                            }}
                            onClick={() => handleOpenSidebar('wishlist')}
                        />
                        <div className={boxCart}>
                            <PiShoppingCart
                                style={{
                                    fontSize: '25px',
                                }}
                                onClick={() => handleOpenSidebar('cart')}
                            />

                            <div className={quantity}>
                                {productsCart.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
