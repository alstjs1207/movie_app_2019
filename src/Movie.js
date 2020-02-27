import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}) {
  return (
    <div>
      <img src={poster}></img>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <h4>{summary}</h4>
      </div>
    </div>
  )
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired

};

export default Movie;
