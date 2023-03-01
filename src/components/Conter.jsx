import { useState } from "react";

function Counter(){

    const [counter, setCounter] = useState(0)

    const handleOnCLick = ()=> setCounter(prev => prev + 1) 

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleOnCLick}>click</button>
        </>
    )
}

export default Counter;