'use client'
import Image from "next/image";
import { Input } from "postcss";

import { use, useState } from "react";







export default function Home() {

  let [count, setCount] = useState(0);
  const [numberr,setNumberr]=useState();
  let result;
  
  const plus = () => {
    setCount(count++)
    }
  const minus = () =>  { 
    if(count<=0) setCount(0);
        else
        setCount(count--);
  }
  const reset = () =>  setCount(0);
  
  return (
 
    

 

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
   
     <div className="flex w-100 space-x-20">
        <button onClick={plus} className="bg-green-500 w-20 rounded-md">plussss</button>
        <button onClick={minus} className="bg-gray-400 w-20 rounded-md ">minus</button>
        <button onClick={reset} className="bg-red-500 w-20 rounded-md">reset</button>
     </div>
        <p className="number mx-36">number is: {count}</p>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      
      
       
        
      </footer>
    </div>
  );
}
