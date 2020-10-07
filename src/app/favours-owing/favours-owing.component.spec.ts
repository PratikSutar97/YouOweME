import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoursOwingComponent } from './favours-owing.component';

describe('FavoursOwingComponent', () => {
  let component: FavoursOwingComponent;
  let fixture: ComponentFixture<FavoursOwingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoursOwingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoursOwingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
