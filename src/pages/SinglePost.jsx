// import React from 'react';

import { useParams } from 'react-router-dom';

export default function SinglePost() {
  const { postId } = useParams();
  // console.log('params ===', params);

  // parsiusti objekta is dummy json su id postId
  //  https://dummyjson.com/posts/{id}
  // ir supildyti jo html
  return (
    <div className='container card'>
      <h1>SinglePost</h1>
    </div>
  );
}
