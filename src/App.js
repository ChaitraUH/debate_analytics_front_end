import React from 'react';
import './App.css';

import Selection from "./Selection";
import Tagging from "./Tagging";

import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
      <div className="container-fluid">
            <div className="container-fluid page-header font-weight-bold">
              <h3>Online Debate Visual Analytics</h3>
            </div>
            <Router>
                <Route path = "/" exact component={Selection}/>
                <Route path = "/tagging" component={Tagging}/>
            </Router>
      </div>
  );
}

export default App;
