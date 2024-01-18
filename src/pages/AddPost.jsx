import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddPost() {
  const [inputsObj, setInputsObj] = useState({
    title: '',
    author: 'James Band',
  });

  function handleTitleInput(e) {
    const reikme = e.target.value;
    // paimam viska kas yra state ir pridedam kas pasikeite
    setInputsObj({ ...inputsObj, title: reikme });
  }

  function handleAuthorInput(e) {
    const reikme = e.target.value;
    // paimam viska kas yra state ir pridedam kas pasikeite
    setInputsObj({ ...inputsObj, author: reikme });
  }

  const arr = [];
  arr.push(1);

  function handleNewPostFormSubmit(e) {
    e.preventDefault();

    console.log('react i in control');
  }

  return (
    <div className='container'>
      <h1>Create post</h1>
      <p>title: {inputsObj.title}</p>
      <Link to={'/'}>Back to home</Link>

      <form onSubmit={handleNewPostFormSubmit} className='add-post-form'>
        <label>
          <span>Title</span>
          <input
            onChange={handleTitleInput}
            value={inputsObj.title}
            type='text'
            placeholder='Title'
          />
        </label>
        <label>
          <span>Author</span>
          <input
            onChange={handleAuthorInput}
            value={inputsObj.author}
            type='text'
            placeholder='Author'
          />
        </label>
        <label>
          <span>Body</span>
          <textarea cols='30' rows='10'></textarea>
        </label>
        <button type='submit'>Create post</button>
      </form>
    </div>
  );
}
