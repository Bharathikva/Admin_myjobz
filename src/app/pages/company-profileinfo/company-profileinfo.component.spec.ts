import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileinfoComponent } from './company-profileinfo.component';

describe('CompanyProfileinfoComponent', () => {
  let component: CompanyProfileinfoComponent;
  let fixture: ComponentFixture<CompanyProfileinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProfileinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyProfileinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
