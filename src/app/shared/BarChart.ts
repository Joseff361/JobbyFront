import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';


export const barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
]

export const barChartLabels: Label[] = ['15-02-21', '16-02-21', '17-02-21', '18-02-21', '19-02-21', '20-02-21', '21-02-21'];

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
