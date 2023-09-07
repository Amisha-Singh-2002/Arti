import React from 'react'
import {useState} from 'react'
const Form = () => {
    const [name,setname]=useState("Aarti"); 
    //int name="Aarti" ,,,setname for changing value of name for reading data we use name
    //setname("Amisha"); //name="Amisha"
    const [colour,setcolour]=useState("orange");

    function handleChange(e){
        console.log(e.target.value);
        setname(e.target.value);
    }
    function handleChange2(e){
        console.log(e.target.value);
        setcolour(e.target.value);
    }
    function submit(e){
        e.preventDefault();
        console.log("submit");
    }
  return (
    <div style={{backgroundColor:colour,height:"100vh"}}>
        <form>
            <input type="text" placeholder='enter text' onChange={handleChange} />
            <input type="color"  onChange={handleChange2} />
            <button onClick={submit}>Submit</button>
            {name}
        </form>
    </div>
  )
}

export default Form