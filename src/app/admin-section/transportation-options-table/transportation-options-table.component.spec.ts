import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationOptionsTableComponent } from './transportation-options-table.component';

describe('TransportationOptionsTableComponent', () => {
  let component: TransportationOptionsTableComponent;
  let fixture: ComponentFixture<TransportationOptionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportationOptionsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationOptionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
