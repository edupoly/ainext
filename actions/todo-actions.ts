"use server";
import dbConnect from "@/lib/db";
import Todo from "@/models/Todo";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addTodo(ntd) {
  await dbConnect();
  await Todo.create({ title: ntd, status: false });
  redirect("/todolist");
}
export async function deleteTodo(id) {
  await dbConnect();
  await Todo.findByIdAndDelete(id);
  revalidatePath("/todolist");
  redirect("/todolist");
}
export async function getAllTodos() {
  await dbConnect();
  const todos = await Todo.find();
  return JSON.stringify(todos);
}
