import { useState } from 'react';
import reactLogo from './assets/react.svg';
import '@styles/main.scss';
import HomePage from '@components/HomePage/HomePage';
import Info from '@components/Info/Info';

function App() {
    return (
        <>
            <HomePage />
            <Info />
        </>
    );
}

export default App;
