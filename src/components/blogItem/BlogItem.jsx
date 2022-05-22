import React from 'react';
import './blogItem.css';

const BlogItem = ({blogItem}) => {
    return (
        <div className="blog-item">
            <img src={blogItem.img} alt="photo"/>
            <h4>{blogItem.title}</h4>
            <p>{blogItem.body}</p>
        </div>
    );
};

export default BlogItem;