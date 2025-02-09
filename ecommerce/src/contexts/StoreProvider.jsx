import { getInfo } from '@/apis/authService';
import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [userId, setUserId] = useState(Cookies.get('userId'));

    useEffect(() => {
        if (userId) {
            getInfo(userId)
                .then((res) => {
                    console.log(res);

                    setUserInfo(res.data.data);
                })
                .then((err) => {
                    console.log(err);
                });
        }
    }, [userId]);

    const handleLogout = () => {
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        Cookies.remove('userId');

        setUserInfo(null);
        window.location.reload();
    };

    console.log('Render StoreProvider', userInfo);

    return (
        <StoreContext.Provider value={{ userInfo, handleLogout, setUserId }}>
            {children}
        </StoreContext.Provider>
    );
};
