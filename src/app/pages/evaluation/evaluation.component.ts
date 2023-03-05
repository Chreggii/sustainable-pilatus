import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
  ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
})
export class EvaluationComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Tupperware-Gebrauch',
          data: [30, 44, 61, 81, 100, 80, 95, 97, 92, 95],
          color: '#adb5bd',
        },
        {
          name: 'Durchschnitt',
          data: [77.5, 77.5, 77.5, 77.5, 77.5, 77.5, 77.5, 77.5, 77.5, 77.5],
          color: '#198754',
        },
        {
          name: 'Ziel',
          data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
          color: '#0d6efd',
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
        toolbar: { show: false },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Tupperware-Gebrauch',
        align: 'left',
        style: { fontFamily: 'Oak Bold', fontSize: '16px' },
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          '6. Feb',
          '7. Feb',
          '8. Feb',
          '9. Feb',
          '10. Feb',
          '13. Feb',
          '14. Feb',
          '15. Feb',
          '16. Feb',
          '17. Feb',
        ],
        title: { text: 'Datum' },
      },
      yaxis: {
        max: 100,
        title: { text: 'Tupperware-Gebrauch Anteil' },
        labels: { formatter: (val) => `${val}%` },
      },
    };
  }
}
