import React from 'react';
import ChartPanel from './chart_panel.jsx';
import InfoPanel from './info_panel.jsx';
import Summaries from './summaries.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ticker: '',
        company: '',
        ratings: {
          buy: 1,
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
  }


  dataPull() {

    const { match: { params } } = this.props;

    console.log(params.ticker);

    axios.get(`/api/analystdata/${params.ticker}`)
      .then((getResponse) =>{
        this.setState({
          data: getResponse.data
        }, () => console.log('DB data has been loaded to the app'));
      })
      .catch((err) => {
        console.log(err);
      });

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