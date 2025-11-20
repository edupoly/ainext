import React from 'react'

import Link from 'next/link'
import { getStudents } from '../actions/studentActions'

async function page() {
    const students = await getStudents()

  return (
    <div>
        <h1 className="text-2xl">
            <ul>
                {
                    students?.map((student)=>{
                        return <li key={student.id}><Link href={`/students/${student.id}`}>{student.firstname}</Link></li>
                    })
                }
            </ul>
        </h1>
    </div>
  )
}

export default page