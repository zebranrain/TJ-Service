import React from 'react';

class ChartPanel extends React.Component {
  render() {

    const ratings = this.props.data.ratings;
    const buyRate = ratings.buy;
    const totalRatings = ratings.buy + ratings.hold + ratings.sell;
    const reccommendRate = Math.round((buyRate / totalRatings) * 100);

    return (
      <div id="chart">
        <div>
          <h2 className="chartText">{reccommendRate}%</h2>
          <p className="chartText">of {totalRatings} ratings</p>
        </div>
      </div>
    );
  }
}

export default ChartPanel;