import React, { useState } from 'react'

const App = () => {

  const [increment, setIncrement] = useState(0)
  const [decrement, setDecrement] = useState(100)

  function incrementby5(){
    setIncrement(increment + 5)
  }

  function decrementby5(){
    setDecrement(decrement - 5)
  }

  return (
    <div className='p-10 flex flex-col items-center justify-center'>
      <h1>{increment}</h1>
      <h1>{decrement}</h1>
      <button onClick={incrementby5} className='px-8 py-3 rounded-md bg-green-500 active:scale-95 ml-4'>Increment by 5</button>
      <button onClick={decrementby5} className='px-8 py-3 rounded-md bg-red-500 active:scale-95 ml-4'>Decrement by 5</button>
    </div>
  )
}
export default App