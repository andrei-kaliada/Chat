import React, { Component } from 'react';
import { Auth } from './pages/index';
import { Home } from './pages/index';
import { Route } from 'react-router-dom';

class App extends Component {

  render(){
    return(
      <div className="wrapper">
        <Route path={["/","/login","/register"]} component={Auth} exact/>
        <Route path={"/home"} component={Home}/>
      </div>
    );
  }
}

export default App;
