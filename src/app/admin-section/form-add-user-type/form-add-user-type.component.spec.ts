import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddUserTypeComponent } from './form-add-user-type.component';

describe('FormAddUserTypeComponent', () => {
  let component: FormAddUserTypeComponent;
  let fixture: ComponentFixture<FormAddUserTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddUserTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
