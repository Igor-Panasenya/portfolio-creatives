import React from 'react';
import './blog.css';
import {useState} from "react";
import BlogItem from "../blogItem/BlogItem";

const Blog = () => {

    const [blogItems, setBlogItems] = useState([
        {
            id: '1',
            title: 'FEATURE ONE',
            body: 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus',
            img: 'img/blog-photo-1.jpg',
        },
        {
            id: '2',
            title: 'FEATURE ONE',
            body: 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus',
            img: 'img/blog-photo-2.jpg',
        },
        {
            id: '3',
            title: 'FEATURE ONE',
            body: 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus',
            img: 'img/blog-photo-3.jpg',
        },
        {
            id: '4',
            title: 'FEATURE ONE',
            body: 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus',
            img: 'img/blog-photo-4.jpg',
        },
    ])

    return (
        <section className="container">
            <div className="__B">
                <h2 style={{color: 'black'}}>Let's blog</h2>
            </div>
            <p className="blog-content">We love clean design and advanced digital solutions.</p>

            <div className="content-cards">

                {blogItems.map((blogItem) =>
                    <BlogItem blogItem={blogItem} key={blogItem.id} />
                )}

            </div>
        </section>
    );
};

export default Blog;