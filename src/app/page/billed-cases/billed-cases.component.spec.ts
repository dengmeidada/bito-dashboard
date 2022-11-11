import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilledCasesComponent } from './billed-cases.component';

describe('BilledCasesComponent', () => {
  let component: BilledCasesComponent;
  let fixture: ComponentFixture<BilledCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilledCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilledCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
