import { useState } from 'react';
import reactLogo from './assets/react.svg';
import '@styles/main.scss';
import MainLayout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <MainLayout>
                <Header />
            </MainLayout>
        </>
    );
}

export default App;
