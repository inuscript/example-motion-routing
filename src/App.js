import React from 'react';
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


const baseUrl = "/example-motion-routing" 

const App = () => {
  return (
    <BrowserRouter basename={baseUrl}>
      <div className="App">
        <Route exact path="/" render={() => (
          <Redirect to="/40"/>
        )}/>
        <Route path={`/:progress`} component={ProgressRoute} />
        <Links />
      </div>
    </BrowserRouter>
  );
}

const ProgressRoute = ({match}) => {
  const { progress } = match.params
  return <ProgressBar progress={progress} />
}

export default App;
