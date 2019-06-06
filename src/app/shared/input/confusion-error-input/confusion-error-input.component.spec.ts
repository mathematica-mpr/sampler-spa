import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfusionErrorInputComponent } from './confusion-error-input.component';

describe('ConfusionErrorInputComponent', () => {
  let component: ConfusionErrorInputComponent;
  let fixture: ComponentFixture<ConfusionErrorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfusionErrorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfusionErrorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
