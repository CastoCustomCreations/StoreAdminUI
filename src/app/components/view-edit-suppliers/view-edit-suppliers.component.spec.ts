import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditSuppliersComponent } from './view-edit-suppliers.component';

describe('ViewEditSuppliersComponent', () => {
  let component: ViewEditSuppliersComponent;
  let fixture: ComponentFixture<ViewEditSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEditSuppliersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEditSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
