import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryViewMenuComponent } from './story-view-menu.component';

describe('StoryViewMenuComponent', () => {
  let component: StoryViewMenuComponent;
  let fixture: ComponentFixture<StoryViewMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryViewMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryViewMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
