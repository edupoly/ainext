'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
function ServiceNavbar() {

    const x = usePathname();
    console.log(x);
  return (
    <div>
        <ul className='flex flex-wrap gap-10'>
            <li className={x==="/services/CorporateTraining"?"bg-indigo-100 px-10 rounded py-2 bg-indigo-300":"bg-indigo-100 px-10 rounded py-2"}><Link href="/services/CorporateTraining">Corporate Trainings</Link></li>
            <li  className={x==="/services/Internship_training"?"bg-indigo-100 px-10 rounded py-2 bg-indigo-300":"bg-indigo-100 px-10 rounded py-2"}><Link href="/services/Internship_training">Internship Training</Link></li>
        </ul>
    </div>
  )
}

export default ServiceNavbar