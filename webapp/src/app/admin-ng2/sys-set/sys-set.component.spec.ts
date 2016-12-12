/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SysSetComponent } from './sys-set.component';

describe('SysSetComponent', () => {
  let component: SysSetComponent;
  let fixture: ComponentFixture<SysSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
