/*

App - Stylematch
Ver - 1.0
by - Subu Sangameswar
Last Updated - Apr 2024

This program is property of StyleMatch Inc.
This is the main program that displays an input label and brings back a response from an LLM
*/

import React, { useState, useEffect } from 'react';
import './App.scss'; // Assuming you have Pico CSS imported in this file.

import Header from './components/Header';
import Footer from './components/Footer';
import ShowMessages from './components/ShowMessages';

const URL = 'https://swjy55qrh5.execute-api.us-west-2.amazonaws.com/dev/llm_invoke';


const InputComponent = ({ value, onChange, onClick }) => {
  return (
    <form>
      <input type="text" placeholder='ask me a question on Indian fashion' value={value} onChange={onChange} />
      <button type="button" onClick={onClick}>Get AI Response</button>
    </form>
  );
};

const StringifyParam = function(data) {
  return Object.entries(data)
    .map((e) => e.join('='))
    .join('&');
};

const App = () => {
  const [inputText, setInputText] = useState('');
  const [usrMessage, setUsrMessage] = useState('');
  const [aiResponse, setAIResponse] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let body = StringifyParam({ 'inputprompt': encodeURIComponent(usrMessage) });
      const url_with_parameters = `${URL}?${body}`;

      try {
        setLoading(true);
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

        const responseData = await response.json();
        setAIResponse(responseData.body);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data', error);
        setAIResponse('Error fetching data', error);
        setLoading(false);
      }
    };

    if (usrMessage !== '') {
      fetchData();
    }
  }, [usrMessage]);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    setUsrMessage(inputText);
    setAIResponse("working ..");
    setInputText('');
  };

  return (
    <div className="App">
      <Header />
      <InputComponent value={inputText} onChange={handleChange} onClick={handleClick} />
      <div>
        {loading ? (
          <ShowMessages label1={usrMessage} label2='' />
        ) : (
          <ShowMessages label1={usrMessage} label2={aiResponse} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;

