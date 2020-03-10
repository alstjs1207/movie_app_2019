import React from 'react';
import axios from 'axios';

class About extends React.Component {
  state= {
    data:''
  }

  getBordList = async () => {
    const {data} = await axios.get('/board/list/1');
    console.log(data);
    this.setState({data});
  };

componentDidMount() {
  this.getBordList();
};

render() {
  const data = this.state;
  return (data)
}
}
export default About;
