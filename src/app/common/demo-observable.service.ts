import { Injectable } from "@angular/core";
import { Observable, Subscriber } from "rxjs";
import { User } from "../login/model/user";

@Injectable({
  providedIn: "root"
})
export class DemoObservableService {
  constructor() {}

  getObservables(): Observable<User> {
    return new Observable<User>((subscriber: Subscriber<User>) => {
      setTimeout(() => {
        subscriber.next({ firstname: "Pierre", lastname: "Dupond" });
      }, 1000);
      setTimeout(() => {
        subscriber.next({ firstname: "Paul", lastname: "Dupond" });
      }, 2000);
      setTimeout(() => {
        subscriber.next({ firstname: "Jack", lastname: "Dupond" });
      }, 3000);
      setTimeout(() => {
        subscriber.complete();
      }, 4000);
    });
  }
}
