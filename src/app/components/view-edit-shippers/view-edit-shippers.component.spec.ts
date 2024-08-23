import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditShippersComponent } from './view-edit-shippers.component';

describe('ViewEditShippersComponent', () => {
  let component: ViewEditShippersComponent;
  let fixture: ComponentFixture<ViewEditShippersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEditShippersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEditShippersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
