import React from 'react';
import axios from 'axios';
import Board from '../../components/Board';

class BoardMain extends React.Component {
  state= {
    isLoading: true,
    boardList: [],
    repImageList: []
  }

  getBordList = async () => {
      const {data:{boardList, repImageList}} = await axios.get('http://ec2-15-164-100-174.ap-northeast-2.compute.amazonaws.com:3100/board/list/1');
      this.setState({boardList, repImageList, isLoading: false});
  };

componentDidMount() {
  this.getBordList();
};

render() {
  const { boardList, repImageList, isLoading } = this.state;
  return (<section className="container">
    {
      isLoading
        ? (<div className="loader">
          <span className="loader__text">Loading..</span>
        </div>)
        : (<div><h1>Lotts Album Board</h1>
          <div className="boards">
          {boardList.map(board => (
            repImageList.map( image => {
              if ( board.boardcd === image.boardcd ){
                //console.log(image.filedir);
                return <Board key={board._id} id={board._id} seq={board.seq} boardcd={board.boardcd} year={board.year} month={board.month} day={board.day}
                  title={board.title} contents={board.contents} viewcnt={board.viewcnt} userid={board.userid}
                  moddate={board.moddate} dir={image.filedir}/>
              }
            })
            ))
          }
        </div></div>)
    }
  </section>);
}
}
export default BoardMain;
