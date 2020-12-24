import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhiloComponent } from './philo.component';

describe('PhiloComponent', () => {
  let component: PhiloComponent;
  let fixture: ComponentFixture<PhiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
