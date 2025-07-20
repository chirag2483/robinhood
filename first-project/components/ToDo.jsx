import React, { useEffect, useRef, useState } from 'react'
import './css/ToDo.css'
import ToDoItems from './ToDoItems';

let cnt = 0;
const ToDo = () => {

    const[todos,setTodos]=useState([]);
    const inputRef = useRef(null);
    const add =()=>{
        setTodos([...todos,{no:cnt++,text:inputRef.current.value,display:""}]);
        inputRef.current.value = "" ;
        localStorage.setItem("todos_cnt",cnt);
    }

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem("todos")));
        cnt=localStorage.getItem("todos_cnt");
    },[])//adding from local storage


    useEffect(()=>{

        setTimeout(() => {

            console.log(todos);
            localStorage.setItem("todos",JSON.stringify(todos));
            
        }, 100);//use this after first
    },[todos])//execute when todos get updates

  return (
    <div className='todo'>

      <div className="todo-header">
        To Do List
      </div>

      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='add your task' className='todo-input' />
      <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
      </div>


      <div className="todo-list">

        {todos.map((el,index)=>{
                return <ToDoItems key={index} setTodos={setTodos}no={el.no} display={el.display} text={el.text}/>
        })}
      </div>

    </div>
  )
}

export default ToDo
