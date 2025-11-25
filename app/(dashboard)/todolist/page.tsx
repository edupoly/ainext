"use client";

import { addTodo,getAllTodos,deleteTodo } from "@/actions/todo-actions";
import { useEffect, useState, useTransition } from "react";

export default function Todolist() {
    const [isPendeing,setTransition]=useTransition()
    const [todos,setTodos] = useState([])
    useEffect(()=>{
      setTransition(async ()=>{
        const todos = await getAllTodos();
        setTodos(JSON.parse(todos));
      })
    },[])
        
    function handleSubmit(e){
      e.preventDefault();
      const fd = new FormData(e.target)

      setTransition(async ()=>{
            await addTodo(fd.get('title'))
        })
    }
    function handleDeleteTodo(id){
      
      setTransition(async ()=>{
            await deleteTodo(id)
        })
    }
  return (
    <div>
      <h1>HEllo Todolist</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="title" className="border"/>
        <button className="border border-2 mx-2 px-2">Add Todo</button>
      </form>
      <ul>
        {
          todos?.map((todo:any)=>{
            return <li key={todo._id}>
              {todo?.title}
              <button onClick={()=>{handleDeleteTodo(todo._id)}} className="border border-2 m-2 p-2">Delete</button>
              </li>
          })
        }
      </ul>
    </div>
  );
}

https://thoughtworks.zoom.us/j/96031791046