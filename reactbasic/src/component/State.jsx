import React from 'react';
import {useState} from 'react';
import './State.css'

function State() {
  let user = 'yejin1';
  // react에서 변수처럼 자료를 보관할 수 있는 state문법
  let [count, setCount] = useState(0);
  let [like, setLike] = useState([0,0,0]);
  // 변수에 들어있는 데이터 html에 넣기
  // JSX 중괄호 문법 사용
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때 Array[ ]
  let [title, setTitle] = useState(["DW아카데미 503호", "DW아카데미 501호", "DW아카데미 203호"])
  let [bgColor, setbgColor] = useState('white');
  let [name, setName] =useState(["돌쇠1", "돌쇠2", "돌쇠3"]);
  let [ye, setYe] = ['yejin', 'lee', 'lala'];


  let changeBg = () => {
    let newBg = bgColor == 'white'? 'red' : 'white';
    setbgColor(newBg)
  }


  // map함수가 array의 갯수만큼 retrun을 반복한다.
  // 매개변수(파라미터)를 만들어주면 함수 파라미터가 array자료 안에 있는 데이터가 된다
  [1,2,3].map(function(num){
    // return console.log(num)
  })

  // let num = [1,2,3,4,5];
  // let newNum = num.map((num)=> num + 1)
  // console.log(num)
  // console.log(newNum)

  let num = [1,2,3,4,5];
  let newArr = num.map(function(element){
    return element * 3
  })
  console.log(newArr)

  for(let i = 0; i < num.length; i++) {
    num[i] = num[i] * 3;
  }
  console.log(num)


  return ( 
    <div className="App" style={{backgroundColor : bgColor}}>
      <h1>Hello, {user}!</h1>
      <p>This is a React App</p>

      <div>
        <p>클릭시 + {count}</p>
        <button onClick={()=>{
          setCount(count + 1)
        }}>Click Me</button>
      </div>

      {/* {
        [1,2,3].map(function(){
          return <div>안녕</div>
        })
      } */}


      {/* {
        ye.map(function(a){
          return a.toUpperCase()
        })
      } */}

      {
        title.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4>{title[i]}</h4>
              <span onClick={()=>{
                let copy = [...like];
                copy[i] = copy[i] + 1
                setLike(copy)
              }}>👍{like[i]}</span>
              <p>안녕하세요. 저는 {name[i]} 입니다.</p>
            </div>
          )
        })
      }

      
      {/* <div className="list">
        <h4>{title[0]}</h4>
        <span><button className='btn' onClick={() => {
          setCount1(count1 + 1)
          }}>👍</button> + {count1}</span>
        <p>안녕하세요. 저는 돌쇠입니다.</p>
      </div> */}

      
      {/* <div className="list">
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
      </div> */}

      <button onClick={()=>{
        let copy = [...title];
        copy[0] = "뻥이야!";
        copy[1] = "속았지?";
        copy[2] = "메롱";
        console.log(title == copy)
        setTitle(copy)
      }}>글제목 변경</button>
      <button onClick={()=>{
        let copy = [...title];
        copy.sort()
        setTitle(copy);
      }}>글 정렬</button>

      <button onClick={changeBg}>배경색 변경</button>
      <button onClick={()=>{
        let copy = [...name];
        copy = ["돌쇠", "갑분이", "말숙이"]
        setName(copy)
      }}>이름변경</button>

    </div>
  );
}

export default State;