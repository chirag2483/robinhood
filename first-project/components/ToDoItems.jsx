import React from 'react'
import './css/ToDoItems.css'


const ToDoItems = ({no,display,text,setTodos}) => {
    const not_tick = 'O';
    const tick = '✅';
    const cross = 'X';

    const toggle = (el)=>{

        const data = JSON.parse(localStorage.getItem("todos" ));
        for(let i=0;i<data.length;i++)
        {
            if(data[i].no===el)
            {
                if(data[i].display==='')data[i].display='line-through';
                else data[i].display='';
                break;
            }  
        }

        setTodos(data);
    }

    const removeItem=(no)=>{
        let data = JSON.parse(localStorage.getItem("todos" ));

        data = data.filter((todo)=>{
           return  todo.no!==no;
        })
        setTodos(data);
    }
  return (
    <div className="todo-items">

        <div className="todo-items-container" onClick={()=>{toggle(no)}}>

             {display===""?<button>{not_tick}</button>:<button>{tick}</button>}
              
            <div className={`todo-items-text ${display}`}>{text}</div>
        </div>
        <button onClick={()=>{removeItem(no)}}>{cross}</button>
    </div>
  )
}

export default ToDoItems
