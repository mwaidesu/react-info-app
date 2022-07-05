import React from 'react'
import "./Body.css"

const Body = () => {
  return (
    <div className="body">
      <h1>Fun facts about React</h1>

      <ul className="react-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps.</li>
      </ul>
    </div>
  );
}

export default Body;
