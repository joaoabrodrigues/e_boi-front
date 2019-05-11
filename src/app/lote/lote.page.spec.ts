import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotePage } from './lote.page';

describe('LotePage', () => {
  let component: LotePage;
  let fixture: ComponentFixture<LotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
