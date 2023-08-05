import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustPostalCodeComponent } from './cust-postal-code.component';

describe('CustPostalCodeComponent', () => {
  let component: CustPostalCodeComponent;
  let fixture: ComponentFixture<CustPostalCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustPostalCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustPostalCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
