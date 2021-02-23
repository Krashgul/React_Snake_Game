import React, { Component } from 'react';
import Snake from './Snake';
import Food from './Food';


class App extends Component  {



  render() {
    return (
      <div className="game-area">
<Snake snakeDots={this.state.snakeDots}/>
      </div>
    );
  }
}

export default App;
