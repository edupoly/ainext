
import React from 'react'

import { getStudentById } from '../../actions/studentActions'
import Student from './Student';


async function page({params}) {
    const {id} = await params;
    const student = await getStudentById(id)
    function delStud(){
      alert("HI")
    }
  return (
    <div>
        <h1 className="text-2xl">
           <Student firstname={student.firstname} lastname={student.lastname}></Student>
        </h1>
    </div>
  )
}

export default page