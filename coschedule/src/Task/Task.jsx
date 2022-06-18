import React, { useState } from "react";
import styled, { css } from "styled-components";
import{nanoid} from 'nanoid'
import Todoitem from "./Todoitem"
import  "./todo.css"

const Container = styled.div``;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  background: #fff;
  position: absolute;
  top: 50px;
 width: 25%;
 margin:auto;
 margin-left:35%; 
 /* justify-content:center; */
 /* text-align:center; */
 // border: 1px solid #000;
  padding: 20px;
  height: 500px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

/* const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: #fff;
  border: 1px solid #000;
  padding: 20px;
  min-height: 200px;
`; */

  const  Task =()=> {
  const [isOpen, setOpen] = useState(false);
  const[task,setTask]=useState("")
  const[todo,setTodo]=useState([])
  const handal=(e)=>{
     setTask(e.target.value)
  }
  const handclick=()=>{
      let payload={
          id:nanoid(),
          title:task,
          status:false
      }
      setTodo([payload,...todo])
  }
  return (
 
        <>
          <ModalContainer>
        <Modal>
            <h1>Title</h1>
            <input className="b" type={"text"} value={task} placeholder="Write your task" onChange={handal}></input>
        <button className="c" onClick={handclick}>+</button>
        {todo.map(item=>{
            return <Todoitem key={item.id} data={item}/>
        })}
        </Modal>
          </ModalContainer>
        </>
    
  );
}
export default Task