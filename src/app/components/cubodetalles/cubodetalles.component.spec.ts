import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubodetallesComponent } from './cubodetalles.component';

describe('CubodetallesComponent', () => {
  let component: CubodetallesComponent;
  let fixture: ComponentFixture<CubodetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CubodetallesComponent]
    });
    fixture = TestBed.createComponent(CubodetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
