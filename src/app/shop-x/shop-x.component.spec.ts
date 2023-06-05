import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopXComponent } from './shop-x.component';

describe('ShopXComponent', () => {
  let component: ShopXComponent;
  let fixture: ComponentFixture<ShopXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopXComponent]
    });
    fixture = TestBed.createComponent(ShopXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
