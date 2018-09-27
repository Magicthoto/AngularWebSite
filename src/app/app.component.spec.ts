import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { MdlModule } from "@angular-mdl/core";
import { MdlSelectModule } from "@angular-mdl/select";
import { MdlPopoverModule } from "@angular-mdl/popover";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HelpComponent } from "./component/help/help.component";
import { ButtonComponent } from "./component/button/button.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        NavigationComponent,
        HelpComponent,
        ButtonComponent
      ],
      imports: [
        MdlModule,
        MdlSelectModule,
        MdlPopoverModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'typescrypt-sandbox'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("typescrypt-sandbox".toUpperCase());
  }));
  it("should render title in a h1 tag", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("mdl-layout-title").textContent).toContain(
      "typescrypt-sandbox".toUpperCase()
    );
  }));
});
