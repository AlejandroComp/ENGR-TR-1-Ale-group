import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(90)
  let bgColor = "#ffffff";
  let buttonText = "Click to Grow Mr. Raccoon";
  let title = "The Life of Mr. Raccoon";
  let mrImgPath;
  let isDisabled = false;

  // Based on the number of clicks:
  // 1) Changes the life stage of Mr. Raccoon
  // 2) Changes the background color
  // 3) Changes the on-screen text
  if (count < 120) {
    mrImgPath = "/mr-baby.png";
    bgColor = "#ffdf7a";
  }
  else if (count < 150) {
    mrImgPath = "/mr-child.png";
    bgColor = "#50ff70";
  }
  else if (count < 180) {
    mrImgPath = "/mr-adult.png";
    bgColor = "#00eaff";
  }
  else if (count < 210) {
    mrImgPath = "/mr-elder.png";
    bgColor = "#8896ff";
  }
  else {
    mrImgPath = "/mr-dead.png";
    title = "The Death of Mr. Raccoon";
    buttonText = ":(";
    isDisabled = true;
    bgColor = "#632b79";
  }

  return (
    <>
      <section 
        id="center"
        style={{ '--bg-variable': bgColor }}
      >
        <div className="raccoon">
       
          <img src={mrImgPath} className="base" width={count} height={count} alt="" />
        </div>
        <div>
          <h1 class="title">{title}</h1>
          <p class="text">
            By Ale Group ENGR TR1
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 3)}
          disabled={isDisabled}
        >
          {buttonText}
        </button>
      </section>
    </>
  )
}

export default App
