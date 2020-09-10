import React, {useState} from 'react';
import API from '../utils/API';

export default function PersonForm() {
  const [user, setUser] = useState({
    id: '',
    name: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await API.post('users', {user});
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async e => {
    e.preventDefault();
    try {
      const res = await API.delete(`users/${user.id}`);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>Add Person with Axios (POST)</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='userId'></label>
        <input
          type='text'
          id='userId'
          name='name'
          value={user.name}
          onChange={handleChange}
        />
        <input type='submit' value='Add' />
      </form>
      <hr />
      <h2>Delete Person with Axios (DELETE)</h2>
      <form onSubmit={handleDelete}>
        <label htmlFor='userId'></label>
        <input
          type='text'
          id='userId'
          name='id'
          value={user.id}
          onChange={handleChange}
        />
        <input type='submit' value='Delete' />
      </form>
    </>
  );
}
