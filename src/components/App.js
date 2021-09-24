import React from "react";

import "./app.css";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Hobby } from "./Hobby";

function App() {
  const hobbies = [
    {
      id: "001",
      name: "Singing",
      description: "I love it totally",
      weight: "9",
      look: {
        background: "#0eb30e",
        color: "#FFFFFF",
      },
    },
    {
      id: "002",
      name: "Dancing",
      description: "I am improving, mummy",
      weight: "3",
      look: {
        background: "#ff6b6b",
        color: "#FFFFFF",
      },
    },
    {
      id: "003",
      name: "Reading",
      description: "On my way",
      weight: "5",
      look: {
        background: "#efef04",
        color: "#000",
      },
    },
    {
      id: "004",
      name: "Yoga",
      description: "Oh, I still need to start",
      weight: "1",
      look: {
        background: "#ff6b6b",
        color: "#FFFFFF",
      },
    }
  ];
  return (
    <div className="app">
      <Heading label={`Welcmome to the Hobby Land`}></Heading>
      <div className="container">
        <div className="hobby-form">
          <div>
            <label htmlFor="name"></label>
            <input type="text" id="name" placeholder="What's your Hobby?" />
          </div>
          <div>
            <label htmlFor="description"></label>
            <textarea
              rows="3"
              cols="35"
              id="description"
              placeholder="Tell us a bit more about it"
            ></textarea>
          </div>
          <div className="weight-div">
            <label htmlFor="weight">
              How serious are you about it?(1 - Least to 10 - Most)
            </label>
            <input type="range" min="1" max="10" id="weight" value={3}/>
            <p
              style={{
                backgroundColor: "rgb(255, 107, 107)",
                color: "rgb(255, 255, 255)",
              }}
            >
              3
            </p>
          </div>
          <Button
            label={`Track a Hobby`}
            onClick={() => console.log("I am Primary")}
            type="primary"
          ></Button>
        </div>
        <div>
          <h2>Hobbies</h2>
          <h3>Track your hobbies to get better at it </h3>
          <div className="hobby-list">
            {hobbies.map((hobby, index) => (
              <Hobby key={index} hobby={hobby}></Hobby>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <p>Made with ❤️ by <a href="https://twitter.com/tapasadhikary">Tapas Adhikary</a>.</p>
      </footer>
    </div>
  );
}

export default App;
