import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MdlModule } from "@angular-mdl/core";
// import { MdlSelectModule } from "@angular-mdl/select";
// import { MdlPopoverModule } from "@angular-mdl/popover";
import { LoginComponent } from "./login.component";
import { HelpComponent } from "../component/help/help.component";
import { ButtonComponent } from "../component/button/button.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, HelpComponent, ButtonComponent],
      imports: [ReactiveFormsModule, MdlModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
