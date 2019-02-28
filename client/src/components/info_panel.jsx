import React from 'react';

class InfoPanel extends React.Component {
  render() {
    return (
      <div id="bar_charts">
        <ul>
          <li class="lineChart">
            <span>Buy</span>
            <progress class="buy" value="45" max="100"></progress>
            <span>45%</span>
          </li>
          <li class="lineChart">
            <span>Hold</span>
            <progress value="10" max="100"></progress>
            <span>10%</span>
          </li>
          <li class="lineChart">
            <span>Sell</span>
            <progress value="45" max="100"></progress>
            <span>45%</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default InfoPanel;