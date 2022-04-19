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
      { x: `Deferal Hospital`, y: 39.6 },
      { x: `Provincial Hospital`, y: 13.0 },
      { x: `Private Hospital`, y: 40.5 },
      { x: `Institutional isolation/HP/PHCC`, y: 0.9 },
      { x: `Home Isolation`, y: 4.5 },
      { x: `On the way to hospital`, y: 0.6 },
      { x: `Missing Information`, y: 1.0 },
    ],
  },
];

export default function PlaceofDeath() {
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
        text: '',
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: false,
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
          return val;
        },
      },
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y} %`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title="COVID-19 Deaths:Place of Death" subheader="(N=11,938)" />
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
