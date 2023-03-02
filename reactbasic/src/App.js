/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let user = 'add'
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(0);
  // 변수에 들어있는 데이터 html애 넣기
  // JSX 중괄호 문법 사용
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때 Array
  let [title, setTitle] = useState(["DW아카데미 503호", "DW아카데미 502호", "DW아카데미 501호"]);

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
        <h4>{title[0]}</h4>
        <span><button className='btn' onClick={() => {
          setCount1(count1 + 1)
          }}>👍</button> + {count1}</span>
        <p>안녕하세요. 저는 돌쇠입니다.</p>
      </div>

      
      <div className="list">
        <h4>{title[1]}</h4>
        <span><button className='btn' onClick={() => {
          setCount2(count2 + 1)
          }}>👍</button> + {count2}</span>
        <p>안녕하세요. 저는 갑순이입니다.</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <span><button className='btn' onClick={() => {
          setCount3(count3 + 1)
          }}>👍</button> + {count3}</span>
        <p>안녕하세요. 저는 철수입니다.</p>
      </div>
      <button onClick={() => {
        let copy = [...title];
        copy[0] = "뻥이야!";
        copy[1] = "속았지?";
        copy[2] = "메롱";
        console.log(title == copy)
        setTitle(copy)
      }}>글제목 변경</button>
      <button onClick={() => {
        let copy = [...title];
        copy.sort();
        setTitle(copy)
      }}>글정렬</button>
      
    </div>
  );
}

export default App;
