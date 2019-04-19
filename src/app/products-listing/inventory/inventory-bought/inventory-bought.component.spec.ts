import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBoughtComponent } from './inventory-bought.component';

describe('InventoryBoughtComponent', () => {
  let component: InventoryBoughtComponent;
  let fixture: ComponentFixture<InventoryBoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryBoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
