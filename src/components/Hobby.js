import React from 'react';
import './hobby.css';

import {Edit, XCircle, ThumbsUp} from 'react-feather';

const Weight = (props) => {
  const fake =  Array.from({length: props.value}, (v, i) => i);
  return (
    <div>
      {fake.map((value, index) => (
        <span className="weight" key={index}><ThumbsUp size="24" /></span>
      ))}
    </div>
  )
};

export const Hobby = (props) => {
  return (
    <div className="hobby" style={{backgroundColor: props.hobby.look.background, color: props.hobby.look.color}}>
        <div className="actions">
            <span><Edit size="24" /></span>
            <span><XCircle size="24" /></span>
        </div>
        <div className="content">
          <span hidden>{props.hobby.id}</span>
          <h3><b>{props.hobby.name}</b></h3>
          <p>{props.hobby.description}</p>
          <Weight value={props.hobby.weight} />
        </div>
    </div>
    
  );
}