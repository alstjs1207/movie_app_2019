import React from 'react';

function Food(props) {
  return (
    <div>
    <h3> I love {props.fav} and Country of origin {props.coo}</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Food fav="kimchi" coo="korea"/>
      <Food fav="ramen" coo="korea"/>
      <Food fav="starbucks" coo="USA"/>
    </div>
  );
}

export default App;
