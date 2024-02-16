import React, { useEffect, useState } from 'react'
import Dice1 from '../../dice1.png'
import Dice2 from '../../dice2.webp'
import Dice3 from '../../dice3333.png'
import Dice4 from '../../dice4.jpg'
import Dice5 from '../../dice5.png'
import Dice6 from '../../dice6.jpg'
import Button from './Button'
import { Link } from 'react-router-dom'

function Section({
    score,
    setscore,
    num,
    setnum,
    dicenum,
    setdicenum,
    numselect,
    setnumselect
}) {
    const [showrules, setshowrules] = useState(false)
    const [Diceimage, setDiceimage] = useState(Dice1)
    const handleClick1 = () => {
        setshowrules((prev) => !prev)
    }
    const handleChange = () => {
        if(num=='')
        {
            setnumselect(false)
        }
        else
        {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setdicenum(randomNumber)
        switch (randomNumber) {
            case 1:
                setDiceimage(Dice1)
                break;
            case 2:
                setDiceimage(Dice2)
                break;
            case 3:
                setDiceimage(Dice3)
                break;
            case 4:
                setDiceimage(Dice4)
                break;
            case 5:
                setDiceimage(Dice5)
                break;
            case 6:
                setDiceimage(Dice6)
                break;
            default:
                setDiceimage(Dice1)
                break;
        }
    }
    }
    useEffect(()=>{
        if(num==dicenum)
        {
              setscore(prev => prev + dicenum)
           console.log(dicenum)
        }
        else
        {
            setscore(prev=>prev-2)
            console.log("-2")
        }
    },[dicenum])
    const Reset=()=>{
        setscore(0);
    }
    return (
        <>
            <div className="text-center flex flex-col justify-center items-center space-y-4">
                <img src={Diceimage} alt="dice1" className="h-40 w-40 transition-transform duration-500 transform hover:scale-110 cursor-pointer"
                    onClick={handleChange} />
                <div className='text-2xl font-medium'>Click on Dice to roll</div>
                <Button text="Reset Score" bgColor='bg-white' textColor='text-black' className='outline outline-offset-2 font-bold' 
                onClick={Reset}/>
                <Button text="Show Rules" onClick={handleClick1} />
                {showrules && (
                    <div className='bg-pink-200 p-2 w-2/4'>
                        <div className='text-xl font-medium'>How to play the Dice Game</div>
                        <div>
                            <p>Select any Number</p>
                            <p>Click on Dice Image</p>
                            <p>After click on dice if you get the same number as selected then your current score will get added up by the number on Dice.</p>
                            <p>But if you get different number then your current score will be subtracted by 2</p>
                        </div>
                    </div>
                )}
            </div>
            <Link to="/" className='mx-0.5 px-7 py-2.5 text-xl font-medium from-black underline'>Go to Home Page</Link>
        </>
    )
}

export default Section