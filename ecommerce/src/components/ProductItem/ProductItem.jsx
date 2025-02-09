import { OurShopContext } from '@/contexts/OurShopProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import Button from '@components/Button/Button';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import cls from 'classnames';
import Cookies from 'js-cookie';
import { useContext, useEffect, useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { LiaEyeSolid, LiaShoppingBagSolid } from 'react-icons/lia';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { addProductToCart } from '@apis/CartService';

function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomePage = true,
    slideItem = false,
}) {
    // const { isShowGrid } = useContext(OurShopContext);
    const [sizeChoose, setSizeChoose] = useState('');
    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const userId = Cookies.get('userId');
    const {
        setIsSidebarOpen,
        setType,
        handleGetProductsCart,
        setDetailProduct,
    } = useContext(SidebarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceCl,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        containerItem,
        leftBtn,
        largImg,
        isActiveSize,
        btnClear,
    } = styles;

    const handleChooseSize = (size) => {
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose('');
    };

    const handleShowDetailProductSideBar = () => {
        setIsSidebarOpen(true);
        setType('detail');
        setDetailProduct(details);
    };

    const handleNavigateToDetail = () => {
        const path = `/product/${details._id}`;

        navigate(path);
    };

    const handleAddToCart = () => {
        setIsLoading(true);
        if (!userId) {
            setIsSidebarOpen(true);
            setType('login');
            toast.warning('Please login before add to cart!');
        }

        if (!sizeChoose) {
            toast.warning('Please choose size!');
            return;
        }

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: sizeChoose,
        };
        addProductToCart(data)
            .then((res) => {
                setIsSidebarOpen(true);
                setType('cart');
                toast.success('Add Product to cart successfully!');
                handleGetProductsCart(userId, 'cart');
                setIsLoading(false);
            })
            .catch((err) => {
                toast.error('Add Product to cart failed!');
                setIsLoading(false);
            });
    };

    useEffect(() => {
        if (isHomePage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomePage, ourShopStore?.isShowGrid]);

    useEffect(() => {
        if (slideItem) setIsShowGrid(true);
    }, [slideItem]);

    return (
        <div
            className={isShowGrid ? '' : containerItem}
            style={{
                cursor: 'pointer',
            }}
        >
            <div
                className={cls(boxImg, {
                    [largImg]: !isShowGrid,
                })}
            >
                <div onClick={handleNavigateToDetail}>
                    <img src={src} alt='' />
                    <img src={prevSrc} alt='' className={showImgWhenHover} />
                </div>

                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <LiaShoppingBagSolid
                            style={{
                                fontSize: '20px',
                            }}
                        />
                    </div>
                    <div className={boxIcon}>
                        <CiHeart
                            style={{
                                fontSize: '25px',
                            }}
                        />
                    </div>
                    <div className={boxIcon}>
                        <TfiReload
                            style={{
                                fontSize: '20px',
                            }}
                        />
                    </div>
                    <div
                        className={boxIcon}
                        onClick={handleShowDetailProductSideBar}
                    >
                        <LiaEyeSolid
                            style={{
                                fontSize: '23px',
                            }}
                        />
                    </div>
                </div>
            </div>

            <div
                className={isShowGrid ? '' : content}
                style={{
                    marginTop: slideItem && '10px',
                }}
            >
                {!isHomePage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cls(size, {
                                        [isActiveSize]:
                                            sizeChoose === item.name,
                                    })}
                                    onClick={() => handleChooseSize(item.name)}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                {sizeChoose && (
                    <div className={btnClear} onClick={() => handleClearSize()}>
                        clear
                    </div>
                )}

                <div
                    className={cls(title, {
                        [textCenter]: !isHomePage,
                    })}
                >
                    {name}
                </div>
                {!isHomePage && (
                    <div
                        className={textCenter}
                        style={{
                            color: '#888',
                        }}
                    >
                        Brand 01
                    </div>
                )}
                <div
                    className={cls(priceCl, { [textCenter]: !isHomePage })}
                    style={{
                        color: isHomePage ? '#333' : '#888',
                    }}
                >
                    ${price}
                </div>

                {!isHomePage && (
                    <div
                        className={cls(boxBtn, {
                            [leftBtn]: !isShowGrid,
                        })}
                    >
                        <Button
                            content={
                                isLoading ? (
                                    <LoadingTextCommon />
                                ) : sizeChoose ? (
                                    'ADD TO CART'
                                ) : (
                                    'SELECT OPTIONS'
                                )
                            }
                            onClick={handleAddToCart}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
