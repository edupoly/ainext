import React from 'react'
import { getStudents, getUsers } from '../lib/actions'
async function page() {
  const p = await getUsers();
  const q = await getStudents()
  // console.log("p",p);
  // console.log("q",q);
  return (
    <div>
        <h1>HELLO Dashnoad</h1>
    </div>
  )
}

export default page