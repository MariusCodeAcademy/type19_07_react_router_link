import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const postObj = {
  id: 1,
  title: 'His mother had always taught him',
  body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  userId: 9,
  tags: ['history', 'american', 'crime'],
  reactions: 2,
};

export default function PostsPage() {
  const [mainPostsArr, setMainPostsArr] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    axios
      .get('https://dummyjson.com/posts')
      .then((resp) => {
        console.log('resp ===', resp);
        const dataBack = resp.data;
        console.log('dataBack ===', dataBack);
        setMainPostsArr(dataBack.posts);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  return (
    <div className='container'>
      <h1>PostsPage</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde in, vel totam eum delectus
        blanditiis molestiae pariatur nemo sunt consequuntur quo sed quasi quos iusto quas deserunt
      </p>
      <ul className='unlisted grid'>
        {mainPostsArr.map((post) => (
          <li className='card' key={post.id}>
            <p>id: {post.id}</p>
            <h2>{post.title.slice(0, 15)}...</h2>
            <p>{post.body.slice(0, 50)}...</p>
            <p>likes: {post.reactions}</p>
            <p>{post.tags.join(', ')}</p>
            <Link className='btn' to={`/posts/${post.id}`}>
              Read more...
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
