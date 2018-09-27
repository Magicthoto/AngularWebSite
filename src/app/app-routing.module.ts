import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthenticationGuard } from "./login/authentication.guard";
import { ConsumersFicheComponent } from "./consumers/consumers-fiche/consumers-fiche.component";
import { ConsumersListComponent } from "./consumers/consumers-list/consumers-list.component";

export const appRoutes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "consumers",
    component: ConsumersListComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "consumers-fiche/:id",
    component: ConsumersFicheComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
