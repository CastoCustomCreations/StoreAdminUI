import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditOrdersComponent } from './view-edit-orders.component';

describe('ViewEditOrdersComponent', () => {
  let component: ViewEditOrdersComponent;
  let fixture: ComponentFixture<ViewEditOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEditOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEditOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
