import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LansdowneComponent } from './lansdowne.component';

describe('LansdowneComponent', () => {
  let component: LansdowneComponent;
  let fixture: ComponentFixture<LansdowneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LansdowneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LansdowneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
