import BoxIcon from '@components/Header/BoxIcon/BoxIcon';
import { dataBoxIcon } from '@components/Header/BoxIcon/constaints';
import styles from './styles.module.scss';
import { dataMenu } from '@components/Header/BoxIcon/constaints';
import Menu from '@components/Header/Menu/Menu';
import Logo from '@images/Logo-retina.png';
function Header() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
    } = styles;
    return (
        <div className={container}>
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
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{ width: '153px', height: '53px' }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3).map((menu) => (
                            <Menu content={menu.content} />
                        ))}
                    </div>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.slice(3).map((icon) => (
                            <BoxIcon type={icon.type} href={icon.href} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
