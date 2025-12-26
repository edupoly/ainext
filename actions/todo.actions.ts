"use server"; //most important
import dbConnect from "@/app/lib/dbConnect";
import todoModel from "@/app/models/todo.model";
import { redirect } from "next/navigation";

export async function getTodos() {
  await dbConnect();
  const todos = JSON.parse(JSON.stringify(await todoModel.find()));
  //   return JSON.stringify(todos);
  return todos;
}

export async function addTodo(title) {
  await dbConnect();
  const newtodo = await todoModel.create({ title, status: false });
  redirect("/todos");
}

export async function deleteTodo(id) {
  await dbConnect();
  await todoModel.deleteOne({ _id: id });
  redirect("/todos");
}
