import React from 'react';

class InfoPanel extends React.Component {
  render() {

    const ratings = this.props.data.ratings;
    const totalRatings = ratings.buy + ratings.hold + ratings.sell;
    const buyRate = Math.round((ratings.buy / totalRatings) * 100);
    const sellRate = Math.round((ratings.sell / totalRatings) * 100);
    const holdRate = Math.round((ratings.hold / totalRatings) * 100);



    return (
      <div id="bar_charts">
        <ul>
          <li className="lineChart">
            <span>Buy</span>
            <progress className="buy" value={buyRate} max="100"></progress>
            <span>{buyRate}%</span>
          </li>
          <li className="lineChart">
            <span>Hold</span>
            <progress value={holdRate} max="100"></progress>
            <span>{holdRate}%</span>
          </li>
          <li className="lineChart">
            <span>Sell</span>
            <progress value={sellRate} max="100"></progress>
            <span>{sellRate}%</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default InfoPanel;