import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

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
    { name: "Subscription", route: "/subscription", icon: 'subscriptions' }
  ]

  user = { name: "Jones Ferdinand", image: "../../../assets/fake-user.png" }

  cardsData = [
    { title: "Unresolved", value: 60 },
    { title: "Overdue", value: 16 },
    { title: "Open", value: 43 },
    { title: "On hold", value: 64 }
  ]

  chartInfo = [
    { title: "Resolved", value: 449 },
    { title: "Received", value: 426 },
    { title: "Average first response time", value: "33m" },
    { title: "Average response time", value: "3h 8m" },
    { title: "Resolution within SLA", value: "94%" },
  ]

  constructor() { }

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Today' },
    { data: [], label: 'Yesterday' },
  ];

  public lineChartLabels: Label[] = [];

  public lineChartColors: Color[] = [
    {
      borderColor: '#2427cace',
      backgroundColor: '#2427ca11',
    },
    {
      borderColor: '#CCC',
      backgroundColor: 'transparent',
    },
  ];

  ngOnInit(): void {
    this.getChartData(22);
  }

  getChartData(horizontalDataAmount: number, max: number = 60, min: number = 0) {
    for(let i = 0; i <= horizontalDataAmount; i++) {
      this.lineChartLabels.push(`${i}`);
      this.lineChartData[0].data?.push(Math.random() * (max - min) + min);
      this.lineChartData[1].data?.push(Math.random() * (max - min) + min);
    }
  }
}
