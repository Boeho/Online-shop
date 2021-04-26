import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypesTableComponent } from './user-types-table.component';

describe('UserTypesTableComponent', () => {
  let component: UserTypesTableComponent;
  let fixture: ComponentFixture<UserTypesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTypesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTypesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
