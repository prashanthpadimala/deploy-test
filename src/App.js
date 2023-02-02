import logo from './logo.svg';
import React from "react"
import './App.css';

function App() {
  const [yourName, setYourName] = React.useState("")
  return (
    <div className="App">
      <h1>Enter your name </h1>
      <input onChange={(e) => setYourName(e.target.value)} placeholder={"Enter name"} />
      {yourName && <h2>Hi {yourName}</h2>}
      <h3>Thanks for using </h3>
    </div>
  );
}

export default App;
