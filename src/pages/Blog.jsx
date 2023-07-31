import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }, []);

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </link>
                ))}
            </ul>
        </div>
    );
};

export { Blog };