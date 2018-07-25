import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunsperhitComponent } from './runsperhit.component';

describe('RunsperhitComponent', () => {
  let component: RunsperhitComponent;
  let fixture: ComponentFixture<RunsperhitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunsperhitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunsperhitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
