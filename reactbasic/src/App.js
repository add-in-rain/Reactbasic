/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import State from './component/State'
import {useState} from 'react'
import Box from './component/Box';

function App() {
  //State라는 거에 반응하기 때문에 react
  //리액트는 변수 값이 업데이트 됐다고 UI를 재렌더링 하지 않는다.
  //State가 변경 되었을 때만 UI를 재렌더링한다.
  //useState => 리액트에서 제공하는 함수 중 하나 (훅)

  //useState 함수가 무엇을 리턴하느냐?
  //아이템이 2개 들어있는 배열(Array)
  //1. 초기값을 담고 있는 state 변수
  //2. state값을 변경할 수 있도록 도와주는 set함수
  //이 두가지 값을 배열로 리턴한다.
  //state를 변수처럼 사용하면 안되고, 값을 변경할 때는 항상 변경함수를 호출하고
  //값을 그 안에 집어 넣어야 한다.
  let num = 0;
  const [count, setCount] = useState(0)
  let increase = () => {
    num = num + 1;
    setCount(count + 1)
    //state값이 업데이트 될 때마다 function App을 다시 실행 시키면서 변경된 UI를 업데이트
    //변수는 값을 저장하지 않고 함수가 호출 될 때마다 초기화 된다.
    console.log("num", num, "state", count)
    console.log(count)
  }

  // State의 값 반영이 한 박자씩 늦는 이유
  // State값이 변경되어 함수가 호출 될 때 바로 변경 값을 실행 하는 게 아니라
  // 변경 되어야 하는 set함수들을 싹 모아서 함수가 끝나고나서 한 번에 처리한다. (비동기적)
  // State 주의할 점

  // State는 기존 값을 잃어버리지 않고 기억하고 있다.

  return (
    <div className='App'>
        {/* <Box name="돌쇠" num="1"/>
        <Box name="순자" num="2"/>
        <Box name="맹구" num="3"/>
        <Box name="철이" num="4"/> */}

      </div>
  );
}

export default App;