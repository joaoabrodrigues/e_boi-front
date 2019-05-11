import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadoPage } from './gado.page';

describe('GadoPage', () => {
  let component: GadoPage;
  let fixture: ComponentFixture<GadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
