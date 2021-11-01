import React from 'react';
import Word from './components/Word'
import Recorder from './components/Recorder'

function App() {
  return (
    <div className="container has-background-success-light">
      <Word />
      <Recorder />
      <div className="section container has-background-white has-text-centered">
        <h3 className="title is-4">Instructions</h3>
        <p>
          Record yourself pronunciating the word. Listen to the correct pronunciation. <br />
          Record yourself until you get it perfect and then get a new word.
        </p>
        <br />
        <h4 className="title is-5">Why is the app so slow?</h4>
        <p>Because it's fetching random words from one API, but many of these are not available
          in the API for getting the pronuncation, so it keeps trying new random words until one
        is found.

        </p>
      </div>

    </div>
  );
}

export default App;
