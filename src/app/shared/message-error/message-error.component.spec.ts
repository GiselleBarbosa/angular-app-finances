import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageErrorComponent } from './message-error.component';

describe('MessageErrorComponent', () => {
  let component: MessageErrorComponent;
  let fixture: ComponentFixture<MessageErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
