import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCategoryComponent } from './api-category.component';

describe('ApiCategoryComponent', () => {
  let component: ApiCategoryComponent;
  let fixture: ComponentFixture<ApiCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
