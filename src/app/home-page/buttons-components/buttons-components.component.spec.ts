import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsComponentsComponent } from './buttons-components.component';

describe('ButtonsComponentsComponent', () => {
  let component: ButtonsComponentsComponent;
  let fixture: ComponentFixture<ButtonsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
