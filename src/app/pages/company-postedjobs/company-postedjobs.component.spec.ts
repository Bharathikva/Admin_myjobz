import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPostedjobsComponent } from './company-postedjobs.component';

describe('CompanyPostedjobsComponent', () => {
  let component: CompanyPostedjobsComponent;
  let fixture: ComponentFixture<CompanyPostedjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPostedjobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyPostedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
