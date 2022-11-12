import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntgreationComponent } from './intgreation.component';

describe('IntgreationComponent', () => {
  let component: IntgreationComponent;
  let fixture: ComponentFixture<IntgreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntgreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntgreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
