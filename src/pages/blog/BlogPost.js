import React from 'react';

const BlogPost = ({ match }) => {
  const postId = match.params.postId; // assuming post id is passed as a route parameter

  // Fetch blog post data based on postId or use static data
  const blogPost = {
    title: 'Sample Blog Post',
    content: 'This is a sample blog post content.',
    // other properties
  };

  return (
    <div>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
    </div>
  );
};

export default BlogPost;
