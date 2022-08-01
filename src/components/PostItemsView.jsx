import React from 'react';

import Post from '../components/Post';

function PostsItemsView({ posts, handlePostClick }) {

  let postsItems = posts.map(post =>
    <Post
      id = {post.id}
      date={post.date}
      image={post.image}
      title={post.title}
      description={post.description}
      key={post.id}
      handlePostClick = {handlePostClick}
    />
  );

  return postsItems;
}


export default PostsItemsView