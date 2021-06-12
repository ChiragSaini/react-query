import React from 'react'
import { useQuery } from 'react-query';

const fetcher = (url) => {
    return fetch(url).then(res => res.json()).catch(err => console.log(err));
}

const Post = ({ postId, goBack }) => {
    const { data, isLoading } = useQuery(['post', postId], () => fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}`))

    if(isLoading){
        return <h2>Loading Post...</h2>
    }
    return (
        <>
            <h2>PostId: {postId}</h2>
            <h2>{data.title}</h2>
            <h2>{data.body}</h2>
            <a href="#" onClick={goBack}>Go Back</a>
        </>
    )
}

export default Post
