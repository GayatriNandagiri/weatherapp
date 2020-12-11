import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class ChanceOfRainChart extends React.Component {

  render() {
    return (
      <div className="weather-chart">
        <span className="title"></span>
        <LineChart width={400} height={250} data={this.props.chartData}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis label="Days" dataKey="day"/>
          <YAxis label="%"/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend/>
          <Line dataKey="upperBound" stroke="#F7DC6F" />
          <Line dataKey="mean" stroke="#BD5331" />
          <Line dataKey="lowerBound" stroke="#FFD2AA" />
        </LineChart>
      </div>
    );
  }

}

export default ChanceOfRainChart;
