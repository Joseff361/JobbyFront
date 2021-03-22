import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

export const radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Mes de Marzo' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Mes de Febrero' }
];

export const radarChartOptions: RadialChartOptions = {
    responsive: true,
};

export const radarChartLabels: Label[] = [
    'Inteligencia Artificial',
    'Ingenieria de Calidad',
    'Gerencia de Proyectos de TI',
    'Seguridad Informatica',
    'Servidores y Redes',
    'Analista de Base de Datos',
    'Inteligencia de Negocios',
    'Desarrolldor de Software'];

export const radarChartType: ChartType = 'radar';
