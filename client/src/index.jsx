import React from 'react';
import ReactDOM from 'react-dom';

import ChartPanel from './components/chart_panel.jsx';
import InfoPanel from './components/info_panel.jsx';
import Summaries from './components/summaries.jsx';

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
        <header>
          <div>
            <h2>Analyst Ratings</h2>
          </div>
        </header>
        <div id="container">
          <div id="chart_panel"> <ChartPanel /> </div>
          <div id="info_panel"> 
            <ul>
              <li> <InfoPanel /> </li>
              <li> <Summaries /> </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));