import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfusionErrorGraphComponent } from './confusion-error-graph.component';

describe('ConfusionErrorGraphComponent', () => {
  let component: ConfusionErrorGraphComponent;
  let fixture: ComponentFixture<ConfusionErrorGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfusionErrorGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfusionErrorGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
