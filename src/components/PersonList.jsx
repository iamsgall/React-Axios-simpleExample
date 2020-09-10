import React, {useState, useEffect} from 'react';
import API from '../utils/API';

export default function PersonList() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await API.get('users');
        // console.log(res);
        return setPersons(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h1>Person List with Axios (GET)</h1>
      <ul>
        {persons.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </>
  );
}
