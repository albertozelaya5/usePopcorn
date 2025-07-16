import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./temporal.css"

import App from "./App";
// import App from "./App-v1";
// import App from "./App-v2";
import "./index.css";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <App />
    {/* <StarRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating size={24} color="red" className="test" defaultRating={3} />

    <Test /> */}
  </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
