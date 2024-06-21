import React, { useState } from 'react';
import './App.css';
// import Section1 from './sections/1.js';

import logo from './images/logo.png';
import train from './images/train.png';
import girl from './images/girl.png';
import poncho from './images/poncho.png';
import eag1 from './images/eag1.JPG';
import eag2 from './images/eag2.JPG';


import four from './images/puzzle/four.PNG';
import letter_t from './images/puzzle/letter_t.jpg';
import n from './images/puzzle/n.jpg';
import v from './images/puzzle/v.jpg';
import letter_a from './images/puzzle/letter_a.jpg';
import m from './images/puzzle/m.jpg';
import O from './images/puzzle/O.jpg';
import s from './images/puzzle/s.jpg';
import r from './images/puzzle/r.jpg';
import e from './images/puzzle/e.jpg';
import T from './images/puzzle/T.jpg';
import letter_o from './images/puzzle/letter_o.jpg';
import zero from './images/puzzle/zero.jpg';
import g from './images/puzzle/g.jpg';
import plus from './images/puzzle/plus.jpg';
import i from './images/puzzle/i.jpg';
import A from './images/puzzle/A.jpg';
import l from './images/puzzle/l.jpg';
import y from './images/puzzle/y.jpg';
import h from './images/puzzle/h.jpg';


// ------------------------------------------------
// sections

function DefaultSection() {
  return <div>Hmmm... Not quite right</div>;
}

function Firstchallenge() {
  return (
  <div>
    <div>
      Welcome, brave adventurers, to your first challenge! 
      You have 20 minutes to recreate the following picture. 
      Make sure every detail is as close as possible, 
      and send a photo of your best possible recreation to the Oracle.
    </div>
    <img src={girl} style={{ width: '100%' }} />
    <img src={logo} className="App-logo" alt="logo" />
    <div>
      The clock is ticking. Good luck!
    </div>
  </div>
  );
}
function Toohard() {
  return (
  <div>
    <div>
    It seems like you need an easier challenge to get you started. Recreate this:
    </div>
    <img src={poncho} style={{ width: '100%' }} />
  </div>
  );
}

function Exploreworld() {
  return(
    <div>
    <div>
    You have 25 minutes to find a familiar face. They will guide you on your quest.
    <br />
    <br />
"In London’s heart, 
<br />where journeys are chosen, 
<br />and not exactly a spot for seclusion, 
<br />find the place that rhymes with Houston. 
<br />A hub where travellers to the north often go forth, 
<br />what am I?"
    <br />
    <br />
Once there, go to the place that guides all journeys.
      </div>
    <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

function Restabit() {
  return(
    <div>
    <div>
    Gather your breath and rest. If you speak, you must start every new phrase with the letter the other speaker used last. If your guide is satisfied, they will show you the way.
      </div>
    <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

// board train

function Steamahead() {
  return(
    <div>
    <div>
    Adventurers, to prove your resourcefulness, you must exchange any item of clothing the other is wearing. This cannot include coats, jumpers, or similar outerwear. Capture this moment and send evidence to the Oracle.      </div>
    <img src={train} className="App-logo" alt="train" />
    </div>
  );
}
function Cutetogether() {
  return(
    <div>
    <div>
    Take a moment to catch your breath, brave adventurers. Draw forth your card game and engage in a fierce battle. Keep a vigilant record of who emerges victorious in each round, for the tally will be required when you next receive instructions.
    </div>
    <img src={train} className="App-logo" alt="train" />
    </div>
  );
}
function Gamesover() {
  return(
    <div>
    <div>
    [This must be voice recorded and shared with the Oracle. Tip: use note memos and either hold the phone as a microphone or hide it] 
    <br />
    <br />
    The person who lost…. approach a stranger of your choosing. 
    <br />
    <br />
    You must say these words: “Excuse me, I'm doing a university project for which I ask the most attractive people on public transport some questions, do you have a moment?” 
    <br />
    <br />
    If they say yes… you are now to interview them. Otherwise, try again. 
    <br />
    Recommended lead question: “What would you say is the key to being beautiful?”    </div>
    <img src={train} className="App-logo" alt="train" />
    </div>
  );
}
function Puzzlemasters() {
  return(
    <div>
    <div>
    Go to a new carriage and stand in the middle of it. Play the Game of Loudness. Take turns saying “I love you” the only rule is that you mustn’t wait too long to reply and that you must say it louder the person before you. Whoever loses will regret not having been louder.     <br />
   </div>
    <img src={train} className="App-logo" alt="train" />
    </div>
  );
}
function Soreloser() {
  return(
    <div>
    <div>
    The loser must now has 10 minutes to find the food/drinks trolley on the train, buy anything from them and at the end they must say  "I love you" instead of "thank you". Sneakily record the audio on your phone and send proof. If there is no trolley, ask a question to the ticket inspector, then proceed to state your love. <br />
   </div>
    <img src={train} className="App-logo" alt="train" />
    </div>
  );
}
function Thebravecanrest() {
  return(
    <div>
    <div>
    Rest, friends. Go back to your puzzle.  Send 5 minute updates to the oracle.    </div>
    <img src={train} className="App-logo" alt="train" />
    </div>
  );
}



function Hungry() {
  return(
    <div>
    <div>
    Go to the local Sainsbury's. Spend exactly £13.01 and consume at leisure. Every penny off will be a tear that your cheek shall feel. Share a picture of the total with the Oracle.
   </div>
   <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
function Socialpeople() {
  return(
    <div>
    <div>
    Take the cringiest photo mankind has seen, with someone from the staff and by the closest physical map of the area, visible in the picture (get your guide to photograph you). If there are no maps near you, the Oracle might make an exception.   </div>
   <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
function Familiarfaces() {
  return(
    <div>
    <div>
    Name 15 people in this picture, you have 5 minutes. No matter what, after 5 minutes type 'familiarfaces2'
     </div>
     <img src={eag1} style={{ width: '100%' }} />
   <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
function Familiarfaces2() {
  return(
    <div>
    <div>
    Find Wally[Arvo], you have 1 minute.  No matter what, after 1 minute type 'familiarfaces3'
     </div>
     <img src={eag1} style={{ width: '100%' }} />
   <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
function Familiarfaces3() {
  return(
    <div>
    <div>
    Find Wally[Arvo], take your time. Share with the oracle.
     </div>
     <img src={eag2} style={{ width: '100%' }} />
   <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
function Pavilionolympics() {
  return(
    <div>
    <div>
    Your quest is about to offer you many consecutive challenges. Try your best and destiny will reward you.
    </div>
   <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
function Enhancedsenses() {
  return(
    <div>
    <div>
    You have 10 min to compose a song, record it, and send it to the oracle. The theme “stags and hens”. 
    </div>
   <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
function Masterfinders() {
  return(
    <div>
    <div>
    You have 5 minutes to send pictures of 5 different blue cars around. Share with the oracle
        </div>
   <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

function Mstersoftime() {
  return(
    <div>
    <div>
    Order chronologically. 
    {/* 4tnvamOsreTo0g+iAlyh */}
        </div>
        4
        <img src={four} style={{ width: '100%' }} />
        t
        <img src={letter_t} style={{ width: '100%' }} />
        n
        <img src={n} style={{ width: '100%' }} />
v
        <img src={v} style={{ width: '100%' }} />
        a
        <img src={letter_a} style={{ width: '100%' }} />
        m
        <img src={m} style={{ width: '100%' }} />
        O
        <img src={O} style={{ width: '100%' }} />
        s
        <img src={s} style={{ width: '100%' }} />
        r
        <img src={r} style={{ width: '100%' }} />
        e
        <img src={e} style={{ width: '100%' }} />
        T
        <img src={T} style={{ width: '100%' }} />
        o
        <img src={letter_o} style={{ width: '100%' }} />
        0
        <img src={zero} style={{ width: '100%' }} />
        g
        <img src={g} style={{ width: '100%' }} />
        +
        <img src={plus} style={{ width: '100%' }} />
        i
        <img src={i} style={{ width: '100%' }} />
        A
        <img src={A} style={{ width: '100%' }} />
        l
        <img src={l} style={{ width: '100%' }} />
        y
        <img src={y} style={{ width: '100%' }} />
        h
        <img src={h} style={{ width: '100%' }} />
        
    </div>
  );
}
function Onlythebeginning() {
  return(
    <div>
    <div>
    Follow your heart and you shall find what is most precious. Find your sherper and say the words: 'take us to paradise'.
    </div>
    </div>
  );
}





// ------------------------------------------------
// app

function App() {
  const [userInput, setUserInput] = useState('');
  const [section, setSection] = useState(null);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === 'firstchallenge') {
      setSection(<Firstchallenge />);
    } else if (userInput === 'toohard') {
      setSection(<Toohard />);
    } else if (userInput === 'exploreworld') {
      setSection(<Exploreworld />);
    } else if (userInput === 'restabit') {
      setSection(<Restabit />);
    } else if (userInput === 'steamahead') {
      setSection(<Steamahead />);
    } else if (userInput === 'cutetogether') {
      setSection(<Cutetogether />);
    } else if (userInput === 'gamesover') {
      setSection(<Gamesover />);
    } else if (userInput === 'puzzlemasters') {
      setSection(<Puzzlemasters />);
    } else if (userInput === 'soreloser') {
      setSection(<Soreloser />);
    } else if (userInput === 'thebravecanrest') {
      setSection(<Thebravecanrest />);
    } else if (userInput === 'hungry') {
      setSection(<Hungry />);
    } else if (userInput === 'socialpeople') {
      setSection(<Socialpeople />);
    } else if (userInput === 'familiarfaces') {
      setSection(<Familiarfaces />);
    } else if (userInput === 'familiarfaces2') {
      setSection(<Familiarfaces2 />);
    } else if (userInput === 'familiarfaces3') {
      setSection(<Familiarfaces3 />);
    } else if (userInput === 'pavilionolympics') {
      setSection(<Pavilionolympics />);
    } else if (userInput === 'enchanedsenses') {
      setSection(<Enhancedsenses />);
    } else if (userInput === 'masterfinders') {
      setSection(<Masterfinders />);
    } else if (userInput === 'mastersoftime') {
      setSection(<Mstersoftime />);
    } else if (userInput === 'onlythebeginning') {
      setSection(<Onlythebeginning />);
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