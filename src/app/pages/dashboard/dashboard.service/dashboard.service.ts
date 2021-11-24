import { Injectable } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  user = { name: "Jones Ferdinand", image: "../../../assets/fake-user.png" };

  cardsData = [
    { title: "Unresolved", value: 60 },
    { title: "Overdue", value: 16 },
    { title: "Open", value: 43 },
    { title: "On hold", value: 64 }
  ]

  chartInfo = [
    { title: "Resolved", value: '449' },
    { title: "Received", value: '426' },
    { title: "Average first response time", value: "33m" },
    { title: "Average response time", value: "3h 8m" },
    { title: "Resolution within SLA", value: "94%" },
  ]

  getUser = () => this.user;
  getCardsData = () => this.cardsData;
  getChartInfo = () => this.chartInfo;

  // Get fake chart data
  getChartData(horizontalDataAmount: number, max: number = 40, min: number = 0) {
    let lineChartData: ChartDataSets[] = [
      { data: [], label: 'Today' },
      { data: [], label: 'Yesterday' },
    ];
    let lineChartLabels: Label[] = [];

    for(let i = 0; i <= horizontalDataAmount; i++) {
      lineChartLabels.push(`${i}`);
      lineChartData[0].data?.push(Math.random() * (max - min) + min);
      lineChartData[1].data?.push(Math.random() * (max - min) + min);
    }

    return { 
      data: lineChartData, 
      labels: lineChartLabels 
    };
  }
}
