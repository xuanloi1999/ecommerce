import { getCart } from '@apis/CartService';
import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';

export const SidebarContext = createContext();
export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [type, setType] = useState('');
    const [productsCart, setProductsCart] = useState([]);

    const handleGetProductsCart = (userId, type) => {
        if (userId && type === 'cart') {
            getCart(userId)
                .then((res) => {
                    setProductsCart(res.data.data);
                })
                .catch((err) => {
                    setProductsCart([]);
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
