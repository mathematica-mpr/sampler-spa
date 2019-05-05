import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterDescriptionComponent } from './chapter-description.component';

describe('ChapterDescriptionComponent', () => {
  let component: ChapterDescriptionComponent;
  let fixture: ComponentFixture<ChapterDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
