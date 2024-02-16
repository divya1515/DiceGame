import React from 'react'
import DiceImg from '../../../diceimg.jpg'
import Button from '../Button'

function Home(){
  
    return(
    <>
      <div className='flex'>
      <img className='w-1/2 h-screen' src={DiceImg} alt="Dice Image" />
      <div className='w-1/2 h-screen flex flex-col justify-center items-center'>
        <div className='text-center'>
        <div className="text-7xl font-extrabold tracking-wide mb-4">DICE GAME</div>
        <Button text="Play Now" to="/Game"/>
        </div>
      </div>
      </div>
    </>
    )
}

export default Home