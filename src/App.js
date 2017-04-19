import React, { Component } from 'react';
import './App.css';
import { ProgressBar } from "./Progress"
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

const Links = () => {
  return <ul>{
    [...Array(11).keys()].map( (_, i) => {
      return <li key={i}><Link to={`/${i*10}`}>{i*10}%</Link></li>
    })}
    <li><Link to={`/invalid`}>invalid</Link></li>
  </ul>
}

const baseUrl = process.env.NODE_ENV === "production" ? "/example-motion-routing" : ""
class App extends Component {
  render() {
    return (
      <BrowserRouter basename={baseUrl}>
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
      </BrowserRouter>
    );
  }
}

export default App;
