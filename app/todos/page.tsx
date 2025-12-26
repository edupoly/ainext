import { getTodos } from '@/actions/todo.actions'
import React from 'react'
import Todolist from './Todolist'

export default async function page() {
    const alltodos = await getTodos()
  return (
    <div>
        <Todolist alltodos={alltodos}></Todolist>
    </div>
  )
}
