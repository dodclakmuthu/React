import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Alert from './components/Alert/Alert'


import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admin' element={<h1>Admin</h1>} />
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
