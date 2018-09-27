import { Component } from "@angular/core";
import { DemoObservableService } from "../common/demo-observable.service";
import { map } from "rxjs/operators";
import { AuthenticationService } from "../login/authentication.service";
import { User } from "../login/model/user";
import { ConsumersService } from "../consumers/consumers.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  constructor(
    private demoOberservale: DemoObservableService,
    private authService: AuthenticationService,
    private consumersService: ConsumersService
  ) {}

  get currentUser(): User {
    return this.authService.currentUser;
  }

  clickOnGetObservables(): void {
    this.demoOberservale
      .getObservables()
      .pipe(map(user => user.firstname.toUpperCase()))
      .subscribe({
        next: value => {
          console.log("next", value);
        },
        error: error => {
          console.log("error", error);
        },
        complete: () => {
          console.log("complete");
        }
      });
  }
}
