import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProductsComponent } from './read-products.component';

describe('ReadProductsComponent', () => {
  let component: ReadProductsComponent;
  let fixture: ComponentFixture<ReadProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
