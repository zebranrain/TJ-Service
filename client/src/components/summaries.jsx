import React from 'react';

class Summaries extends React.Component {
  render() {
    return (
      <div id="summary">
        <div className="summary">
          <h3>Buy Summary</h3>
          <p>{this.props.buySummary['1']}</p>
          <p>{this.props.buySummary['2']}</p>
          <p>{this.props.buySummary['3']}</p>
          <span className="summary_source">MorningStar</span>
        </div>
        <div className="summary">
          <h3>Sell Summary</h3>
          <p>{this.props.sellSummary['1']}</p>
          <p>{this.props.sellSummary['2']}</p>
          <p>{this.props.sellSummary['3']}</p>
          <span className="summary_source">MorningStar</span>
        </div>
      </div>
    );
  }
}

export default Summaries;