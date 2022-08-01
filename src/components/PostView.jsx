import React from 'react';


function PostView ({postData}) {
  return (
    <div className="post-view">
      <img src={postData.image} alt="post" />
      <h3>{postData.title}</h3>
      <p>{postData.desc}</p>
    </div>
  )
}

export default PostView;