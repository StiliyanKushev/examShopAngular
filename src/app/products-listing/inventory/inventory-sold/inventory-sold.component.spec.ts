import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySoldComponent } from './inventory-sold.component';

describe('InventorySoldComponent', () => {
  let component: InventorySoldComponent;
  let fixture: ComponentFixture<InventorySoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorySoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorySoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
