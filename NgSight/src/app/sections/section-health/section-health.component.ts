import { Component, OnInit } from "@angular/core";
import { Server } from "../../shared/server";

const SAMPLE_SERVERS = [
  {
    id: 1,
    name: "web-dav",
    isOnline: true
  },
  {
    id: 2,
    name: "I.T.",
    isOnline: true
  },
  {
    id: 2,
    name: "Stores",
    isOnline: false
  },
  {
    id: 4,
    name: "Security",
    isOnline: true
  }
];

@Component({
  selector: "app-section-health",
  templateUrl: "./section-health.component.html",
  styleUrls: ["./section-health.component.css"]
})
export class SectionHealthComponent implements OnInit {
  constructor() {}

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {}
}
