import { useState } from 'react'
import MrRaccoon from './assets/MrRaccoon.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="raccoon">
       
          <img src={MrRaccoon} className="base" width={count} height={count} alt="" />
        </div>
        <div>
          <h1> Ale Group ENGR TR1 </h1>
          <p>
            Fun project
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 3)}
        >
          Click this to grow Mr. Raccoon
        </button>
      </section>
    </>
  )
}

export default App
