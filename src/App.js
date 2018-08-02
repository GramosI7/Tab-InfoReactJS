import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './style/App.css';

import Tableau from "./Tableau";
import Information from "./Infomartion";

import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container container_all" >
          <div >
              <img className="header" src="/static/header_background.jpg" alt=""/>
          </div>
          <Route exact path="/" component={Tableau} />
          <Route exact path="/info/:id" component={Information} />
          </div>
      </Router>
    );
  }
}

export default App;
