import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import './App.css';

const fetcher = (repo) => {
    return fetch(`https://api.github.com/repos/${repo}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

function App() {
    const [repoName, setRepoName] = useState('');
    const { data, isLoading } = useQuery(['github-data', repoName], () => fetcher(repoName))


    return (
        <div className="App">
            <header className="App-header">
                <input type='text' value={repoName} onChange={(e) => setRepoName(e.target.value)} />
                {isLoading && <h2>Loading..</h2>}
                {data && (
                    <>
                        <h2>Name: {data.name}</h2>
                        <h2>Description: {data.description}</h2>
                        <h2>Stars: {data.stargazers_count}</h2>
                    </>
                )}
            </header>
        </div>
    );
}

export default App;