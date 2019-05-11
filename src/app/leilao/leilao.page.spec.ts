import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeilaoPage } from './leilao.page';

describe('LeilaoPage', () => {
  let component: LeilaoPage;
  let fixture: ComponentFixture<LeilaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeilaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
