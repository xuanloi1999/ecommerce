import { Suspense, useState } from 'react';
import reactLogo from './assets/react.svg';
import '@styles/main.scss';
import HomePage from '@components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';

function App() {
    console.log('routers:', routers);

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {routers.map(({ path, component: Component }, index) => (
                        <Route
                            key={index}
                            path={path}
                            element={<Component />}
                        />
                    ))}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
