import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionUpdateComponent } from './transaction-update.component';

describe('TransactionUpdateComponent', () => {
  let component: TransactionUpdateComponent;
  let fixture: ComponentFixture<TransactionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionUpdateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
