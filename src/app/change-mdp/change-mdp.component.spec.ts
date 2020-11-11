import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMdpComponent } from './change-mdp.component';

describe('ChangeMdpComponent', () => {
  let component: ChangeMdpComponent;
  let fixture: ComponentFixture<ChangeMdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeMdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
