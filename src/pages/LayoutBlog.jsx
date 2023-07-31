import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const LayoutBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPosts] = useState(null);

    const goBack = () => navigate(-1);

    // console.log(location);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }, [id]);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
           {post && (
             <>
               <h1>{post.title}</h1>
               <p>{post.body}</p>
             </>
           )}
        </div>
    );
};
   

export { LayoutBlog };