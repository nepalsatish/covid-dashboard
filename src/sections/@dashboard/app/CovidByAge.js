import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Affected',
    type: 'column',
    data: [
      { x: `0 - 4`, y: 0.9 },
      { x: `5 - 9`, y: 1.4 },
      { x: `10 - 14`, y: 2.3 },
      { x: `15 - 19`, y: 4.7 },
      { x: `20 - 24`, y: 10.8 },
      { x: `25 - 29`, y: 14.0 },
      { x: `30 - 34`, y: 13.4 },
      { x: `35 - 39`, y: 11.2 },
      { x: `40 - 44`, y: 9.3 },
      { x: `45 - 49`, y: 7.4 },
      { x: `50 - 54`, y: 7.0 },
      { x: `55 - 59`, y: 5.1 },
      { x: `60 - 64`, y: 4.1 },
      { x: `65 - 69`, y: 2.8 },
      { x: `70 - 74`, y: 2.1 },
      { x: `75 - 79`, y: 1.4 },
      { x: `80 - 84`, y: 0.9 },
      { x: `85+`, y: 0.7 },
    ],
  },
];

export default function CovidByAge() {
  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      toolbar: {
        show: true,
      },
    },
    colors: ['#3465a4'],
    stroke: { width: [2] },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        borderRadius: 1,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%';
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },
    fill: {
      type: 'solid',
      gradient: {
        type: 'vertical',
        shadeIntensity: 0.5,
        opacityFrom: 0.9,
        opacityTo: 0.3,
      },
    },
    xaxis: {
      type: 'category',
      title: {
        text: 'Years',
      },
    },
    yaxis: {
      title: {
        text: 'Percentage',
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      fillSeriesColor: false,
      followCursor: true,
      marker: {
        show: true,
      },
      x: {
        formatter: function (val) {
          // eslint-disable-next-line no-useless-concat
          return val + ' ' + 'Years';
        },
      },
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return y +`%`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title="COVID-19 Cases" subheader="by Age Group" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
