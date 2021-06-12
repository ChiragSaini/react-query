import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import './App.css';

const Button = () => {
    const { data, error } = useQuery('hello-world', () => {
        return new Promise(resolve => setTimeout(() => resolve(Math.random()), 1000))
    });
    console.log({ data, error });
    return <button>I am a Button {data}</button>
}


function App() {

    const [visible, setVisible] = useState(true);
    function toggleButton(){
        setVisible(state => !state);
    }

    return (
        <div className="App">
            <header className="App-header">
                {visible && <Button />}
                <button onClick={toggleButton}>Toggle Button</button>
                <p>
                    Hello World
                </p>
            </header>
        </div>
    );
}

export default App;