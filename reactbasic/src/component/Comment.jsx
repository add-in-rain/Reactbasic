import React from "react";
import'./Comment.css';

const styles = {
  wrapper : {
    display: 'flex',
    margin: '8px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '16px'
  }, 
  image : {
    width: '50px',
    height: '50px',
    borderRadius: '50%'
  },
  contentContainer : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '8px'
  },
  nameText : {
    fontSize: '18px',
    fontWeight: 'bold'
  }, 
  commentText : {
    fontSize: '14px'
  },
  closeBtn : {
    width : '25px',
    height : '25px',
    marginLeft : '20px',
    margin : 'auto',
    fontSize: '14px',
  }
}



function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div>
        <img style={styles.image} src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user-img" />
      </div>

      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
      <button style={styles.closeBtn}>X</button>
    </div>
  )
}

export default Comment;