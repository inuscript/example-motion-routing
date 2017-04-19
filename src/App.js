import React, { Component } from 'react';
import './App.css';
import { ProgressBar } from "./Progress"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

const Links = () => {
  return <ul>{
    [...Array(11).keys()].map( (_, i) => {
      return <li key={i}><Link to={`/${i*10}`}>{i*10}%</Link></li>
    }
  )}</ul>
}
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/:progress">{ ( {match} ) => {
            const { progress } = match.params
            return <ProgressBar progress={progress} />
          }}</Route>
          <Route path="/" render={() => (
            <Redirect to="/40"/>
          )}/>
          <Links />
        </div>
      </Router>
    );
  }
}

export default App;
