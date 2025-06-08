import React from 'react';
import './Event.css';

const Event = ({ title, date, description }) => {
  return (
    <div className="event-card">
      <h2>{title}</h2>
      <p className="event-date">{date}</p>
      <p>{description}</p>
      <button>Going</button>
      <button>Maybe</button>
      <button>Not going</button>
    </div>
  );
};

export default Event;