import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Hello from '@components/Hello/Hello';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Hello />
            Ecommerce
        </div>
    );
}

export default App;
