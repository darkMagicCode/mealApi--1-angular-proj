import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AraeComponent } from './arae.component';

describe('AraeComponent', () => {
  let component: AraeComponent;
  let fixture: ComponentFixture<AraeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AraeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AraeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
