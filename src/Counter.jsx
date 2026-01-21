import { useState } from 'react'


function Counter() {
  
  // let count = 0
  const [count, setCount] = useState(0)

  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 18
  })
  
  const incr = () => {
    setCount(count + 1)
    // setCount((c) => c + 1)
  }

  const incrPers = () => {
    setPerson({...person, age: person.age + 1})
    // setArray[...todos, 'azerty']
  }

  return <>
    <p>Compteur : {count}</p>
    <button onClick={incr}>Increment</button>
    
    <p>Age de {person.firstName} : {person.age}</p>
    <button onClick={incrPers}>Increment age</button>
  </>
}


export default Counter