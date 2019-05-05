import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterGraphsComponent } from './chapter-graphs.component';

describe('ChapterGraphsComponent', () => {
  let component: ChapterGraphsComponent;
  let fixture: ComponentFixture<ChapterGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
