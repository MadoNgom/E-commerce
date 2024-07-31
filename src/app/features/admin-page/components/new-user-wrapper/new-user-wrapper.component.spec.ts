import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserWrapperComponent } from './new-user-wrapper.component';

describe('NewUserWrapperComponent', () => {
  let component: NewUserWrapperComponent;
  let fixture: ComponentFixture<NewUserWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUserWrapperComponent]
    });
    fixture = TestBed.createComponent(NewUserWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
