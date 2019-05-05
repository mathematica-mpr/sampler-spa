import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterInputsComponent } from './chapter-inputs.component';

describe('ChapterInputsComponent', () => {
  let component: ChapterInputsComponent;
  let fixture: ComponentFixture<ChapterInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
