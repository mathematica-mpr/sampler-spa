import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterItemComponent } from './chapter-item.component';

describe('ChapterItemComponent', () => {
  let component: ChapterItemComponent;
  let fixture: ComponentFixture<ChapterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
