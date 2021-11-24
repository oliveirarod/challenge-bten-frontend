import { Component, HostListener, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Color } from 'ng2-charts';

import { DashboardService } from './dashboard.service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sidenavRoutes = [
    { name: "Overview", route: "/", icon: 'pie_chart' },
    { name: "Tickets", route: "/tickets", icon: 'airplane_ticket' },
    { name: "Ideas", route: "/ideas", icon: 'lightbulb' },
    { name: "Contacts", route: "/contacts", icon: 'contact_mail' },
    { name: "Agents", route: "/agents", icon: 'person' },
    { name: "Articles", route: "/articles", icon: 'article' },
    { name: "Settings", route: "/settings", icon: 'settings' },
    { name: "Logout", route: "/login", icon: 'logout' }
  ]

  sidenavOpened!: boolean;
  hasBackdrop!: boolean ;
  @HostListener('window:resize', ['$event']) onResize() {
    this.isMobile(1000);
  }

  user!: { name: string, image: string};
  cardsData!: { title: string, value: number }[];
  chartInfo!: { title: string, value: string }[];
  dateTime = new Date().toLocaleString().split(' ')[0];

  // LineChart Colors
  todayLine = '#2427CA';
  yesterdayLine = '#CCCCCC';

  constructor(private restApi: DashboardService) { }

  ngOnInit(): void {
    this.getUser();
    this.getCardsData();
    this.getChartInfo();
    this.isMobile(1000);
  }

  getUser = () => { this.user = this.restApi.getUser() };
  getCardsData = () => { this.cardsData = this.restApi.getCardsData() };
  getChartInfo = () => { this.chartInfo = this.restApi.getChartInfo() };

  isMobile(screenWidth: number) {
    if (window.innerWidth > screenWidth) {
      this.sidenavOpened = true;
      this.hasBackdrop = false;
    } else {
      this.sidenavOpened = false;
      this.hasBackdrop = true;
    }
  }

  // Chart features
  lineChartTeste = this.restApi.getChartData(6);
  lineChartLegend = false;

  lineChartColors: Color[] = [
    {
      borderColor: this.todayLine,
      backgroundColor: `${this.todayLine}11`,
    },
    {
      borderColor: this.yesterdayLine,
      backgroundColor: `${this.yesterdayLine}11`,
    },
  ];
  
  lineChartOptions: ChartOptions = {
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
          stepSize: 10
        },
        position: 'right',
      }],
      xAxes: [{
        gridLines: {
          color: "#00000000",
        }   
      }]
    },
    responsive: true,
  };
}
