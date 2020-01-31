import React, { Component } from 'react';
import './App.css';
import Quiz from './quiz';

/*
*
*
* @author: Destiny Rogers
* @date: December 15, 2019
* */

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"><img className="App-img" src="http://www.fasttimes.biz/8Bit%20Band.png"/>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Yellowtail" />
        </header>
        <h1 className="gameName">Music Exploration</h1>
        <Quiz/>
      </div>
    );
  }
}

export default App;
//Answer 6 Questions and I'll Recommend You a Song.
