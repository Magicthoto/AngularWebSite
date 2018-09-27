import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ConsumersService } from "../consumers.service";
import { Consumer } from "../model/consumer";

@Component({
  selector: "app-consumers-fiche",
  templateUrl: "./consumers-fiche.component.html",
  styleUrls: ["./consumers-fiche.component.scss"]
})
export class ConsumersFicheComponent implements OnInit {
  private consumer: Consumer;

  public get currentConsumer(): Consumer {
    return this.consumer;
  }
  constructor(
    private route: ActivatedRoute,
    private consumersService: ConsumersService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.hasOwnProperty("id")) {
        const id: number = parseInt(params["id"], 10);
        this.consumersService.getById(id).subscribe((c: Consumer) => {
          this.consumer = c;
        });
      }
    });
  }
}
