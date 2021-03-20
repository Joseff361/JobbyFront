import { Component, OnInit } from '@angular/core';
import { barChartData, barChartLabels, barChartOptions, barChartLegend, barChartType } from '../../shared/BarChart';
import { pieChartData, pieChartLabels, pieChartType, pieChartOptions, pieChartColors, pieChartLegend} from '../../shared/PieChart';
import { radarChartData, radarChartOptions, radarChartLabels, radarChartType } from '../../shared/RadarChart';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  // BARCHART
  barChartData: any;
  barChartLabels: any;
  barChartOptions: any;
  barChartLegend: any;
  barChartType: any;

  // PIECHART
  pieChartData: any;
  pieChartLabels: any;
  pieChartType: any;
  pieChartOptions: any;
  pieChartColors: any;
  pieChartLegend: any;

  // RADARCHART
  radarChartData: any;
  radarChartOptions: any;
  radarChartLabels: any;
  radarChartType: any;

  constructor() { }

  ngOnInit(): void {
    // BARCHART
    this.barChartData = barChartData;
    this.barChartLabels = barChartLabels;
    this.barChartOptions = barChartOptions;
    this.barChartLegend = barChartLegend;
    this.barChartType = barChartType;

    // PIECHART
    this.pieChartData = pieChartData;
    this.pieChartLabels = pieChartLabels;
    this.pieChartType = pieChartType;
    this.pieChartOptions = pieChartOptions;
    this.pieChartColors = pieChartColors;
    this.pieChartLegend = pieChartLegend;

    // RADARCHART
    this.radarChartData = radarChartData;
    this.radarChartOptions = radarChartData;
    this.radarChartLabels = radarChartLabels;
    this.radarChartType = radarChartType;
  }

}
