import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiquierComponent } from './boutiquier.component';

describe('BoutiquierComponent', () => {
  let component: BoutiquierComponent;
  let fixture: ComponentFixture<BoutiquierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoutiquierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutiquierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
