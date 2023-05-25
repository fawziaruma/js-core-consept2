import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <div>
 <Counter></Counter>
 <Count></Count>
  

     
    </div>
   </>
  )
}

function Counter(){
  const [count , setCount]= useState(0)

const handleIncrease = () => setCount( count + 1)
const handleDecrease  = () => setCount( count - 1)
  return(
    <div>
      <h1>Counter:{count}</h1>

<button  onClick={handleIncrease} >  increase  </button>
<button  onClick={handleDecrease} >  Decrease  </button>

    </div>
  )
}
function Count(){
  const[c, setC] = useState(0)
  const increase = () => setC(c +1)
  const decrease = () => setC(c -1)
  return(
    <div>
      <h1>count:{c}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  )
}

const  LoadComment = () =>{
  const[conmments , SetComments ] = useState([])

  useEffect(()=>{
     fetch(' https://jsonplaceholder.typicode.com/comments')
     .then(res => res.json() )
     .then(data=>SetComments(data))
  } ,  [])
   return(
      <div>

    

      </div>
   )
}

export default App
