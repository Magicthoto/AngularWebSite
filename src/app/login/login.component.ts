import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import ValidatorsHelpers from "../helpers/ValidatorsHelpers";
import { AuthenticationService } from "./authentication.service";
import { User } from "./model/user";
import { EventEmitter } from "events";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  public loginForm: FormGroup;

  public login: FormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(3)
  ]);

  public minLengthPassword: number = 3;

  public password: FormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(this.minLengthPassword),
    ValidatorsHelpers.checkpassword
  ]);

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    if (this.authenticationService.authenticated) {
      this.authenticationService.disconnect();
      console.log("disconnect");
    }

    this.loginForm = new FormGroup({
      login: this.login,
      password: this.password
    });
  }

  // onSubmit(): void {
  //   console.log(this.loginForm);
  // }

  onClicked($event: string): void {
    const frontUser: User = {
      login: this.login.value,
      password: this.password.value
    };

    console.log(frontUser);
    const connectedUser = this.authenticationService.authentUser(frontUser);
    connectedUser.subscribe({
      next: (user: User) => {
        this.router.navigateByUrl("/Home");
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
