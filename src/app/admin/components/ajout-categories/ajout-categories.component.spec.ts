import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCategoriesComponent } from './ajout-categories.component';

describe('AjoutCategoriesComponent', () => {
  let component: AjoutCategoriesComponent;
  let fixture: ComponentFixture<AjoutCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
