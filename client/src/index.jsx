import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'some additional text'
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <span>{this.state.data}</span>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));