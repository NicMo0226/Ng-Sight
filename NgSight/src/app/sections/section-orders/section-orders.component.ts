import { Component, OnInit } from "@angular/core";
import { Order } from "../../shared/order";
import { allResolved } from "q";

@Component({
  selector: "app-section-orders",
  templateUrl: "./section-orders.component.html",
  styleUrls: ["./section-orders.component.css"]
})
export class SectionOrdersComponent implements OnInit {
  constructor() {}

  orders: Order[] = [
    {
      id: 1,
      customer: {
        id: 1,
        name: "Maria Mapel",
        town: "Thornton",
        email: "maria@aol.com"
      },
      total: 230,
      placed: new Date(7, 5, 2019),
      fulfilled: new Date(7, 5, 2019)
    },

    {
      id: 2,
      customer: {
        id: 2,
        name: "Jimmy Jameson",
        town: "Blackpool",
        email: "jimmy@aol.com"
      },
      total: 5200,
      placed: new Date(21, 7, 2019),
      fulfilled: new Date(23, 7, 2019)
    },

    {
      id: 3,
      customer: {
        id: 3,
        name: "Steve Stephens",
        town: "Lytham",
        email: "steve@aol.com"
      },
      total: 2300,
      placed: new Date(30, 1, 2019),
      fulfilled: new Date(30, 1, 2019)
    },

    {
      id: 4,
      customer: {
        id: 4,
        name: "Peter Peterson",
        town: "St Annes",
        email: "petera@aol.com"
      },
      total: 900,
      placed: new Date(13, 3, 2019),
      fulfilled: new Date(13, 3, 2019)
    },

    {
      id: 5,
      customer: {
        id: 5,
        name: "Jemma Jenkins",
        town: "Cleveleys",
        email: "jemma@aol.com"
      },
      total: 3300,
      placed: new Date(12, 6, 2019),
      fulfilled: new Date(15, 6, 2019)
    }
  ];
  ngOnInit() {}
}
