import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheadminComponent } from './theadmin.component';

describe('TheadminComponent', () => {
  let component: TheadminComponent;
  let fixture: ComponentFixture<TheadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
