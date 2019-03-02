import React from 'react';
import ReactDOM from 'react-dom';

import data from './test_data/sample_data.js';
import ChartPanel from './components/chart_panel.jsx';
import InfoPanel from './components/info_panel.jsx';
import Summaries from './components/summaries.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: '',
      company: '',
      ratings: '',
      buySummary: '',
      sellSummary: ''
    };
    console.log('this is the test data:', JSON.stringify(data));
  }


  dataPull() {
    console.log(data);
    const newticker = data[0].ticker;
    const newcompany = data[0].company;
    const newratings = data[0].ratings;
    const newbuySummary = data[0].buySummary;
    const newsellSummary = data[0].sellSummary;

    this.setState({
      ticker: newticker,
      company: newcompany,
      ratings: newratings,
      buySummary: newbuySummary,
      sellSummary: newsellSummary
    }, () => console.log(this.state));
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
          <div id="chart_panel">
            <ChartPanel chartData={this.state.ratings} />
          </div>
          <div id="info_panel">
            <ul>
              <li> <InfoPanel ratings={this.state.ratings} /> </li>
              <li> <Summaries
                buySummary={this.state.buySummary}
                sellSummary={this.state.sellSummary} /> </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.dataPull();
  }


}

ReactDOM.render(<App />, document.getElementById('app'));