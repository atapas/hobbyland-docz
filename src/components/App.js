import React, { useState, useEffect } from "react";
import { generate } from 'shortid';
import "./app.css";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Hobby } from "./Hobby";
import { NoHobby } from "./NoHobby";


function App() {
  
 
  const [hobbies, setHobbies] = useState([]);
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
    setHobby({
      ...hobby,
      look: getHobbyLook(hobby.weight)
    });
  }, [hobby.weight]);

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
    let { name, value } = e.target;
    if (name === 'weight') {
      value = parseInt(value);
    }
    setHobby({...hobby, [name]: value});
  };

  const addHobby = () => {
    setHobby({
      ...hobby,
      id: generate()
    });
    setHobbies([...hobbies, hobby]);
    console.log(hobbies);
    // saveToLS('hobbies', hobbies);
  }

  const deleteHobby = (id) => {
    console.log('deleting hobby with id', id);
    setHobbies(hobbies.filter(hobby => hobby.id !== id));
    // saveToLS('hobbies', hobbies);  
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
                backgroundColor: hobby.look.background,
                color: hobby.look.color,
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
            {hobbies && hobbies.length > 0 ? hobbies.map((hobby, index) => (
              <Hobby key={index} hobby={hobby} delete={(id) => deleteHobby(hobby.id)}></Hobby>
            )): <NoHobby label="No Hobbies? Oh dear, please add one to track." />}
          </div>
        </div>
      </div>
      <footer>
        <p>Made with ?????? by <a href="https://twitter.com/tapasadhikary">Tapas Adhikary</a>.</p>
      </footer>
    </div>
  );
}

export default App;
