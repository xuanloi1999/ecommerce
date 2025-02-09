import { getCart } from '@apis/CartService';
import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';

export const SidebarContext = createContext();
export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [type, setType] = useState('');
    const [productsCart, setProductsCart] = useState([]);
    const [detailProduct, setDetailProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const userId = Cookies.get('userId');

    const handleGetProductsCart = (userId, type) => {
        if (userId && type === 'cart') {
            setIsLoading(true);
            getCart(userId)
                .then((res) => {
                    setProductsCart(res.data.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setProductsCart([]);
                    setIsLoading(false);
                });
        }
    };

    const value = {
        isSidebarOpen,
        setIsSidebarOpen,
        type,
        setType,
        handleGetProductsCart,
        productsCart,
        isLoading,
        setIsLoading,
        userId,
        detailProduct,
        setDetailProduct,
    };

    useEffect(() => {
        handleGetProductsCart(Cookies.get('userId'), 'cart');
    }, []);

    return (
        <SidebarContext.Provider value={value} r>
            {children}
        </SidebarContext.Provider>
    );
};
