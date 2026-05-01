// function Home()
// {
//     return(
//         <h1>Welcome </h1>
//     )
// }
// export default Home


// function Home({name, age})
// {
//     return(
//         <h1>Welcome {name} {age}</h1>
//     )
// }
// export default Home



/*import { useState } from "react";
export default function Home()
{
    const [count, setCount] = useState(0)
    const incCount = () =>
    {
    setCount( (prev) => prev +1)
    setCount( (prev) => prev +1)
    setCount( (prev) => prev +1)

        //setCount(count + 1)
        //wrong way
        //setCount(count++)
        //setCount(count +=1)


    }
  return(
    <>
        <h1>useState - Hook</h1>
        <h3>{count}</h3>
        <button onClick={incCount}>inc</button>
    </>
  )
}*/
import { useState } from "react";
export default function Home()
{
    const [isShow, setIsShow] = useState(true)
    
    
  return(
    <>
        <h1>useState - Hook</h1>
        
        <button onClick={() => setIsShow(!isShow)}>
            {isShow ? "Hide" : "Show"}
        </button>

        <h1>{isShow && "hi...."}</h1>
        
    </>
  )
}