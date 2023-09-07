import React from 'react'

const Propshow = (props) => {

    //function Palindrome(int name,int roll,int sec){}
    //function Propshow(props){}
  return (
    <div>
        <h1>
            Name: {props.name}
        </h1>
        <h2>
            roll: {props.roll}
        </h2>
        <h3>
            sec: {props.sec}
        </h3>
    </div>
  )
}

export default Propshow