import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsDetailsComponent } from './goods-details.component';

describe('GoodsDetailsComponent', () => {
  let component: GoodsDetailsComponent;
  let fixture: ComponentFixture<GoodsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodsDetailsComponent]
    });
    fixture = TestBed.createComponent(GoodsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
