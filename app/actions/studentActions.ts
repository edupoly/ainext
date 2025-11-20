"use server";

import dbConnect from "@/lib/dbConnect";
import Student from "@/models/Students";

export async function getStudents() {
  const con = await dbConnect();
  try {
    const students = await Student.find({});
    return students;
  } catch (e) {
    console.log("Exception::", e);
  }
}

export async function getStudentById(id: string) {
  const con = await dbConnect();
  try {
    const student = await Student.find({ _id: id });
    return student[0];
  } catch (e) {
    console.log("Exception::", e);
  }
}

export async function deleteStudentById(id: string) {
  const con = await dbConnect();
  try {
    const student = await Student.findByIdAndDelete({ _id: id });
    return student[0];
  } catch (e) {
    console.log("Exception::", e);
  }
}
