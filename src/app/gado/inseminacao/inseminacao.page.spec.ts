import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InseminacaoPage } from './inseminacao.page';

describe('InseminacaoPage', () => {
  let component: InseminacaoPage;
  let fixture: ComponentFixture<InseminacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InseminacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InseminacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
