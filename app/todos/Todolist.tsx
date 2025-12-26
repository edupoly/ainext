'use client';
import React,{useEffect, useState, useTransition} from 'react'
import { addTodo, deleteTodo, getTodos } from '@/actions/todo.actions'
function Todolist({alltodos}) {

    const [newtodo,setnewtodo ] = useState('')
    const [isPending,setTransition]=useTransition()
    function addTodoFn(){
        setTransition(async ()=>{
            const ntd = await addTodo(newtodo);
        })
    }
    function deleteTodoFn(id){
        setTransition(async ()=>{
            const ntd = await deleteTodo(id);
        })
    }
  return (
    <div>
        <h1>Hello Todolist - Praveen</h1>
        <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}/>
        <button onClick={()=>{addTodoFn()}}>Add Todo</button>
        <ul>
            {
                alltodos?.map((t:any,i)=>{
                    return <li key={i}>
                        {t.title}
                        {/* <button onClick={()=>{deleteTodoFn(t._id)}}> Delete </button> */}
                        </li>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist