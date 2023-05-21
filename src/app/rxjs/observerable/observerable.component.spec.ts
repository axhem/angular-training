import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverableComponent } from './observerable.component';

describe('ObserverableComponent', () => {
  let component: ObserverableComponent;
  let fixture: ComponentFixture<ObserverableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObserverableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserverableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
