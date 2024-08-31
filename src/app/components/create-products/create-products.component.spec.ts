import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditProductsComponent } from './create-products.component';

describe('ViewEditProductsComponent', () => {
  let component: ViewEditProductsComponent;
  let fixture: ComponentFixture<ViewEditProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEditProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEditProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
