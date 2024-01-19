// import React from 'react';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

const postObj = {
  id: 1,
  title: 'His mother had always taught him',
  body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  userId: 9,
  tags: ['history', 'american', 'crime'],
  reactions: 2,
};

export default function SinglePost() {
  const { postId } = useParams();
  // console.log('params ===', params);

  const [isLoading, setIsLoading] = useState(false);

  let [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams ===', searchParams.get('value'));
  const [postObj, setPostObj] = useState({
    // tags: [],
  });
  console.log('postObj ===', postObj);

  // parsiusti objekta is dummy json su id postId
  useEffect(() => {
    getPost();
  }, []);

  function getPost() {
    // https://dummyjson.com/posts/{postId}
    axios
      .get(`https://dummyjson.com/posts/${postId}`)
      .then((resp) => {
        console.log('resp ===', resp);
        const dataBack = resp.data;
        console.log('dataBack ===', dataBack);
        setPostObj(dataBack);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }
  //  https://dummyjson.com/posts/{id}
  // ir supildyti jo html
  return (
    <div className='container card'>
      <div className='card' key={postObj.id}>
        <p>id: {postObj.id}</p>
        <h2>{postObj.title}</h2>
        <p>{postObj.body}</p>
        <p>likes: {postObj.reactions}</p>
        <p>{postObj.tags?.join(', ')}</p>
        <Link className='btn' to={`/posts/`}>
          Go back
        </Link>
      </div>
    </div>
  );
}
