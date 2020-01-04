import React from 'react';

function Food(props) {
  return (
    <div>
    <h3> I love {props.fav} and Country of origin {props.coo}</h3>
    </div>
  );
}

function FoodLike({name, picture}) {
  return (
    <div>
    <h3> I love {name}</h3>
    <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Food fav="kimchi" coo="korea"/>
      <Food fav="ramen" coo="korea"/>
      <Food fav="starbucks" coo="USA"/>

      {foodILike.map(dish => (
        <FoodLike name={dish.name} picture={dish.image} />
      ))}

    </div>
  );
}

export default App;
