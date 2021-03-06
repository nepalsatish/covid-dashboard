import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Infected',
    type: 'column',
    data: [44, 22, 30, 55, 66, 77, 88],
  },
];

export default function CovidPositiveBar() {
  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      toolbar: {
        show: true,
      },
    },
    colors: ['#4a3232'],
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '40%', borderRadius: 2 } },
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
      categories: [
        'Province 1',
        'Madhesh',
        'Bagmati',
        'Gandaki',
        'Lumbini',
        'Karnali',
        'Sudurpaschim',
      ],
    },
    tooltip: {
      shared: true,
      intersect: false,
      fillSeriesColor: false,
      followCursor: true,
      marker: {
        show: true,
      },
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} Patients`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title="COVID-19 Positive Cases (PCR+ Antigen)" subheader="by Province" />
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
