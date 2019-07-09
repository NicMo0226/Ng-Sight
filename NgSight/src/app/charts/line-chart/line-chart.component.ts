import { Component, OnInit } from "@angular/core";
import { LINE_CHART_COLORS } from "../../shared/chart.colors";

const LINE_CHART_SAMPLED_DATA: any[] = [
  { data: [25, 12, 65, 97, 70, 41], label: "Product Analysis" },
  { data: [35, 62, 87, 26, 60, 99], label: "Search Rankings" },
  { data: [35, 11, 60, 23, 50, 89], label: "Budget Forecast" }
];

const LINE_CHART_SAMPLED_LABELS: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June"
];

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"]
})
export class LineChartComponent implements OnInit {
  constructor() {}

  lineChartData = LINE_CHART_SAMPLED_DATA;
  lineChartLabels = LINE_CHART_SAMPLED_LABELS;
  lineChartOptions: any = {
    responsive: true
  };

  lineChartLegend: true;

  ngOnInit() {}

  lineChartType = "line";
}
