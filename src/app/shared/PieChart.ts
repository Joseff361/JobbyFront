import { Label } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';


export const pieChartData: number[] = [300, 500, 100];

export const pieChartLabels: Label[] = [
    ['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];

export const pieChartType: ChartType = 'pie';

export const pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

export const  pieChartColors = [
{
    backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
},
];

export const pieChartLegend = true;
