import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Post from './Post';
import './App.css';
import { client } from './react-query-client';


const fetcher = (url) => {
    return fetch(url).then(res => res.json()).catch(err => console.log(err));
}

function App() {

    const [postId, setPostId] = useState(null)

    const { data: posts, isLoading } = useQuery('posts', () => fetcher('https://jsonplaceholder.typicode.com/posts'))

    if (postId) {
        return <Post postId={postId} goBack={() => setPostId(null)} />
    }

    const mutateTitle = (id) => {
        if (!client.getQueryData(['post', id])) return;
        client.setQueryData(['post', id], oldData => {
            if(oldData){
                return {
                    ...oldData,
                    title: 'boom boom mutated'
                }
            }
        })
    }


    return (
        <div className="App">
            {isLoading && <h2>Loading...</h2>}
            {posts && posts.map(post => {
                const cachedPost = client.getQueryData(['post', post.id]);
                return (
                    <div style={{ marginBottom: '10px' }} key={post.id}>
                        <p>
                            <b>{cachedPost ? '(visited)' : ''}</b>
                            <a onClick={() => setPostId(post.id)} href="#">{post.id}: {post.title}</a>
                            <button onClick={() => mutateTitle(post.id)}>Mutate the title</button>
                        </p>
                    </div>
                )
            })}
        </div >
    );
}

export default App;