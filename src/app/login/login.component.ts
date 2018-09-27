import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import ValidatorsHelpers from "../helpers/ValidatorsHelpers";
import { AuthenticationService } from "./authentication.service";
import { User } from "./model/user";
import { EventEmitter } from "events";
import { Router } from "@angular/router";

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

  public minLengthPassword: number = 6;

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

    console.log(connectedUser);
    if (connectedUser) {
      this.router.navigateByUrl("/Home");
    }
  }
}
