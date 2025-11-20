'use client';
import {abc,getPlayers,getStudents} from '@/app/actions/abcAction'
import { useTransition } from 'react';
function AbcClient() {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      // Call your server action here
      abc().then((res)=>{
        console.log(res);
        console.log("Endi ippudu");
      })
      getStudents();
    });
  };
  return (
    <div>
        Todos page ra
        <button className='border border-2 p-2 m-2' onClick={()=>{handleClick()}}>Chuddam</button>
     </div>
  )
}

export default AbcClient