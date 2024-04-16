/*

App - Stylematch
Ver - 1.0
by - Subu Sangameswar
Last Updated - Apr 2024

This program is property of StyleMatch Inc.
This is the main program that displays an input label and brings back a response from an LLM
*/

import React, { useState, useEffect } from 'react';
import './App.css';
import StringifyParam from './components/StringifyParam';
import ShowMessages from './components/ShowMessages';

const URL = 'https://swjy55qrh5.execute-api.us-west-2.amazonaws.com/dev/llm_invoke';



function App() {

  const [inputText, setInputText] = useState('');
  const [usrMessage, setUsrMessage] = useState('');
  const [aiResponse, setAIResponse] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {

      //let body = encodeURIComponent(StringifyParam({ 'inputprompt': usrMessage }));
      let body = StringifyParam({ 'inputprompt': encodeURIComponent(usrMessage) });
      const url_with_parameters = `${URL}?${body}`;

      

        try {

          setLoading(true);
          alert(url_with_parameters);

          const response = await fetch(url_with_parameters, {
            method: 'GET',
            headers: {
              'Accept': '*',
              'Content-Type': 'application/json'
            },
          });

          if (!response.ok) {
            throw new Error('Network Response Not Ok');
          }

          // accepting the json response and extracting the body tag
          const responseData = await response.json();
          // Extract the body property from the object
          setAIResponse(responseData.body);
          //setAIResponse(JSON.stringify(responseData));
          setLoading(false);


        } catch (Error) {
          console.log('Error fetching data', Error);
          setAIResponse('Error fetching data', Error);
          setLoading(false);

        }

        

      };

    //useEffect triggers when the form is loaded..let us check if there is
    // value in the variable before calling the API
    if (usrMessage !== '') {
      fetchData();
    }
    
  }, [usrMessage]) //react to changes in usrMessage


  const handleChange = (event) => {
    setInputText(event.target.value);
  };


  const handleClick = () => {

    //suggest me a dress for an casual evening in mumbai during monsoon

    setUsrMessage(inputText);
    setAIResponse("working ..");
    setInputText('');
  };


  return (
    <div className="App">

      <h1>StyleMatch App v1.0</h1>

      <form>
        <input type="text" value={inputText} onChange={handleChange} />
        <button type="button" onClick={handleClick}>Get AI Response</button>
      </form>

      <div>
        {loading ? (<ShowMessages label1={usrMessage} label2="loading.." />) : (
          <ShowMessages label1={usrMessage} label2={aiResponse} />
        )}
      </div>

    </div>

  );
}

export default App;
