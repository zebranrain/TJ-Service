import React from 'react';
import ReactDOM from 'react-dom';

import data from './../../../server/generated_data/ticker_data.js';
import ChartPanel from './chart_panel.jsx';
import InfoPanel from './info_panel.jsx';
import Summaries from './summaries.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ticker: '',
        company: '',
        ratings: {
          buy: 0,
          hold: 0,
          sell: 0
        },
        buySummary: {
          '1': '',
          '2': '',
          '3': ''
        },
        sellSummary: {
          '1': '',
          '2': '',
          '3': ''
        }
      }

    };

    console.log(this.state.data);
  }


  dataPull() {

    let stockId = this.props.match.params.ticker;
    console.log('this is the:', stockId);

    let newData = data.filter((stock) => {
      if (stock.ticker === stockId) {
        return stock;
      }
    });

    console.log('this is the newData:', newData);

    // this.state.data = newData;
    // console.log(newData);
    // let newData = data[0];

    console.log(newData);

    this.setState({
      data: newData[0]
    }, () => console.log('test data is:', this.state.data));

  }

  componentDidMount() {
    this.dataPull();
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
            <ChartPanel data={this.state.data} />
          </div>
          <div id="info_panel">
            <ul>
              <li> <InfoPanel data={this.state.data} /> </li>
              <li> <Summaries
                data={this.state.data}
                data={this.state.data} /> </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default App;