import React, { useState, useEffect } from "react";
import { generate } from 'shortid';
import "./app.css";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Hobby } from "./Hobby";
import { saveToLS, readFromLS } from '../utils/storage'; 

function App() {
  const [hobbies, setHobbies] = useState(JSON.parse(readFromLS('hobbies')) || []);
  const [hobby, setHobby] = useState({
    id: '', 
    name: '', 
    description: '',
    weight: 5,
    look: {
        background: '', 
        color: ''
    }
  });

  useEffect(() => {  
      saveToLS('hobbies', hobbies);
  }, [hobbies]);


  const getHobbyLook = (weight) => {
		let background = '#ff6b6b';
		let color = '#FFFFFF';
		if (weight > 3 && weight <= 6) {
			background = '#efef04';
			color = '#000';
		} else if (weight > 6) {
			background = '#0eb30e';
			color = '#FFFFFF';
		}
		return {background: background, color: color};
	}

  const handleChange = (e) => {
    setHobby({
      ...hobby,
      [e.target.name]: e.target.value
    });

    /*if (e.target.name === 'weight') {
      setHobby({
        ...hobby,
        look: getHobbyLook(e.target.value)
      });
    }*/

    console.log(hobby);
  };

  const addHobby = () => {
    setHobby({
      ...hobby,
      id: generate(),
      look: getHobbyLook(hobby.weight)
    });
    setHobbies([...hobbies, hobby]);
    console.log(hobbies);
  }

  return (
    <div className="app">
      <Heading label={`Welcmome to the Hobby Land`}></Heading>
      <div className="container">
        <div className="hobby-form">
          <div>
            <label htmlFor="name"></label>
            <input type="text" id="name-id" name="name" value={hobby.name} placeholder="What's your Hobby?" onChange={ handleChange } />
          </div>
          <div>
            <label htmlFor="description"></label>
            <textarea
              rows="3"
              name="description" 
              value={hobby.description}
              cols="35"
              id="description-id"
              placeholder="Tell us a bit more about it"
              onChange={ handleChange }
            ></textarea>
          </div>
          <div className="weight-div">
            <label htmlFor="weight">
              How serious are you about it?(1 - Least to 10 - Most)
            </label>
            <input type="range" min="1" max="10" id="weight-id" name="weight" 
              value={hobby.weight} onChange={ handleChange }/>
            <p
              style={{
                backgroundColor: "rgb(255, 107, 107)",
                color: "rgb(255, 255, 255)",
              }}
            >
            {hobby.weight}
            </p>
          </div>
          <Button
            label={`Track a Hobby`}
            onClick={ addHobby }
            type="primary"
          ></Button>
        </div>
        <div>
          <h2>Hobbies</h2>
          <h3>Track your hobbies to get better at it </h3>
          <div className="hobby-list">
            {hobbies.length > 0 ? hobbies.map((hobby, index) => (
              <Hobby key={index} hobby={hobby}></Hobby>
            )): <h2>No hobbies</h2>}
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
