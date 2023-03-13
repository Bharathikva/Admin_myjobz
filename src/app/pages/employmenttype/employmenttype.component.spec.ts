import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymenttypeComponent } from './employmenttype.component';

describe('EmploymenttypeComponent', () => {
  let component: EmploymenttypeComponent;
  let fixture: ComponentFixture<EmploymenttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymenttypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymenttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
