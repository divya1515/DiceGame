import React, { useState } from 'react'
import Box from './Box'

function Nav({
  score,
  setscore,
  num,
  setnum,
  numselect,
  setnumselect
}){
    const [bgColor,setbgColor]=useState({
        "1":'',
        "2":'',
        "3":'',
        "4":'',
        "5":'',
        "6":''
    })
    const [textColor,settextColor]=useState({
      "1":'',
      "2":'',
      "3":'',
      "4":'',
      "5":'',
      "6":''
  })
    const handleClick=(name)=>{
      setbgColor(prev =>{
        const updatedColors = {};
        Object.keys(prev).forEach(key => {
          updatedColors[key] = key === name ? 'bg-black' : 'bg-white';
        });
        return updatedColors;
      })
      settextColor(prev =>{
        const updatedColors = {};
        Object.keys(prev).forEach(key => {
          updatedColors[key] = key === name ? 'text-white' : 'text-black';
        });
        return updatedColors;
      })
      setnum(parseInt(name, 10))
      setnumselect(true)
    }
    return(
        <>
         <div className='flex justify-between m-9'>
           <div className='flex flex-col'>
             <div className='text-7xl font-bold'>{score}</div>
             <div className='text-3xl font-medium'>Total Score</div>
           </div>
           <div className='flex flex-col'>
            {numselect==false && (
              <div className='text-2xl font-medium text-red-600'>You have to select any number first</div>
            )}
           <div className='flex'>
             <Box text="1" name="1" bgColor={bgColor["1"]} textColor={textColor["1"]} onClick={()=>handleClick("1")}/>
             <Box text="2" name="2" bgColor={bgColor["2"]} textColor={textColor["2"]} onClick={()=>handleClick("2")}/>
             <Box text="3" name="3" bgColor={bgColor["3"]} textColor={textColor["3"]} onClick={()=>handleClick("3")}/>
             <Box text="4" name="4" bgColor={bgColor["4"]} textColor={textColor["4"]} onClick={()=>handleClick("4")}/>
             <Box text="5" name="5" bgColor={bgColor["5"]} textColor={textColor["5"]} onClick={()=>handleClick("5")}/>
             <Box text="6" name="6" bgColor={bgColor["6"]} textColor={textColor["6"]} onClick={()=>handleClick("6")}/>
           </div>
           <div className='text-2xl font-medium'>Select any Number</div>
           </div>
         </div>
        </>
    )
}

export default Nav