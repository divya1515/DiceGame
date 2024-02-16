import React, { useState } from 'react'
import Nav from '../Nav'
import Section from '../Section'

function Game(){
    const [score,setscore]=useState(0)
    const [num,setnum]=useState('');
    const [dicenum,setdicenum]=useState('');
    const [numselect,setnumselect]=useState(true)
    return (
        <>
        <Nav score={score} setscore={setscore} num={num} setnum={setnum}
        numselect={numselect} setnumselect={setnumselect}/>
        <Section score={score} setscore={setscore} num={num} setnum={setnum} dicenum={dicenum} setdicenum={setdicenum} numselect={numselect} setnumselect={setnumselect}
        />
        </>
    )
}

export default Game