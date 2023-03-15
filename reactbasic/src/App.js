/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import State from './component/State'
import {useState} from 'react'
import Box from './component/Box';
import Comment from './component/Comment';
import CommentList from './component/Commentlist';
import back from './배경.jpg'

function App() {
  return (
    <div className='App'>
      <CommentList/>
      {/* <div className='back'></div> */}
      {/* <div style={{backgroundImage : 'url(' + back + ')', height : '400px'}}></div> */}
      {/* <div style={{backgroundImage : `url(${back})`, height : '500px', backgroundSize: 'cover'}}></div>
      <img src={process.env.PUBLIC_URL + './배경2.jpg'} height = '465px' />

      <div style={{backgroundImage : 'url(https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/186979364_2920783194806961_8156189086348916885_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=973b4a&_nc_ohc=sxNaVdxD2s0AX9HCKCv&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBvaXBhCW2sxlxTBemEU3u7HeQ3LAflR23__2Cmn19itg&oe=6430B0AC)', height : '500px', backgroundSize: 'cover'}}></div>
      <img src={back} alt="" /> */}
    </div>
  )
}

export default App;