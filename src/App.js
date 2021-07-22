import React, { useState } from "react";

const App = (props) => {
  const jokes = props.jokes;

  const randomJoke = () => {
    return jokes[Math.floor(Math.random() * jokes.length)];
  };
  const [joke, setJoke] = useState(randomJoke());

  return (
    <div className="content-page">
      <div className="joke-area">
        <h1 id="type">{joke.type}</h1>
        <p id="joke">{joke.joke}</p>
        <p id="answer">{joke.answer}</p>
      </div>
      <button id="random-joke" onClick={() => setJoke(randomJoke())}>
        JOKE
      </button>
    </div>
  );
};

export default App;
