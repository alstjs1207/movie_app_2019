import React from 'react';
import axios from 'axios';

class BoardView extends React.Component {

  state = {
    isLoading: true
  }

  getBordView = async () => {
    const {location, history} = this.props;
    console.log(location);
    console.log(history);

    if (location.state === undefined) {
      history.push('/board');
    } else {
      const {
        data: {
          boardView,
          getImageViewList
        }
      } = await axios.get(`board/view/${location.state.id}`);
      console.log(boardView, getImageViewList);
      this.setState({isLoading: false});
    }

  };

  componentDidMount() {
    this.getBordView();
  };

  render() {
    const {isLoading} = this.state;
    return (<section className="container">
      {
        isLoading
          ? (<div className="loader">
            <span className="loader__text">Loading..</span>
          </div>)
          : (<div className="loader">
            <span className="loader__text">HHHH..</span>
          </div>)
      }
    </section>);

  }

}

export default BoardView;
