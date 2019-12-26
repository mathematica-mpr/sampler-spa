import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryViewGraphsComponent } from './story-view-graphs.component';

describe('StoryViewGraphsComponent', () => {
  let component: StoryViewGraphsComponent;
  let fixture: ComponentFixture<StoryViewGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryViewGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryViewGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
