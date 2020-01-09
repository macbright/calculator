/* eslint-disable react/prefer-stateless-function, no-unused-vars */

import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  render() {
    return (
      <div className="home">
        <h1> React Calculator </h1>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
