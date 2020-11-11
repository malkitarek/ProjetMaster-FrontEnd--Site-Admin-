import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdapteMedecinComponent } from './udapte-medecin.component';

describe('UdapteMedecinComponent', () => {
  let component: UdapteMedecinComponent;
  let fixture: ComponentFixture<UdapteMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdapteMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdapteMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
