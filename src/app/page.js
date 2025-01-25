'use client'
import Image from "next/image";
import { Input } from "postcss";

import { use, useState } from "react";


export default function Home() {
  const [count,setcount]=useState(0);
  const [inputnumber,setinputnumber]=useState();
  
  const sum=()=>setcount(count+1)
  const subt=()=>{
    if(count<=0){ setcount(0)}
   else setcount(count-1)
  }
  const reset=()=>{
    setcount(0);
    setinputnumber();
  }

  const setinputtocount = ()=>{
    setcount(parseInt(inputnumber,10))
  }

  const [a,seta]=useState();
  const [b,setb]=useState();
  const [result,setresult]=useState();

  const addition=()=>{
    setresult(parseInt(a,10)+parseInt(b,10))
  }

  const subtraction=()=>{
       setresult(parseInt(a,10)-parseInt(b,10));
  } 
  const multiply=()=> setresult(parseInt(a,10)*parseInt(b,10))
  const devide=()=>{
    if (b==0) {alert('can not devide by 0') }
      else {setresult(parseInt(a,10)/parseInt(b,10))}

  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
     <div className="flex w-100 space-x-20">
        <button onClick={sum} className="bg-green-500 w-20 rounded-md">plussss</button>
        <button onClick={subt} className="bg-gray-400 w-20 rounded-md ">minus</button>
        <button onClick={reset} className="bg-red-500 w-20 rounded-md">reset</button>
     </div>
        <p className="number mx-36">number is: {count} </p>
        <input className="bg-white rounded-md w-300 h-10 mx-28 text-black  "
          onChange={e=>setinputnumber(e.target.value)}
          // value={inputnumber}
          >

          </input>
          
        <button onClick={setinputtocount} className="bg-purple-300 w-40 text-black rounded-md"  >set number</button>
      <div className="flex">
        <input onChange={e=>seta(e.target.value)} className="bg-white rounded-md w-20 h-10 mx-28 text-black"></input>
        <input onChange={e=>setb(e.target.value)} className="bg-white rounded-md w-20 h-10 mx-28 text-black"></input>
      </div>
      <div className="flex space-x-5 mx-28">
      <button onClick={addition} className="bg-red-500 w-20 rounded-md">+</button>
      <button onClick={subtraction} className="bg-red-500 w-20 rounded-md">-</button>
      <button onClick={multiply} className="bg-red-500 w-20 rounded-md">*</button>
      <button onClick={devide} className="bg-red-500 w-20 rounded-md">/</button>

      </div>
      <div className="mx-64 border-solid bg-red-500 rounded-md p-2" >
      <p  >result is:  {result}</p>
      </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      
      
       
        
      </footer>
    </div>
  );
}
