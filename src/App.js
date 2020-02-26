import React from 'react';
//import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    count:0
  };
  add = () => {
    // 좋지않은 코딩
    //this.setState({count: this.state.count + 1});
    // 좋은 코딩
    this.setState(current=> ({count: current.count + 1}));
  }
  minus = () => {
    // 좋지않은 코딩
    //this.setState({count: this.state.count - 1});
    // 좋은 코딩
    this.setState(current => ({count: current.count - 1}));
  }
  render(){
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
