import React from 'react';
import './App.css';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';

function App() {
  return (
    <div className='App'>
      <PersonForm />
      <PersonList />
    </div>
  );
}

export default App;
