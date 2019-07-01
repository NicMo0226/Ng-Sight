import { Component, OnInit } from "@angular/core";

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65, 1, 12, 81, 86, 64, 30, 77], label: "Q1 Sales" },
  { data: [5, 59, 80, 31, 56, 94, 20, 10], label: "Q2 Sales" }
];

const SAMPLE_BARCHART_LABELS: string[] = [
  "W1",
  "W2",
  "W3",
  "W4",
  "W5",
  "W6",
  "W7"
];

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit {
  constructor() {}

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = "bar";
  public barChartLegend = false;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {}
}
