import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Search from "./routes/Search"
import Navigation from "./components/Navigation";


function App(){
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/movie/detail/:id" component={Detail}></Route>
    <Route path="/search" exact={true} component={Search}></Route>
  </HashRouter>
  );
}

export default App;
