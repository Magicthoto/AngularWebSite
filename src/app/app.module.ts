import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MdlModule } from "@angular-mdl/core";
import { MdlSelectModule } from "@angular-mdl/select";
import { MdlPopoverModule } from "@angular-mdl/popover";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HelpComponent } from "./component/help/help.component";
import { ButtonComponent } from "./component/button/button.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { JWTInterceptorService } from "./common/jwtinterceptor.service";
import { PhonePipe } from "./common/phone.pipe";
import { ConsumersFicheComponent } from "./consumers/consumers-fiche/consumers-fiche.component";
import { ConsumersListComponent } from "./consumers/consumers-list/consumers-list.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    ButtonComponent,
    HelpComponent,
    HomeComponent,
    PhonePipe,
    ConsumersFicheComponent,
    ConsumersListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MdlModule,
    MdlSelectModule,
    MdlPopoverModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
