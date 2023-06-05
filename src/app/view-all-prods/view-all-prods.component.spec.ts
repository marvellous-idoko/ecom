import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProdsComponent } from './view-all-prods.component';

describe('ViewAllProdsComponent', () => {
  let component: ViewAllProdsComponent;
  let fixture: ComponentFixture<ViewAllProdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllProdsComponent]
    });
    fixture = TestBed.createComponent(ViewAllProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
