import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployerComponent } from './editemployer.component';

describe('EditemployerComponent', () => {
  let component: EditemployerComponent;
  let fixture: ComponentFixture<EditemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditemployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
