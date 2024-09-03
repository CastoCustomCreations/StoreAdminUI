import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomersComponent } from './create-customers.component';

describe('ViewEditCustomersComponent', () => {
  let component: CreateCustomersComponent;
  let fixture: ComponentFixture<CreateCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
