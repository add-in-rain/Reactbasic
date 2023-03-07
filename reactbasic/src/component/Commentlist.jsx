import React from "react";
import Comment from "./Comment";

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
  return (
    <div>
      {
        comments.map((comment, i)=>{
          return (
            <Comment name={comment.name} comment={comment.comment} key={i}/>
          )
        })
      }
    </div>
  )
}

export default CommentList;