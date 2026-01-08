import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfulButtonComponent } from './colorful-button.component';

describe('ColorfulButtonComponent', () => {
  let component: ColorfulButtonComponent;
  let fixture: ComponentFixture<ColorfulButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorfulButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorfulButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
