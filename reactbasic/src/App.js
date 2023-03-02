/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let user = 'add'
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);

  return (
    <div className="App">
      <h1>Hello, {user}!</h1>
      <p>This is a React App</p>

      <div>
        <p>클릭시 + {count}</p>
        <button onClick={() => {
          setCount(count + 1)
          }}>Click Me</button>
      </div>

      <div className="list">
        <h4>타이틀</h4>
        <span><button className='btn' onClick={() => {
          setCount1(count1 + 1)
          }}>👭</button> + {count1}</span>
        <p>안녕하세요. 저는 아무개입니다.</p>
      </div>
    </div>
  );
}

export default App;
