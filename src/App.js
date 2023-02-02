import React, { useEffect, useState } from 'react'

import './App.css';

function App() {
  const [yourName, setYourName] = React.useState("")

  const msg = new SpeechSynthesisUtterance();
  const [value, setValue] = useState("");
  const speechHandler = () => {
    msg.text = value;
    window.speechSynthesis.speak(msg);
  }
  return (
    <div className="App">
      <h1>Enter your name </h1>
      <input onChange={(e) => setYourName(e.target.value)} placeholder={"Enter name"} />
      {yourName && <h2>Hi {yourName}</h2>}
      <h3>Thanks for using our app </h3>

      <h1>Text To SPeech</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder={"Enter Text to Speak"} />
      <button variant='contained' color="secondary" onClick={speechHandler}>Speak</button>

    </div>
  );
}

export default App;
