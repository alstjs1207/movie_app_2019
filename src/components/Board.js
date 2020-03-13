import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import "./Board.css";

function Board({id, seq, boardcd, userid, year, month, day, title, contents, viewcnt, moddate, dir}) {
  return (
    <div className="board">
      <Link to={{
            pathname: `/board/view/${id}`,
            state:{
              id,
              boardcd,
              userid,
              seq
            }
      }}>
      <img src={dir} alt={title} titlt={title}></img>
    </Link>
    <div className="board__data">
      <h3 className="board__title">{title}</h3>
      <h5 className="board__userid">@{userid}</h5>
    <p className="board__contents">{contents.slice(0,200)}...</p>
      <h4 className="board__viewcnt">{viewcnt} views</h4>
      <h5 className="board__year">{year}/{month}/{day}</h5>
    </div>
  </div>
  )
}

Board.propTypes = {
  id: PropTypes.string.isRequired,
  seq: PropTypes.number.isRequired,
  boardcd: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  userid: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  viewcnt: PropTypes.number.isRequired,
  moddate: PropTypes.string.isRequired,
  dir: PropTypes.string.isRequired
};

export default Board;
