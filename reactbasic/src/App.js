/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import State from './component/State'
import {useState} from 'react'
import Box from './component/Box';
import Comment from './component/Comment';
import CommentList from './component/Commentlist';

function App() {
  return (
    <div className='App'>
      <CommentList/>
    </div>
  )
}

export default App;