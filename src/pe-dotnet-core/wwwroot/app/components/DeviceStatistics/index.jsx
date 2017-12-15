import React from "react";
import Chartist from "react-chartist";

export default class Pie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Bar",
      options: {},
      labels: [],
      series: [],
      data: {}
    }
  }
  componentDidMount() {
    this.setState({
      type: "Bar",
      options: {
        seriesBarDistance: 10
      },
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        series: [
          [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
          [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
      }
    });
  }
  render() {
    return (
      <div>
        <Chartist
          data={this.state.data}
          options={this.state.options}
          type={this.state.type}
        />
      </div>
    );
  }
}
