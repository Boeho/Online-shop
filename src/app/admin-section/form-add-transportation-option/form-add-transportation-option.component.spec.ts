import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddTransportationOptionComponent } from './form-add-transportation-option.component';

describe('FormAddTransportationOptionComponent', () => {
  let component: FormAddTransportationOptionComponent;
  let fixture: ComponentFixture<FormAddTransportationOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddTransportationOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddTransportationOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
