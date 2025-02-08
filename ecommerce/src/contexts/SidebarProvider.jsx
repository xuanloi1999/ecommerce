import { createContext, useState } from 'react';

export const SidebarContext = createContext();
export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }} r>
            {children}
        </SidebarContext.Provider>
    );
};
