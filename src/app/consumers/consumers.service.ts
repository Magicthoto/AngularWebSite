import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Consumer } from "./model/consumer";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ConsumersService {
  getById(id: number): any {
    return this.http.get<Consumer>(`/api/consumers/${id}`);
  }
  constructor(private http: HttpClient) {}
  getConsumers(): Observable<Array<Consumer>> {
    return this.http.get<Array<Consumer>>("/api/consumers");
  }
}
