import { createContext, useState } from 'react';

export const SidebarContext = createContext();
export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [type, setType] = useState('');

    const value = { isSidebarOpen, setIsSidebarOpen, type, setType };

    return (
        <SidebarContext.Provider value={value} r>
            {children}
        </SidebarContext.Provider>
    );
};
