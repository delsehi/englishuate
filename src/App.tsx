import React from 'react';
import Word from './components/Word'
import Recorder from './components/Recorder'

function App() {
  return (
    <div className="container has-background-light">
      <Word />
      <Recorder />
      <div className="section container has-text-centered">
        <h3 className="title is-4">Instructions</h3>
        <p>
          Record yourself pronunciating the word. Listen to the correct pronunciation.
          Record yourself until you get it perfect and then get a new word.
        </p>

      </div>

    </div>
  );
}

export default App;
