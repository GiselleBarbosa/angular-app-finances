import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHomeComponent } from './form-home.component';

describe('FormHomeComponent', () => {
  let component: FormHomeComponent;
  let fixture: ComponentFixture<FormHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
