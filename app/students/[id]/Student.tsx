'use client'
import React from 'react'
import { deleteStudentById } from '@/app/actions/studentActions'
import { useParams } from 'next/navigation'
function Student({firstname,lastname}) {
  const {id} = useParams();
  function delStud(){
    deleteStudentById(id).then((res)=>{console.log(res);})
  }
  console.log(id);
  return (
    <div>
        {`${firstname} ${lastname}`}
           <button className='bg-red-100 m-2 p-2 rounded' onClick={()=>{delStud()}}>Delete</button>
    </div>
  )
}

export default Student