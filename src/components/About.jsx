import { useEffect, useState } from "react"

export default function About()
{
    const [count,setCount] = useState(0)

    useEffect(() =>
    {
        console.log("count changed");
        
    },[count])
    return(
        <>
            <h2>{count}</h2>
            <button onClick={() => setCount(prevs => prevs+1)}>inc</button>
        </>
    )
}