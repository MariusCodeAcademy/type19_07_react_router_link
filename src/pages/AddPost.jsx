import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddPost() {
  const [inputsObj, setInputsObj] = useState({
    title: '',
    author: 'James Band',
    body: '',
    tagsString: 'blue, green,  yellow,red,0',
  });

  function handleInput(event) {
    const { value, name } = event.target;
    console.log('value, name ===', value, name);
    setInputsObj({ ...inputsObj, [name]: value });
  }

  function handleTitleInput(e) {
    const reikme = e.target['value'];
    const inputKey = 'title';
    console.log('e.target.name ===', e.target.name);
    console.log('e.target.id ===', e.target.id);

    // paimam viska kas yra state ir pridedam kas pasikeite
    setInputsObj({ ...inputsObj, title: reikme });
  }

  function handleAuthorInput(e) {
    const reikme = e.target.value;
    // paimam viska kas yra state ir pridedam kas pasikeite
    setInputsObj({ ...inputsObj, author: reikme });
  }

  function handleTextareaInput(e) {
    const reikme = e.target.value;
    // paimam viska kas yra state ir pridedam kas pasikeite
    setInputsObj({ ...inputsObj, body: reikme });
  }

  // textarea handleTextareaInput

  // textarea handleTagsInput

  const arr = [];
  arr.push(1);

  function handleNewPostFormSubmit(e) {
    e.preventDefault();

    console.log('react i in control');
    console.log('inputsObj ===', inputsObj);

    // tags, should be an array
    const finalObj = {
      ...inputsObj,
      tags: inputsObj.tagsString
        .split(',')
        .map((str) => str.trim())
        .filter((str) => str.length),
      // .filter((str) => str !== ''),
      // .filter((str) => str.length > 0),
    };
    delete finalObj.tagsString;
    console.log('finalObj ===', finalObj);
    // console.log final obj

    // hide form

    // show card with input data
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
            onChange={handleInput}
            onKeyDown={(e) => {
              console.log('e ===', e);
            }}
            value={inputsObj.title}
            type='text'
            placeholder='Title'
            id='title'
            name='title'
          />
        </label>
        <label>
          <span>Author</span>
          <input
            onChange={handleInput}
            value={inputsObj.author}
            type='text'
            placeholder='Author'
            id='author'
            name='author'
          />
        </label>
        <label>
          <span>Tags</span>
          <input
            onChange={handleInput}
            value={inputsObj.tagsString}
            type='text'
            id='tagsString'
            name='tagsString'
            placeholder='Add comma separated tags'
          />
        </label>
        <label>
          <span>Body</span>
          <textarea
            onChange={handleInput}
            value={inputsObj.body}
            id='body'
            name='body'
            cols='30'
            rows='10'></textarea>
        </label>
        <button type='submit'>Create post</button>
      </form>
    </div>
  );
}
