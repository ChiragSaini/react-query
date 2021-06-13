import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import Post from './Post';
import './App.css';
import { client } from './react-query-client';


const fetcher = (url) => {
    return fetch(url).then(res => res.json()).catch(err => console.log(err));
}

const timer = (duration) => new Promise((resolve, reject) => setTimeout(() => {
    // resolve('yooooo');
    reject('yoooooo')
    console.log('I WAS RUN!!!!')
}, duration))

function App() {

    const mutation = useMutation(() => timer(1000), {
        onSuccess: (data) => console.log('Success!!', data),
        onError: (err) => console.log({ err })
    })

    async function calMutation() {
        console.log('about to call mutation');
        await mutation.mutateAsync()
        console.log('After Async')
    }

    return (
        <div className="App">
            <h2>Mutations</h2>
            <p onClick={calMutation}>Submit</p>
        </div >
    );
}

export default App;