import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import './App.css';

const fetcher = () => {
    return new Promise(resolve => {
        return setTimeout(resolve, 1000);
    })
}

function App() {

    const [state, setState] = useState(false)

    useQuery(['todo-single-item', 'item-1'], fetcher, {
        enabled: state, // This enaled can be used as an dependency, if something is present then only enable this query toherwise not
    })

    return (
        <div className="App">
            <header className="App-header">
                <div>State: {state}</div>
                <button onClick={() => setState(state => !state)}>Toggle Button</button>
            </header>
        </div>
    );
}

export default App;