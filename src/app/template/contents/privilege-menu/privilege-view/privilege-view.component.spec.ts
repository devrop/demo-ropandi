import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegeViewComponent } from './privilege-view.component';

describe('PrivilegeViewComponent', () => {
  let component: PrivilegeViewComponent;
  let fixture: ComponentFixture<PrivilegeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
