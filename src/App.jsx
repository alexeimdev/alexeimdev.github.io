import React, { useState } from 'react'
import './App.css'
import Articles from './components/Articles/Articles'
import questions from './data/questions.json'

function App() {
  const [radioValue, setRadioValue] = useState();
  const handleArticlesChange = (e) => {
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
            <Articles value={radioValue} onChange={handleArticlesChange} />
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
