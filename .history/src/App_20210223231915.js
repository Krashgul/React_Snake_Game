import React, { Component } from 'react';
import Snake from './Snake';
import Food from './Food';


class App extends Component  {

  state = {
    food:[6,0],
    snakeDots: [
      [0,0],
      [2,0]
  ]
}


  render() {
    return (
      <div className="game-area">
        <Snake snakeDots={this.state.snakeDots}/>
      </div>
    );
  }
}

export default App;
