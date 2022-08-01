import React, { useState, useEffect } from 'react';

import '../content.css'

import PostsItemsView from './PostItemsView';
import PostView from './PostView';



function Content() {
  let [posts, setPosts] = useState([]);
  let [postClick, setPostClick] = useState(false);
  let [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch('http://localhost/blog/public/', {
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        setPosts(data.data.data)
      })
      .catch(err => {
        alert("unable to fetch posts")
      })
  }, []);

  const handlePostClick = (id) => {
    console.log(id)
    setPostClick(true)
    fetch(`http://localhost/blog/public/post/${id}`, {
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.data.data)
        setPostData(data.data.data)
      })
  }


  return (
    <div className="content-container">
      {postClick ? <PostView postData={postData} /> : <PostsItemsView posts={posts} handlePostClick={handlePostClick} />}
    </div>
  )
}

export default Content;