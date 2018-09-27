import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "./model/user";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";

const USER_STORAGE_KEY: string = "angular-crm.user";
const TOKEN_STORAGE_KEY: string = "angular-crm.token";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private _currentUser: User;

  public get currentUser(): User {
    return this._currentUser;
  }

  private _token: string = null;
  public get currentToken(): string {
    return this._token;
  }
  constructor(private http: HttpClient) {
    if (sessionStorage.getItem(USER_STORAGE_KEY) !== null) {
      this._currentUser = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
      this._token = sessionStorage.getItem(TOKEN_STORAGE_KEY);
    }
  }

  public get authenticated(): boolean {
    return this.currentUser !== null;
  }

  authentUser(user: User): Observable<User> {
    return this.http
      .post<AuthentResponse>("/api/auth/login", {
        email: user.login,
        password: user.password
      })
      .pipe(
        map((resp: AuthentResponse) => {
          this._token = resp.token;
          this._currentUser = resp.user;

          sessionStorage.setItem(
            USER_STORAGE_KEY,
            JSON.stringify(this.currentUser)
          );
          sessionStorage.setItem(
            TOKEN_STORAGE_KEY,
            JSON.stringify(this.currentToken)
          );
          return resp.user;
        })
      );
  }

  disconnect(): void {
    this._currentUser = null;
    this._token = null;
    sessionStorage.removeItem(USER_STORAGE_KEY);
    sessionStorage.removeItem(TOKEN_STORAGE_KEY);
  }
}

interface AuthentResponse {
  user: User;
  token: string;
}
