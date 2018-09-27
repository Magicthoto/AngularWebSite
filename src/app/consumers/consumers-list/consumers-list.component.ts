import { Component, OnInit } from "@angular/core";
import { ConsumersService } from "../consumers.service";
import { User } from "../../login/model/user";
import { Consumer } from "../model/consumer";

@Component({
  selector: "app-consumers-list",
  templateUrl: "./consumers-list.component.html",
  styleUrls: ["./consumers-list.component.scss"]
})
export class ConsumersListComponent implements OnInit {
  constructor(private consumersService: ConsumersService) {}

  private _consumers: Array<Consumer>;

  public get currentConsumers(): Array<Consumer> {
    return this._consumers;
  }

  private GetConsumers(): void {
    this.consumersService.getConsumers().subscribe({
      next: value => {
        this._consumers = value;
      },
      error: error => {
        console.log("error", error);
      },
      complete: () => {
        console.log("complete");
      }
    });
  }
  ngOnInit() {
    this.GetConsumers();
  }

  refresh(): void {
    this.GetConsumers();
  }
}
