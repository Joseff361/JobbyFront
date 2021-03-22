import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';


export const barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 30], label: 'Febrero' },
    { data: [28, 48, 40, 19, 86, 27, 90, 80], label: 'Marzo' }
]

export const barChartLabels: Label[] = [
  'IA',
  'Calidad',
  'GPTI',
  'SI',
  'Redes',
  'DBA',
  'BI',
  'Develop'];

export const barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
};

//export const barChartPlugins = [pluginDataLabels];
export const barChartLegend = true;
export const barChartType: ChartType = 'bar';
