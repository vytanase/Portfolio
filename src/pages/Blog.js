import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetching data from Strapi (replace with your actual Strapi URL)
    axios.get('http://localhost:1337/api/blog-posts')
      .then(response => {
        setPosts(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blog posts:', error);
      });
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.attributes.title}</h3>
            <p>{post.attributes.content}</p>
            <small>{new Date(post.attributes.date).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
