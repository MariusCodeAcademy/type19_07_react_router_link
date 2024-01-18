import React from 'react';
import { Link } from 'react-router-dom';

export default function AddPost() {
  return (
    <div className='container'>
      <h1>Create post</h1>
      <Link to={'/'}>Back to home</Link>

      <p>Form</p>
    </div>
  );
}
