import { useState } from "react"
import './Counter.css'

export function Counter(){
    const [count, setCount] = useState(0)
    return(
        <div className="parent">
           <div className="innerDiv">
           <h1>{count}</h1>
            <div>
            <button onClick={()=> setCount(count + 1)} >Increment</button> {' '}
            <button onClick={()=> setCount(count - 1)}>Decrement</button> {' '}
            <button onClick={()=> setCount(0)}>Reset to zero</button>
            </div>
           </div>
        </div>
    )
}