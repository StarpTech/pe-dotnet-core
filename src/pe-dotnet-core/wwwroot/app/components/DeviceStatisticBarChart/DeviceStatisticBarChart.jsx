import React from "react";
import Chartist from 'react-chartist';

export default class Pie extends React.Component {
  render() {

    var data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
        [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
      ]
    };

    var options = {
      seriesBarDistance: 10
    };

    var type = 'Bar'

    return (
      <div>
        <Chartist data={data} options={options} type={type} />
      </div>
    )
  }
}