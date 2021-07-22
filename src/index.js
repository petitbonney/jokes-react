import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

(async () => {
  let jokes;
  await fetch(
    "https://raw.githubusercontent.com/Blagues-API/blagues-api/master/blagues.json"
  )
    .then((response) => response.text())
    .then((result) => (jokes = JSON.parse(result)))
    .catch((error) => console.log("error", error));

  ReactDOM.render(
    <React.StrictMode>
      <App jokes={jokes} />
    </React.StrictMode>,
    document.getElementById("root")
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
})();
