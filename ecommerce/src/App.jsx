import { Suspense, useState } from 'react';
import reactLogo from './assets/react.svg';
import '@styles/main.scss';
import HomePage from '@components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import { SidebarProvider } from '@/contexts/SidebarProvider';
import Sidebar from '@components/Sidebar/Sidebar';

function App() {
    console.log('routers:', routers);

    return (
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
    );
}

export default App;
