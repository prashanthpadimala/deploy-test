import React, { useEffect, useState } from 'react'

import './App.css';
import Home from './Components/Home';
import Selected from './Components/Selected';
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [selected, setSelected] = useState({})
  const [results, setResults] = useState("")
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_KEY,
  });

  const selectedOption = (options) => {
    setSelected(options.options)
  }
  const getDataFromAI = async (data) => {
    let item = { ...selected, prompt: data }

    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion(item);
    console.log("000000000000", response.data.choices[0].text)
    setResults(response.data.choices[0].text)
  }
  return (
    <div className="App">
      <h1> React AI Application</h1>
      {Object.values(selected).length ?
        <div>
          <Selected onEnter={(e) => getDataFromAI(e)} />
          <p>{results}</p>
        </div>
        : <Home selectedOption={(e) => selectedOption(e)} />
      }
    </div>
  )
}

export default App;
