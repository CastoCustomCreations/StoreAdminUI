import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditCustomersComponent } from './view-edit-customers.component';

describe('ViewEditCustomersComponent', () => {
  let component: ViewEditCustomersComponent;
  let fixture: ComponentFixture<ViewEditCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEditCustomersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEditCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
