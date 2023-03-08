import React from "react";
import Comment from "./Comment";
import {useState} from "react";

const comments = [
  {
    name : "돌쇠1",
    comment : "안녕하시유, 돌쇠랑께요."
  },
  {
    name : "돌쇠2",
    comment : "이거 왜하심."
  },
  {
    name : "돌쇠3",
    comment : "노잼이랑께요."
  }
]

function CommentList() {
  const [commentList, setCommentList] = useState(comments);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const deleteComment = (index) => {
    const newCommentList = [...commentList];
    newCommentList.splice(index, 1)
    setCommentList(newCommentList)
  }

  const addComment = () => {
    // const add = {name: "히히히", comment : "망했시유~"}
    // setCommentList([add,...commentList])

    const add = {name : name, comment : content}
    setCommentList([add,...commentList])
    setName('')
    setContent('')
  }

  return (
    <div>
      {
        commentList.map((comment, i)=>{
          return (
            <Comment name={comment.name} comment={comment.comment} key={i} onDelete={()=> deleteComment(i)}/>
          )
        })
      }
      <div>
      이름 : <input value={name} onChange = {(e) => setName(e.target.value)} type="text" /> 
      댓글 : <input value={content} onChange = {(e) => setContent(e.target.value)} type="text" /> 
      <button onClick={addComment}>글 추가</button>
      </div>
      
    </div>
  )
}

export default CommentList;