import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStoreComponent } from './main-store.component';

describe('MainStoreComponent', () => {
  let component: MainStoreComponent;
  let fixture: ComponentFixture<MainStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainStoreComponent]
    });
    fixture = TestBed.createComponent(MainStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
