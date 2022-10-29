import { Component } from "preact";
import ApexCharts, { ApexOptions } from 'apexcharts';

//
import { css } from 'twind/css'
const charts = css`
  width: 800px;
`

//
export class Chart extends Component {
  div: HTMLDivElement | undefined | null;
  chart: ApexCharts | undefined;

  chartRender() {
    const options: ApexOptions = {
      chart: {
        type: "line",
      },
      series: [
        {
          name: "sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    };

    this.chart = new ApexCharts(this.div, options);
    this.chart.render();
  }

  componentDidMount() {
    this.chartRender();
  }

  componentWillUnmount() {
    this.chart?.destroy();
  }

  render() {
    return <div tw={charts} ref={(elm) => this.div = elm}></div>;
  }
}
