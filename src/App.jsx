import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import './App.css';

function App() {
    useQuery(['todo-single-item', 'itemId']) // Dont use objects. Stick to primitives
    return (
        <div className="App">
            <header className="App-header">
                <button>Toggle Button</button>
                <p>
                    Hello World
                </p>
            </header>
        </div>
    );
}

export default App;