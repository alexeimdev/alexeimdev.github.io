import React, { useState } from 'react'
import './App.css'
import questions from './data/questions.json'

function App() {
  const [radioValue, setRadioValue] = useState();
  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <header className="header">
          <p>Header</p>
        </header>
        <main className="main">
          <div>
            <label>der<input type='radio' hidden name="article" value="der" onChange={handleRadioChange}></input></label>
            <label>die<input type='radio' hidden name="article" value="die" onChange={handleRadioChange}></input></label>
            <label>das<input type='radio' hidden name="article" value="das" onChange={handleRadioChange}></input></label>
          </div>
          <br/>
          <br/>
          <div>
            <span>{questions[1].word}</span>
          </div>
        </main>
        <footer className="footer">
          {radioValue != null && (radioValue === questions[1].article ? "Corrent V" : "Wrong X")}
        </footer>
      </div>
    </div>
  )
}

export default App
