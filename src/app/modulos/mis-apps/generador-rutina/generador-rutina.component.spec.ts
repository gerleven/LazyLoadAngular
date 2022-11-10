import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorRutinaComponent } from './generador-rutina.component';

describe('GeneradorRutinaComponent', () => {
  let component: GeneradorRutinaComponent;
  let fixture: ComponentFixture<GeneradorRutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneradorRutinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneradorRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
