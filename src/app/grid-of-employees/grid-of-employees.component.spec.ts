import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponentComponent } from './grid-of-employees.component';

describe('GridComponentComponent', () => {
  let component: GridComponentComponent;
  let fixture: ComponentFixture<GridComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridComponentComponent]
    });
    fixture = TestBed.createComponent(GridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
