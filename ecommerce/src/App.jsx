import { Suspense, useState } from 'react';
import reactLogo from './assets/react.svg';
import '@styles/main.scss';
import HomePage from '@components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import { SidebarProvider } from '@/contexts/SidebarProvider';
import Sidebar from '@components/Sidebar/Sidebar';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/StoreProvider';

function App() {
    return (
        <StoreProvider>
            <ToastProvider>
                <SidebarProvider>
                    <Sidebar />
                    <BrowserRouter>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                {routers.map(
                                    ({ path, component: Component }, index) => (
                                        <Route
                                            key={index}
                                            path={path}
                                            element={<Component />}
                                        />
                                    )
                                )}
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </SidebarProvider>
            </ToastProvider>
        </StoreProvider>
    );
}

export default App;
