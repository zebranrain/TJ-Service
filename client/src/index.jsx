import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    this.state = {data: 'some additional text'};
  }

  render() {
    return (
      <div>
        <h1>Hellow World!</h1>
        <span>{this.state.data}</span>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));