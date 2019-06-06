import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPerformanceGraphComponent } from './model-performance-graph.component';

describe('ModelPerformanceGraphComponent', () => {
  let component: ModelPerformanceGraphComponent;
  let fixture: ComponentFixture<ModelPerformanceGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelPerformanceGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPerformanceGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
