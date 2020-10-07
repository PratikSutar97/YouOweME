import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoursGivenComponent } from './favours-given.component';

describe('FavoursGivenComponent', () => {
  let component: FavoursGivenComponent;
  let fixture: ComponentFixture<FavoursGivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoursGivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoursGivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
