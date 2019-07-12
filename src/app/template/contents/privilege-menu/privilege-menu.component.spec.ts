import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegeMenuComponent } from './privilege-menu.component';

describe('PrivilegeMenuComponent', () => {
  let component: PrivilegeMenuComponent;
  let fixture: ComponentFixture<PrivilegeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
