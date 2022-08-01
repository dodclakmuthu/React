import React from 'react';

import Alert from './Alert/Alert';

function Post({ id, image, title, description, date, handlePostClick }) {
  return (
    <>
      <Alert type="success" message='sample test alert message success' />
      <div className="post-container" onClick={() => handlePostClick(id)}>
        <img src={image} alt="blog" />
        <h2 className='post-title'>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </>
  )
}

export default Post;