import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumersFicheComponent } from './consumers-fiche.component';

describe('ConsumersFicheComponent', () => {
  let component: ConsumersFicheComponent;
  let fixture: ComponentFixture<ConsumersFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumersFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumersFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
