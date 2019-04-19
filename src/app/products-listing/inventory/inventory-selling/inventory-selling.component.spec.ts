import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySellingComponent } from './inventory-selling.component';

describe('InventorySellingComponent', () => {
  let component: InventorySellingComponent;
  let fixture: ComponentFixture<InventorySellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorySellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorySellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
