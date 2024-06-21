import React, { useState } from 'react';
import './App.css';
// import Section1 from './sections/1.js';

import logo from './logo.png';

// sections

function DefaultSection() {
  return <div>Hmmm... Not quite right</div>;
}

function Section1() {
  return (
  <div>
    <div>
      Welcome, brave adventurers, to your first challenge! 
      You have 20 minutes to replicate the following picture. 
      Make sure every detail is as close as possible, 
      and send a photo of your best possible recreation to the Oracle.
    </div>
    <img src={logo} className="App-logo" alt="logo" />
    <div>
      The clock is ticking. Good luck!
    </div>
  </div>
  );
}

function Section2() {
  return(
    <div>
    <div>It seems like you need an easier challenge to get you started. Recreate this instead:
      </div>
    <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

// app

function App() {
  const [userInput, setUserInput] = useState('');
  const [section, setSection] = useState(null);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === 'code1') {
      setSection(<Section1 />);
    } else if (userInput === 'code2') {
      setSection(<Section2 />);
    } else {
      setSection(<DefaultSection />);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" value={userInput} onChange={handleInputChange} placeholder='write here...' />
          <button type="submit" className="submit-button">Let's go!</button>
        </form>
      </header>
      <main className='main-section'>
        {section}
      </main>
    </div>
  );
}

export default App;