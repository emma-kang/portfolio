import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import './App.css';

export default class App extends Component {
  render() {
      return (
          <Switch>
              <Route exact path='/' render={(routerProps) => (
                  <Main routerProps={routerProps}/>
              )}/>
              <Route exact path='/about' render={(routerProps) => (
                  <About routerProps={routerProps}/>
              )}/>
              <Route exact path='/skills' render={(routerProps) => (
                  <Skills routerProps={routerProps}/>
              )}/>
              <Route exact path='/projects' render={(routerProps) => (
                  <Projects routerProps={routerProps}/>
              )}/>
          </Switch>
      )
  }
}
